import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../agent-logic.js", import.meta.url), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const agent = sandbox.window.AirFlexAgent;

const context = {
  requests: [
    {
      id: "AF-T1",
      customer: "Test Clinic",
      service: "Emergency furnace repair",
      equipment: "Gas furnace",
      type: "Residential",
      priority: "Emergency",
      technician: "",
      status: "New",
      location: "Scarborough",
      date: "2026-06-08",
      time: "09:00",
      value: 1200
    },
    {
      id: "AF-T2",
      customer: "Office Tower",
      service: "Rooftop Unit Maintenance",
      equipment: "RTU",
      type: "Commercial",
      priority: "Scheduled",
      technician: "Maya Chen",
      status: "Completed",
      location: "Markham",
      date: "2026-06-08",
      time: "11:00",
      value: 1800
    }
  ],
  technicians: [
    { name: "Marco Silva", role: "Furnace Fitter", status: "Available", city: "Scarborough" },
    { name: "Remote Dispatcher", role: "Service Dispatcher", status: "Remote", city: "Markham" }
  ],
  inventory: [
    { item: "ECM blower motors", stock: 2, reorder: 5 }
  ]
};

const recommendations = agent.recommendAssignments(context);
assert.equal(recommendations[0].requestId, "AF-T1");
assert.equal(recommendations[0].technician, "Marco Silva");
assert.ok(recommendations[0].explanation.includes("Scarborough"));

const risks = agent.detectRisks(context);
assert.ok(risks.some((risk) => risk.title === "Emergency response risk"));
assert.ok(risks.some((risk) => risk.title === "Parts availability"));

const summary = agent.generateDailySummary(context);
assert.ok(summary.includes("1 active job"));

const eta = agent.draftCustomerEta(context, "AF-T1");
assert.ok(eta.includes("Test Clinic"));

console.log("agent-logic tests passed");
