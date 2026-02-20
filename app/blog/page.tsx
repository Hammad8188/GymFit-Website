import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";

export const metadata: Metadata = { title: "Blog", description: "Workout and nutrition guidance from GymFit coaches." };

export default function BlogPage() {
  return <div className="container py-10"><h1 className="text-4xl font-black">Blog</h1><div className="mt-6 space-y-4">{posts.map((p)=><article key={p.slug} className="rounded border border-zinc-800 p-4"><h2 className="font-semibold"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2><p className="text-zinc-300 text-sm mt-1">{p.excerpt}</p></article>)}</div></div>;
}
