"use client"

import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-500" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">PulseKit</span>
          <span className="sr-only">{"Go to Hero section"}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a href="#features" className="text-sm hover:text-emerald-600 dark:hover:text-emerald-400">
            Features
          </a>
          <a href="#testimonials" className="text-sm hover:text-emerald-600 dark:hover:text-emerald-400">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm hover:text-emerald-600 dark:hover:text-emerald-400">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#cta" className="hidden md:block">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Get Started</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
