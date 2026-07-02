export interface DemoOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  serviceName: string;
  serviceDetail: string;
  vehicle: string;
  plate: string;
  assignedTo: string;
  dateTime: string;
  status: string;
  amount: number;
}

export const orderKpis = [
  { label: "Total Orders", value: "1,246", trend: "15.3% vs previous week", trendUp: true },
  { label: "Pending", value: "128", trend: "8.6%", trendUp: true },
  { label: "In Progress", value: "86", trend: "12.5%", trendUp: true },
  { label: "Completed", value: "1,032", trend: "16.8%", trendUp: true },
  { label: "Cancelled", value: "32", trend: "5.2%", trendUp: false },
];

export const demoOrders: DemoOrder[] = [
  {
    id: "ord_1246",
    orderNumber: "#ORD1246",
    customerName: "Rahul Kumar",
    customerPhone: "+91 98765 43210",
    serviceName: "Premium Car Wash",
    serviceDetail: "Exterior + Interior",
    vehicle: "Honda City",
    plate: "KA-05-MN-1234",
    assignedTo: "Amit Singh",
    dateTime: "18 May 2024, 10:00 AM",
    status: "In Progress",
    amount: 499,
  },
  {
    id: "ord_1245",
    orderNumber: "#ORD1245",
    customerName: "Priya Sharma",
    customerPhone: "+91 91234 56780",
    serviceName: "Basic Car Wash",
    serviceDetail: "Exterior only",
    vehicle: "Maruti Swift",
    plate: "KA-08-AB-5678",
    assignedTo: "Suresh M.",
    dateTime: "18 May 2024, 11:00 AM",
    status: "Pending",
    amount: 299,
  },
  {
    id: "ord_1244",
    orderNumber: "#ORD1244",
    customerName: "Arjun Patel",
    customerPhone: "+91 99887 76655",
    serviceName: "Deluxe Wash",
    serviceDetail: "Full detail",
    vehicle: "Hyundai Creta",
    plate: "KA-22-CD-9012",
    assignedTo: "Rahul Kumar",
    dateTime: "17 May 2024, 09:00 AM",
    status: "Completed",
    amount: 799,
  },
];

export const orderTimeline = [
  { step: "Order Placed", done: true, time: "10:00 AM" },
  { step: "Assigned to Amit Singh", done: true, time: "10:05 AM" },
  { step: "Woosher Started Journey", done: true, time: "10:15 AM" },
  { step: "Woosher Reached Location", done: true, time: "10:35 AM" },
  { step: "Service Started", done: true, time: "10:40 AM" },
  { step: "Service In Progress", done: false, current: true },
  { step: "OTP Verification Pending", done: false },
];
