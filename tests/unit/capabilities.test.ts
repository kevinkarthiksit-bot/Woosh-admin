import { describe, expect, it } from "vitest";
import {
  adminCapabilities,
  getModuleStatus,
  shouldShowStubData,
} from "@/lib/capabilities";

describe("admin capabilities", () => {
  it("marks customers as stub for demo UI", () => {
    expect(getModuleStatus("customers")).toBe("stub");
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

  it("includes new screenshot modules", () => {
    expect(getModuleStatus("liveOperations")).toBe("stub");
    expect(getModuleStatus("reportsAnalytics")).toBe("stub");
  });
});
