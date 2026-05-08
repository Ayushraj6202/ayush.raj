import { Laptop, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Laptop;

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(nextTheme)} aria-label={`Theme: ${theme}`}>
      <Icon className="h-4 w-4" />
    </Button>
  );
}
