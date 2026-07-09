"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full">
        <Moon size={22} />
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-zinc-800"
    >
      {theme === "dark" ? (
        <Sun size={22} />
      ) : (
        <Moon size={22} />
      )}
    </button>
  );
}
