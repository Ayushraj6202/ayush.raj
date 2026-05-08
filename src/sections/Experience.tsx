import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/portfolio";
import { fadeUp } from "@/animations/variants";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Enterprise AI tooling and scalable frontend architecture.">
      <div className="relative border-l border-border pl-6 sm:pl-10">
        {experience.map((item) => (
          <motion.article
            key={item.company}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative pb-4"
          >
            <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border border-primary bg-background shadow-[0_0_0_6px_hsl(var(--primary)/0.12)] sm:-left-[47px]" />
            <Card className="overflow-hidden bg-card/75">
              <div className="border-b border-border bg-muted/25 px-5 py-4 font-mono text-xs text-muted-foreground">
                work/{item.company.toLowerCase().replaceAll(" ", "-")}.md
              </div>
              <CardContent className="p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="font-mono text-sm text-primary">{item.company}</p>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">{item.duration}</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
