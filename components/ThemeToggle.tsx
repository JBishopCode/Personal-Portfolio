"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const themes = [
  { value: "system", icon: Monitor, label: "System" },
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const current = themes.find((t) => t.value === theme) ?? themes[0];
  const Icon = current.icon;

  function cycle() {
    const idx = themes.findIndex((t) => t.value === theme);
    const next = themes[(idx + 1) % themes.length];
    setTheme(next.value);
  }

  return (
    <button
      onClick={cycle}
      title={`Theme: ${current.label} — click to cycle`}
      aria-label={`Switch theme (currently ${current.label})`}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-400/40 dark:hover:border-violet-500/40 hover:bg-violet-50 dark:hover:bg-violet-500/8 transition-all text-xs font-medium"
    >
      <Icon size={14} />
      <span className="hidden sm:inline">{current.label}</span>
    </button>
  );
}