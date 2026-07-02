import { describe, expect, it } from "vitest";
import { ApiError, ApiNotReadyError, ApiSecurityBlockedError } from "@/lib/api/errors";

describe("api errors", () => {
  it("creates ApiNotReadyError with endpoint", () => {
    const error = new ApiNotReadyError("GET /admin/customers");
    expect(error.expectedEndpoint).toBe("GET /admin/customers");
    expect(error.message).toContain("API required");
  });

  it("creates ApiSecurityBlockedError with module", () => {
    const error = new ApiSecurityBlockedError("orders");
    expect(error.module).toBe("orders");
  });

  it("creates ApiError with status", () => {
    const error = new ApiError(401, "Unauthorized");
    expect(error.status).toBe(401);
  });
});
