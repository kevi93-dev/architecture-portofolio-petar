export default function PrivacyPage() {
  return (
    <main className="px-6 py-12 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

      <p>
        This website does not use cookies, analytics, or tracking tools.
        It is hosted by <strong>Vercel Inc.</strong> (San Francisco, USA), which may collect
        technical data such as IP addresses for security and performance purposes.
      </p>

      <p className="mt-4">
        No personal information is stored or processed by the site owner.
        Communication occurs only if you voluntarily contact the owner via email.
      </p>

      <p className="mt-4">
        This website contains links to external websites such as LinkedIn and Instagram.
        The site owner is not responsible for the content or privacy practices of these websites.
        Please refer to their respective privacy policies for more information.
      </p>

      <p className="mt-8 text-sm opacity-80">
        For questions about data protection, please contact:{" "}
        <a href="mailto:petar.stano@gmail.com" className="underline">
          petar.stano@gmail.com
        </a>
      </p>
    </main>
  );
}
