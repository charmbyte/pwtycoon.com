import { ExternalLink, Play } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { SteamCta } from '@/components/brand/SteamCta'
import { Button } from '@/components/ui/button'
import { COMMUNITY_LINKS, FEATURES, SCREENSHOTS } from '@/data/site'
import { cn } from '@/lib/utils'

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="font-display text-sm font-semibold tracking-wide text-cyan-500 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgb(6_182_212/0.12),transparent_60%)]" />
        <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8 sm:py-28">
          <div className="animate-fade-up">
            <Logo size="hero" asLink={false} />
          </div>
          <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            A day-by-day wrestling promotion management sim. Book shows, manage
            contracts and storylines, negotiate network deals, and compete in a
            living industry of rival companies.
          </p>
          <p className="animate-fade-up-delay mt-4 text-sm font-semibold tracking-wide text-cyan-500 uppercase">
            Coming late September 2026 · Steam Early Access
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center gap-4">
            <SteamCta size="xl" />
            <Button asChild variant="outline" size="lg">
              <a href="#features">Explore features</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Trailer"
          title="Intro video"
          description="Replace this placeholder with your official trailer or gameplay video."
        />
        <div
          className="mt-8 flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-line bg-secondary"
          role="img"
          aria-label="Intro video placeholder — replace with embedded trailer"
        >
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-cyan-500/40 bg-paper">
              <Play className="size-7 text-cyan-500" aria-hidden />
            </div>
            <p className="font-display text-lg font-semibold text-ink">
              Video placeholder
            </p>
            <p className="max-w-md text-sm text-muted">
              Drop an embedded video here (YouTube, Steam, or self-hosted).
              Suggested path: replace this block in{' '}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-cyan-500">
                HomePage.tsx
              </code>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        id="screenshots"
        className="border-y border-line bg-secondary/40"
      >
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Gallery"
            title="Screenshots"
            description="Replace placeholder images in public/screenshots/ with real captures (shot-01.jpg through shot-06.jpg)."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCREENSHOTS.map((shot) => (
              <figure key={shot.src} className="group">
                <div className="overflow-hidden rounded-lg border border-line bg-paper">
                  <img
                    src={shot.src}
                    alt={`${shot.label} screenshot placeholder`}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted">
                  {shot.label}
                  <span className="block text-xs text-line">
                    {shot.src.replace('/public', '')}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Gameplay"
          title="Features"
          description="Everything below is drawn from the official Steam store description."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-line bg-secondary/30 p-6 transition-colors hover:border-cyan-500/40"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <SteamCta size="xl" label="Wishlist on Steam" />
        </div>
      </section>

      <section
        id="community"
        className="border-t border-line bg-secondary/40"
      >
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Connect"
            title="Join the community"
            description="Follow development, share feedback, and connect with other promoters."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {COMMUNITY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group flex flex-col rounded-lg border border-line bg-paper p-6 transition-colors',
                  'hover:border-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
                aria-label={`${link.description} (opens in new tab)`}
              >
                <span className="font-display text-xl font-semibold text-ink group-hover:text-cyan-500">
                  {link.label}
                </span>
                <span className="mt-2 flex items-center gap-1 text-sm text-muted">
                  Visit
                  <ExternalLink className="size-3.5" aria-hidden />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
