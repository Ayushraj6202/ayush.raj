import { motion } from "framer-motion";
import { Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks, titles } from "@/data/portfolio";
import { useTypingRotation } from "@/hooks/useTypingRotation";

export function Hero() {
  const title = useTypingRotation(titles);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.13),transparent_34%),linear-gradient(to_bottom,hsl(var(--background)/0),hsl(var(--background))_82%)]" />
      <div className="container grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-16 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
            /engineer/software-developer.yaml
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Ayush Raj
          </h1>
          <p className="mt-5 h-8 font-mono text-lg text-primary sm:text-xl">
            {title}
            <span className="ml-1 inline-block h-5 w-2 translate-y-1 bg-primary animate-cursor" />
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Software Developer focused on scalable backend systems, AI-powered developer tooling, microfrontend architectures, and modern full-stack engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#resume">
                <Download className="h-4 w-4" />
                View Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://github.com/Ayushraj6202" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="mt-8 flex gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.75 }}
        >
          <div className="absolute -inset-4 rounded-lg border border-primary/20 bg-primary/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-terminal">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">profile.preview</span>
            </div>
            <img src="/profile.jpg" alt="Ayush Raj" className="aspect-[4/5] w-full object-cover object-center" />
            <div className="border-t border-border p-4 font-mono text-xs text-muted-foreground">
              <p className="flex items-center justify-between">
                <span>status</span>
                <span className="text-primary">open_to_SDE_roles</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
