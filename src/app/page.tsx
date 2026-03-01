import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@app/data/projects";
import HeroCarousel from "@/../components/HeroCarousel";

export default function Home() {
  const heroImages = PROJECTS.filter((p) => p.image)
    .slice(0, 6)
    .map((p) => p.image!) as string[];
  const projects = PROJECTS.slice(0, 6);

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] md:h-[80vh]">
        <HeroCarousel images={heroImages} alt="Selected works" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </section>

      <section className="page-shell py-12 md:py-16">
        <header className="page-header border-b border-zinc-200 pb-6 md:pb-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-lg font-bold lowercase tracking-[0.06em] text-zinc-900 md:text-xl">
                selected projects
              </p>
              <p className="mt-2 max-w-3xl text-xs leading-relaxed text-zinc-600 md:text-sm">
                a curated overview of recent architecture, housing, and
                competition work.
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm lowercase tracking-[0.08em] text-zinc-700 transition hover:text-zinc-950"
            >
              view all projects
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug} className="group">
              <Link href={`/projects/${p.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-zinc-200" />
                  )}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/8" />
                </div>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold tracking-tight md:text-lg">
                    {p.title}
                  </h3>
                  <div className="text-right text-[11px] uppercase tracking-[0.1em] text-zinc-500">
                    <div>{p.location}</div>
                    <div>{p.year}</div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
