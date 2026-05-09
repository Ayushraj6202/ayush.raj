import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/data/portfolio";
import { fadeUp, stagger } from "@/animations/variants";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Competitive programming">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <motion.div key={achievement.label} variants={fadeUp}>
              <Card className="h-full bg-card/75 transition-all hover:-translate-y-1 hover:border-primary/40">
                <CardContent className="p-5">
                  <Icon className="mb-6 h-5 w-5 text-primary" />
                  <p className="font-mono text-4xl font-semibold text-foreground">
                    <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                  </p>
                  <h3 className="mt-4 font-semibold">{achievement.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{achievement.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
