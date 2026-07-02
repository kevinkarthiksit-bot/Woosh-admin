export const liveOpsKpis = [
  { label: "Total Active Jobs", value: "86", subtext: "View all" },
  { label: "In Progress", value: "62", subtext: "72.1%" },
  { label: "Arrived", value: "14", subtext: "16.3%" },
  { label: "Traveling", value: "10", subtext: "11.6%" },
  { label: "Delayed", value: "3", subtext: "3.5%" },
  { label: "Completed Today", value: "128", subtext: "View report" },
];

export const activeJobs = [
  {
    orderId: "#ORD1246",
    customer: "Rahul Kumar",
    service: "Premium Car Wash",
    assignedTo: "Amit Singh",
    status: "In Progress",
    eta: "10:45 AM",
  },
  {
    orderId: "#ORD1245",
    customer: "Priya Sharma",
    service: "Basic Car Wash",
    assignedTo: "Suresh M.",
    status: "Arrived",
    eta: "11:00 AM",
  },
];

export const woosherTracking = [
  { name: "Amit Singh", status: "In Progress", location: "Prestige Residency", pct: 85 },
  { name: "Suresh M.", status: "Arrived", location: "Skyline Apartments", pct: 92 },
  { name: "Rahul Kumar", status: "Traveling", location: "En route", pct: 78 },
];

export const liveAlerts = [
  { text: "Order #ORD1243 delayed", time: "5 mins ago", type: "warning" },
  { text: "Low stock: Tyre Shine", time: "20 mins ago", type: "info" },
  { text: "Woosher On Leave: Meera", time: "1 hour ago", type: "info" },
];
