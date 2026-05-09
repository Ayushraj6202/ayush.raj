import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { codingProfiles } from "@/data/portfolio";
import { fadeUp, stagger } from "@/animations/variants";

export function CodingProfiles() {
  return (
    <Section id="profiles" eyebrow="Profiles" title="">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2">
        {codingProfiles.map((profile) => (
          <motion.div key={profile.platform} variants={fadeUp}>
            <Card className="h-full bg-card/75 transition-colors hover:border-primary/40">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-md border border-border bg-background font-mono text-sm text-primary">
                    {profile.platform.slice(0, 2).toUpperCase()}
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <a href={profile.href} target="_blank" rel="noreferrer">
                      Visit
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{profile.platform}</h3>
                <p className="mt-1 font-mono text-sm text-primary">{profile.rating}</p>
                <p className="mt-4 leading-7 text-muted-foreground">{profile.summary}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
