"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export default function Nav() {
  const rawPath = usePathname();
  const pathname = typeof rawPath === "string" ? rawPath : "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 🔹 Change background when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔹 Close menu when navigating
  useEffect(() => setOpen(false), [pathname]);

  // 🔹 Prevent body scroll when menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active =
      pathname === href || (href !== "/" && pathname.startsWith(href));
    return (
      <Link
        href={href}
        className={`relative px-2 py-1 text-sm tracking-wide uppercase transition-colors group ${
          active ? "text-black" : "text-zinc-600 hover:text-black"
        }`}
      >
        {label}
        <span
          className={`absolute left-2 right-2 -bottom-[2px] h-[1px] origin-left transition-transform duration-300 ease-out ${
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
      {/* 🔹 Top header bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 backdrop-blur-sm ${
          scrolled ? "bg-white/95 border-b border-zinc-200" : "bg-white/80"
        }`}
      >
        <div className="flex items-center justify-between w-full h-14 md:h-16">
          {/* Left name */}
          <Link
            href="/"
            className="font-medium tracking-tight text-base md:text-lg text-black pl-6 md:pl-10"
          >
            petar stanojevic
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6 pr-6 md:pr-10 opacity-80">
            <NavLink href="/projects" label="projects" />
            <NavLink href="/about" label="about me" />
          </nav>

          {/* Hamburger button */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition mr-4 outline-none focus:outline-none active:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
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

      {/* 🔹 Fullscreen mobile overlay menu (portal rendered) */}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-300 ease-in-out ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <nav className="flex flex-col items-center gap-10">
              <Link
                href="/projects"
                className="uppercase tracking-wide text-3xl md:text-5xl font-semibold text-zinc-500 hover:text-zinc-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/about"
                className="uppercase tracking-wide text-3xl md:text-5xl font-semibold text-zinc-500 hover:text-zinc-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                ABOUT ME
              </Link>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
