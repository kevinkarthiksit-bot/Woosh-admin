import type {
  AdminCoupon,
  AdminEmployee,
  AdminInventoryItem,
  AdminOrder,
  AdminService,
  AdminSlotTime,
  DashboardMetrics,
} from "@/lib/api/types";

export interface AdminOrdersApi {
  listAll(filters?: { status?: string[] }): Promise<AdminOrder[]>;
  getById(id: string): Promise<AdminOrder>;
}

export interface AdminServicesApi {
  list(): Promise<AdminService[]>;
}

export interface AdminEmployeesApi {
  list(): Promise<AdminEmployee[]>;
}

export interface AdminInventoryApi {
  list(): Promise<AdminInventoryItem[]>;
}

export interface AdminCouponsApi {
  list(): Promise<AdminCoupon[]>;
}

export interface AdminSlotsApi {
  listTimes(): Promise<AdminSlotTime[]>;
}

export interface AdminDashboardApi {
  getMetrics(): Promise<DashboardMetrics>;
}

export interface AdminAuthApi {
  login(employeeId: string, password: string): Promise<{ token: string; name: string }>;
}
