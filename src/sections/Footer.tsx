export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col gap-3 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>built_with: React + TypeScript + Tailwind</p>
        <p>© {new Date().getFullYear()} Ayush Raj </p>
      </div>
    </footer>
  );
}
