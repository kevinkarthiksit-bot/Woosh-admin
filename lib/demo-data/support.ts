export interface DemoComplaint {
  id: string;
  customer: string;
  phone: string;
  category: string;
  relatedTo: string;
  priority: string;
  status: string;
  assignedTo: string;
  createdOn: string;
}

export const supportKpis = [
  { label: "Total Complaints", value: "128", trend: "+12.5% vs last week", trendUp: true },
  { label: "Open Complaints", value: "36", subtext: "28.1% of total" },
  { label: "In Progress", value: "28", subtext: "21.9% of total" },
  { label: "Resolved", value: "60", subtext: "46.9% of total" },
  { label: "Escalated", value: "4", subtext: "3.1% of total" },
  { label: "Avg. Resolution Time", value: "18h 45m", trend: "-8% vs last week", trendUp: false },
  { label: "Satisfaction Score", value: "4.6 / 5", trend: "+0.3 vs last week", trendUp: true },
];

export const demoComplaints: DemoComplaint[] = [
  {
    id: "#CMP-1248",
    customer: "Rahul Sharma",
    phone: "+91 98765 43210",
    category: "Service Quality",
    relatedTo: "Premium Car Wash Order #ORD1246",
    priority: "High",
    status: "Open",
    assignedTo: "Support Team A",
    createdOn: "18 May 2024, 09:30 AM",
  },
  {
    id: "#CMP-1247",
    customer: "Priya Sharma",
    phone: "+91 91234 56780",
    category: "Staff Behavior",
    relatedTo: "Basic Car Wash Order #ORD1245",
    priority: "Medium",
    status: "In Progress",
    assignedTo: "Support Team B",
    createdOn: "17 May 2024, 02:15 PM",
  },
];
