import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-[11px] uppercase tracking-[0.12em] text-zinc-500 md:py-10 md:text-xs">
      <div className="page-shell">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span>Copyright {year}</span>
          <span className="opacity-40">/</span>
          <span>All rights reserved</span>
          <span className="opacity-40">/</span>
          <Link href="/privacy" className="transition hover:text-zinc-900">
            Privacy policy
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/impressum" className="transition hover:text-zinc-900">
            Impressum
          </Link>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-zinc-700 md:gap-5">
          <a
            href="https://www.instagram.com/petarstanojevic.work/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-11 w-11 items-center justify-center transition hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zM17.5 6A1.5 1.5 0 1 1 16 7.5 1.5 1.5 0 0 1 17.5 6z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/petarstanojevic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center transition hover:text-black"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8 8.5h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-5.93c0-1.41-.02-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.11V23H8V8.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
