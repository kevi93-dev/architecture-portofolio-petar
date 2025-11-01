export default function ImpressumPage() {
  return (
    <main className="px-6 py-12 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-6">Impressum</h1>

      <p><strong>Website Owner:</strong></p>
      <p>Petar Stanojevic</p>
      <p>Vienna, Austria</p>
      <p>
        Email:{" "}
        <a href="mailto:petar.stano@gmail.com" className="underline">
          petar.stano@gmail.com
        </a>
      </p>

      <p className="mt-4">
        This website is a personal architecture portfolio created to present academic and
        professional projects. It is non-commercial and serves only to showcase design work.
      </p>

      <p className="mt-4">
        Responsible for content according to §25 MedienG: Petar Stanojevic
      </p>

      <p className="mt-8 text-sm opacity-80">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </main>
  );
}
