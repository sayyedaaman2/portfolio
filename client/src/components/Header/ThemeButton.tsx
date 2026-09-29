"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
        flex items-center justify-center
        w-11 h-11
        rounded-2xl
        border border-white/10
        bg-white/5
        hover:bg-white/10
        transition-all duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-[#3B82F6]/40
      "
    >
      {mounted ? (
        isDark ? (
          <Sun
            size={18}
            className="text-[#F9FAFB]"
          />
        ) : (
          <Moon
            size={18}
            className="text-[#9CA3AF]"
          />
        )
      ) : (
        <div className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}