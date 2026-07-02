import type {
  AdminCoupon,
  AdminEmployee,
  AdminInventoryItem,
  AdminOrder,
  AdminService,
  AdminSlotTime,
  DashboardMetrics,
} from "@/lib/api/types";
import type {
  AdminAuthApi,
  AdminCouponsApi,
  AdminDashboardApi,
  AdminEmployeesApi,
  AdminInventoryApi,
  AdminOrdersApi,
  AdminServicesApi,
  AdminSlotsApi,
} from "@/lib/api/contracts";

export const stubOrders: AdminOrder[] = [
  {
    id: "ord_001",
    orderNumber: "WOOSH-1042",
    status: "Scheduled",
    customerName: "Ranga",
    customerPhone: "9876543210",
    serviceName: "Premium Car Wash",
    scheduledFor: "2026-07-03 · 10:00 AM - 11:00 AM",
    totalAmount: 499,
  },
  {
    id: "ord_002",
    orderNumber: "WOOSH-1041",
    status: "In Progress",
    customerName: "Priya",
    customerPhone: "9123456780",
    serviceName: "Bike Wash",
    scheduledFor: "2026-07-03 · 11:00 AM - 12:00 PM",
    totalAmount: 199,
  },
  {
    id: "ord_003",
    orderNumber: "WOOSH-1040",
    status: "Pending",
    customerName: "Arjun",
    customerPhone: "9988776655",
    serviceName: "Monthly Package",
    scheduledFor: "2026-07-04 · 09:00 AM - 10:00 AM",
    totalAmount: 1199,
  },
];

export const stubServices: AdminService[] = [
  {
    id: "svc_001",
    name: "Premium Car Wash",
    category: "CarWash",
    basePrice: 499,
    duration: 60,
    isActive: true,
  },
  {
    id: "svc_002",
    name: "Bike Wash",
    category: "BikeWash",
    basePrice: 199,
    duration: 30,
    isActive: true,
  },
];

export const stubEmployees: AdminEmployee[] = [
  { employeeId: "WOOSHER01", name: "Karthik", phone: "9000000001", isActive: true },
  { employeeId: "WOOSHER02", name: "Meera", phone: "9000000002", isActive: true },
];

export const stubInventory: AdminInventoryItem[] = [
  {
    id: "inv_001",
    name: "Foam Shampoo",
    category: "Chemicals",
    currentStock: 12,
    unit: "L",
    lowStockThreshold: 20,
  },
  {
    id: "inv_002",
    name: "Microfiber Cloths",
    category: "Supplies",
    currentStock: 45,
    unit: "pcs",
    lowStockThreshold: 30,
  },
];

export const stubCoupons: AdminCoupon[] = [
  {
    id: "cpn_001",
    code: "SAVE50",
    discountType: "FLAT",
    discountValue: 50,
    isActive: true,
    expiryDate: "2026-12-31",
  },
];

export const stubSlots: AdminSlotTime[] = [
  {
    id: "slot_001",
    time: "10:00 AM - 11:00 AM",
    startTime: "10:00",
    endTime: "11:00",
    order: 1,
  },
  {
    id: "slot_002",
    time: "11:00 AM - 12:00 PM",
    startTime: "11:00",
    endTime: "12:00",
    order: 2,
  },
];

export const stubDashboardMetrics: DashboardMetrics = {
  ordersToday: 18,
  pendingOrders: 6,
  revenueEstimate: 12450,
  activeEmployees: 8,
  lowStockCount: 2,
};

export const stubOrdersApi: AdminOrdersApi = {
  async listAll() {
    return stubOrders;
  },
  async getById(id) {
    const order = stubOrders.find((item) => item.id === id);
    if (!order) throw new Error("Order not found");
    return order;
  },
};

export const stubServicesApi: AdminServicesApi = {
  async list() {
    return stubServices;
  },
};

export const stubEmployeesApi: AdminEmployeesApi = {
  async list() {
    return stubEmployees;
  },
};

export const stubInventoryApi: AdminInventoryApi = {
  async list() {
    return stubInventory;
  },
};

export const stubCouponsApi: AdminCouponsApi = {
  async list() {
    return stubCoupons;
  },
};

export const stubSlotsApi: AdminSlotsApi = {
  async listTimes() {
    return stubSlots;
  },
};

export const stubDashboardApi: AdminDashboardApi = {
  async getMetrics() {
    return stubDashboardMetrics;
  },
};

export const stubAuthApi: AdminAuthApi = {
  async login(employeeId, password) {
    if (!employeeId || !password) throw new Error("Employee ID and password are required");
    return { token: `demo-token-${employeeId}`, name: "Demo Admin" };
  },
};
