import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import Personal from "./pages/Personal.jsx";
import CandyStory from "./pages/CandyStory.jsx";

// Admin pages pull in Firebase Auth, so they load only when visited
const Login = lazy(() => import("./components/Login.jsx"));
const Admin = lazy(() => import("./components/Admin.jsx"));

// Optional AI chat widget: set VITE_ASK_ELLE=true to turn it on (see README)
const AskElle = import.meta.env.VITE_ASK_ELLE === "true" ? lazy(() => import("./components/AskElle.jsx")) : null;

// Main application component with routing
function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<div className="min-h-[80vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/projects/halloween-candy" element={<CandyStory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            {/* Old page URLs now point to sections on the home page */}
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {AskElle && (
        <Suspense fallback={null}>
          <AskElle />
        </Suspense>
      )}
      <Analytics />
    </div>
  );
}

export default App;
