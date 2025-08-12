import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, BarChart3, Boxes, Webhook, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Composable Core",
    desc: "Modular building blocks for auth, billing, and users that grow with you.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    desc: "Understand user behavior in real-time with privacy-first metrics.",
  },
  { icon: Webhook, title: "Automations", desc: "Trigger workflows and webhooks on events to eliminate manual ops." },
  { icon: Shield, title: "Enterprise-Grade", desc: "Encryption, auditing, and role-based access baked-in." },
  { icon: Boxes, title: "Integrations", desc: "Connect your stack in minutes. Stripe, Slack, Linear and more." },
  { icon: Sparkles, title: "AI-Ready", desc: "Ship assistants, copilots, and automations powered by modern models." },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto scroll-mt-20 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need to launch</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Thoughtfully designed primitives so you can move fast and stay flexible.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <Card key={idx} className="border-neutral-200 dark:border-neutral-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-md bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                <f.icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-neutral-600 dark:text-neutral-300">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
