import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Dialog({ open, onOpenChange, title, children, className }: DialogProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange, open]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
          <motion.button
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            className={cn("relative max-h-[90vh] w-full overflow-hidden rounded-lg border border-border bg-card shadow-terminal", className)}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="font-mono text-sm text-muted-foreground">{title}</p>
              <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Close dialog">
                <X className="h-4 w-4" />
              </Button>
            </div>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
