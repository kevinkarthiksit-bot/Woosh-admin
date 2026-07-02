"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "@/components/navigation/Sidebar";
import { TopBar } from "@/components/navigation/TopBar";
import { useAuth } from "@/components/providers/AuthProvider";
import { requiresAuth } from "@/lib/auth/guards";

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;
    if (requiresAuth(pathname) && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  if (pathname.startsWith("/login")) {
    return <>{children}</>;
  }

  if (isLoading || (requiresAuth(pathname) && !isAuthenticated)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F9FB] text-slate-600">
        Loading admin panel...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FB]">
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
