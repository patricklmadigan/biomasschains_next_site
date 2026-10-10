export const metadata = {
  title: "Cookies Policy | BiomassChains",
  description:
    "How BiomassChains uses cookies, local storage and cookieless analytics on this website.",
};

export default function Cookies() {
  const updated = "30 May 2026";

  return (
    <article className="container py-16 prose prose-invert max-w-3xl">
      <h1>Cookies Policy</h1>
      <p><strong>Last updated:</strong> {updated}</p>

      <h2>Current position</h2>
      <p>
        This site does not currently use advertising cookies, retargeting pixels or cross-site
        tracking cookies.
      </p>

      <h2>Strictly necessary technologies</h2>
      <p>
        The website may use essential technical features needed to serve pages, protect the contact
        form, keep the site secure and maintain basic service reliability. These are not used for
        advertising or visitor profiling.
      </p>

      <h2>Analytics</h2>
      <p>
        The site uses Plausible Analytics to understand aggregate page usage. Plausible is a
        privacy-focused analytics tool designed to work without cookies or persistent identifiers.
        It helps show which pages are being used without building individual visitor profiles.
      </p>

      <h2>Future changes</h2>
      <p>
        If BiomassChains adds any non-essential cookies or similar technologies that require consent,
        this policy will be updated and an appropriate consent mechanism will be added.
      </p>

      <h2>More information</h2>
      <p>
        See the <a href="/privacy">Privacy Policy</a> for information about enquiry data, technical
        logs, analytics, retention and your rights.
      </p>
    </article>
  );
}
