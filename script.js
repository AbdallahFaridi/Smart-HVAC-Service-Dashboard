const storageKeys = {
  theme: "airflex-theme",
  sidebar: "airflex-sidebar",
  requests: "airflex-requests",
  technicians: "airflex-technicians"
};

const iconPaths = {
  dashboard: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="4"></rect><rect x="14" y="11" width="7" height="10"></rect><rect x="3" y="14" width="7" height="7"></rect>',
  clipboard: '<path d="M9 5h6"></path><path d="M9 12h6"></path><path d="M9 16h6"></path><path d="M8 3h8l1 2h3v16H4V5h3l1-2Z"></path>',
  route: '<circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M9 19c6 0 0-14 6-14"></path>',
  shield: '<path d="M12 3 20 7v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7l8-4Z"></path><path d="m9 12 2 2 4-5"></path>',
  chart: '<path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 16v-5"></path><path d="M12 16V8"></path><path d="M16 16v-9"></path>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"></path>',
  plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
  download: '<path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path>',
  alert: '<path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path>',
  check: '<path d="m20 6-11 11-5-5"></path>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.9"></path><path d="M16 3.1a4 4 0 0 1 0 7.8"></path>',
  calendar: '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path>',
  search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>',
  spark: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"></path>',
  close: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  "panel-left": '<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M9 4v16"></path>',
  "map-pin": '<path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle>'
};

const defaultRequests = [
  {
    id: "AF-2101",
    customer: "Centennial College Residence",
    location: "Scarborough",
    address: "Progress Ave, Scarborough, ON",
    service: "Commercial HVAC rooftop unit maintenance",
    equipment: "Lennox 12.5 ton RTU",
    type: "Commercial",
    priority: "High",
    technician: "Maya Chen",
    status: "On Site",
    date: "2026-05-21",
    time: "08:30",
    value: 2850,
    notes: "Supply fan vibration reported by facilities team. Inspect belts, motor mounts, and economizer."
  },
  {
    id: "AF-2102",
    customer: "Danforth Medical Centre",
    location: "East York",
    address: "Danforth Ave, East York, ON",
    service: "Emergency commercial repair",
    equipment: "Carrier rooftop cooling circuit",
    type: "Commercial",
    priority: "Emergency",
    technician: "Ethan Brooks",
    status: "Dispatched",
    date: "2026-05-21",
    time: "09:10",
    value: 3650,
    notes: "Clinic temperature above setpoint. Compressor lockout code present."
  },
  {
    id: "AF-2103",
    customer: "Lindon Residence",
    location: "Pickering",
    address: "Whites Rd, Pickering, ON",
    service: "Furnace installation",
    equipment: "High efficiency gas furnace",
    type: "Residential",
    priority: "Scheduled",
    technician: "Noah Reed",
    status: "Dispatched",
    date: "2026-05-21",
    time: "10:00",
    value: 6200,
    notes: "Remove old unit, install new furnace, commission gas pressure, complete homeowner walkthrough."
  },
  {
    id: "AF-2104",
    customer: "Markham Tech Park",
    location: "Markham",
    address: "Woodbine Ave, Markham, ON",
    service: "Commercial ventilation servicing",
    equipment: "Make-up air unit and exhaust fans",
    type: "Commercial",
    priority: "Medium",
    technician: "Olivia Martin",
    status: "Waiting Parts",
    date: "2026-05-22",
    time: "13:30",
    value: 2100,
    notes: "Belts ordered. Balance ventilation after replacement."
  },
  {
    id: "AF-2105",
    customer: "Ajax Community Arena",
    location: "Ajax",
    address: "Bayly St, Ajax, ON",
    service: "Boiler inspection",
    equipment: "NTI TFTN boiler bank",
    type: "Maintenance",
    priority: "High",
    technician: "Daniel Singh",
    status: "New",
    date: "2026-05-22",
    time: "07:45",
    value: 1900,
    notes: "Annual safety inspection. Confirm combustion readings and remote monitoring status."
  },
  {
    id: "AF-2106",
    customer: "Vaughan Logistics Warehouse",
    location: "Vaughan",
    address: "Highway 7, Vaughan, ON",
    service: "Duct inspection",
    equipment: "Warehouse duct distribution",
    type: "Commercial",
    priority: "Medium",
    technician: "Sofia Ahmed",
    status: "New",
    date: "2026-05-23",
    time: "11:15",
    value: 1450,
    notes: "Inspect branch duct leakage and airflow complaints near loading dock."
  },
  {
    id: "AF-2107",
    customer: "Whitby Townhomes Phase 4",
    location: "Whitby",
    address: "Taunton Rd, Whitby, ON",
    service: "AC servicing",
    equipment: "Residential split systems",
    type: "Residential",
    priority: "Scheduled",
    technician: "Aiden Clarke",
    status: "Completed",
    date: "2026-05-20",
    time: "15:00",
    value: 980,
    notes: "Cleaned condenser coils, checked refrigerant pressures, and replaced filters."
  },
  {
    id: "AF-2108",
    customer: "Richmond Hill Dental Studio",
    location: "Richmond Hill",
    address: "Yonge St, Richmond Hill, ON",
    service: "Thermostat replacement",
    equipment: "Ecobee smart thermostat",
    type: "Residential",
    priority: "Medium",
    technician: "Maya Chen",
    status: "Completed",
    date: "2026-05-20",
    time: "12:45",
    value: 720,
    notes: "Installed thermostat, configured schedule, and verified remote app connection."
  },
  {
    id: "AF-2109",
    customer: "Brampton Food Processing",
    location: "Brampton",
    address: "Steeles Ave, Brampton, ON",
    service: "Emergency commercial repairs",
    equipment: "Process area make-up air",
    type: "Commercial",
    priority: "Emergency",
    technician: "Ethan Brooks",
    status: "On Site",
    date: "2026-05-21",
    time: "14:15",
    value: 4400,
    notes: "No heat in production zone. Check gas train, ignition sequence, and safety circuit."
  },
  {
    id: "AF-2110",
    customer: "North York Condo Board",
    location: "North York",
    address: "Sheppard Ave E, North York, ON",
    service: "Preventive heat pump maintenance",
    equipment: "Cold climate heat pump systems",
    type: "Maintenance",
    priority: "Scheduled",
    technician: "Olivia Martin",
    status: "Dispatched",
    date: "2026-05-24",
    time: "09:30",
    value: 2500,
    notes: "Inspect outdoor coils, fan motors, defrost settings, and tenant comfort reports."
  }
];

