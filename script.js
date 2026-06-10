const storageKeys = {
  theme: "airflex-theme",
  sidebar: "airflex-sidebar",
  requests: "airflex-requests",
  technicians: "airflex-technicians",
  weather: "airflex-weather"
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
  edit: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path>',
  trash: '<path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 16H6L5 6"></path>',
  reset: '<path d="M3 12a9 9 0 1 0 3-6.7"></path><path d="M3 4v5h5"></path>',
  cloud: '<path d="M17.5 19H8a5 5 0 1 1 1.1-9.9 6 6 0 0 1 11.4 2.5A3.8 3.8 0 0 1 17.5 19Z"></path>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.1-2.1 2.8-2.8Z"></path>',
  home: '<path d="m3 11 9-8 9 8"></path><path d="M5 10v11h14V10"></path><path d="M9 21v-7h6v7"></path>',
  building: '<path d="M4 21V5a2 2 0 0 1 2-2h8v18"></path><path d="M14 9h6v12"></path><path d="M8 7h2"></path><path d="M8 11h2"></path><path d="M8 15h2"></path>',
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

const inventoryItems = [
  { item: "16x25x1 pleated filters", stock: 42, reorder: 25, supplier: "Scarborough warehouse" },
  { item: "ECM blower motors", stock: 8, reorder: 10, supplier: "Markham supplier" },
  { item: "RTU belt kits", stock: 14, reorder: 12, supplier: "Ajax service van" },
  { item: "Smart thermostats", stock: 19, reorder: 8, supplier: "Toronto office" }
];

const serviceCatalog = [
  { id: "furnace-install", title: "Furnace Installation", type: "Residential", priority: "Scheduled", base: 5200, icon: "home", equipment: "High efficiency gas furnace", description: "Replacement, gas commissioning, thermostat setup, and homeowner walkthrough." },
  { id: "ac-service", title: "AC Service & Repair", type: "Residential", priority: "High", base: 420, icon: "cloud", equipment: "Residential split AC", description: "Cooling diagnostics, coil cleaning, refrigerant checks, and comfort testing." },
  { id: "rtu-maintenance", title: "Rooftop Unit Maintenance", type: "Commercial", priority: "Scheduled", base: 1850, icon: "building", equipment: "Commercial RTU", description: "Belts, filters, economizer checks, electrical inspection, and performance notes." },
  { id: "boiler-inspection", title: "Boiler Inspection", type: "Maintenance", priority: "High", base: 1450, icon: "shield", equipment: "Commercial boiler", description: "Combustion analysis, safety controls, water treatment review, and logs." },
  { id: "duct-ventilation", title: "Duct & Ventilation", type: "Commercial", priority: "Medium", base: 1250, icon: "route", equipment: "Duct and ventilation system", description: "Airflow balancing, duct inspections, make-up air checks, and exhaust service." },
  { id: "emergency-repair", title: "Emergency HVAC Repair", type: "Commercial", priority: "Emergency", base: 950, icon: "alert", equipment: "Critical HVAC equipment", description: "Rapid dispatch for no heat, no cooling, lockouts, alarms, and urgent comfort issues." }
];

const maintenancePlans = [
  { id: "comfort-care", name: "Comfort Care", price: 189, interval: "2 visits / year", type: "Residential", description: "Seasonal furnace and AC tune-ups with filter reminders." },
  { id: "commercial-pro", name: "Commercial Pro", price: 649, interval: "Quarterly", type: "Commercial", description: "RTU, ventilation, filters, and priority commercial scheduling." },
  { id: "priority-response", name: "Priority Response", price: 999, interval: "24/7 coverage", type: "Commercial", description: "Emergency priority, after-hours dispatch, and repair history tracking." }
];

const equipmentRegistry = [
  { id: "EQ-RTU-18", site: "Centennial College Residence", equipment: "Lennox 12.5 ton RTU", age: "8 years", next: "Jun 12, 2026", service: "Rooftop Unit Maintenance", warranty: "Parts warranty active" },
  { id: "EQ-BLR-04", site: "Ajax Community Arena", equipment: "NTI TFTN boiler bank", age: "5 years", next: "Jun 18, 2026", service: "Boiler Inspection", warranty: "Labour warranty expired" },
  { id: "EQ-FUR-27", site: "Lindon Residence", equipment: "High efficiency furnace", age: "New install", next: "Nov 3, 2026", service: "Furnace Installation", warranty: "Full install warranty active" }
];

const defaultChecklist = [
  "Confirm customer access",
  "Lockout/tagout where required",
  "Inspect equipment condition",
  "Record readings and photos",
  "Review work with customer"
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
  technicianFilter: document.querySelector("#technicianFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  serviceGrid: document.querySelector("#serviceGrid"),
  quoteService: document.querySelector("#quoteService"),
  quoteProperty: document.querySelector("#quoteProperty"),
  quoteUrgency: document.querySelector("#quoteUrgency"),
  quoteDistance: document.querySelector("#quoteDistance"),
  quoteTotal: document.querySelector("#quoteTotal"),
  quoteMeta: document.querySelector("#quoteMeta"),
  createQuoteRequest: document.querySelector("#createQuoteRequest"),
  planGrid: document.querySelector("#planGrid"),
  equipmentList: document.querySelector("#equipmentList"),
  clearFilters: document.querySelector("#clearFilters"),
  resetData: document.querySelector("#resetData"),
  visibleRequestCount: document.querySelector("#visibleRequestCount"),
  tableSkeleton: document.querySelector("#tableSkeleton"),
  gpsMap: document.querySelector("#gpsMap"),
  activityFeed: document.querySelector("#activityFeed"),
  pauseFeed: document.querySelector("#pauseFeed"),
  refreshWeather: document.querySelector("#refreshWeather"),
  weatherTemp: document.querySelector("#weatherTemp"),
  weatherSummary: document.querySelector("#weatherSummary"),
  weatherHumidity: document.querySelector("#weatherHumidity"),
  weatherWind: document.querySelector("#weatherWind"),
  weatherUpdated: document.querySelector("#weatherUpdated"),
  scheduleBoard: document.querySelector("#scheduleBoard"),
  teamList: document.querySelector("#teamList"),
  autoAssign: document.querySelector("#autoAssign"),
  maintenanceGrid: document.querySelector("#maintenanceGrid"),
  inventoryList: document.querySelector("#inventoryList"),
  financeList: document.querySelector("#financeList"),
  customerRequestSelect: document.querySelector("#customerRequestSelect"),
  sendEta: document.querySelector("#sendEta"),
  sendReminder: document.querySelector("#sendReminder"),
  collectDeposit: document.querySelector("#collectDeposit"),
  appointmentList: document.querySelector("#appointmentList"),
  warrantyList: document.querySelector("#warrantyList"),
  agentOutput: document.querySelector("#agentOutput"),
  agentDailySummary: document.querySelector("#agentDailySummary"),
  agentRecommend: document.querySelector("#agentRecommend"),
  agentPrioritize: document.querySelector("#agentPrioritize"),
  agentDraftEta: document.querySelector("#agentDraftEta"),
  agentRisks: document.querySelector("#agentRisks"),
  agentManagerReport: document.querySelector("#agentManagerReport"),
  agentApplyTop: document.querySelector("#agentApplyTop"),
  showEmergencies: document.querySelector("#showEmergencies"),
  showUnassigned: document.querySelector("#showUnassigned"),
  optimizeRoutes: document.querySelector("#optimizeRoutes"),
  closeCompleted: document.querySelector("#closeCompleted"),
  modal: document.querySelector("#serviceModal"),
  modalContent: document.querySelector("#modalContent"),
  closeModal: document.querySelector("#closeModal"),
  toastStack: document.querySelector("#toastStack"),
  sectionLoader: document.querySelector("#sectionLoader"),
  exportReport: document.querySelector("#exportReport"),
  fabButton: document.querySelector("#fabButton"),
  newCallButton: document.querySelector("#newCallButton"),
  bookEmergency: document.querySelector("#bookEmergency")
};

const appState = {
  requests: loadStored(storageKeys.requests, defaultRequests),
  technicians: loadStored(storageKeys.technicians, defaultTechnicians),
  filteredRequests: [],
  sortKey: "date",
  feedPaused: false,
  feedIndex: 0,
  weather: loadStored(storageKeys.weather, null),
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

function persistWeather() {
  localStorage.setItem(storageKeys.weather, JSON.stringify(appState.weather));
}

function replaceIconText() {
  document.querySelectorAll(".icon").forEach((icon) => {
    if (icon.querySelector("svg")) {
      return;
    }
    const name = icon.textContent.trim();
    const path = iconPaths[name] || iconPaths.dashboard;
    icon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  });
}

function sanitizeClass(value) {
  return value.replace(/\s+/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function compareRequests(a, b) {
  const priorityRank = { Emergency: 0, High: 1, Medium: 2, Scheduled: 3 };
  if (appState.sortKey === "priority") {
    return (priorityRank[a.priority] ?? 9) - (priorityRank[b.priority] ?? 9);
  }
  if (appState.sortKey === "value") {
    return b.value - a.value;
  }
  if (appState.sortKey === "customer") {
    return a.customer.localeCompare(b.customer);
  }
  return new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
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
  const technician = elements.technicianFilter.value;

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
        && (type === "all" || request.type === type)
        && (technician === "all" || request.technician === technician);
    }).sort(compareRequests);

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
        <small>${request.id} | ${request.service}</small>
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
      <small>${tech.city} | ${tech.status}</small>
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
            <small>${request.time} | ${request.location}</small>
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
          <small>${tech.role} | ${tech.city}</small>
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
      <small>${item.city} | ${item.owner}</small>
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

function renderTechnicianFilter() {
  const current = elements.technicianFilter.value || "all";
  elements.technicianFilter.innerHTML = `
    <option value="all">All technicians</option>
    ${appState.technicians.map((tech) => `<option value="${tech.name}">${tech.name}</option>`).join("")}
  `;
  elements.technicianFilter.value = [...elements.technicianFilter.options].some((option) => option.value === current) ? current : "all";
}

function renderInventory() {
  elements.inventoryList.innerHTML = inventoryItems.map((item) => {
    const percent = Math.min(100, Math.round((item.stock / Math.max(item.reorder * 2, 1)) * 100));
    const low = item.stock <= item.reorder;
    return `
      <article class="inventory-item">
        <div class="inventory-top">
          <strong>${item.item}</strong>
          <span class="badge ${low ? "warning-badge" : "online-badge"}">${low ? "Reorder" : "Ready"}</span>
        </div>
        <small>${item.stock} in stock | ${item.supplier}</small>
        <div class="stock-meter" aria-label="${percent}% stock level"><span style="width:${percent}%"></span></div>
        <button class="secondary-button compact" type="button" data-reorder="${item.item}">Reorder Parts</button>
      </article>
    `;
  }).join("");
}

function renderFinance() {
  const activeValue = appState.requests
    .filter((request) => request.status !== "Completed")
    .reduce((sum, request) => sum + request.value, 0);
  const completedValue = appState.requests
    .filter((request) => request.status === "Completed")
    .reduce((sum, request) => sum + request.value, 0);
  const emergencyValue = appState.requests
    .filter((request) => request.priority === "Emergency")
    .reduce((sum, request) => sum + request.value, 0);

  const rows = [
    { label: "Open work orders", value: activeValue, status: "Pending billing" },
    { label: "Completed jobs", value: completedValue, status: "Ready to invoice" },
    { label: "Emergency calls", value: emergencyValue, status: "Priority revenue" }
  ];

  elements.financeList.innerHTML = rows.map((row) => `
    <article class="finance-item">
      <div class="finance-top">
        <strong>${row.label}</strong>
        <span class="badge dispatch-badge">${formatCurrency(row.value)}</span>
      </div>
      <small>${row.status}</small>
    </article>
  `).join("");
}

function renderCustomerSelector() {
  const current = elements.customerRequestSelect.value;
  const activeRequests = appState.requests.filter((request) => request.status !== "Completed");
  elements.customerRequestSelect.innerHTML = activeRequests.map((request) => `
    <option value="${request.id}">${request.id} | ${request.customer}</option>
  `).join("");
  if (activeRequests.some((request) => request.id === current)) {
    elements.customerRequestSelect.value = current;
  }
}

function renderAppointments() {
  const upcoming = [...appState.requests]
    .filter((request) => request.status !== "Completed")
    .sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`))
    .slice(0, 5);

  elements.appointmentList.innerHTML = upcoming.map((request) => `
    <article class="appointment-item">
      <div class="appointment-top">
        <strong>${request.time} | ${request.customer}</strong>
        <span class="badge dispatch-badge">${request.status}</span>
      </div>
      <small>${formatDate(request.date)} | ${request.location} | ${request.technician}</small>
      <button class="secondary-button compact" type="button" data-appointment="${request.id}">Open Job</button>
    </article>
  `).join("");
}

function renderWarrantyLookup() {
  elements.warrantyList.innerHTML = equipmentRegistry.map((item) => `
    <article class="warranty-item">
      <div class="warranty-top">
        <strong>${item.id}</strong>
        <span class="badge ${item.warranty.includes("active") ? "online-badge" : "warning-badge"}">${item.warranty}</span>
      </div>
      <small>${item.site} | ${item.equipment}</small>
      <button class="secondary-button compact" type="button" data-warranty="${item.id}">Create Warranty Visit</button>
    </article>
  `).join("");
}

function renderServiceCatalog() {
  elements.serviceGrid.innerHTML = serviceCatalog.map((service) => `
    <article class="service-card">
      <span class="stat-icon blue"><span class="icon">${service.icon}</span></span>
      <h4>${service.title}</h4>
      <p>${service.description}</p>
      <span class="badge dispatch-badge">${formatCurrency(service.base)} starting point</span>
      <button class="primary-button compact" type="button" data-book-service="${service.id}">
        <span class="icon">plus</span>
        Book Service
      </button>
    </article>
  `).join("");
  replaceIconText();
}

function renderQuoteOptions() {
  elements.quoteService.innerHTML = serviceCatalog.map((service) => `<option value="${service.id}">${service.title}</option>`).join("");
  calculateQuote();
}

function calculateQuote() {
  const service = serviceCatalog.find((item) => item.id === elements.quoteService.value) || serviceCatalog[0];
  const propertyMultiplier = elements.quoteProperty.value === "Commercial" ? 1.45 : 1;
  const urgencyMultiplier = elements.quoteUrgency.value === "Emergency" ? 1.55 : elements.quoteUrgency.value === "High" ? 1.22 : 1;
  const distance = Number(elements.quoteDistance.value);
  const travel = distance * 6;
  const low = Math.round((service.base * propertyMultiplier * urgencyMultiplier + travel) / 10) * 10;
  const high = Math.round((low * 1.28) / 10) * 10;
  elements.quoteTotal.textContent = `${formatCurrency(low)} - ${formatCurrency(high)}`;
  elements.quoteMeta.textContent = `${distance} km travel range | ${elements.quoteProperty.value} | ${elements.quoteUrgency.value}`;
  return { service, low, high, distance };
}

function renderPlans() {
  elements.planGrid.innerHTML = maintenancePlans.map((plan) => `
    <article class="plan-card">
      <span class="stat-icon green"><span class="icon">shield</span></span>
      <h4>${plan.name}</h4>
      <p>${plan.description}</p>
      <span class="badge online-badge">${formatCurrency(plan.price)} / month | ${plan.interval}</span>
      <button class="secondary-button compact" type="button" data-plan="${plan.id}">
        <span class="icon">calendar</span>
        Add Plan Visit
      </button>
    </article>
  `).join("");
  replaceIconText();
}

function renderEquipmentRegistry() {
  elements.equipmentList.innerHTML = equipmentRegistry.map((item) => `
    <article class="equipment-card">
      <div>
        <h4>${item.site}</h4>
        <p>${item.equipment}</p>
      </div>
      <span class="badge dispatch-badge">${item.id}</span>
      <small>${item.age} | Next service ${item.next}</small>
      <button class="secondary-button compact" type="button" data-equipment="${item.id}">
        <span class="icon">wrench</span>
        Schedule Service
      </button>
    </article>
  `).join("");
  replaceIconText();
}

function buildRequestFromService(service, overrides = {}) {
  const now = new Date();
  const technician = appState.technicians.find((tech) => tech.status === "Available")?.name || appState.technicians[0].name;
  return {
    id: getNextRequestId(),
    customer: overrides.customer || "New AirFlex Customer",
    location: overrides.location || "Scarborough",
    address: overrides.address || "GTA service address pending",
    service: overrides.service || service.title,
    equipment: overrides.equipment || service.equipment,
    type: overrides.type || service.type,
    priority: overrides.priority || service.priority,
    technician: overrides.technician || technician,
    status: overrides.status || "New",
    date: overrides.date || now.toISOString().slice(0, 10),
    time: overrides.time || now.toTimeString().slice(0, 5),
    value: overrides.value || service.base,
    notes: overrides.notes || `${service.title} request created from the AirFlex service catalog.`
  };
}

function createServiceRequest(serviceId, overrides = {}) {
  const service = serviceCatalog.find((item) => item.id === serviceId) || serviceCatalog[0];
  const request = buildRequestFromService(service, overrides);
  appState.requests.unshift(request);
  persistData();
  updateEverything();
  elements.searchInput.value = request.id;
  elements.statusFilter.value = "all";
  elements.priorityFilter.value = "all";
  elements.typeFilter.value = "all";
  elements.technicianFilter.value = "all";
  applyFilters(true);
  showToast(`${request.id} created for ${request.service}.`);
  return request;
}

function prefillServiceForm(serviceId) {
  const service = serviceCatalog.find((item) => item.id === serviceId) || serviceCatalog[0];
  openRequestForm("create");
  elements.modal.querySelector("#formService").value = service.title;
  elements.modal.querySelector("#formEquipment").value = service.equipment;
  elements.modal.querySelector("#formType").value = service.type;
  elements.modal.querySelector("#formPriority").value = service.priority;
  elements.modal.querySelector("#formValue").value = service.base;
  elements.modal.querySelector("#formNotes").value = `${service.description} Customer intake created from AirFlex service catalog.`;
}

function createQuoteRequest() {
  const quote = calculateQuote();
  const request = createServiceRequest(quote.service.id, {
    customer: "Quote Request - AirFlex Website",
    location: "GTA",
    address: `${quote.distance} km from Scarborough dispatch`,
    type: elements.quoteProperty.value,
    priority: elements.quoteUrgency.value,
    value: quote.low,
    notes: `Quote range ${formatCurrency(quote.low)} - ${formatCurrency(quote.high)}. ${elements.quoteMeta.textContent}.`
  });
  elements.searchInput.value = request.id;
  applyFilters(true);
}

function createPlanVisit(planId) {
  const plan = maintenancePlans.find((item) => item.id === planId) || maintenancePlans[0];
  const service = serviceCatalog.find((item) => item.id === "rtu-maintenance") || serviceCatalog[0];
  createServiceRequest(service.id, {
    customer: `${plan.name} Member`,
    service: `${plan.name} maintenance visit`,
    equipment: `${plan.type} HVAC system`,
    type: "Maintenance",
    priority: "Scheduled",
    value: plan.price,
    notes: `${plan.interval} plan visit. ${plan.description}`
  });
}

function createEquipmentService(equipmentId) {
  const equipment = equipmentRegistry.find((item) => item.id === equipmentId) || equipmentRegistry[0];
  const service = serviceCatalog.find((item) => item.title === equipment.service) || serviceCatalog[0];
  createServiceRequest(service.id, {
    customer: equipment.site,
    service: equipment.service,
    equipment: equipment.equipment,
    type: service.type,
    priority: "Scheduled",
    value: service.base,
    notes: `Registry service for ${equipment.id}. Equipment age: ${equipment.age}. Next service target: ${equipment.next}.`
  });
}

function createWarrantyVisit(equipmentId) {
  const equipment = equipmentRegistry.find((item) => item.id === equipmentId) || equipmentRegistry[0];
  const service = serviceCatalog.find((item) => item.id === "rtu-maintenance") || serviceCatalog[0];
  createServiceRequest(service.id, {
    customer: equipment.site,
    service: `Warranty review - ${equipment.equipment}`,
    equipment: equipment.equipment,
    type: "Maintenance",
    priority: equipment.warranty.includes("expired") ? "High" : "Scheduled",
    value: equipment.warranty.includes("expired") ? 650 : 0,
    notes: `Warranty lookup for ${equipment.id}: ${equipment.warranty}. Validate serial number and document coverage.`
  });
}

function reorderPart(partName) {
  const item = inventoryItems.find((part) => part.item === partName);
  if (!item) {
    return;
  }
  item.stock += Math.max(item.reorder, 5);
  renderInventory();
  addFeedItem(`Parts reorder submitted for ${item.item}.`, "now");
  showToast(`${item.item} reorder submitted to ${item.supplier}.`);
}

function openServiceModal(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  const checklist = request.checklist || defaultChecklist.map((label) => ({ label, done: false }));
  const checklistDone = checklist.filter((item) => item.done).length;

  elements.modalContent.innerHTML = `
    <div class="modal-content">
      <p class="eyebrow">${request.id} | ${request.type}</p>
      <h3 id="modalTitle">${request.customer}</h3>
      <p>${request.notes}</p>
      <div class="modal-grid">
        <div class="modal-cell"><small>Service</small><strong>${request.service}</strong></div>
        <div class="modal-cell"><small>Equipment</small><strong>${request.equipment}</strong></div>
        <div class="modal-cell"><small>Location</small><strong>${request.address}</strong></div>
        <div class="modal-cell"><small>Technician</small><strong>${request.technician}</strong></div>
        <div class="modal-cell"><small>Priority</small><strong>${request.priority}</strong></div>
        <div class="modal-cell"><small>Status</small><strong>${request.status}</strong></div>
        <div class="modal-cell"><small>Invoice</small><strong>${request.invoiceStatus || "Not ready"}</strong></div>
        <div class="modal-cell"><small>Payment</small><strong>${request.paymentStatus || "Unpaid"}</strong></div>
        <div class="modal-cell"><small>Customer Updates</small><strong>${request.customerUpdates || 0}</strong></div>
        <div class="modal-cell"><small>Checklist</small><strong>${checklistDone}/${checklist.length} complete</strong></div>
        <div class="modal-cell"><small>Schedule</small><strong>${formatDate(request.date)} at ${request.time}</strong></div>
        <div class="modal-cell"><small>Estimated revenue</small><strong>${formatCurrency(request.value)}</strong></div>
      </div>
      <div class="checklist" aria-label="Technician job checklist">
        ${checklist.map((item, index) => `
          <label>
            <input type="checkbox" data-checklist="${request.id}" data-check-index="${index}" ${item.done ? "checked" : ""}>
            ${item.label}
          </label>
        `).join("")}
      </div>
      <button class="primary-button" type="button" data-complete="${request.id}">
        <span class="icon">check</span>
        Mark Job Complete
      </button>
      <div class="modal-actions">
        <button class="secondary-button compact" type="button" data-checkin="${request.id}">Check In/Out</button>
        <button class="secondary-button compact" type="button" data-send-customer="${request.id}">Send Customer Update</button>
        <button class="secondary-button compact" type="button" data-payment="${request.id}">Record Payment</button>
        <button class="secondary-button compact" type="button" data-print-workorder="${request.id}">Work Order</button>
        <button class="secondary-button compact" type="button" data-cycle-status="${request.id}">Move Status</button>
        <button class="secondary-button compact" type="button" data-escalate="${request.id}">Escalate</button>
        <button class="secondary-button compact" type="button" data-duplicate="${request.id}">Duplicate</button>
        <button class="secondary-button compact" type="button" data-invoice="${request.id}">Invoice</button>
        <button class="secondary-button compact" type="button" data-edit="${request.id}">
          <span class="icon">edit</span>
          Edit Job
        </button>
        <button class="secondary-button compact danger-action" type="button" data-delete="${request.id}">
          <span class="icon">trash</span>
          Delete
        </button>
      </div>
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
  request.completedAt = new Date().toISOString();
  persistData();
  updateEverything();
  closeModal();
  showToast(`${request.id} marked completed for ${request.customer}.`);
}

function cycleRequestStatus(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  const statuses = ["New", "Dispatched", "On Site", "Waiting Parts", "Completed"];
  const currentIndex = statuses.indexOf(request.status);
  request.status = statuses[(currentIndex + 1) % statuses.length];
  persistData();
  updateEverything();
  openServiceModal(requestId);
  showToast(`${request.id} moved to ${request.status}.`);
}

function deleteRequest(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  appState.requests = appState.requests.filter((item) => item.id !== requestId);
  appState.technicians.forEach((tech) => {
    tech.jobs = tech.jobs.filter((jobId) => jobId !== requestId);
  });
  persistData();
  updateEverything();
  closeModal();
  showToast(`${request.id} deleted from the dispatch board.`);
}

function escalateRequest(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  request.priority = "Emergency";
  request.status = request.status === "Completed" ? "Completed" : "Dispatched";
  persistData();
  updateEverything();
  openServiceModal(requestId);
  showToast(`${request.id} escalated to emergency priority.`);
}

function duplicateRequest(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  const newId = getNextRequestId();
  const duplicate = {
    ...structuredClone(request),
    id: newId,
    status: "New",
    priority: request.priority === "Emergency" ? "High" : request.priority,
    date: new Date().toISOString().slice(0, 10),
    notes: `Follow-up created from ${request.id}. ${request.notes}`
  };
  appState.requests.unshift(duplicate);
  persistData();
  updateEverything();
  closeModal();
  showToast(`${newId} duplicated from ${request.id}.`);
}

function markInvoiceReady(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  request.invoiceStatus = "Ready";
  request.invoiceUpdated = new Date().toISOString();
  persistData();
  updateEverything();
  openServiceModal(requestId);
  showToast(`${request.id} marked ready for invoicing.`);
}

function toggleCheckIn(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  if (request.status === "On Site") {
    request.status = "Dispatched";
    request.checkedOutAt = new Date().toISOString();
    showToast(`${request.id} technician checked out.`);
  } else {
    request.status = "On Site";
    request.checkedInAt = new Date().toISOString();
    showToast(`${request.id} technician checked in on site.`);
  }
  persistData();
  updateEverything();
  openServiceModal(requestId);
}

function sendCustomerUpdate(requestId, label = "Customer update") {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  request.customerUpdates = (request.customerUpdates || 0) + 1;
  request.lastCustomerUpdate = new Date().toISOString();
  persistData();
  updateEverything();
  openServiceModal(requestId);
  showToast(`${label} sent for ${request.id}.`);
}

function recordPayment(requestId, type = "Paid") {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  request.paymentStatus = type;
  request.paymentUpdated = new Date().toISOString();
  request.invoiceStatus = type === "Deposit requested" ? "Deposit pending" : "Paid";
  persistData();
  updateEverything();
  openServiceModal(requestId);
  showToast(`${request.id} payment status: ${type}.`);
}

function toggleChecklistItem(requestId, index, checked) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  request.checklist = request.checklist || defaultChecklist.map((label) => ({ label, done: false }));
  request.checklist[index].done = checked;
  persistData();
  updateEverything();
  openServiceModal(requestId);
}

function openWorkOrder(requestId) {
  const request = appState.requests.find((item) => item.id === requestId);
  if (!request) {
    return;
  }
  const checklist = request.checklist || defaultChecklist.map((label) => ({ label, done: false }));
  elements.modalContent.innerHTML = `
    <div class="modal-content">
      <p class="eyebrow">Printable work order</p>
      <h3 id="modalTitle">${request.id} | ${request.customer}</h3>
      <div class="modal-cell work-order-output">
AirFlex Heating & Cooling Ltd
Phone: +1 416 439 7155

Work Order: ${request.id}
Customer: ${request.customer}
Address: ${request.address}
Service: ${request.service}
Equipment: ${request.equipment}
Technician: ${request.technician}
Priority: ${request.priority}
Status: ${request.status}
Estimated Revenue: ${formatCurrency(request.value)}

Notes:
${request.notes}

Checklist:
${checklist.map((item) => `${item.done ? "[x]" : "[ ]"} ${item.label}`).join("\n")}
      </div>
      <div class="modal-actions">
        <button class="primary-button" type="button" data-copy-workorder="${request.id}">Copy Work Order</button>
        <button class="secondary-button" type="button" data-details="${request.id}">Back to Details</button>
      </div>
    </div>
  `;
  elements.modal.hidden = false;
}

function getAgentContext() {
  return {
    requests: appState.requests,
    technicians: appState.technicians,
    inventory: inventoryItems,
    equipment: equipmentRegistry,
    maintenancePlans
  };
}

function setAgentOutput(title, bodyHtml) {
  elements.agentOutput.innerHTML = `
    <h4>${title}</h4>
    ${bodyHtml}
  `;
}

function renderAgentSummary() {
  const summary = window.AirFlexAgent?.generateDailySummary(getAgentContext()) || "Agent logic is unavailable.";
  setAgentOutput("Daily Operations Summary", `<p>${summary}</p>`);
}

function renderAgentRecommendations() {
  const recommendations = window.AirFlexAgent?.recommendAssignments(getAgentContext()) || [];
  appState.agentRecommendations = recommendations;
  setAgentOutput("Technician Assignment Recommendations", recommendations.length
    ? `<ol>${recommendations.map((item) => `<li><strong>${item.requestId} -> ${item.technician}</strong><br>${item.explanation}</li>`).join("")}</ol>`
    : "<p>No assignment recommendations are needed right now.</p>");
}

function renderEmergencyPriorities() {
  const emergencies = window.AirFlexAgent?.prioritizeEmergencyCalls(getAgentContext()) || [];
  showEmergencyQueue();
  setAgentOutput("Emergency Prioritization", emergencies.length
    ? `<ol>${emergencies.map((item) => `<li><strong>#${item.rank} ${item.requestId} | ${item.customer}</strong><br>${item.recommendation}</li>`).join("")}</ol>`
    : "<p>No active emergency calls are currently open.</p>");
}

function renderAgentRisks() {
  const risks = window.AirFlexAgent?.detectRisks(getAgentContext()) || [];
  setAgentOutput("Operational Risk Detection", `<ul>${risks.map((risk) => `<li><strong>${risk.level}: ${risk.title}</strong><br>${risk.detail}</li>`).join("")}</ul>`);
}

function renderAgentEtaDraft() {
  const requestId = elements.customerRequestSelect.value || appState.filteredRequests[0]?.id;
  const message = window.AirFlexAgent?.draftCustomerEta(getAgentContext(), requestId) || "No ETA draft is available.";
  setAgentOutput("Customer ETA Draft", `<p>${message}</p><button class="primary-button compact" type="button" data-copy-agent-output>Copy Message</button>`);
}

function renderManagerReport() {
  const report = window.AirFlexAgent?.generateManagerReport(getAgentContext());
  if (!report) {
    setAgentOutput("Manager Report", "<p>Agent report is unavailable.</p>");
    return;
  }
  setAgentOutput(report.title, `
    <p>${report.summary}</p>
    <ul>${report.nextActions.map((action) => `<li>${action}</li>`).join("")}</ul>
  `);
}

function applyTopAgentRecommendation() {
  const recommendations = appState.agentRecommendations?.length
    ? appState.agentRecommendations
    : window.AirFlexAgent?.recommendAssignments(getAgentContext()) || [];
  const top = recommendations[0];
  if (!top) {
    showToast("No AI recommendation is available to apply.");
    return;
  }
  const request = appState.requests.find((item) => item.id === top.requestId);
  const technician = appState.technicians.find((item) => item.name === top.technician);
  if (!request || !technician) {
    showToast("Top recommendation could not be applied.");
    return;
  }
  request.technician = technician.name;
  request.status = request.priority === "Emergency" ? "Dispatched" : request.status;
  if (!technician.jobs.includes(request.id)) {
    technician.jobs.push(request.id);
  }
  technician.status = technician.status === "Remote" ? "Dispatched" : technician.status;
  persistData();
  updateEverything();
  renderAgentRecommendations();
  showToast(`AI recommendation applied: ${request.id} assigned to ${technician.name}.`);
}

function getNextRequestId() {
  const maxId = appState.requests.reduce((max, request) => {
    const numeric = Number(request.id.replace(/\D/g, ""));
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 2110);
  return `AF-${maxId + 1}`;
}

function openRequestForm(mode = "create", requestId = null) {
  const request = appState.requests.find((item) => item.id === requestId);
  const isEdit = mode === "edit" && request;
  const technicians = appState.technicians.map((tech) => `<option value="${tech.name}">${tech.name} | ${tech.role}</option>`).join("");
  const values = {
    id: isEdit ? request.id : getNextRequestId(),
    customer: isEdit ? request.customer : "",
    location: isEdit ? request.location : "Scarborough",
    address: isEdit ? request.address : "",
    service: isEdit ? request.service : "Emergency commercial repair",
    equipment: isEdit ? request.equipment : "",
    type: isEdit ? request.type : "Commercial",
    priority: isEdit ? request.priority : "High",
    technician: isEdit ? request.technician : appState.technicians.find((tech) => tech.status === "Available")?.name || appState.technicians[0].name,
    status: isEdit ? request.status : "New",
    date: isEdit ? request.date : new Date().toISOString().slice(0, 10),
    time: isEdit ? request.time : new Date().toTimeString().slice(0, 5),
    value: isEdit ? request.value : 1800,
    notes: isEdit ? request.notes : ""
  };

  elements.modalContent.innerHTML = `
    <form class="modal-content" id="requestForm">
      <p class="eyebrow">${isEdit ? "Edit service call" : "New service call"}</p>
      <h3 id="modalTitle">${values.id}</h3>
      <div class="form-grid">
        <div class="form-field">
          <label for="formCustomer">Customer</label>
          <input id="formCustomer" name="customer" value="${values.customer}" required>
        </div>
        <div class="form-field">
          <label for="formLocation">City / Area</label>
          <input id="formLocation" name="location" value="${values.location}" required>
        </div>
        <div class="form-field full">
          <label for="formAddress">Address</label>
          <input id="formAddress" name="address" value="${values.address}" required>
        </div>
        <div class="form-field">
          <label for="formService">Service Type</label>
          <input id="formService" name="service" value="${values.service}" required>
        </div>
        <div class="form-field">
          <label for="formEquipment">Equipment</label>
          <input id="formEquipment" name="equipment" value="${values.equipment}" required>
        </div>
        <div class="form-field">
          <label for="formType">Category</label>
          <select id="formType" name="type">
            <option ${values.type === "Commercial" ? "selected" : ""}>Commercial</option>
            <option ${values.type === "Residential" ? "selected" : ""}>Residential</option>
            <option ${values.type === "Maintenance" ? "selected" : ""}>Maintenance</option>
          </select>
        </div>
        <div class="form-field">
          <label for="formPriority">Priority</label>
          <select id="formPriority" name="priority">
            <option ${values.priority === "Emergency" ? "selected" : ""}>Emergency</option>
            <option ${values.priority === "High" ? "selected" : ""}>High</option>
            <option ${values.priority === "Medium" ? "selected" : ""}>Medium</option>
            <option ${values.priority === "Scheduled" ? "selected" : ""}>Scheduled</option>
          </select>
        </div>
        <div class="form-field">
          <label for="formTechnician">Technician</label>
          <select id="formTechnician" name="technician">${technicians}</select>
        </div>
        <div class="form-field">
          <label for="formStatus">Status</label>
          <select id="formStatus" name="status">
            <option ${values.status === "New" ? "selected" : ""}>New</option>
            <option ${values.status === "Dispatched" ? "selected" : ""}>Dispatched</option>
            <option ${values.status === "On Site" ? "selected" : ""}>On Site</option>
            <option ${values.status === "Waiting Parts" ? "selected" : ""}>Waiting Parts</option>
            <option ${values.status === "Completed" ? "selected" : ""}>Completed</option>
          </select>
        </div>
        <div class="form-field">
          <label for="formDate">Date</label>
          <input id="formDate" name="date" type="date" value="${values.date}" required>
        </div>
        <div class="form-field">
          <label for="formTime">Time</label>
          <input id="formTime" name="time" type="time" value="${values.time}" required>
        </div>
        <div class="form-field">
          <label for="formValue">Estimated Revenue</label>
          <input id="formValue" name="value" type="number" min="0" step="50" value="${values.value}" required>
        </div>
        <div class="form-field full">
          <label for="formNotes">Dispatch Notes</label>
          <textarea id="formNotes" name="notes" required>${values.notes}</textarea>
        </div>
      </div>
      <div class="modal-actions">
        <button class="primary-button" type="submit">
          <span class="icon">check</span>
          ${isEdit ? "Save Changes" : "Create Service Call"}
        </button>
        <button class="secondary-button" type="button" data-cancel-form>Cancel</button>
      </div>
    </form>
  `;
  elements.modal.querySelector("#formTechnician").value = values.technician;
  elements.modal.dataset.formMode = mode;
  elements.modal.dataset.formId = values.id;
  replaceIconText();
  elements.modal.hidden = false;
  elements.modal.querySelector("#formCustomer").focus();
}

function submitRequestForm(form) {
  const data = new FormData(form);
  const requestId = elements.modal.dataset.formId;
  const existing = appState.requests.find((request) => request.id === requestId);
  const requestData = {
    id: requestId,
    customer: data.get("customer").trim(),
    location: data.get("location").trim(),
    address: data.get("address").trim(),
    service: data.get("service").trim(),
    equipment: data.get("equipment").trim(),
    type: data.get("type"),
    priority: data.get("priority"),
    technician: data.get("technician"),
    status: data.get("status"),
    date: data.get("date"),
    time: data.get("time"),
    value: Number(data.get("value")),
    notes: data.get("notes").trim()
  };

  if (existing) {
    Object.assign(existing, requestData);
  } else {
    appState.requests.unshift(requestData);
  }

  appState.technicians.forEach((tech) => {
    tech.jobs = tech.jobs.filter((jobId) => jobId !== requestId);
    if (tech.name === requestData.technician && requestData.status !== "Completed") {
      tech.jobs.push(requestId);
      tech.status = requestData.status === "On Site" ? "On Site" : "Dispatched";
    }
  });

  persistData();
  updateEverything();
  closeModal();
  showToast(`${requestId} ${existing ? "updated" : "created"} for ${requestData.customer}.`);
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

function exportCsvReport() {
  showLoader("Building AirFlex operations report...");
  const columns = ["id", "customer", "location", "service", "equipment", "type", "priority", "technician", "status", "date", "time", "value", "notes"];
  const rows = appState.filteredRequests.length ? appState.filteredRequests : appState.requests;
  const csv = [
    columns.join(","),
    ...rows.map((request) => columns.map((key) => {
      const value = String(request[key] ?? "").replace(/"/g, '""');
      return `"${value}"`;
    }).join(","))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `airflex-operations-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  window.setTimeout(() => showToast(`CSV exported with ${rows.length} service records.`), 620);
}

function weatherCodeSummary(code) {
  const summaries = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Cloudy",
    45: "Fog",
    48: "Rime fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Strong showers",
    82: "Violent showers",
    95: "Thunderstorm"
  };
  return summaries[code] || "Field conditions available";
}

function renderWeather() {
  if (!appState.weather) {
    elements.weatherTemp.textContent = "--";
    elements.weatherSummary.textContent = "Waiting for live conditions";
    elements.weatherHumidity.textContent = "--";
    elements.weatherWind.textContent = "--";
    elements.weatherUpdated.textContent = "--";
    return;
  }

  elements.weatherTemp.textContent = `${Math.round(appState.weather.temperature)}°C`;
  elements.weatherSummary.textContent = appState.weather.summary;
  elements.weatherHumidity.textContent = `${Math.round(appState.weather.humidity)}%`;
  elements.weatherWind.textContent = `${Math.round(appState.weather.wind)} km/h`;
  elements.weatherUpdated.textContent = appState.weather.updated;
}

async function fetchLiveWeather(showNotice = false) {
  const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=43.7615&longitude=-79.226&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=America%2FToronto";
  if (!appState.weather) {
    appState.weather = {
      temperature: 22,
      humidity: 48,
      wind: 14,
      summary: "Loading live conditions",
      updated: "now"
    };
    renderWeather();
  }
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);
    const response = await fetch(endpoint, { signal: controller.signal });
    window.clearTimeout(timeout);
    if (!response.ok) {
      throw new Error("Weather service unavailable");
    }
    const data = await response.json();
    appState.weather = {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      wind: data.current.wind_speed_10m,
      summary: weatherCodeSummary(data.current.weather_code),
      updated: new Intl.DateTimeFormat("en-CA", { hour: "numeric", minute: "2-digit" }).format(new Date(data.current.time))
    };
    persistWeather();
    renderWeather();
    if (showNotice) {
      showToast("Live field weather updated from Open-Meteo.");
    }
  } catch {
    if (!appState.weather) {
      appState.weather = {
        temperature: 22,
        humidity: 48,
        wind: 14,
        summary: "Offline fallback conditions",
        updated: "cached"
      };
    }
    renderWeather();
    if (showNotice) {
      showToast("Live weather unavailable, showing cached fallback data.");
    }
  }
}

function refreshOperationalData() {
  appState.technicians = appState.technicians.map((tech, index) => ({
    ...tech,
    x: Math.min(88, Math.max(18, tech.x + (Math.random() - 0.5) * 3)),
    y: Math.min(78, Math.max(16, tech.y + (Math.random() - 0.5) * 3)),
    capacity: Math.min(99, Math.max(35, tech.capacity + Math.round((Math.random() - 0.45) * 4)))
  }));

  const activeRequests = appState.requests.filter((request) => request.status !== "Completed");
  if (activeRequests.length) {
    const request = activeRequests[Math.floor(Math.random() * activeRequests.length)];
    const messages = [
      `${request.id} pinged from ${request.location}.`,
      `${request.technician} updated ${request.customer}.`,
      `${request.customer} ETA refreshed by dispatch.`,
      `${request.id} equipment notes synced.`
    ];
    addFeedItem(messages[Math.floor(Math.random() * messages.length)], "live");
  }

  chartData.serviceCalls[chartData.serviceCalls.length - 1] = appState.requests.length + 145;
  chartData.revenue[chartData.revenue.length - 1] = Math.round(appState.requests.reduce((sum, request) => sum + request.value, 0) / 1000);
  chartData.jobMix[0] = appState.requests.filter((request) => request.priority === "Emergency").length;
  chartData.jobMix[1] = Math.max(1, appState.requests.length - chartData.jobMix[0]);

  persistData();
  updateStats();
  renderGpsMap();
  renderTeamList();
  renderCharts();
}

function showEmergencyQueue() {
  elements.searchInput.value = "";
  elements.statusFilter.value = "all";
  elements.priorityFilter.value = "Emergency";
  elements.typeFilter.value = "all";
  elements.technicianFilter.value = "all";
  applyFilters(true);
  showToast("Emergency queue filtered.");
}

function showUnassignedQueue() {
  elements.searchInput.value = "";
  elements.statusFilter.value = "New";
  elements.priorityFilter.value = "all";
  elements.typeFilter.value = "all";
  elements.technicianFilter.value = "all";
  applyFilters(true);
  showToast("Showing new calls waiting for dispatch assignment.");
}

function optimizeRoutes() {
  appState.technicians = appState.technicians.map((tech, index) => ({
    ...tech,
    capacity: Math.min(96, Math.max(48, tech.capacity - 6 + index)),
    x: Math.min(88, Math.max(18, tech.x + (index % 2 === 0 ? 4 : -4))),
    y: Math.min(78, Math.max(16, tech.y + (index % 2 === 0 ? -3 : 3)))
  }));
  persistData();
  updateEverything();
  showToast("Routes optimized using simulated GTA field positions.");
}

function archiveCompletedJobs() {
  const before = appState.requests.length;
  appState.requests = appState.requests.filter((request) => request.status !== "Completed");
  const removed = before - appState.requests.length;
  appState.technicians.forEach((tech) => {
    tech.jobs = tech.jobs.filter((jobId) => appState.requests.some((request) => request.id === jobId));
  });
  persistData();
  updateEverything();
  showToast(`${removed} completed jobs archived from active operations.`);
}

function updateEverything() {
  const selectedTechnician = elements.technicianFilter.value || "all";
  updateStats();
  renderTechnicianFilter();
  elements.technicianFilter.value = [...elements.technicianFilter.options].some((option) => option.value === selectedTechnician) ? selectedTechnician : "all";
  applyFilters(false);
  renderGpsMap();
  renderScheduleBoard();
  renderTeamList();
  renderMaintenance();
  renderInventory();
  renderFinance();
  renderCustomerSelector();
  renderAppointments();
  renderWarrantyLookup();
  renderServiceCatalog();
  renderPlans();
  renderEquipmentRegistry();
  renderCharts();
  renderWeather();
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
  [elements.searchInput, elements.statusFilter, elements.priorityFilter, elements.typeFilter, elements.technicianFilter, elements.sortFilter].forEach((control) => {
    control.addEventListener("input", () => applyFilters(true));
    control.addEventListener("change", () => {
      appState.sortKey = elements.sortFilter.value;
      applyFilters(true);
    });
  });

  elements.clearFilters.addEventListener("click", () => {
    elements.searchInput.value = "";
    elements.statusFilter.value = "all";
    elements.priorityFilter.value = "all";
    elements.typeFilter.value = "all";
    elements.technicianFilter.value = "all";
    applyFilters(true);
    showToast("Filters cleared.");
  });

  elements.resetData.addEventListener("click", () => {
    appState.requests = structuredClone(defaultRequests);
    appState.technicians = structuredClone(defaultTechnicians);
    persistData();
    updateEverything();
    renderCharts();
    showToast("Dashboard data reset to the AirFlex sample baseline.");
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
    const cycleButton = event.target.closest("[data-cycle-status]");
    if (cycleButton) {
      cycleRequestStatus(cycleButton.dataset.cycleStatus);
    }
    const editButton = event.target.closest("[data-edit]");
    if (editButton) {
      openRequestForm("edit", editButton.dataset.edit);
    }
    const deleteButton = event.target.closest("[data-delete]");
    if (deleteButton) {
      deleteRequest(deleteButton.dataset.delete);
    }
    const escalateButton = event.target.closest("[data-escalate]");
    if (escalateButton) {
      escalateRequest(escalateButton.dataset.escalate);
    }
    const duplicateButton = event.target.closest("[data-duplicate]");
    if (duplicateButton) {
      duplicateRequest(duplicateButton.dataset.duplicate);
    }
    const invoiceButton = event.target.closest("[data-invoice]");
    if (invoiceButton) {
      markInvoiceReady(invoiceButton.dataset.invoice);
    }
    const checkinButton = event.target.closest("[data-checkin]");
    if (checkinButton) {
      toggleCheckIn(checkinButton.dataset.checkin);
    }
    const customerButton = event.target.closest("[data-send-customer]");
    if (customerButton) {
      sendCustomerUpdate(customerButton.dataset.sendCustomer);
    }
    const paymentButton = event.target.closest("[data-payment]");
    if (paymentButton) {
      recordPayment(paymentButton.dataset.payment);
    }
    const workOrderButton = event.target.closest("[data-print-workorder]");
    if (workOrderButton) {
      openWorkOrder(workOrderButton.dataset.printWorkorder);
    }
    const copyButton = event.target.closest("[data-copy-workorder]");
    if (copyButton) {
      const text = elements.modalContent.querySelector(".work-order-output")?.textContent.trim() || "";
      navigator.clipboard?.writeText(text);
      showToast(`Work order ${copyButton.dataset.copyWorkorder} copied.`);
    }
    if (event.target.closest("[data-cancel-form]")) {
      closeModal();
    }
  });

  elements.modal.addEventListener("change", (event) => {
    const checklistItem = event.target.closest("[data-checklist]");
    if (checklistItem) {
      toggleChecklistItem(checklistItem.dataset.checklist, Number(checklistItem.dataset.checkIndex), checklistItem.checked);
    }
  });

  elements.modal.addEventListener("submit", (event) => {
    if (event.target.id === "requestForm") {
      event.preventDefault();
      submitRequestForm(event.target);
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
    exportCsvReport();
  });

  elements.pauseFeed.addEventListener("click", () => {
    appState.feedPaused = !appState.feedPaused;
    elements.pauseFeed.textContent = appState.feedPaused ? "Resume" : "Pause";
  });

  elements.refreshWeather.addEventListener("click", () => {
    fetchLiveWeather(true);
  });

  elements.showEmergencies.addEventListener("click", showEmergencyQueue);
  elements.showUnassigned.addEventListener("click", showUnassignedQueue);
  elements.optimizeRoutes.addEventListener("click", optimizeRoutes);
  elements.closeCompleted.addEventListener("click", archiveCompletedJobs);

  elements.serviceGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-book-service]");
    if (button) {
      prefillServiceForm(button.dataset.bookService);
    }
  });

  [elements.quoteService, elements.quoteProperty, elements.quoteUrgency, elements.quoteDistance].forEach((control) => {
    control.addEventListener("input", calculateQuote);
    control.addEventListener("change", calculateQuote);
  });

  elements.createQuoteRequest.addEventListener("click", createQuoteRequest);

  elements.planGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-plan]");
    if (button) {
      createPlanVisit(button.dataset.plan);
    }
  });

  elements.equipmentList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-equipment]");
    if (button) {
      createEquipmentService(button.dataset.equipment);
    }
  });

  elements.inventoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-reorder]");
    if (button) {
      reorderPart(button.dataset.reorder);
    }
  });

  elements.appointmentList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-appointment]");
    if (button) {
      openServiceModal(button.dataset.appointment);
    }
  });

  elements.warrantyList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-warranty]");
    if (button) {
      createWarrantyVisit(button.dataset.warranty);
    }
  });

  elements.sendEta.addEventListener("click", () => {
    if (elements.customerRequestSelect.value) {
      sendCustomerUpdate(elements.customerRequestSelect.value, "ETA message");
    }
  });

  elements.sendReminder.addEventListener("click", () => {
    if (elements.customerRequestSelect.value) {
      sendCustomerUpdate(elements.customerRequestSelect.value, "Appointment reminder");
    }
  });

  elements.collectDeposit.addEventListener("click", () => {
    if (elements.customerRequestSelect.value) {
      recordPayment(elements.customerRequestSelect.value, "Deposit requested");
    }
  });

  elements.agentDailySummary.addEventListener("click", renderAgentSummary);
  elements.agentRecommend.addEventListener("click", renderAgentRecommendations);
  elements.agentPrioritize.addEventListener("click", renderEmergencyPriorities);
  elements.agentDraftEta.addEventListener("click", renderAgentEtaDraft);
  elements.agentRisks.addEventListener("click", renderAgentRisks);
  elements.agentManagerReport.addEventListener("click", renderManagerReport);
  elements.agentApplyTop.addEventListener("click", applyTopAgentRecommendation);

  elements.agentOutput.addEventListener("click", (event) => {
    if (event.target.closest("[data-copy-agent-output]")) {
      const text = elements.agentOutput.textContent.trim();
      navigator.clipboard?.writeText(text);
      showToast("Agent output copied.");
    }
  });

  [elements.fabButton, elements.newCallButton].forEach((button) => {
    button.addEventListener("click", () => {
      openRequestForm("create");
    });
  });

  elements.bookEmergency.addEventListener("click", () => {
    prefillServiceForm("emergency-repair");
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
  renderQuoteOptions();
  updateEverything();
  renderAgentSummary();
  renderFeed();
  fetchLiveWeather();
  window.setInterval(() => fetchLiveWeather(false), 15 * 60 * 1000);
  window.setInterval(refreshOperationalData, 12000);
  startLiveFeed();
  window.setTimeout(() => showToast("AirFlex dispatch platform is online."), 700);
}

init();
