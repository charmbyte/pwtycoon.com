import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { STEAM_URL } from '@/data/site'
import { cn } from '@/lib/utils'

type SteamCtaProps = {
  className?: string
  size?: 'default' | 'lg' | 'xl'
  label?: string
}

export function SteamCta({
  className,
  size = 'lg',
  label = 'Wishlist on Steam',
}: SteamCtaProps) {
  return (
    <Button asChild variant="steam" size={size} className={cn(className)}>
      <a
        href={STEAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (opens in new tab)`}
      >
        <SteamIcon />
        {label}
        <ExternalLink className="size-4 opacity-70" aria-hidden />
      </a>
    </Button>
  )
}

function SteamIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 shrink-0"
      aria-hidden
      fill="currentColor"
    >
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.4c0-2.495 2.028-4.522 4.522-4.522 2.494 0 4.522 2.027 4.522 4.522 0 2.493-2.028 4.52-4.522 4.52h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.387 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.973 20.953 6.685 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.35l-1.176-3.587 1.077-.328c.538-.164 1.133.103 1.262.645l.294 1.173c.11.437-.114.877-.52 1.097zm11.034-10.02c0 1.094-.888 1.982-1.982 1.982-1.093 0-1.981-.888-1.981-1.982 0-1.094.888-1.982 1.981-1.982 1.094 0 1.982.888 1.982 1.982z" />
    </svg>
  )
}
