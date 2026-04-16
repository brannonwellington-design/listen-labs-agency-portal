import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch flash
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="w-4 h-4" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-content-secondary hover:text-content-primary transition-colors"
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.25} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.25} />
      )}
    </button>
  );
};

export default ThemeToggle;
