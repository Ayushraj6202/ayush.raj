import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { contactItems } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (label: string, value?: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1400);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something meaningful.">
      <div className="grid gap-4 md:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="bg-card/75 transition-colors hover:border-primary/40">
              <CardContent className="flex items-center justify-between gap-4 p-5">
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex min-w-0 items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-sm font-semibold">{item.label}</span>
                    <span className="block truncate text-sm text-muted-foreground">{item.value}</span>
                  </span>
                </a>
                {item.copy ? (
                  <button
                    onClick={() => copy(item.label, item.copy)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-muted-foreground hover:text-primary"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copied === item.label ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                ) : (
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
