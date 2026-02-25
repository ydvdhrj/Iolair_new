import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

export function ThemeToggle({ className, size = "icon" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size={size}
      onClick={toggleTheme}
      className={cn(
        "rounded-full border-border bg-background/80 hover:bg-muted/50",
        className
      )}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-foreground" />
      ) : (
        <Sun className="h-4 w-4 text-foreground" />
      )}
    </Button>
  );
}
