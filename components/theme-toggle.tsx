"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Only determine dark/light after mount to avoid hydration mismatch
  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : false

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
      className="border-neutral-300 transition-colors dark:border-neutral-700"
    >
      {/* Crossfade icons for polish */}
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-opacity ${isDark ? "opacity-0" : "opacity-100"}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-opacity ${isDark ? "opacity-100" : "opacity-0"}`} />
      <span className="sr-only">{"Toggle theme"}</span>
    </Button>
  )
}
