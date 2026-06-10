(function attachAirFlexAgent(global) {
  const PRIORITY_WEIGHT = {
    Emergency: 100,
    High: 70,
    Medium: 40,
    Scheduled: 20,
    Low: 10
  };

  const SKILL_KEYWORDS = {
    furnace: ["Furnace Fitter", "Installer", "HVAC Technician"],
    boiler: ["Boiler Specialist", "HVAC Technician"],
    rooftop: ["Commercial Systems", "HVAC Technician", "Service Dispatcher"],
    rtu: ["Commercial Systems", "HVAC Technician", "Service Dispatcher"],
    ventilation: ["Sheet Metal Worker", "HVAC Technician"],
    duct: ["Sheet Metal Worker", "HVAC Technician"],
    thermostat: ["HVAC Technician", "Indoor Air Quality"],
    ac: ["HVAC Technician", "Installer"],
    heat: ["HVAC Technician", "Furnace Fitter"]
  };

  function asArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function openRequests(requests) {
    return asArray(requests).filter((request) => request.status !== "Completed");
  }

  function getWorkload(technician, requests) {
    return openRequests(requests).filter((request) => request.technician === technician.name).length;
  }

  function getSkillScore(technician, request) {
    const text = normalize(`${request.service} ${request.equipment} ${request.type}`);
    const matched = Object.entries(SKILL_KEYWORDS).find(([keyword]) => text.includes(keyword));
    if (!matched) return 12;
    return matched[1].includes(technician.role) ? 36 : 10;
  }

  function getLocationScore(technician, request) {
    if (!technician.city || !request.location) return 8;
    if (normalize(technician.city) === normalize(request.location)) return 28;
    const eastGta = ["scarborough", "east york", "pickering", "ajax", "whitby"];
    const northGta = ["markham", "richmond hill", "north york", "vaughan"];
    const techCity = normalize(technician.city);
    const requestCity = normalize(request.location);
    if (eastGta.includes(techCity) && eastGta.includes(requestCity)) return 18;
    if (northGta.includes(techCity) && northGta.includes(requestCity)) return 18;
    return 8;
  }

  function scoreTechnician(technician, request, requests, inventory) {
    const workload = getWorkload(technician, requests);
    const availableScore = ["Available", "Dispatched", "On Site"].includes(technician.status) ? 26 : 4;
    const workloadScore = Math.max(0, 24 - workload * 6);
    const priorityBoost = request.priority === "Emergency" && technician.status !== "Remote" ? 12 : 0;
    const skillScore = getSkillScore(technician, request);
    const locationScore = getLocationScore(technician, request);
    const partsRisk = detectPartsRisk(request, inventory) ? -18 : 0;
    return availableScore + workloadScore + skillScore + locationScore + priorityBoost + partsRisk;
  }

  function detectPartsRisk(request, inventory) {
    const text = normalize(`${request.service} ${request.equipment}`);
    return asArray(inventory).some((item) => {
      const partName = normalize(item.item);
      const related =
        (text.includes("filter") && partName.includes("filter")) ||
        (text.includes("blower") && partName.includes("blower")) ||
        (text.includes("rtu") && partName.includes("rtu")) ||
        (text.includes("thermostat") && partName.includes("thermostat"));
      return related && Number(item.stock) <= Number(item.reorder);
    });
  }

  function recommendAssignments(context) {
    const requests = openRequests(context.requests)
      .filter((request) => request.status === "New" || request.priority === "Emergency" || !request.technician)
      .sort((a, b) => (PRIORITY_WEIGHT[b.priority] || 0) - (PRIORITY_WEIGHT[a.priority] || 0));

    return requests.slice(0, 6).map((request) => {
      const ranked = asArray(context.technicians)
        .map((technician) => ({
          technician,
          score: scoreTechnician(technician, request, context.requests, context.inventory)
        }))
        .sort((a, b) => b.score - a.score);
      const best = ranked[0]?.technician;
      return {
        requestId: request.id,
        customer: request.customer,
        priority: request.priority,
        technician: best?.name || "No technician available",
        score: Math.max(0, Math.round(ranked[0]?.score || 0)),
        explanation: best
          ? `Assign ${best.name} because ${best.role.toLowerCase()} fits the work, ${best.city} is a good service area match, and current workload is ${getWorkload(best, context.requests)} active job(s).`
          : "No technician is available for this request."
      };
    });
  }

  function prioritizeEmergencyCalls(context) {
    return openRequests(context.requests)
      .filter((request) => request.priority === "Emergency")
      .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`))
      .map((request, index) => ({
        rank: index + 1,
        requestId: request.id,
        customer: request.customer,
        status: request.status,
        recommendation: request.status === "On Site" ? "Monitor completion and customer communication." : "Dispatch or confirm ETA immediately."
      }));
  }

  function detectRisks(context) {
    const risks = [];
    const active = openRequests(context.requests);
    const emergencyWaiting = active.filter((request) => request.priority === "Emergency" && request.status !== "On Site");
    if (emergencyWaiting.length) {
      risks.push({
        level: "High",
        title: "Emergency response risk",
        detail: `${emergencyWaiting.length} emergency call(s) are not on site yet.`
      });
    }

    asArray(context.technicians).forEach((technician) => {
      const workload = getWorkload(technician, context.requests);
      if (workload >= 3) {
        risks.push({
          level: "Medium",
          title: "Technician overload",
          detail: `${technician.name} has ${workload} active assigned jobs.`
        });
      }
    });

    asArray(context.inventory).forEach((item) => {
      if (Number(item.stock) <= Number(item.reorder)) {
        risks.push({
          level: "Medium",
          title: "Parts availability",
          detail: `${item.item} is at or below reorder level.`
        });
      }
    });

    const waitingParts = active.filter((request) => request.status === "Waiting Parts");
    if (waitingParts.length) {
      risks.push({
        level: "Medium",
        title: "Waiting parts delay",
        detail: `${waitingParts.length} job(s) are waiting on parts.`
      });
    }

    return risks.length ? risks : [{ level: "Low", title: "No major risks detected", detail: "Current operation is within expected thresholds." }];
  }

  function calculateMetrics(context) {
    const requests = asArray(context.requests);
    const active = openRequests(requests);
    const completed = requests.filter((request) => request.status === "Completed");
    const revenue = requests.reduce((sum, request) => sum + Number(request.value || 0), 0);
    return {
      totalRequests: requests.length,
      activeRequests: active.length,
      completedJobs: completed.length,
      emergencyCalls: active.filter((request) => request.priority === "Emergency").length,
      estimatedRevenue: revenue,
      activeTechnicians: asArray(context.technicians).filter((tech) => tech.status !== "Remote").length
    };
  }

  function generateDailySummary(context) {
    const metrics = calculateMetrics(context);
    const risks = detectRisks(context).slice(0, 3);
    return [
      `Daily Ops Summary: ${metrics.activeRequests} active job(s), ${metrics.emergencyCalls} emergency call(s), and ${metrics.completedJobs} completed job(s).`,
      `Estimated service revenue in the current board is $${Math.round(metrics.estimatedRevenue).toLocaleString("en-CA")}.`,
      `Top risks: ${risks.map((risk) => `${risk.title} (${risk.level})`).join("; ")}.`
    ].join(" ");
  }

  function draftCustomerEta(context, requestId) {
    const request = asArray(context.requests).find((item) => item.id === requestId) || openRequests(context.requests)[0];
    if (!request) return "No active request is available for an ETA message.";
    return `Hi ${request.customer}, this is AirFlex Heating & Cooling. Your ${request.service.toLowerCase()} is scheduled for ${request.time} in ${request.location}. Technician ${request.technician || "our dispatch team"} will update you if the ETA changes.`;
  }

  function generateManagerReport(context) {
    const metrics = calculateMetrics(context);
    const recommendations = recommendAssignments(context).slice(0, 2);
    return {
      title: "Manager Report",
      summary: generateDailySummary(context),
      metrics,
      nextActions: [
        ...recommendations.map((item) => `Assign ${item.technician} to ${item.requestId}: ${item.explanation}`),
        "Review waiting-parts jobs before end of day.",
        "Confirm customer ETA messages for all emergency calls."
      ]
    };
  }

  global.AirFlexAgent = {
    calculateMetrics,
    recommendAssignments,
    prioritizeEmergencyCalls,
    detectRisks,
    generateDailySummary,
    draftCustomerEta,
    generateManagerReport
  };
})(typeof window !== "undefined" ? window : globalThis);
