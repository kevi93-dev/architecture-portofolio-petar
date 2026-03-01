export default function PrivacyPage() {
  return (
    <div className="page-shell max-w-3xl py-12 md:py-16">
      <p className="micro-label">legal</p>
      <h1 className="page-title mt-2 mb-8 lowercase">privacy policy</h1>

      <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
        <p>
          This website does not use cookies, analytics, or tracking tools. It is
          hosted by <strong>Vercel Inc.</strong> (San Francisco, USA), which may
          collect technical data such as IP addresses for security and
          performance purposes.
        </p>

        <p>
          No personal information is stored or processed by the site owner.
          Communication occurs only if you voluntarily contact the owner via
          email.
        </p>

        <p>
          This website contains links to external websites such as LinkedIn and
          Instagram. The site owner is not responsible for the content or
          privacy practices of these websites.
        </p>

        <p className="pt-3">
          For questions about data protection, contact{" "}
          <a href="mailto:petar.stano@gmail.com" className="underline">
            petar.stano@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
