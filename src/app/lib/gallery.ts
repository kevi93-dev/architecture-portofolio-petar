import fs from "node:fs";
import path from "node:path";

const IMAGE_RE = /\.(png|jpe?g|webp|gif|avif)$/i;

// Puts *_Main, *main*, *cover* first, then natural sort (1,2,10…)
function sortWithCoverFirst(a: string, b: string) {
  const isCover = (n: string) => /(main|cover)/i.test(n);
  if (isCover(a) && !isCover(b)) return -1;
  if (!isCover(a) && isCover(b)) return 1;
  return new Intl.Collator(undefined, { numeric: true, sensitivity: "base" }).compare(a, b);
}

/** Returns public URLs like /projects/<slug>/01.jpg */
export function getGalleryForSlug(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  try {
    const files = fs
      .readdirSync(dir)
      .filter((f) => IMAGE_RE.test(f))
      .sort(sortWithCoverFirst);

    return files.map((name) => `/projects/${slug}/${name}`);
  } catch {
    return [];
  }
}
