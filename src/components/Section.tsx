import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/utils/cn";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p> : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
