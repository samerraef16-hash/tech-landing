import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, Rocket } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.20),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.18),transparent_45%)]"
      />
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-200">
            <Rocket className="h-3.5 w-3.5" />
            Launch your SaaS in days, not months
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Supercharge your product with PulseKit
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
            An opinionated toolkit to build, launch, and scale your tech product with confidence. Built-in analytics,
            billing, and automation so you can focus on outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#pricing">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Start Free</Button>
            </a>
            <a href="#features">
              <Button
                variant="outline"
                className="border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800 bg-transparent"
              >
                See Features
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2 text-sm text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              SOC2-ready
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              Blazing fast
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-transparent blur-2xl"
            aria-hidden
          />
          <img
            src="/download.png?height=560&width=760"
            alt="Product dashboard preview"
            className="w-full rounded-xl border border-neutral-200 shadow-xl dark:border-neutral-800"
          />
        </div>
      </div>
    </section>
  )
}
