import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { skillGroups } from "@/data/portfolio";
import { fadeUp, stagger } from "@/animations/variants";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A compact systems toolbox." description="Categorized like a terminal inventory: fast to scan, precise in signal, and built around real engineering surfaces.">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div key={group.name} variants={fadeUp}>
              <Card className="h-full bg-card/75 transition-colors hover:border-primary/40">
                <CardContent className="p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-mono font-semibold">{group.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
