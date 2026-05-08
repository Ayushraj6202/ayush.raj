import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { cn } from "@/utils/cn";

export function Projects() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Project panels with product logic under the hood."
      description="A concise build log of systems that connect frontend craft with backend behavior, APIs, auth, analytics, and operational workflows."
    >
      <div className="grid gap-4">
        {projects.map((project, index) => {
          const isActive = active === index;
          return (
            <motion.article
              key={project.name}
              layout
              className={cn("overflow-hidden rounded-lg border border-border bg-card/75 transition-colors", isActive && "border-primary/45 shadow-terminal")}
            >
              <button className="grid w-full gap-3 p-5 text-left md:grid-cols-[1fr_auto]" onClick={() => setActive(index)}>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">project/{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{project.description}</p>
                </div>
                <p className="font-mono text-sm text-primary">{project.duration}</p>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="border-t border-border p-5">
                  <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
                    <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                        <Button asChild size="sm">
                          <a href={project.live} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
