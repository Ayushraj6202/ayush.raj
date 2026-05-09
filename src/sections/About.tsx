import { motion } from "framer-motion";
import { BrainCircuit, Code2, Cpu, GraduationCap } from "lucide-react";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger } from "@/animations/variants";

const cards = [
  { icon: GraduationCap, title: "IIT Patna Graduate", text: "Grounded in computer science fundamentals, algorithms, and rigorous engineering practice." },
  { icon: Cpu, title: "Backend Depth", text: "Strong interest in service orchestration, microservices, APIs, telemetry, and developer infrastructure." },
  { icon: Code2, title: "Full-Stack Fluency", text: "Builds polished React surfaces backed by reliable state, authentication, and clean system boundaries." },
  { icon: BrainCircuit, title: "AI Tooling", text: "Focused on practical LLM integrations, MCP workflows, and platforms that compound developer output." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title=""
      description="Ayush works across backend engineering, frontend systems, AI developer tooling, scalable infrastructure, and competitive programming. The through-line is simple: build tools and systems that stay useful when the scale gets real."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 md:grid-cols-2"
      >
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div key={card.title} variants={fadeUp}>
              <Card className="h-full bg-card/70 transition-colors hover:border-primary/40">
                <CardContent className="p-5">
                  <Icon className="mb-5 h-6 w-6 text-primary" />
                  <h3 className="font-mono text-base font-semibold">{card.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{card.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
