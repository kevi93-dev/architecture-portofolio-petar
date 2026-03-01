"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  return (
    <div className="page-shell py-12 md:py-16">
      <section className="page-header border-b border-zinc-200 pb-8 md:pb-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <p className="micro-label">studio</p>
            <h1 className="page-title mt-2 lowercase">about</h1>
            <p className="page-subtitle">
              I am an architect based in Austria, exploring the intersection of
              architecture, landscape, and social context. My work balances
              precision with atmosphere, from healthcare and education to
              housing and urban design.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.1em] text-zinc-500">
              healthcare / education / housing / urban design
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-200">
              <Image
                src="/projects/villa-h/VH1.jpg"
                alt="Architectural studio visual"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Context-first",
              desc: "Each project grows from site, climate, and community rather than a fixed style.",
            },
            {
              title: "Clarity and function",
              desc: "Plans are optimized for daily life with legible circulation and quality daylight.",
            },
            {
              title: "Warm minimalism",
              desc: "Honest materials and calm palettes create spaces that feel precise and welcoming.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-zinc-200 pt-4">
              <h2 className="text-base font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 py-10">
        <h2 className="micro-label">background</h2>
        <ol className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            {
              year: "2025-present",
              text: "Independent architect focusing on healthcare and housing.",
            },
            {
              year: "2022-2025",
              text: "Project architect for large-scale educational and healthcare projects.",
            },
            {
              year: "2018-2022",
              text: "Participation in national and international competitions.",
            },
            {
              year: "2014-2018",
              text: "Studies in architecture and urban design.",
            },
          ].map((item) => (
            <li key={item.year} className="border-t border-zinc-200 pt-4">
              <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
                {item.year}
              </p>
              <p className="mt-2 text-sm text-zinc-700">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-10">
        <h2 className="micro-label">contact</h2>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-700">
          <a href="mailto:petar.stano@gmail.com" className="underline-offset-4 hover:underline">
            petar.stano@gmail.com
          </a>
          <span>Vienna, Austria</span>
          <a
            href="https://www.linkedin.com/in/petarstanojevic/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/petarstanojevic.work/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