const defaultTechnicians = [
  { name: "Maya Chen", role: "HVAC Technician", status: "On Site", city: "Scarborough", capacity: 92, jobs: ["AF-2101", "AF-2108"], x: 30, y: 38 },
  { name: "Ethan Brooks", role: "Furnace Fitter", status: "Emergency", city: "East York", capacity: 88, jobs: ["AF-2102", "AF-2109"], x: 47, y: 34 },
  { name: "Noah Reed", role: "Sheet Metal Worker", status: "Dispatched", city: "Pickering", capacity: 74, jobs: ["AF-2103"], x: 64, y: 51 },
  { name: "Olivia Martin", role: "Service Dispatcher", status: "Remote", city: "Markham", capacity: 66, jobs: ["AF-2104", "AF-2110"], x: 58, y: 23 },
  { name: "Daniel Singh", role: "Boiler Specialist", status: "Available", city: "Ajax", capacity: 54, jobs: ["AF-2105"], x: 72, y: 62 },
  { name: "Sofia Ahmed", role: "HVAC Technician", status: "Available", city: "Vaughan", capacity: 58, jobs: ["AF-2106"], x: 38, y: 20 },
  { name: "Aiden Clarke", role: "Installer", status: "Available", city: "Whitby", capacity: 46, jobs: ["AF-2107"], x: 82, y: 70 }
];

const maintenanceItems = [
  { site: "3252 Lawrence Ave E Showroom", city: "Scarborough", task: "Showroom furnace and IAQ system inspection", due: "May 24, 2026", progress: 82, owner: "Daniel Singh" },
  { site: "Markham Tech Park", city: "Markham", task: "Ventilation belt replacement and balancing", due: "May 25, 2026", progress: 54, owner: "Olivia Martin" },
  { site: "Ajax Community Arena", city: "Ajax", task: "Boiler combustion verification", due: "May 26, 2026", progress: 31, owner: "Daniel Singh" },
  { site: "Whitby Townhomes Phase 4", city: "Whitby", task: "AC servicing completion logs", due: "Completed May 20, 2026", progress: 100, owner: "Aiden Clarke" },
  { site: "North York Condo Board", city: "North York", task: "Heat pump maintenance route", due: "May 27, 2026", progress: 66, owner: "Maya Chen" },
  { site: "Brampton Food Processing", city: "Brampton", task: "Emergency repair follow-up inspection", due: "May 28, 2026", progress: 44, owner: "Ethan Brooks" }
];

