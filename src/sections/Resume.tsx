import { ExternalLink, FileText } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { resumeUrl } from "@/data/portfolio";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="A document viewer designed like an engineering dossier."
      description="Preview the resume surface, open it fullscreen, or launch the Drive document directly."
    >
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-terminal">
        <div className="flex flex-col gap-3 border-b border-border bg-muted/25 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
            <FileText className="h-4 w-4 text-primary" />
            ayush-raj-resume.pdf
          </div>
          <Button asChild size="sm">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" />
              See Resume
            </a>
          </Button>
        </div>
        <div className="bg-background p-5 sm:p-6">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Access-safe Preview</p>
            <h3 className="mt-4 text-2xl font-semibold">Ayush Raj</h3>
            <p className="mt-2 font-mono text-sm text-muted-foreground">Software Developer</p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>Experience: internal AI coding platform, Quarkus orchestration, microfrontend host architecture.</p>
              <p>Strengths: Java, React, TypeScript, scalable APIs, telemetry, LLM integrations, DSA.</p>
              <p>Competitive: Codeforces Expert, LeetCode Knight, CodeChef 4 Star.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
