import ResetCookiePrefsButton from "../../../components/ResetCookiePrefsButton";

export const metadata = {
  title: "Cookies Policy — BiomassChains",
  description:
    "Information about cookies and similar technologies used by BiomassChains and how to control them.",
};

export default function Cookies() {
  const updated = "12 August 2025";

  return (
    <article className="container py-16 prose prose-invert max-w-3xl">
      <h1>Cookies Policy</h1>
      <p><strong>Last updated:</strong> {updated}</p>

      <h2>How we use cookies</h2>
      <p>
        This site uses cookies and similar technologies necessary for it to work. We may also use privacy-friendly,
        aggregated analytics. If any non-essential cookies are enabled, we will ask for your consent via the banner.
      </p>

      <h2>Types of cookies</h2>
      <ul>
        <li><strong>Strictly necessary</strong> — required to operate the site and forms. These don’t require consent.</li>
        <li><strong>Analytics (optional)</strong> — help us understand page usage. These are set only if you consent.</li>
      </ul>

      <h2>Managing your preferences</h2>
      <p>You can update your cookie choice at any time here:</p>
      <p><ResetCookiePrefsButton /></p>

      <h2>Third parties</h2>
      <p>
        If we enable analytics or other third-party services, they will be listed here with links to their policies.
        We avoid technologies that profile or track individuals across sites.
      </p>

      <h2>More information</h2>
      <p>
        See our <a href="/privacy">Privacy Policy</a> for legal bases, retention and your rights. For questions, use the{" "}
        <a href="/contact">contact form</a>.
      </p>
    </article>
  );
}