const chartData = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  serviceCalls: [84, 92, 108, 124, 142, 156],
  revenue: [92, 105, 118, 132, 149, 166],
  jobMix: [34, 66],
  maintenance: [68, 74, 79, 84, 88, 91]
};

const feedMessages = [
  "Emergency call received from Danforth Medical Centre.",
  "Maya Chen uploaded rooftop unit vibration readings.",
  "Lindon reviewed commercial repair queue.",
  "Parts ETA confirmed for Markham Tech Park ventilation service.",
  "Noah Reed marked furnace installation as dispatched.",
  "AirFlex system health check passed.",
  "Brampton Food Processing repair moved to on-site status."
];

const elements = {
  body: document.body,
  sidebar: document.querySelector("#sidebar"),
  collapseSidebar: document.querySelector("#collapseSidebar"),
  mobileMenu: document.querySelector("#mobileMenu"),
  themeToggle: document.querySelector("#themeToggle"),
  liveClock: document.querySelector("#liveClock"),
  liveDate: document.querySelector("#liveDate"),
  requestList: document.querySelector("#requestList"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  priorityFilter: document.querySelector("#priorityFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  clearFilters: document.querySelector("#clearFilters"),
  visibleRequestCount: document.querySelector("#visibleRequestCount"),
  tableSkeleton: document.querySelector("#tableSkeleton"),
  gpsMap: document.querySelector("#gpsMap"),
  activityFeed: document.querySelector("#activityFeed"),
  pauseFeed: document.querySelector("#pauseFeed"),
  scheduleBoard: document.querySelector("#scheduleBoard"),
  teamList: document.querySelector("#teamList"),
  autoAssign: document.querySelector("#autoAssign"),
  maintenanceGrid: document.querySelector("#maintenanceGrid"),
  modal: document.querySelector("#serviceModal"),
  modalContent: document.querySelector("#modalContent"),
  closeModal: document.querySelector("#closeModal"),
  toastStack: document.querySelector("#toastStack"),
  sectionLoader: document.querySelector("#sectionLoader"),
  exportReport: document.querySelector("#exportReport"),
  fabButton: document.querySelector("#fabButton"),
  newCallButton: document.querySelector("#newCallButton")
};

const appState = {
  requests: loadStored(storageKeys.requests, defaultRequests),
  technicians: loadStored(storageKeys.technicians, defaultTechnicians),
  filteredRequests: [],
  feedPaused: false,
  feedIndex: 0,
  charts: {}
};

function loadStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function persistData() {
  localStorage.setItem(storageKeys.requests, JSON.stringify(appState.requests));
  localStorage.setItem(storageKeys.technicians, JSON.stringify(appState.technicians));
}

function replaceIconText() {
  document.querySelectorAll(".icon").forEach((icon) => {
    const name = icon.textContent.trim();
    const path = iconPaths[name] || iconPaths.dashboard;
    icon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  });
}

function sanitizeClass(value) {
  return value.replace(/\s+/g, "");
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${dateString}T12:00:00`));
}

function updateClock() {
  const now = new Date();
  elements.liveClock.textContent = new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit"
  }).format(now);
  elements.liveDate.textContent = new Intl.DateTimeFormat("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(now);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<p>${message}</p>`;
  elements.toastStack.prepend(toast);
  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    window.setTimeout(() => toast.remove(), 260);
  }, 3600);
}

function showLoader(message = "Syncing AirFlex operations...") {
  elements.sectionLoader.querySelector("p").textContent = message;
  elements.sectionLoader.classList.add("show");
  window.setTimeout(() => elements.sectionLoader.classList.remove("show"), 560);
}

