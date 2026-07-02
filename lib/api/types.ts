export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  count?: number;
  token?: string;
}

export interface AdminOrder {
  id: string;
  orderNumber: string;
  status: string;
  customerName: string;
  customerPhone: string;
  serviceName: string;
  scheduledFor: string;
  totalAmount: number;
}

export interface AdminService {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  duration: number;
  isActive: boolean;
}

export interface AdminEmployee {
  employeeId: string;
  name: string;
  phone: string;
  isActive: boolean;
}

export interface AdminInventoryItem {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  unit: string;
  lowStockThreshold: number;
}

export interface AdminCoupon {
  id: string;
  code: string;
  discountType: "FLAT" | "PERCENT";
  discountValue: number;
  isActive: boolean;
  expiryDate: string;
}

export interface AdminSlotTime {
  id: string;
  time: string;
  startTime: string;
  endTime: string;
  order: number;
}

export interface DashboardMetrics {
  ordersToday: number;
  pendingOrders: number;
  revenueEstimate: number;
  activeEmployees: number;
  lowStockCount: number;
}
