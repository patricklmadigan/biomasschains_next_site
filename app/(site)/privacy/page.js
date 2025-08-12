export const metadata = {
  title: "Privacy Policy — BiomassChains",
  description:
    "How BiomassChains handles personal data for enquiries, operations and analytics in line with EU/UK data protection law.",
};

export default function Privacy() {
  const updated = "12 August 2025"; // update when you change anything

  return (
    <article className="container py-16 prose prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {updated}</p>

      <h2>Who we are</h2>
      <p>
        <strong>BiomassChains</strong> is the controller of your personal data for this website.
        For privacy enquiries, please use our <a href="/contact">contact form</a>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Contact form data</strong> — name, email, company and your message.</li>
        <li><strong>Technical data</strong> — IP address, user agent and basic request logs (to secure and operate the site).</li>
        <li><strong>Analytics</strong> — we may use privacy-friendly, aggregated analytics. If we enable non-essential analytics, we will ask for consent first (see the Cookies Policy).</li>
      </ul>

      <h2>Why we use your data (legal bases)</h2>
      <ul>
        <li><strong>Responding to enquiries</strong> — to reply and follow up (<em>Art. 6(1)(b) pre-contractual steps</em>).</li>
        <li><strong>Operating and securing the site</strong> — fraud/abuse prevention, service quality (<em>Art. 6(1)(f) legitimate interests</em>).</li>
        <li><strong>Compliance</strong> — to meet legal obligations (<em>Art. 6(1)(c)</em>).</li>
        <li><strong>Analytics</strong> (if enabled) — to understand page performance (<em>Art. 6(1)(a) consent</em>).</li>
      </ul>

      <h2>How long we keep it</h2>
      <ul>
        <li><strong>Enquiries</strong>: up to 24 months, then deleted, unless needed longer for a live engagement or legal reasons.</li>
        <li><strong>Server logs</strong>: typically 30–90 days for security and troubleshooting.</li>
        <li><strong>Analytics</strong>: stored in aggregate only; no personal profiles.</li>
      </ul>

      <h2>Who receives it</h2>
      <p>
        Hosting and infrastructure providers (e.g., our hosting/CDN), email service for outbound messages, and
        carefully selected contractors working under confidentiality. We do not sell your data.
      </p>

      <h2>International transfers</h2>
      <p>
        Some providers may process data outside your country. Where required, we rely on appropriate safeguards (e.g., EU
        Standard Contractual Clauses or UK addenda).
      </p>

      <h2>Your rights</h2>
      <p>
        You can request access, correction, deletion, restriction, portability, or object to certain processing. You can
        also withdraw consent at any time (it won’t affect past lawful processing). Use the <a href="/contact">contact form</a>.
        You have the right to lodge a complaint with your local data protection authority.
      </p>

      <h2>Cookies</h2>
      <p>
        See our <a href="/cookies">Cookies Policy</a> for details and controls.
      </p>

      <h2>Updates</h2>
      <p>
        We may update this notice from time to time. We will post the latest version here with the effective date.
      </p>
    </article>
  );
}
