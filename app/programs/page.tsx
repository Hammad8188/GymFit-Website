import type { Metadata } from "next";
import { programs } from "@/data/programs";

export const metadata: Metadata = { title: "Programs", description: "Structured coaching programs for every goal." };

export default function ProgramsPage() {
  return <div className="container py-10"><h1 className="text-4xl font-black">Programs</h1><div className="mt-6 grid gap-4 md:grid-cols-2">{programs.map((p)=><article key={p.slug} className="rounded border border-zinc-800 p-4"><h2 className="font-bold">{p.title}</h2><p className="text-sm text-zinc-300 mt-2">For: {p.audience}</p><ul className="mt-2 text-sm">{p.outline.map((o)=><li key={o}>• {o}</li>)}</ul></article>)}</div></div>;
}
