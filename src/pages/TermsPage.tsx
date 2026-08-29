export function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: August 29, 2026</p>
      <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the
          website at pwtycoon.com (the “Site”), operated by CharmByte, LLC
          (“CharmByte,” “we,” “us,” or “our”) in connection with Pro Wrestling
          Tycoon. By using the Site, you agree to these Terms.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            The Site is provided “as is” and “as available,”
          </strong>{' '}
          without warranties of any kind, whether express or implied, including
          but not limited to warranties of merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            To the fullest extent permitted by law, CharmByte, LLC holds no
            liability
          </strong>{' '}
          for any direct, indirect, incidental, consequential, special, or
          punitive damages arising from your use of—or inability to use—the
          Site, its content, or any linked third-party websites or services,
          including the Steam store page for Pro Wrestling Tycoon, community
          platforms such as Discord, Reddit, or X, and user-created mods or
          Steam Workshop content.
        </p>
        <p>
          Links to third-party sites are provided for convenience only. CharmByte
          does not control those sites and is not responsible for their content,
          availability, or practices. Your use of third-party sites and services
          (including purchasing or playing the game on Steam) is at your own
          risk and subject to their terms.
        </p>
        <p>
          Content on this Site—including text, branding, screenshots, and
          layout—is owned by CharmByte, LLC or its licensors and may not be
          copied or reused without permission, except as allowed by applicable
          law. Pro Wrestling Tycoon and related marks are trademarks of
          CharmByte, LLC.
        </p>
        <p>
          The Site is a marketing and community hub for Pro Wrestling Tycoon. It
          does not provide game accounts, in-game purchases, or gameplay
          services. Game access, updates, and support are handled through Steam
          and our official community channels.
        </p>
        <p>
          We may update these Terms from time to time by posting a revised
          version on this page. Continued use of the Site after changes
          constitutes acceptance of the updated Terms. For questions, contact{' '}
          <a
            href="mailto:me@charmbyte.dev"
            className="font-semibold text-cyan-500 transition-colors hover:text-ink"
          >
            me@charmbyte.dev
          </a>
          .
        </p>
      </div>
    </div>
  )
}
