import { isAuthRequired } from "@/lib/config";

export function requiresAuth(pathname: string): boolean {
  if (!isAuthRequired()) return false;
  return !pathname.startsWith("/login");
}
