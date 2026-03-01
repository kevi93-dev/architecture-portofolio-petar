"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ALL_CATEGORIES, PROJECTS, type Category } from "@app/data/projects";

type SortBy = "newest" | "oldest" | "title";

export default function ProjectsPage() {
  const [active, setActive] = useState<"all" | Category>("all");
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!sortRef.current) return;
      if (!sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSortOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const list = useMemo(() => {
    const filtered =
      active === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => (p.categories ?? []).includes(active));

    const sorted = [...filtered];
    if (sortBy === "newest") {
      sorted.sort((a, b) => b.year - a.year);
    } else if (sortBy === "oldest") {
      sorted.sort((a, b) => a.year - b.year);
    } else {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  }, [active, sortBy]);

  const sortLabel =
    sortBy === "newest" ? "newest" : sortBy === "oldest" ? "oldest" : "title a-z";

  return (
    <div className="page-shell py-12 md:py-16">
      <div className="flex flex-col gap-4 border-y border-zinc-200 py-4 text-sm md:flex-row md:items-center md:justify-between">
        <nav aria-label="Project category" className="min-w-0">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <li>
              <button
                onClick={() => setActive("all")}
                aria-pressed={active === "all"}
                className={`min-h-11 px-2 underline-offset-4 transition focus-visible:ring-2 focus-visible:ring-black/25 ${
                  active === "all"
                    ? "font-semibold underline"
                    : "opacity-80 hover:underline"
                }`}
              >
                all
              </button>
            </li>
            {ALL_CATEGORIES.map((cat) => (
              <li key={cat} className="flex items-center">
                <span className="mx-1 select-none opacity-40">.</span>
                <button
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                  className={`min-h-11 px-2 underline-offset-4 transition focus-visible:ring-2 focus-visible:ring-black/25 ${
                    active === cat
                      ? "font-semibold underline"
                      : "opacity-80 hover:underline"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-start gap-2 text-zinc-500 md:justify-end">
          <span className="micro-label">sort</span>
          <div ref={sortRef} className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
              className="inline-flex h-8 items-center gap-1 bg-transparent py-0 pl-0 text-[12px] lowercase tracking-[0.06em] text-zinc-700 outline-none transition hover:text-zinc-900 focus:outline-none focus:ring-0"
            >
              <span>{sortLabel}</span>
              <span
                aria-hidden="true"
                className={`text-[8px] text-zinc-400 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {sortOpen && (
              <div
                role="listbox"
                aria-label="Sort projects"
                className="absolute top-full right-0 z-20 mt-1 min-w-[120px] border border-zinc-200 bg-white py-1 shadow-[0_8px_24px_-20px_rgba(0,0,0,0.45)]"
              >
                {[
                  { value: "newest" as const, label: "newest" },
                  { value: "oldest" as const, label: "oldest" },
                  { value: "title" as const, label: "title a-z" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={sortBy === opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setSortOpen(false);
                    }}
                    className={`block w-full px-2 py-1 text-right text-[12px] lowercase tracking-[0.06em] transition ${
                      sortBy === opt.value
                        ? "font-bold text-zinc-900"
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {list.map((p) => (
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
    </div>
  );
}
