import { getApiBaseUrl } from "@/lib/config";
import type { ApiResponse } from "@/lib/api/types";
import { ApiError } from "@/lib/api/errors";

export { ApiError, ApiNotReadyError, ApiSecurityBlockedError } from "@/lib/api/errors";

type ApiFetchOptions = RequestInit & {
  token?: string;
};

export async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<T> {
  const { token, headers: initHeaders, ...init } = options;
  const headers = new Headers(initHeaders);

  if (!headers.has("Content-Type") && init.body) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers,
  });

  let json: ApiResponse<unknown> & Record<string, unknown>;
  try {
    json = (await response.json()) as ApiResponse<unknown> & Record<string, unknown>;
  } catch {
    throw new ApiError(response.status, "Invalid response from server");
  }

  if (!response.ok || json.success === false) {
    const message =
      typeof json.message === "string" ? json.message : `Request failed (${response.status})`;
    throw new ApiError(response.status, message);
  }

  return json as T;
}
