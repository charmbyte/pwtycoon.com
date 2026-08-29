import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'hero'
  asLink?: boolean
}

const iconSizeClasses = {
  sm: 'size-8 sm:size-9',
  md: 'size-10',
  hero: 'size-24 sm:size-32',
} as const

const textSizeClasses = {
  sm: 'text-base sm:text-lg',
  md: 'text-2xl',
  hero: 'text-3xl sm:text-4xl md:text-5xl',
} as const

const gapClasses = {
  sm: 'gap-2.5',
  md: 'gap-3',
  hero: 'gap-4 sm:gap-5',
} as const

export function Logo({ className, size = 'md', asLink = true }: LogoProps) {
  const content = (
    <span
      className={cn(
        'inline-flex items-center',
        gapClasses[size],
        className,
      )}
    >
      <img
        src="/brand/logo.png"
        alt=""
        className={cn('shrink-0 object-contain', iconSizeClasses[size])}
        width={512}
        height={512}
        decoding="async"
      />
      <span
        className={cn(
          'font-display font-bold tracking-tight uppercase',
          textSizeClasses[size],
        )}
      >
        <span className="text-cyan-500">Pro</span>{' '}
        <span className="text-ink">Wrestling</span>{' '}
        <span className="text-cyan-500">Tycoon</span>
      </span>
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
