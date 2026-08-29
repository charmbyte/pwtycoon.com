export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: August 29, 2026</p>
      <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          CharmByte, LLC (“CharmByte,” “we,” “us,” or “our”) operates the
          website at pwtycoon.com (the “Site”) for Pro Wrestling Tycoon.
        </p>
        <p>
          We use Google Analytics to understand how visitors use the Site (for
          example, which pages are viewed and general device or browser
          information). Google may set cookies or similar technologies for this
          purpose. You can learn more in{' '}
          <a
            href="https://policies.google.com/privacy"
            className="font-semibold text-cyan-500 transition-colors hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’s Privacy Policy
          </a>
          .
        </p>
        <p>
          We do not sell personal data, and this Site has no account systems,
          contact forms, newsletters, or advertising pixels beyond Google
          Analytics.
        </p>
        <p>
          If you choose to email us (for example at me@charmbyte.dev), the
          information you include in that message is under your control and is
          handled only as needed to respond to your inquiry. We do not add email
          addresses to marketing lists.
        </p>
        <p>
          This Site links to third-party websites and services, including the
          Steam store page for Pro Wrestling Tycoon and community platforms such
          as Discord, Reddit, and X. Those services are not operated by us for
          purposes of this policy’s data practices statement about the
          pwtycoon.com Site, and their own privacy practices may differ. Steam
          account data, purchase history, and Workshop activity are governed by
          Valve’s policies when you use Steam.
        </p>
        <p>
          If this policy changes, we will update this page with a new “Last
          updated” date. Questions about privacy may be sent to{' '}
          <a
            href="mailto:me@charmbyte.dev"
            className="font-semibold text-cyan-500 transition-colors hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            me@charmbyte.dev
          </a>
          .
        </p>
      </div>
    </div>
  )
}
