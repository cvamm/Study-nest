import { lazy, Suspense, useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";
import ProtectedRoute from "@/components/ProtectedRoute";
import { AppProvider } from "@/context/AppContext";
import About, { NotFound } from "@/pages/About";
const Admin = lazy(() => import("@/pages/Admin"));
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import Subjects from "@/pages/Subjects";
import { ChapterPage, SubjectPage } from "@/pages/SubjectDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <ScrollToTop />
        <ErrorBoundary>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/subjects/:subjectId" element={<SubjectPage />} />
              <Route path="/subjects/:subjectId/:chapterId" element={<ChapterPage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<ProtectedRoute><Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center"><p className="text-sm font-bold text-navy-400">Loading admin panel…</p></div>}><Admin /></Suspense></ProtectedRoute>} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </HashRouter>
    </AppProvider>
  );
}
