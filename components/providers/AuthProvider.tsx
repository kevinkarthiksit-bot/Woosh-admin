"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { adminApi } from "@/lib/api";
import { clearSession, readSession, writeSession, type AdminSession } from "@/lib/auth/session";

interface AuthContextValue {
  session: AdminSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (employeeId: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [session, setSession] = useState<AdminSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSession(readSession());
    setIsLoading(false);
  }, []);

  const login = useCallback(
    async (employeeId: string, password: string) => {
      const result = await adminApi.auth.login(employeeId, password);
      const nextSession: AdminSession = {
        token: result.token,
        employeeId,
        name: result.name,
      };
      writeSession(nextSession);
      setSession(nextSession);
      router.push("/dashboard");
    },
    [router],
  );

  const logout = useCallback(() => {
    clearSession();
    setSession(null);
    router.push("/login");
  }, [router]);

  const value = useMemo(
    () => ({
      session,
      isAuthenticated: Boolean(session?.token),
      isLoading,
      login,
      logout,
    }),
    [session, isLoading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
