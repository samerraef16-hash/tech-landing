import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    highlight: false,
    description: "Everything to try your idea.",
    features: ["Up to 1k MAU", "Basic analytics", "Community support"],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    highlight: true,
    description: "For growing teams.",
    features: ["Up to 50k MAU", "Advanced analytics", "Automations", "Email support"],
    cta: "Start Free Trial",
  },
  {
    name: "Scale",
    price: "$199",
    period: "/mo",
    highlight: false,
    description: "Serious scale and security.",
    features: ["Unlimited MAU", "SLA + SSO", "Audit logs", "Priority support"],
    cta: "Contact Sales",
  },
]

function FeatureItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600 dark:text-emerald-400" />
      <span className="text-sm text-neutral-700 dark:text-neutral-300">{children}</span>
    </li>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto scroll-mt-20 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">Start free. Upgrade as you grow.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Card
            key={i}
            className={[
              "flex flex-col border-neutral-200 dark:border-neutral-800",
              t.highlight ? "ring-2 ring-emerald-500" : "",
            ].join(" ")}
          >
            <CardHeader>
              <CardTitle className="flex items-baseline justify-between">
                <span>{t.name}</span>
                <span className="text-3xl font-bold">
                  {t.price}
                  <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400">{t.period}</span>
                </span>
              </CardTitle>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{t.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t.features.map((f, idx) => (
                  <FeatureItem key={idx}>{f}</FeatureItem>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <a href="#cta" className="w-full">
                <Button
                  className={t.highlight ? "w-full bg-emerald-600 text-white hover:bg-emerald-700" : "w-full"}
                  variant={t.highlight ? "default" : "outline"}
                >
                  {t.cta}
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
