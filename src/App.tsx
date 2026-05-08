import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/layouts/AppShell";
import { ThemeProvider } from "@/hooks/useTheme";
import { useKonami } from "@/hooks/useKonami";
import { Hero } from "@/sections/Hero";

const About = lazy(() => import("@/sections/About").then((module) => ({ default: module.About })));
const Experience = lazy(() => import("@/sections/Experience").then((module) => ({ default: module.Experience })));
const Projects = lazy(() => import("@/sections/Projects").then((module) => ({ default: module.Projects })));
const Skills = lazy(() => import("@/sections/Skills").then((module) => ({ default: module.Skills })));
const Achievements = lazy(() => import("@/sections/Achievements").then((module) => ({ default: module.Achievements })));
const CodingProfiles = lazy(() => import("@/sections/CodingProfiles").then((module) => ({ default: module.CodingProfiles })));
const Resume = lazy(() => import("@/sections/Resume").then((module) => ({ default: module.Resume })));
const Contact = lazy(() => import("@/sections/Contact").then((module) => ({ default: module.Contact })));
const Footer = lazy(() => import("@/sections/Footer").then((module) => ({ default: module.Footer })));

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="rounded-lg border border-border bg-card p-5 font-mono text-sm shadow-terminal">
        <p className="text-primary">booting ayushraj.tech</p>
        <p className="mt-2 text-muted-foreground">loading engineering dossier...</p>
      </div>
    </motion.div>
  );
}

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Raj",
    url: "https://ayushraj.tech",
    jobTitle: "Software Developer",
    alumniOf: "IIT Patna",
    sameAs: [
      "https://github.com/Ayushraj6202",
      "https://codeforces.com/profile/ayush_raj14",
      "https://leetcode.com/u/ayush_raj_14/",
      "https://www.codechef.com/users/ayush_raj14",
    ],
    knowsAbout: ["Backend Engineering", "AI Developer Tooling", "Microfrontends", "React", "Java", "Quarkus", "TypeScript"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const terminalMode = useKonami();

  useEffect(() => {
    document.title = "Ayush Raj | Software Developer";
    const timeout = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={terminalMode ? "terminal-mode" : undefined}>
      <StructuredData />
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <AppShell>
        <Hero />
        <Suspense fallback={<div className="container py-20 font-mono text-sm text-muted-foreground">loading sections...</div>}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <CodingProfiles />
          <Resume />
          <Contact />
          <Footer />
        </Suspense>
      </AppShell>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
