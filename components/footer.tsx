import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 text-sm dark:border-neutral-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
          <div className="h-6 w-6 rounded bg-emerald-500" aria-hidden />
          <span>PulseKit © {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400" aria-label="Footer">
          <Link href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Pricing
          </Link>
          <Link href="#cta" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Updates
          </Link>
        </nav>
      </div>
    </footer>
  )
}
