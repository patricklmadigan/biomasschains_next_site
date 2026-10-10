export const metadata = {
  title: "Privacy Policy | BiomassChains",
  description:
    "How BiomassChains handles enquiry, mandate, technical and analytics data for this website.",
};

export default function Privacy() {
  const updated = "30 May 2026";

  return (
    <article className="container py-16 prose prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {updated}</p>

      <h2>Who we are</h2>
      <p>
        <strong>BiomassChains</strong> is a specialist biomass supply-chain advisory and execution
        practice. For this website, BiomassChains is the controller of personal data submitted
        through the contact form or created by normal website operation.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Mandate enquiry data</strong> - name, email, company and the project context included in your message.</li>
        <li><strong>Anti-spam and form metadata</strong> - basic timing and page-path information used to protect the contact form.</li>
        <li><strong>Technical logs</strong> - IP address, user agent, request details and error logs used to operate and secure the site.</li>
        <li><strong>Cookieless analytics</strong> - aggregated page-usage information through Plausible Analytics.</li>
      </ul>

      <h2>Why we use it</h2>
      <ul>
        <li><strong>To assess and respond to serious mandate enquiries</strong> - including whether the enquiry has a defined geography, feedstock, volume, buyer, investor or project-owner context.</li>
        <li><strong>To operate and secure the website</strong> - including spam prevention, troubleshooting and service reliability.</li>
        <li><strong>To understand website performance</strong> - using privacy-focused, aggregated analytics rather than advertising trackers.</li>
        <li><strong>To meet legal and accounting obligations</strong> - where a paid engagement follows.</li>
      </ul>

      <h2>Legal bases</h2>
      <ul>
        <li><strong>Pre-contract steps</strong> - where you ask us to consider or respond to a mandate enquiry.</li>
        <li><strong>Legitimate interests</strong> - operating a secure website, screening unsuitable enquiries and understanding aggregate site use.</li>
        <li><strong>Legal obligation</strong> - where records must be retained for tax, accounting or regulatory reasons.</li>
      </ul>

      <h2>Analytics</h2>
      <p>
        The site uses Plausible Analytics. Plausible is designed to operate without cookies or
        persistent cross-site identifiers. It gives aggregate information such as page views and
        referrers, not individual visitor profiles.
      </p>

      <h2>Who receives data</h2>
      <p>
        Data may be processed by service providers needed to run the site and respond to enquiries,
        including website hosting/CDN, email delivery, analytics and professional advisers where
        necessary. We do not sell personal data.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li><strong>Mandate enquiries</strong> - typically up to 24 months, unless a paid engagement, legal issue or continuing commercial context requires longer retention.</li>
        <li><strong>Technical logs</strong> - typically 30 to 90 days, unless needed longer for security or troubleshooting.</li>
        <li><strong>Engagement records</strong> - retained as needed for contract, legal, accounting and professional obligations.</li>
      </ul>

      <h2>International transfers</h2>
      <p>
        Some service providers may process data outside the UK or EEA. Where required, appropriate
        safeguards such as standard contractual clauses or equivalent protections are used.
      </p>

      <h2>Your rights</h2>
      <p>
        You can request access, correction, deletion, restriction, portability or object to certain
        processing. You also have the right to complain to the UK Information Commissioner&apos;s Office.
        Use the <a href="/contact">contact page</a> for privacy requests.
      </p>

      <h2>Cookies</h2>
      <p>
        See the <a href="/cookies">Cookies Policy</a> for details of cookies and similar technologies.
      </p>

      <h2>Updates</h2>
      <p>
        This notice may be updated as the site or services change. The current version will be kept
        on this page.
      </p>
    </article>
  );
}