function animateNumber(element, value, suffix = "") {
  const start = Number(element.dataset.value || 0);
  const end = Number(value);
  const duration = 650;
  const started = performance.now();

  function tick(now) {
    const progress = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    element.textContent = `${current}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.dataset.value = end;
    }
  }

  requestAnimationFrame(tick);
}

function updateStats() {
  const emergencyCalls = appState.requests.filter((request) => request.priority === "Emergency" && request.status !== "Completed").length;
  const completedJobs = appState.requests.filter((request) => request.status === "Completed").length;
  const activeTechnicians = appState.technicians.filter((tech) => tech.status !== "Remote").length;
  const maintenanceRate = Math.round(maintenanceItems.reduce((sum, item) => sum + item.progress, 0) / maintenanceItems.length);

  const stats = {
    totalRequests: appState.requests.length,
    emergencyCalls,
    completedJobs,
    activeTechnicians,
    maintenanceRate
  };

  document.querySelectorAll("[data-stat]").forEach((element) => {
    const key = element.dataset.stat;
    const suffix = key === "maintenanceRate" ? "%" : "";
    animateNumber(element, stats[key], suffix);
  });
}

function applyFilters(withSkeleton = true) {
  const query = elements.searchInput.value.trim().toLowerCase();
  const status = elements.statusFilter.value;
  const priority = elements.priorityFilter.value;
  const type = elements.typeFilter.value;

  if (withSkeleton) {
    elements.tableSkeleton.classList.add("show");
  }

  window.clearTimeout(applyFilters.timer);
  applyFilters.timer = window.setTimeout(() => {
    appState.filteredRequests = appState.requests.filter((request) => {
      const haystack = `${request.id} ${request.customer} ${request.location} ${request.service} ${request.equipment} ${request.technician}`.toLowerCase();
      return haystack.includes(query)
        && (status === "all" || request.status === status)
        && (priority === "all" || request.priority === priority)
        && (type === "all" || request.type === type);
    }).sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

    renderRequests();
    elements.tableSkeleton.classList.remove("show");
  }, withSkeleton ? 220 : 0);
}

function renderRequests() {
  elements.visibleRequestCount.textContent = `${appState.filteredRequests.length} visible`;

  if (!appState.filteredRequests.length) {
    elements.requestList.innerHTML = `<article class="request-card"><div class="request-main"><strong>No matching service calls</strong><small>Adjust filters or clear the search to see all AirFlex work orders.</small></div></article>`;
    return;
  }

  elements.requestList.innerHTML = appState.filteredRequests.map((request) => `
    <article class="request-card" data-request-id="${request.id}">
      <div class="request-main">
        <strong>${request.customer}</strong>
        <small>${request.id} · ${request.service}</small>
      </div>
      <div class="request-meta">
        <span class="priority-pill priority-${request.priority}">${request.priority}</span>
        <small>${request.location}</small>
      </div>
      <div class="request-meta">
        <span class="type-pill">${request.type}</span>
        <small>${request.equipment}</small>
      </div>
      <div class="request-meta">
        <span class="status-pill status-${sanitizeClass(request.status)}">${request.status}</span>
        <small>${request.technician}</small>
      </div>
      <button class="secondary-button compact" type="button" data-details="${request.id}">Details</button>
    </article>
  `).join("");
}

function renderGpsMap() {
  elements.gpsMap.innerHTML = appState.technicians.map((tech, index) => `
    <div class="map-pin" style="left:${tech.x}%; top:${tech.y}%; animation-delay:${index * -0.4}s">
      <strong>${tech.name}</strong>
      <small>${tech.city} · ${tech.status}</small>
    </div>
  `).join("");
}

function renderFeed(seed = true) {
  if (seed) {
    elements.activityFeed.innerHTML = "";
    feedMessages.slice(0, 5).forEach((message, index) => addFeedItem(message, `${9 + index}:0${index}`));
  }
}

function addFeedItem(message, timeLabel) {
  const item = document.createElement("article");
  item.className = "activity-item";
  item.innerHTML = `
    <span class="activity-dot"></span>
    <p>${message}</p>
    <small>${timeLabel || "now"}</small>
  `;
  elements.activityFeed.prepend(item);

  while (elements.activityFeed.children.length > 8) {
    elements.activityFeed.lastElementChild.remove();
  }
}

function startLiveFeed() {
  window.setInterval(() => {
    if (appState.feedPaused) {
      return;
    }
    appState.feedIndex = (appState.feedIndex + 1) % feedMessages.length;
    addFeedItem(feedMessages[appState.feedIndex], "now");
    if (appState.feedIndex % 3 === 0) {
      showToast(feedMessages[appState.feedIndex]);
    }
  }, 7000);
}

function renderScheduleBoard() {
  elements.scheduleBoard.innerHTML = appState.technicians.slice(0, 4).map((tech) => {
    const assigned = appState.requests.filter((request) => request.technician === tech.name && request.status !== "Completed");
    return `
      <section class="schedule-lane" data-tech="${tech.name}">
        <div class="lane-title">
          <span>${tech.name}</span>
          <small>${assigned.length} jobs</small>
        </div>
        ${assigned.map((request) => `
          <article class="lane-card" draggable="true" tabindex="0" data-drag-id="${request.id}">
            <strong>${request.id}</strong>
            <small>${request.customer}</small>
            <span class="priority-pill priority-${request.priority}">${request.priority}</span>
            <small>${request.time} · ${request.location}</small>
          </article>
        `).join("")}
      </section>
    `;
  }).join("");
}

function renderTeamList() {
  elements.teamList.innerHTML = appState.technicians.map((tech) => {
    const initials = tech.name.split(" ").map((part) => part[0]).join("");
    return `
      <article class="team-card">
        <div class="avatar">${initials}</div>
        <div>
          <strong>${tech.name}</strong>
          <small>${tech.role} · ${tech.city}</small>
        </div>
        <div class="ring" style="--value:${tech.capacity}">
          <span>${tech.capacity}%</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderMaintenance() {
  elements.maintenanceGrid.innerHTML = maintenanceItems.map((item) => `
    <article class="maintenance-card">
      <strong>${item.site}</strong>
      <small>${item.city} · ${item.owner}</small>
      <p>${item.task}</p>
      <small>${item.due}</small>
      <div class="progress-track" aria-label="${item.progress}% complete">
        <div class="progress-bar" data-progress="${item.progress}"></div>
      </div>
    </article>
  `).join("");

  requestAnimationFrame(() => {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      bar.style.width = `${bar.dataset.progress}%`;
    });
  });
}

