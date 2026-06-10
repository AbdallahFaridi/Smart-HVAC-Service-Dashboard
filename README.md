# AirFlex Operations Dashboard

A premium Smart HVAC operations platform branded for AirFlex Heating & Cooling Ltd. The dashboard simulates a real internal management system for dispatchers, technicians, and management teams serving Toronto, Scarborough, Durham, and the wider GTA.

Developed by Abdallah Faridi.

## Company Context

- Company: AirFlex Heating & Cooling Ltd
- Website: https://www.airflexltd.com/
- Phone: +1 416 439 7155
- Owner: Lindon
- Service focus: commercial HVAC, residential HVAC, rooftop units, furnaces, boilers, heat pumps, AC, water heaters, ventilation, duct work, and emergency repairs

## Features

- Premium SaaS-style responsive dashboard UI
- AirFlex branded logo concept and custom operations copy
- HVAC service-site experience with bookable service catalog cards
- Quick quote calculator for service, property type, urgency, and distance
- Maintenance plan cards that create scheduled service visits
- Equipment registry with schedule-service actions
- Live operations overview with animated counters
- Real-time clock, system online indicator, and fake live notifications
- Searchable and filterable service request cards
- Technician filtering, sorting, emergency queue, and new-call queue shortcuts
- Expandable service details modal with job completion action
- Edit, duplicate, delete, escalate, invoice-ready, and status progression actions
- Drag-and-drop technician dispatch board
- Route optimization simulation
- Technician GPS simulation for GTA field coverage
- Inventory alerts and billing snapshot panels
- Customer communication tools for ETA, reminders, and deposit requests
- Appointment board with open-job actions
- Warranty lookup that creates warranty service visits
- Technician checklist, check-in/out, payment recording, and printable work orders
- Parts reorder actions from inventory alerts
- AI Operations Agent panel with daily summary, assignment recommendations, emergency prioritization, ETA drafting, risk detection, manager reports, and apply-top-recommendation action
- Separate `agent-logic.js` rule engine structured for future LLM/API integration
- Maintenance tracker with animated progress bars
- Chart.js analytics for service calls, revenue, job mix, and maintenance rate
- Floating notification toasts and loading transitions
- Dark mode with localStorage persistence
- Collapsible sidebar with saved preference
- Mobile slide-out menu and bottom navigation
- Keyboard shortcuts: `Ctrl/Cmd + K` for search and `Ctrl/Cmd + D` for dark mode

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js CDN
- localStorage
- Node-based lightweight agent logic tests

## AI Agent Workflow

The `agent-logic.js` file contains pure rule-based functions for:

- Dashboard metric calculation
- Technician recommendation scoring
- Emergency prioritization
- Operational risk detection
- Daily operations summaries
- Customer ETA message drafting
- Manager report generation

This keeps the agent workflow separate from DOM rendering and makes it easier to connect to an LLM or backend API later.

## Testing

Run the lightweight agent logic test with:

```bash
node tests/agent-logic.test.mjs
```

## Project Structure

```text
smart-hvac-service-dashboard-project-build/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
```

## Screenshots

Add screenshots after opening the project in a browser:

```text
Desktop operations overview
Service request details modal
Mobile app layout
Dark mode analytics
```

## How To Run

Open `index.html` directly in a browser. For the best Chart.js CDN behavior, you can also serve the folder with any static server.

## Future Improvements

- Add real authentication and user roles
- Connect service requests to a backend API
- Add technician calendar views
- Generate real CSV/PDF exports
- Integrate map routing and push notifications
- Add offline support for field technicians
