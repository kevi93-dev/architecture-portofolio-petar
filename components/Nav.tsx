"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const MOBILE_MENU_ID = "mobile-site-nav";

export default function Nav() {
  const rawPath = usePathname();
  const pathname = typeof rawPath === "string" ? rawPath : "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active =
      pathname === href || (href !== "/" && pathname.startsWith(href));
    return (
      <Link
        href={href}
        className={`group relative px-2 py-1 text-[13px] uppercase tracking-[0.1em] transition-colors ${
          active ? "text-black" : "text-zinc-600 hover:text-black"
        }`}
      >
        {label}
        <span
          className={`absolute right-2 -bottom-[2px] left-2 h-[1px] origin-left transition-transform duration-300 ease-out ${
            active
              ? "scale-x-100 bg-black"
              : "scale-x-0 bg-black group-hover:scale-x-100"
          }`}
        />
      </Link>
    );
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          scrolled ? "border-b border-zinc-200 bg-white/96" : "bg-white"
        }`}
      >
        <div className="page-shell flex h-16 w-full items-center justify-between md:h-16">
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-black md:text-lg"
          >
            petar stanojevic
          </Link>

          <nav className="hidden gap-6 opacity-80 md:flex">
            <NavLink href="/projects" label="projects" />
            <NavLink href="/about" label="about me" />
          </nav>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-zinc-700 transition outline-none focus-visible:ring-2 focus-visible:ring-black/25 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls={MOBILE_MENU_ID}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {mounted &&
        createPortal(
          <div
            id={MOBILE_MENU_ID}
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-300 ease-in-out ${
              open ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <button
              type="button"
              className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-black/25"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-10">
              <Link
                href="/projects"
                className="px-4 py-2 text-3xl font-semibold uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-800 md:text-5xl"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-3xl font-semibold uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-800 md:text-5xl"
                onClick={() => setOpen(false)}
              >
                About me
              </Link>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