function openServiceModal(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }

  elements.modalContent.innerHTML = `
    <div class="modal-content">
      <p class="eyebrow">${request.id} · ${request.type}</p>
      <h3 id="modalTitle">${request.customer}</h3>
      <p>${request.notes}</p>
      <div class="modal-grid">
        <div class="modal-cell"><small>Service</small><strong>${request.service}</strong></div>
        <div class="modal-cell"><small>Equipment</small><strong>${request.equipment}</strong></div>
        <div class="modal-cell"><small>Location</small><strong>${request.address}</strong></div>
        <div class="modal-cell"><small>Technician</small><strong>${request.technician}</strong></div>
        <div class="modal-cell"><small>Schedule</small><strong>${formatDate(request.date)} at ${request.time}</strong></div>
        <div class="modal-cell"><small>Estimated revenue</small><strong>${formatCurrency(request.value)}</strong></div>
      </div>
      <button class="primary-button" type="button" data-complete="${request.id}">
        <span class="icon">check</span>
        Mark Job Complete
      </button>
    </div>
  `;
  replaceIconText();
  elements.modal.hidden = false;
  elements.closeModal.focus();
}

function closeModal() {
  elements.modal.hidden = true;
}

function completeRequest(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  request.status = "Completed";
  persistData();
  updateEverything();
  closeModal();
  showToast(`${request.id} marked completed for ${request.customer}.`);
}

function autoAssignRequest() {
  const openRequest = appState.requests.find((request) => request.status === "New");
  const availableTech = appState.technicians.find((tech) => tech.status === "Available");

  if (!openRequest || !availableTech) {
    showToast("No new request or available technician is ready for auto assignment.");
    return;
  }

  openRequest.technician = availableTech.name;
  openRequest.status = "Dispatched";
  availableTech.jobs.push(openRequest.id);
  availableTech.status = "Dispatched";
  availableTech.capacity = Math.min(98, availableTech.capacity + 12);
  persistData();
  showLoader("Optimizing AirFlex route...");
  window.setTimeout(() => {
    updateEverything();
    showToast(`${availableTech.name} assigned to ${openRequest.customer}.`);
  }, 620);
}

