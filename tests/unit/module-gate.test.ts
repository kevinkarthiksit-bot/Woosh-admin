import { describe, expect, it } from "vitest";
import { getModuleStatus } from "@/lib/capabilities";

describe("module gate behavior", () => {
  it("customers module is not_ready", () => {
    expect(getModuleStatus("customers")).toBe("not_ready");
  });

  it("dashboard module is stub", () => {
    expect(getModuleStatus("dashboard")).toBe("stub");
  });
});
