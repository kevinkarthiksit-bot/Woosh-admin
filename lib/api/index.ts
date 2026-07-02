import {
  stubAuthApi,
  stubCouponsApi,
  stubDashboardApi,
  stubEmployeesApi,
  stubInventoryApi,
  stubOrdersApi,
  stubServicesApi,
  stubSlotsApi,
} from "@/lib/api/adapters/stub";
import { createLiveAuthApi } from "@/lib/api/adapters/live";
import { canUseLiveApi, type AdminModuleKey } from "@/lib/capabilities";
import { getCapabilityMode } from "@/lib/config";

function isLiveModuleEnabled(key: AdminModuleKey): boolean {
  if (getCapabilityMode() === "live-first" && canUseLiveApi(key)) return true;
  return canUseLiveApi(key);
}

export const adminApi = {
  auth: isLiveModuleEnabled("settings") ? createLiveAuthApi() : stubAuthApi,
  dashboard: stubDashboardApi,
  orders: stubOrdersApi,
  services: stubServicesApi,
  employees: stubEmployeesApi,
  inventory: stubInventoryApi,
  coupons: stubCouponsApi,
  slots: stubSlotsApi,
};

export function getApiForModule<T>(module: AdminModuleKey, stubApi: T, liveApi?: T): T {
  if (isLiveModuleEnabled(module) && liveApi) return liveApi;
  return stubApi;
}