function handleDrop(requestId, techName) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  request.technician = techName;
  request.status = "Dispatched";
  appState.technicians.forEach((tech) => {
    tech.jobs = tech.jobs.filter((jobId) => jobId !== requestId);
    if (tech.name === techName && !tech.jobs.includes(requestId)) {
      tech.jobs.push(requestId);
      tech.status = "Dispatched";
    }
  });
  persistData();
  updateEverything();
  showToast(`${request.id} moved to ${techName}'s dispatch lane.`);
}

function renderCharts() {
  if (!window.Chart) {
    renderChartFallbacks();
    return;
  }

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1100, easing: "easeOutQuart" },
    plugins: {
      legend: { labels: { color: getComputedStyle(document.body).getPropertyValue("--muted") } }
    },
    scales: {
      x: { ticks: { color: getComputedStyle(document.body).getPropertyValue("--muted") }, grid: { display: false } },
      y: { ticks: { color: getComputedStyle(document.body).getPropertyValue("--muted") }, grid: { color: "rgba(120,145,165,.18)" } }
    }
  };

  Object.values(appState.charts).forEach((chart) => chart.destroy());

  appState.charts.service = new Chart(document.querySelector("#serviceCallsChart"), {
    type: "bar",
    data: {
      labels: chartData.months,
      datasets: [{ label: "Service calls", data: chartData.serviceCalls, backgroundColor: "#0f7fc6", borderRadius: 12 }]
    },
    options: baseOptions
  });

  appState.charts.revenue = new Chart(document.querySelector("#revenueChart"), {
    type: "line",
    data: {
      labels: chartData.months,
      datasets: [{ label: "Revenue (CAD x1000)", data: chartData.revenue, borderColor: "#20c76f", backgroundColor: "rgba(32,199,111,.16)", fill: true, tension: 0.42 }]
    },
    options: baseOptions
  });

  appState.charts.mix = new Chart(document.querySelector("#jobMixChart"), {
    type: "doughnut",
    data: {
      labels: ["Emergency", "Scheduled"],
      datasets: [{ data: chartData.jobMix, backgroundColor: ["#ef4444", "#0f7fc6"], borderWidth: 0 }]
    },
    options: { responsive: true, maintainAspectRatio: false, animation: { animateRotate: true, duration: 1100 }, plugins: { legend: { position: "bottom" } } }
  });

  appState.charts.maintenance = new Chart(document.querySelector("#maintenanceChart"), {
    type: "line",
    data: {
      labels: chartData.months,
      datasets: [{ label: "Completion rate", data: chartData.maintenance, borderColor: "#7c5cff", backgroundColor: "rgba(124,92,255,.16)", fill: true, tension: 0.42 }]
    },
    options: baseOptions
  });
}

function renderChartFallbacks() {
  const fallbackMap = {
    serviceCallsChart: chartData.serviceCalls,
    revenueChart: chartData.revenue,
    jobMixChart: chartData.jobMix,
    maintenanceChart: chartData.maintenance
  };

  Object.entries(fallbackMap).forEach(([id, values]) => {
    const canvas = document.querySelector(`#${id}`);
    const fallback = document.querySelector(`[data-fallback="${id}"]`);
    const max = Math.max(...values);
    canvas.style.display = "none";
    fallback.style.display = "flex";
    fallback.innerHTML = values.map((value) => `<span class="fallback-bar" style="height:${Math.max(22, (value / max) * 210)}px"></span>`).join("");
  });
}

function updateEverything() {
  updateStats();
  applyFilters(false);
  renderGpsMap();
  renderScheduleBoard();
  renderTeamList();
  renderMaintenance();
}

function restorePreferences() {
  if (localStorage.getItem(storageKeys.theme) === "dark") {
    elements.body.classList.add("dark");
  }
  if (localStorage.getItem(storageKeys.sidebar) === "collapsed") {
    elements.sidebar.classList.add("collapsed");
  }
}

