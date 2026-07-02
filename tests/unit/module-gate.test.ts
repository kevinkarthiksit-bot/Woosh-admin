import { describe, expect, it } from "vitest";
import { getModuleStatus } from "@/lib/capabilities";

describe("module gate behavior", () => {
  it("customers module is stub", () => {
    expect(getModuleStatus("customers")).toBe("stub");
  });

  it("dashboard module is stub", () => {
    expect(getModuleStatus("dashboard")).toBe("stub");
  });

  it("support module is stub", () => {
    expect(getModuleStatus("support")).toBe("stub");
  });
});
