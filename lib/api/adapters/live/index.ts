import { apiFetch } from "@/lib/api/client";
import { ApiSecurityBlockedError } from "@/lib/api/errors";
import type { ApiResponse } from "@/lib/api/types";
import type { AdminAuthApi } from "@/lib/api/contracts";

function blocked(module: string): never {
  throw new ApiSecurityBlockedError(module);
}

export function createLiveAuthApi(): AdminAuthApi {
  return {
    async login(employeeId, password) {
      const response = await apiFetch<ApiResponse<{ employeeId: string; name: string; phone: string }> & { token: string }>(
        "/employees/login",
        {
          method: "POST",
          body: JSON.stringify({ employeeId, password }),
        },
      );
      return {
        token: response.token ?? "",
        name: response.data?.name ?? employeeId,
      };
    },
  };
}

export function createLiveOrdersApi() {
  return {
    async listAll() {
      blocked("orders");
    },
    async getById() {
      blocked("orders");
    },
  };
}
