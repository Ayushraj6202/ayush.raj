import { Command, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";

type NavbarProps = {
  onCommandOpen: () => void;
};

export function Navbar({ onCommandOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 border-b border-transparent transition-all duration-300",
        scrolled && "border-border bg-background/78 shadow-sm backdrop-blur-xl",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <button onClick={() => goTo("#home")} className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-card font-mono text-xs text-primary transition-colors group-hover:border-primary/50">
            AR
          </span>
          <span className="hidden font-mono text-sm text-muted-foreground sm:inline">ayushraj.tech</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                active === item.href.slice(1) && "bg-accent text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden font-mono text-xs md:inline-flex" onClick={onCommandOpen}>
            <Command className="h-3.5 w-3.5" />
            Ctrl K
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Open menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container grid gap-1 py-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className={cn(
                  "rounded-md px-3 py-3 text-left text-sm text-muted-foreground",
                  active === item.href.slice(1) && "bg-accent text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
