import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Command, Moon, Search, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/portfolio";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/cn";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
      if (event.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange, open]);

  const filtered = useMemo(
    () => navItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const goTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    onOpenChange(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-24">
          <motion.button
            className="absolute inset-0 bg-background/75 backdrop-blur-xl"
            aria-label="Close command palette"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card shadow-terminal"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections or run actions..."
                className="h-9 flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">esc</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm hover:bg-accent"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              >
                <span className="flex items-center gap-3">
                  {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  Toggle theme
                </span>
                <Command className="h-4 w-4 text-muted-foreground" />
              </button>
              {filtered.map((item) => (
                <button
                  key={item.href}
                  className={cn("flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm hover:bg-accent")}
                  onClick={() => goTo(item.href)}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
