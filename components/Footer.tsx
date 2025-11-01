export default function Footer() {
  const year = new Date().getFullYear();

  const linkCls =
    "underline hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-black/20";
  const iconCls =
    "h-5 w-5 fill-current hover:opacity-80 transition";

  return (
    <footer className="px-6 py-10 border-t text-sm text-zinc-700 text-center">
      {/* Top line */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span>Copyright © {year}</span>
        <span className="opacity-40">|</span>
        <span>All rights reserved</span>
        <span className="opacity-40">|</span>
        <a href="/privacy" className={linkCls}>
          Privacy Policy
        </a>
        <span className="opacity-40">|</span>
        <a href="/impressum" className={linkCls}>
          Impressum
        </a>
      </div>

      {/* Social icons */}
      <div className="mt-4 flex items-center justify-center gap-5 text-zinc-900">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/petarstanojevic/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            className={iconCls}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8 8.5h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-5.93c0-1.41-.02-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.11V23H8V8.5z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/petarstanojevic.work/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={iconCls}
          >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zM17.5 6A1.5 1.5 0 1 1 16 7.5 1.5 1.5 0 0 1 17.5 6z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
