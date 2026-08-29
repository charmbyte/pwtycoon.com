import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'hero'
  asLink?: boolean
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-2xl',
  hero: 'text-4xl sm:text-5xl',
} as const

export function Logo({ className, size = 'md', asLink = true }: LogoProps) {
  const content = (
    <span
      className={cn(
        'font-display font-bold tracking-tight uppercase',
        sizeClasses[size],
        className,
      )}
      title="Placeholder logo — replace with official art"
    >
      <span className="text-cyan-500">Pro</span>{' '}
      <span className="text-ink">Wrestling</span>{' '}
      <span className="text-cyan-500">Tycoon</span>
    </span>
  )

  if (!asLink) {
    return content
  }

  return (
    <Link
      to="/"
      className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      aria-label="Pro Wrestling Tycoon home"
    >
      {content}
    </Link>
  )
}
