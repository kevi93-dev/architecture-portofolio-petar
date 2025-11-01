//Homepage

import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@app/data/projects";
import HeroCarousel from "@/../components/HeroCarousel";

export default function Home() {
    const heroImages = PROJECTS.filter(p => p.image).slice(0, 6).map(p => p.image!) as string[];
    const projects = PROJECTS.slice(0, 6); // Selected Projects


  return (
    <main className="min-h-screen">
      <section className="relative h-[70vh] md:h-[80vh]">
        {/* slideshow */}
        <HeroCarousel images={heroImages} alt="Selected works"/>
        {/* readability gradient over images */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </section>

      {/* SELECTED PROJECTS */}
      <section className="py-12 md:py-16">
        <div className="flex justify-end mb-6">
          <Link href="/projects" className="text-sm">
              all projects →
          </Link>
        </div>

        <ul className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug} className="group">
              <Link href={`/projects/${p.slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-zinc-200" />
                  )}
                  {/* optional subtle overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Text */}
                <div className="mt-3 space-y-0.5">
                  <h3 className="text-base md:text-lg font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm opacity-70">
                    <span>{p.location}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </section>
    </main>
  );
}
