import { describe, expect, it } from "vitest";
import {
  adminCapabilities,
  getModuleStatus,
  shouldShowStubData,
} from "@/lib/capabilities";

describe("admin capabilities", () => {
  it("marks customers as not_ready", () => {
    expect(getModuleStatus("customers")).toBe("not_ready");
  });

  it("marks orders as blocked_security", () => {
    expect(getModuleStatus("orders")).toBe("blocked_security");
  });

  it("shows stub data for blocked_security modules", () => {
    expect(shouldShowStubData("orders")).toBe(true);
  });

  it("includes api readiness as live", () => {
    expect(adminCapabilities.apiReadiness).toBe("live");
  });
});
