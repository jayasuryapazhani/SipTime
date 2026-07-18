const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/siptime/npjkkjooolnpkpmleojnembmiaeccnml";

const GITHUB_URL =
  "https://github.com/jayasuryapazhani/SipTime";

const PRIVACY_URL =
  "https://github.com/jayasuryapazhani/SipTime/blob/main/PRIVACY.md";

function LogoIcon(props: {
  className?: string;
  alt?: string;
}) {
  return (
    <img
      alt={props.alt ?? ""}
      className={props.className}
      src="/icon.png"
    />
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="site-icon"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.8a9.4 9.4 0 0 0-3 18.3c.48.09.66-.21.66-.46v-1.82c-2.7.59-3.27-1.15-3.27-1.15-.44-1.13-1.08-1.43-1.08-1.43-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .86 1.48 2.27 1.05 2.82.8.09-.63.34-1.05.61-1.3-2.15-.24-4.41-1.08-4.41-4.79 0-1.06.38-1.92 1-2.6-.1-.25-.43-1.23.1-2.56 0 0 .81-.26 2.66 1a9.2 9.2 0 0 1 4.84 0c1.85-1.26 2.66-1 2.66-1 .53 1.33.2 2.31.1 2.56.62.68 1 1.54 1 2.6 0 3.72-2.27 4.54-4.43 4.78.35.3.66.89.66 1.79v2.65c0 .25.18.55.67.46A9.4 9.4 0 0 0 12 2.8Z" />
    </svg>
  );
}

function ChromeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="site-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="3.1"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4.7 7.5h10.5M9.3 20l5.2-9M19.5 7.5l-5.1 8.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="site-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h13M13 7l5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="feature-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 7.5v5l3.2 1.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="feature-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M19.3 15.2A8 8 0 0 1 8.8 4.7 8 8 0 1 0 19.3 15.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      className="feature-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3.5 19 6v5.4c0 4.5-2.8 7.4-7 9.1-4.2-1.7-7-4.6-7-9.1V6l7-2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="m8.7 12 2.1 2.1 4.5-4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg
      aria-hidden="true"
      className="reason-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 7h14M5 17h14M8.5 4v6M15.5 14v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />

      <circle
        cx="8.5"
        cy="7"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="15.5"
        cy="17"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      aria-hidden="true"
      className="reason-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.5 10a4.5 4.5 0 0 1 9 0v3.2l1.5 2.3H6l1.5-2.3V10Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M10 18a2.2 2.2 0 0 0 4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BrowserIcon() {
  return (
    <svg
      aria-hidden="true"
      className="reason-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3.5 9h17"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M7 7h.01M10 7h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="reason-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a
          aria-label="SipTime homepage"
          className="site-brand"
          href="#top"
        >
<span className="brand-icon">
  <LogoIcon
    alt=""
    className="brand-image"
  />
</span>

          <span>SipTime</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="site-navigation"
        >
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#why-siptime">Why SipTime</a>
          <a href="#technology">Technology</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a
          className="site-button site-button-secondary header-button"
          href={GITHUB_URL}
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon />
          View GitHub
        </a>
      </div>
    </header>
  );
}

function ProductPreview() {
  return (
    <div
      aria-label="Preview of the SipTime extension popup"
      className="hero-preview"
    >
      <div className="preview-popup">
        <div className="preview-header">
          <div className="preview-brand">
<span className="preview-brand-icon">
  <LogoIcon
    alt=""
    className="preview-brand-image"
  />
</span>

            <div>
              <strong>SipTime</strong>
              <span>Hydration that fits your day</span>
            </div>
          </div>

          <span className="preview-toggle">
            <span />
          </span>
        </div>

        <div className="preview-status">
          <span />
          Active
        </div>

        <div className="preview-timer">
          <div className="preview-water" />

          <div className="preview-timer-content">
            <span>Next sip in</span>
            <strong>30</strong>
            <small>minutes</small>
          </div>
        </div>

        <p className="preview-next">
          Next reminder at 12:45 PM
        </p>

        <div className="preview-details">
          <article>
            <span>Schedule</span>
            <strong>Every 30 minutes</strong>
          </article>

          <article>
            <span>Quiet hours</span>
            <strong>11:30 PM – 8:00 AM</strong>
          </article>
        </div>

        <div className="preview-action">
          Open settings
        </div>
      </div>
    </div>
  );
}

function FeatureCard(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="site-panel benefit-card">
      <span className="benefit-icon">
        {props.icon}
      </span>

      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </article>
  );
}

