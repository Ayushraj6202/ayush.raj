import { type ReactNode, useState } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/layouts/Navbar";

export function AppShell({ children }: { children: ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <main>{children}</main>
    </>
  );
}