function bindEvents() {
  [elements.searchInput, elements.statusFilter, elements.priorityFilter, elements.typeFilter].forEach((control) => {
    control.addEventListener("input", () => applyFilters(true));
    control.addEventListener("change", () => applyFilters(true));
  });

  elements.clearFilters.addEventListener("click", () => {
    elements.searchInput.value = "";
    elements.statusFilter.value = "all";
    elements.priorityFilter.value = "all";
    elements.typeFilter.value = "all";
    applyFilters(true);
    showToast("Filters cleared.");
  });

  document.addEventListener("click", (event) => {
    const hitTarget = document.elementFromPoint(event.clientX, event.clientY);
    const detailsButton = event.target.closest("[data-details]") || hitTarget?.closest?.("[data-details]");
    if (detailsButton) {
      openServiceModal(detailsButton.dataset.details);
    }
  });

  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) {
      closeModal();
    }
    const completeButton = event.target.closest("[data-complete]");
    if (completeButton) {
      completeRequest(completeButton.dataset.complete);
    }
  });

  elements.closeModal.addEventListener("click", closeModal);

  elements.collapseSidebar.addEventListener("click", () => {
    elements.sidebar.classList.toggle("collapsed");
    localStorage.setItem(storageKeys.sidebar, elements.sidebar.classList.contains("collapsed") ? "collapsed" : "expanded");
  });

  elements.mobileMenu.addEventListener("click", () => {
    const open = elements.sidebar.classList.toggle("open");
    elements.mobileMenu.classList.toggle("open", open);
    elements.mobileMenu.setAttribute("aria-expanded", String(open));
  });

  elements.themeToggle.addEventListener("click", () => {
    elements.body.classList.toggle("dark");
    localStorage.setItem(storageKeys.theme, elements.body.classList.contains("dark") ? "dark" : "light");
    renderCharts();
    showToast("Theme preference saved.");
  });

  elements.scheduleBoard.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-drag-id]");
    if (!card) {
      return;
    }
    card.classList.add("dragging");
    event.dataTransfer.setData("text/plain", card.dataset.dragId);
  });

  elements.scheduleBoard.addEventListener("dragend", (event) => {
    const card = event.target.closest("[data-drag-id]");
    if (card) {
      card.classList.remove("dragging");
    }
    document.querySelectorAll(".schedule-lane").forEach((lane) => lane.classList.remove("drag-over"));
  });

  elements.scheduleBoard.addEventListener("dragover", (event) => {
    const lane = event.target.closest(".schedule-lane");
    if (!lane) {
      return;
    }
    event.preventDefault();
    lane.classList.add("drag-over");
  });

  elements.scheduleBoard.addEventListener("dragleave", (event) => {
    const lane = event.target.closest(".schedule-lane");
    if (lane) {
      lane.classList.remove("drag-over");
    }
  });

  elements.scheduleBoard.addEventListener("drop", (event) => {
    const lane = event.target.closest(".schedule-lane");
    if (!lane) {
      return;
    }
    event.preventDefault();
    lane.classList.remove("drag-over");
    handleDrop(event.dataTransfer.getData("text/plain"), lane.dataset.tech);
  });

  elements.autoAssign.addEventListener("click", autoAssignRequest);
  elements.exportReport.addEventListener("click", () => {
    showLoader("Building AirFlex operations report...");
    window.setTimeout(() => showToast(`Report ready with ${appState.filteredRequests.length} visible work orders.`), 620);
  });

  elements.pauseFeed.addEventListener("click", () => {
    appState.feedPaused = !appState.feedPaused;
    elements.pauseFeed.textContent = appState.feedPaused ? "Resume" : "Pause";
  });

  [elements.fabButton, elements.newCallButton].forEach((button) => {
    button.addEventListener("click", () => {
      showToast("New service call intake opened for AirFlex dispatch.");
      elements.searchInput.focus();
    });
  });

  document.querySelectorAll("[data-section-link], .mobile-bottom-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      showLoader("Loading dashboard section...");
      elements.sidebar.classList.remove("open");
      elements.mobileMenu.classList.remove("open");
      elements.mobileMenu.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.modal.hidden) {
      closeModal();
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      elements.searchInput.focus();
      showToast("Search focused. Try a city, technician, or work order.");
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "d") {
      event.preventDefault();
      elements.themeToggle.click();
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 980) {
      return;
    }
    if (!event.target.closest("#sidebar") && !event.target.closest("#mobileMenu")) {
      elements.sidebar.classList.remove("open");
      elements.mobileMenu.classList.remove("open");
      elements.mobileMenu.setAttribute("aria-expanded", "false");
    }
  });
}

function init() {
  replaceIconText();
  restorePreferences();
  bindEvents();
  updateClock();
  window.setInterval(updateClock, 1000);
  updateEverything();
  renderFeed();
  renderCharts();
  startLiveFeed();
  window.setTimeout(() => showToast("AirFlex dispatch platform is online."), 700);
}

init();
