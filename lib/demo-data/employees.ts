export interface DemoEmployee {
  employeeId: string;
  name: string;
  role: string;
  phone: string;
  location: string;
  status: string;
  performanceScore: number;
  jobsCompleted: string;
}

export const employeeKpis = [
  { label: "Total Employees", value: "48", subtext: "All locations" },
  { label: "Active Employees", value: "42", subtext: "87.5% of total" },
  { label: "On Duty", value: "28", subtext: "Currently working" },
  { label: "On Leave", value: "3", subtext: "Approved leaves" },
  { label: "Inactive / Resigned", value: "3", subtext: "This month" },
  { label: "Avg. Performance Score", value: "4.6 / 5", subtext: "This month" },
];

export const demoEmployees: DemoEmployee[] = [
  {
    employeeId: "WOOSH1024",
    name: "Rahul Kumar",
    role: "Car Washer",
    phone: "+91 98765 43210",
    location: "Belgaum",
    status: "On Duty",
    performanceScore: 4.8,
    jobsCompleted: "156 This Week",
  },
  {
    employeeId: "WOOSH1025",
    name: "Amit Singh",
    role: "Car Washer",
    phone: "+91 91234 56780",
    location: "Belgaum",
    status: "On Duty",
    performanceScore: 4.6,
    jobsCompleted: "142 This Week",
  },
  {
    employeeId: "WOOSH1026",
    name: "Suresh M.",
    role: "Bike Washer",
    phone: "+91 99887 76655",
    location: "Belgaum",
    status: "On Leave",
    performanceScore: 4.5,
    jobsCompleted: "98 This Week",
  },
];
