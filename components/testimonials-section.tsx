import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Carter",
    role: "Founder, Synthix",
    image: "/placeholder.svg?height=64&width=64",
    quote: "We launched in 3 weeks. PulseKit gave us the right defaults and we didn't fight the framework once.",
  },
  {
    name: "Jules Nguyen",
    role: "CTO, Flowly",
    image: "/placeholder.svg?height=64&width=64",
    quote: "The developer experience is top-notch. Clear primitives and batteries-included integrations.",
  },
  {
    name: "Priya Patel",
    role: "PM, NovaCloud",
    image: "/placeholder.svg?height=64&width=64",
    quote: "Our team finally focuses on product, not plumbing. The analytics are a game changer.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-neutral-50 py-16 dark:bg-neutral-900 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Loved by builders</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Teams of all sizes ship faster with PulseKit.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-neutral-200 dark:border-neutral-800">
              <CardHeader className="flex flex-row items-start gap-4">
                <Avatar>
                  <AvatarImage src={t.image || "/placeholder.svg"} alt={`${t.name}'s profile photo`} />
                  <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{t.role}</div>
                </div>
                <Quote className="ml-auto h-5 w-5 text-emerald-500" aria-hidden />
              </CardHeader>
              <CardContent className="text-neutral-700 dark:text-neutral-300">
                {"“"}
                {t.quote}
                {"”"}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
