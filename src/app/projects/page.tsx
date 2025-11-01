"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ALL_CATEGORIES, PROJECTS, type Category } from "@app/data/projects";

export default function ProjectsPage() {
  const [active, setActive] = useState<"all" | Category>("all");

  const list =
    active === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => (p.categories ?? []).includes(active));

  return (
    <main className="py-12 md:py-16">
      {/* Filter navigation */}
      <nav className="mt-5 text-sm" aria-label="Project category">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <li>
            <button
              onClick={() => setActive("all")}
              aria-pressed={active === "all"}
              className={`underline-offset-4 focus:outline-none transition ${
                active === "all"
                  ? "underline font-semibold"
                  : "hover:underline opacity-80"
              }`}
            >
              all
            </button>
          </li>
          {ALL_CATEGORIES.map((cat) => (
            <li key={cat} className="flex items-center">
              <span className="mx-1 opacity-40 select-none">·</span>
              <button
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`underline-offset-4 focus:outline-none transition ${
                  active === cat
                    ? "underline font-semibold"
                    : "hover:underline opacity-80"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="mt-8 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-zinc-200" />
                )}
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
    </main>
  );
}
