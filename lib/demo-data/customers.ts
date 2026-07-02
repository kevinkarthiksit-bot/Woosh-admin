export interface DemoCustomer {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  vehicle: string;
  plate: string;
  subscription: string;
  subscriptionDetail: string;
  nextService: string;
  status: string;
}

export const customerKpis = [
  { label: "Total Customers", value: "1,256", trend: "+12.4% vs last month", trendUp: true },
  { label: "Active Customers", value: "1,088", subtext: "86.6% of total" },
  { label: "Inactive Customers", value: "168", subtext: "13.4% of total" },
  { label: "New This Month", value: "125", trend: "+15.3% vs last month", trendUp: true },
  { label: "Renewals Due (30 Days)", value: "98", subtext: "action required" },
];

export const demoCustomers: DemoCustomer[] = [
  {
    id: "cust_001",
    name: "Rahul Kumar",
    phone: "+91 98765 43210",
    email: "rahul.kumar@email.com",
    address: "Prestige Residency, Belgaum",
    vehicle: "Honda City",
    plate: "KA-05-MN-1234",
    subscription: "Premium Car Wash",
    subscriptionDetail: "Monthly · 20 Washes",
    nextService: "20 May 2024, 10:00 AM",
    status: "Active",
  },
  {
    id: "cust_002",
    name: "Priya Sharma",
    phone: "+91 91234 56780",
    email: "priya.s@email.com",
    address: "Skyline Apartments, Belgaum",
    vehicle: "Maruti Swift",
    plate: "KA-08-AB-5678",
    subscription: "Basic Car Wash",
    subscriptionDetail: "Monthly · 8 Washes",
    nextService: "22 May 2024, 11:00 AM",
    status: "Active",
  },
  {
    id: "cust_003",
    name: "Arjun Patel",
    phone: "+91 99887 76655",
    email: "arjun.p@email.com",
    address: "Green Valley, Belgaum",
    vehicle: "Hyundai Creta",
    plate: "KA-22-CD-9012",
    subscription: "Deluxe Wash",
    subscriptionDetail: "Quarterly · 12 Washes",
    nextService: "25 May 2024, 09:00 AM",
    status: "Inactive",
  },
];
