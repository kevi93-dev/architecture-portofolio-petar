export default function ImpressumPage() {
  return (
    <div className="page-shell max-w-3xl py-12 md:py-16">
      <p className="micro-label">legal</p>
      <h1 className="page-title mt-2 mb-8 lowercase">impressum</h1>

      <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
        <p>
          <strong>Website owner:</strong>
          <br />
          Petar Stanojevic
          <br />
          Vienna, Austria
        </p>

        <p>
          Email:{" "}
          <a href="mailto:petar.stano@gmail.com" className="underline">
            petar.stano@gmail.com
          </a>
        </p>

        <p>
          This website is a personal architecture portfolio created to present
          academic and professional projects. It is non-commercial and serves
          only to showcase design work.
        </p>

        <p>Responsible for content according to Section 25 MedienG: Petar Stanojevic</p>

        <p className="pt-4 text-xs uppercase tracking-[0.12em] text-zinc-500">
          Copyright {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  );
}