function ReasonRow(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="reason-row">
      <span className="reason-icon-wrap">
        {props.icon}
      </span>

      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function TechnologyCell(props: {
  label: string;
  value: string;
}) {
  return (
    <div className="technology-cell">
      <span>{props.label}</span>
      <strong>{props.value}</strong>
    </div>
  );
}

function SiteApp() {
  return (
    <div className="page-shell" id="top">
      <Header />

      <main>
        <section className="hero-section">
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <p className="site-eyebrow">
                Browser extension for hydration reminders
              </p>

              <h1>
                Stay hydrated
                <br />
                without breaking
                <br />
                your focus.
              </h1>

              <span
                aria-hidden="true"
                className="sketch-underline"
              />

              <p className="hero-description">
                Flexible reminders, quiet hours, and snooze
                controls—all working privately inside your browser.
              </p>

              <div className="hero-actions">
                <a
                  className="site-button site-button-primary"
                  href={CHROME_WEB_STORE_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ChromeIcon />
                  Add to Chrome
                  <ArrowIcon />
                </a>

                <a
                  className="site-button site-button-secondary"
                  href={GITHUB_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubIcon />
                  View source
                </a>
              </div>

              <div className="product-status">
                <span className="status-dot" />

                <span>
                  Available on the Chrome Web Store
                </span>
              </div>
            </div>

            <ProductPreview />
          </div>

          <div
            className="site-container hero-benefits"
            id="features"
          >
            <FeatureCard
              description="Use repeating intervals or exact reminder times."
              icon={<ClockIcon />}
              title="Flexible schedules"
            />

            <FeatureCard
              description="Automatically suppress reminders while you sleep."
              icon={<MoonIcon />}
              title="Quiet hours"
            />

            <FeatureCard
              description="No accounts, analytics, or external data storage."
              icon={<ShieldIcon />}
              title="Private by design"
            />
          </div>
        </section>

        <section
          className="information-section"
          id="how-it-works"
        >
          <div className="site-container information-grid">
            <article
              className="site-panel about-card"
              id="why-siptime"
            >
              <div className="section-heading">
                <p className="site-eyebrow">
                  Why SipTime?
                </p>

                <h2>
                  Simple hydration reminders without unnecessary
                  complexity.
                </h2>

                <span
                  aria-hidden="true"
                  className="sketch-underline sketch-underline-small"
                />
              </div>

              <p className="about-intro">
                SipTime helps users build a consistent hydration
                routine without accounts, tracking, subscriptions,
                or distracting features.
              </p>

              <div className="reason-list">
                <ReasonRow
                  description="Choose intervals, fixed times, quiet hours, and snooze duration."
                  icon={<SlidersIcon />}
                  title="Flexible and configurable"
                />

                <ReasonRow
                  description="Receive small reminders without interrupting your workflow."
                  icon={<BellIcon />}
                  title="Designed to stay unobtrusive"
                />

                <ReasonRow
                  description="Uses Chrome alarms, notifications, and browser storage."
                  icon={<BrowserIcon />}
                  title="Browser-native"
                />

                <ReasonRow
                  description="Transparent implementation and documented privacy practices."
                  icon={<CodeIcon />}
                  title="Open source"
                />
              </div>
            </article>

            <article
              className="site-panel faq-card"
              id="faq"
            >
              <div className="section-heading">
                <p className="site-eyebrow">
                  Frequently asked
                </p>

                <h2>About SipTime</h2>

                <span
                  aria-hidden="true"
                  className="sketch-underline sketch-underline-small"
                />
              </div>

              <div className="faq-list">
                <details>
                  <summary>
                    Does SipTime collect personal data?
                  </summary>

                  <p>
                    No. SipTime stores reminder preferences using
                    browser storage and does not transmit them to an
                    external server.
                  </p>
                </details>

                <details>
                  <summary>
                    Can I set exact reminder times?
                  </summary>

                  <p>
                    Yes. You can use a repeating interval or configure
                    one or more fixed reminder times.
                  </p>
                </details>

                <details>
                  <summary>
                    Can I stop reminders while sleeping?
                  </summary>

                  <p>
                    Yes. Quiet hours support daytime and overnight
                    ranges, including schedules such as 11:30 PM to
                    8:00 AM.
                  </p>
                </details>

                <details>
                  <summary>
                    Does SipTime work in Brave?
                  </summary>

                  <p>
                    SipTime is designed for Chromium-based browsers,
                    including Google Chrome and Brave.
                  </p>
                </details>

                <details>
                  <summary>
                    Do I need to create an account?
                  </summary>

                  <p>
                    No. SipTime works without an account, login, or
                    subscription.
                  </p>
                </details>
              </div>
            </article>
          </div>
        </section>

        <section
          className="technology-section"
          id="technology"
        >
          <div className="site-container site-panel technology-inner">
            <div className="section-heading">
              <p className="site-eyebrow">
                Technology
              </p>

              <h2>
                A focused browser-extension stack
              </h2>
            </div>

            <div className="technology-grid">
              <TechnologyCell
                label="Extension"
                value="React, TypeScript, Manifest V3"
              />

              <TechnologyCell
                label="Build"
                value="Vite, Tailwind CSS"
              />

              <TechnologyCell
                label="Storage"
                value="Chrome Storage API"
              />

              <TechnologyCell
                label="Reminders"
                value="Chrome Alarms API"
              />

              <TechnologyCell
                label="Notifications"
                value="Chrome Notifications API"
              />

              <TechnologyCell
                label="Deployment"
                value="Vercel"
              />
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <div className="site-container site-panel privacy-inner">
            <div>
              <p className="site-eyebrow">
                Private by design
              </p>

              <h2>
                Your settings remain inside your browser.
              </h2>

              <p>
                SipTime does not collect personal identifiers,
                browsing history, website content, health data, or
                analytics. Your schedule and preferences are stored
                through the browser’s storage APIs.
              </p>
            </div>

            <a
              className="site-button site-button-secondary"
              href={PRIVACY_URL}
              rel="noreferrer"
              target="_blank"
            >
              Read privacy policy
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-top">
          <a
            aria-label="Return to the top of the SipTime homepage"
            className="site-brand footer-brand"
            href="#top"
          >
<span className="brand-icon">
  <LogoIcon
    alt=""
    className="brand-image"
  />
</span>

            <span>SipTime</span>
          </a>

          <nav
            aria-label="Footer navigation"
            className="footer-navigation"
          >
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#why-siptime">Why SipTime</a>
            <a href="#technology">Technology</a>
          </nav>

          <div className="footer-links">
            <a
              href={CHROME_WEB_STORE_URL}
              rel="noreferrer"
              target="_blank"
            >
              Chrome Web Store
            </a>

            <a
              href={GITHUB_URL}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="site-container footer-bottom">
          <p>© 2026 SipTime</p>

          <p>Built by Jayasurya Pazhani</p>
        </div>
      </footer>
    </div>
  );
}

export default SiteApp;