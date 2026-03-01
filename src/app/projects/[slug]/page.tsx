import Link from "next/link";
import { getProject, PROJECTS } from "@/app/data/projects";
import { getGalleryForSlug } from "@/app/lib/gallery";
import ProjectSlideshow from "@/../components/ProjectSlideshow";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="page-shell py-12 text-center">
        <p>Project not found.</p>
        <Link href="/projects" className="underline transition hover:opacity-80">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const gallery = getGalleryForSlug(project.slug);

  return (
    <div className="py-8 md:py-10">
      <div className="mx-auto mb-10 w-[96vw] bg-white md:w-[94vw] lg:w-[92vw]">
        <ProjectSlideshow
          images={gallery}
          alt={project.title}
          fit="contain"
          height="h-[80vh] md:h-[85vh]"
          sizes="(min-width: 1600px) 92vw, (min-width: 1200px) 94vw, (min-width: 768px) 96vw, 100vw"
          controls
        />
      </div>

      <article className="page-shell max-w-5xl">
        <header className="border-b border-zinc-200 pb-6 text-center md:pb-8">
          <p className="micro-label">project</p>
          <h1 className="mt-2 text-2xl font-bold lowercase md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.12em] text-zinc-500">
            {project.location} / {project.year}
          </p>
          {!!project.categories?.length && (
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-zinc-500">
              {project.categories.join(" / ")}
            </p>
          )}
        </header>

        <div className="pt-6 text-center">
          <Link href="/projects" className="text-sm underline transition hover:opacity-80">
            ← All projects
          </Link>
        </div>
      </article>
    </div>
  );
}
