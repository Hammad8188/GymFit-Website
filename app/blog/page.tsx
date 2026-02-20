import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Workout and nutrition guidance from GymFit coaches.",
};

export default function BlogPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -right-40 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              GymFit <span className="gradient-text">Blog</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Expert tips on training, nutrition, and recovery from our certified coaches.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <article key={p.slug} className={`fade-up-delay-${i + 1} glass-card p-6 group`}>
              <div className="flex items-center gap-2 mb-3"><span className="badge">Article</span></div>
              <h2 className="text-xl font-bold text-zinc-100 group-hover:text-brand-500 transition-colors">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-400 transition-colors group/link">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
