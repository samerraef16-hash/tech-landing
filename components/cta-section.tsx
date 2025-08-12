"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { subscribe } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"
import { useEffect, useRef } from "react"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="bg-emerald-600 text-white hover:bg-emerald-700">
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  )
}

export default function CtaSection() {
  const initialState = { ok: false, message: "" }
  const [state, formAction] = useActionState(subscribe, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.ok) formRef.current?.reset()
  }, [state])

  return (
    <section
      id="cta"
      className="bg-gradient-to-b from-neutral-50 to-white py-16 dark:from-neutral-900 dark:to-neutral-950 md:py-24 scroll-mt-20"
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-300">
          Be first to know
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join the waitlist</h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
          Get product updates, launch invites, and early access perks.
        </p>

        <form
          ref={formRef}
          action={formAction}
          className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            {"Email address"}
          </label>
          <div className="relative w-full sm:max-w-md">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="pl-9"
              aria-describedby="email-help"
            />
          </div>
          <SubmitButton />
        </form>

        <div
          id="email-help"
          className={[
            "mt-3 text-sm",
            state?.ok ? "text-emerald-700 dark:text-emerald-300" : "text-neutral-600 dark:text-neutral-300",
          ].join(" ")}
          role="status"
          aria-live="polite"
        >
          {state?.message || "We care about your privacy. No spam, unsubscribe anytime."}
        </div>
      </div>
    </section>
  )
}
