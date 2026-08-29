import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { COMMUNITY_LINKS } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
              Pro Wrestling Tycoon
            </p>
            <p className="text-sm text-muted">
              © 2026 CharmByte, LLC. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold"
            aria-label="Community"
          >
            {COMMUNITY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-cyan-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex gap-6 text-sm font-semibold" aria-label="Legal">
            <Link
              to="/privacy"
              className="text-muted transition-colors hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted transition-colors hover:text-ink"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
