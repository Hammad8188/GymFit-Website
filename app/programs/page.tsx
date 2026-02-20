import type { Metadata } from "next";
import { programs } from "@/data/programs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Structured coaching programs for every goal.",
};

export default function ProgramsPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -right-40 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Structured <span className="gradient-text">Programs</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Goal-oriented programs designed by our expert coaches. Whether you want to lose weight, build strength, or rehab an injury — we have a program for you.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <article key={p.slug} className={`fade-up-delay-${i + 1} glass-card p-7`}>
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-zinc-100">{p.title}</h2>
                <span className="badge">{p.duration}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">
                <span className="text-zinc-300 font-medium">Ideal for:</span> {p.audience}
              </p>
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Program Outline</h4>
                <ul className="mt-2 space-y-2">
                  {p.outline.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm text-zinc-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-400 transition-colors">
                Enquire Now →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
