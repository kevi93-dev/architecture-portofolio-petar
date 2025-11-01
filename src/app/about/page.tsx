'use client';
import React from "react";
import { motion } from "framer-motion";
import { Building2, Ruler, Palette, Award, Mail, MapPin } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="grid grid-cols-1 gap-10 md:grid-cols-3"
          >
            <div className="md:col-span-2">
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
                I’m an architect based in Austria, exploring the intersection of architecture, landscape, and social context. My work reflects a curiosity for spaces that balance precision with atmosphere — from healthcare and education to housing and urban design.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="rounded-full">Healthcare</Badge>
                <Badge variant="secondary" className="rounded-full">Education</Badge>
                <Badge variant="secondary" className="rounded-full">Housing</Badge>
                <Badge variant="secondary" className="rounded-full">Urban Design</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-zinc-100">
                <img
                  src="/images/portrait.jpg"
                  alt="Portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key values */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: <Building2 className="h-6 w-6" />, title: "Context-first", desc:
                "Each project grows from its site, climate, and community — not from a fixed style.",
            },
            {
              icon: <Ruler className="h-6 w-6" />, title: "Clarity & function", desc:
                "Plans that work beautifully in daily use, with legible circulation and daylight.",
            },
            {
              icon: <Palette className="h-6 w-6" />, title: "Warm minimalism", desc:
                "Honest materials, calm color, and crafted details — inviting rather than austere.",
            },
          ].map((item, i) => (
            <Card key={i} className="rounded-3xl">
              <CardHeader>
                <div className="flex items-center gap-3 text-zinc-700">
                  {item.icon}
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Background */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Card className="rounded-3xl">
          <CardHeader>
            <div className="flex items-center gap-2 text-zinc-700">
              <Award className="h-5 w-5" />
              <h3 className="text-lg font-medium">Background</h3>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="relative ml-1 border-l border-zinc-200 pl-6">
              {[
                { year: "2025—now", text: "Independent architect focusing on healthcare and housing." },
                { year: "2022—2025", text: "Project architect for large-scale educational and healthcare projects." },
                { year: "2018—2022", text: "Participation in national and international competitions." },
                { year: "2014—2018", text: "Studies in architecture and urban design." },
              ].map((item, i) => (
                <li key={i} className="mb-6">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-zinc-900" />
                  <p className="text-sm font-medium text-zinc-900">{item.year}</p>
                  <p className="text-zinc-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl">
          <CardContent className="flex flex-col items-start gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <p className="mt-2 max-w-2xl text-zinc-600">
                Feel free to connect via social media or email.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-zinc-700">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:studio@example.com">studio@example.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Vienna, Austria</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="flex items-center gap-2">
                  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}