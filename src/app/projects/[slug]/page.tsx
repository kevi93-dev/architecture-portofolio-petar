import Link from "next/link";
import { getProject, PROJECTS } from "@/app/data/projects";
import { getGalleryForSlug } from "@/app/lib/gallery";
import ProjectSlideshow from "@/../components/ProjectSlideshow";

export const dynamic = "force-static";

// ✅ Generate all project slugs at build time
export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// ✅ Project detail page (static)
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = getProject(slug);
  if (!p) {
    return (
      <main className="py-12 text-center">
        <p>Project not found.</p>
        <Link href="/projects" className="underline hover:opacity-80">
          ← Back to projects
        </Link>
      </main>
    );
  }

  const gallery = getGalleryForSlug(p.slug);

  return (
    <main className="bg-white py-0 md:py-0">
      {/* 🔹 Slideshow section */}
      <div className="relative w-full flex justify-center mb-10">
        <div className="w-[96vw] md:w-[94vw] lg:w-[92vw] bg-white">
          <ProjectSlideshow
            images={gallery}
            alt={p.title}
            fit="contain"
            height="h-[80vh] md:h-[85vh]"
            sizes="(min-width: 1600px) 92vw, (min-width: 1200px) 94vw, (min-width: 768px) 96vw, 100vw"
            controls
          />
        </div>
      </div>

      {/* 🔹 Project info */}
      <article className="container mx-auto px-4 md:px-6 max-w-5xl mt-10">
        <header className="pb-6 md:pb-8 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">{p.title}</h1>
          <p className="text-sm md:text-base text-zinc-600 mt-2">
            {p.location} · {p.year}
            {p.categories?.length ? ` · ${p.categories.join(", ")}` : ""}
          </p>
        </header>

        <div className="pt-6 text-center">
          <Link href="/projects" className="text-sm underline hover:opacity-80 transition">
            ← All projects
          </Link>
        </div>
      </article>
    </main>
  );
}
