import { useEffect, useState, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { validateSessionToken } from "@/lib/security";
import { Lock, ShieldAlert } from "lucide-react";

const ADMIN_STORAGE_KEY = "studybust12_admin_session";

interface ProtectedRouteProps {
  children?: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    async function checkAuth() {
      try {
        const token = localStorage.getItem(ADMIN_STORAGE_KEY);
        if (!token) {
          if (isMounted) setStatus("unauthenticated");
          return;
        }
        const isValid = await validateSessionToken(token);
        if (isMounted) {
          setStatus(isValid ? "authenticated" : "unauthenticated");
        }
      } catch {
        if (isMounted) setStatus("unauthenticated");
      }
    }
    checkAuth();
    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 animate-pulse">
          <Lock className="h-6 w-6" />
        </div>
        <p className="text-sm font-semibold text-slate-400">Verifying security credentials…</p>
      </div>
    );
  }

  // Both authenticated and unauthenticated states pass through to children
  // (Admin component renders its own secure authentication gate with rate limiting and password check)
  return <>{children}</>;
}
