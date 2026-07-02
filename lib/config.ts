const DEFAULT_API_BASE = "https://car-wash-vbry.onrender.com/api";

export function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE;
}

export function getCapabilityMode(): "stub-first" | "live-first" {
  const mode = process.env.NEXT_PUBLIC_ADMIN_CAPABILITY_MODE ?? "stub-first";
  return mode === "live-first" ? "live-first" : "stub-first";
}

export function isAuthRequired(): boolean {
  return process.env.ADMIN_REQUIRE_AUTH !== "false";
}

export function getAppEnvironment(): "local" | "preview" | "production" {
  const env = process.env.NEXT_PUBLIC_APP_ENV ?? process.env.VERCEL_ENV ?? "local";
  if (env === "production") return "production";
  if (env === "preview") return "preview";
  return "local";
}
