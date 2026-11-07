
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("ritika-theme");
    if (saved === "dark" || saved === "light") return saved;

    return window.matchMedia("(prefers-color-scheme: dark)")
      .matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ritika-theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() =>
        setTheme(current =>
          current === "dark" ? "light" : "dark"
        )
      }
      aria-label={`Switch to ${
        theme === "dark" ? "light" : "dark"
      } mode`}
      aria-pressed={theme === "dark"}
    >
      <span aria-hidden="true">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
      <span>
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}
