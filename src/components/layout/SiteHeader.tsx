import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { SteamCta } from '@/components/brand/SteamCta'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { COMMUNITY_LINKS } from '@/data/site'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#community', label: 'Community' },
] as const

function NavAnchor({
  href,
  label,
  onNavigate,
  className,
}: {
  href: string
  label: string
  onNavigate?: () => void
  className?: string
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={cn(
        'relative py-1 text-sm font-semibold text-muted transition-colors hover:text-ink',
        'after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-cyan-500 after:transition-transform after:duration-300 hover:after:scale-x-100',
        className,
      )}
    >
      {label}
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavAnchor key={item.href} {...item} />
          ))}
        </nav>

        <div className="hidden md:block">
          <SteamCta size="default" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-5" aria-label="Mobile">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <NavAnchor
                    {...item}
                    onNavigate={() => setOpen(false)}
                    className="text-base"
                  />
                </SheetClose>
              ))}
              <div className="pt-2">
                <SteamCta size="default" className="w-full" />
              </div>
              <div className="flex flex-col gap-3 border-t border-border pt-5">
                {COMMUNITY_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-muted transition-colors hover:text-cyan-500"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
