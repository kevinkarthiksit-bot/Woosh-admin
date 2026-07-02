"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "@/components/navigation/Sidebar";
import { TopBar } from "@/components/navigation/TopBar";
import { useAuth } from "@/components/providers/AuthProvider";
import { requiresAuth } from "@/lib/auth/guards";

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    if (requiresAuth(pathname) && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

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
    <div className="flex min-h-screen overflow-x-hidden bg-[#F8F9FB]">
      {navOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}
      <Sidebar mobileOpen={navOpen} onNavigate={() => setNavOpen(false)} onClose={() => setNavOpen(false)} />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <TopBar onMenuClick={() => setNavOpen(true)} />
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
