import { notFound } from "next/navigation";
import { trainers } from "@/data/trainers";
import Link from "next/link";

export default async function TrainerDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) return notFound();

  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -left-20 opacity-30" />
        <div className="container relative z-10 py-20">
          <Link href="/trainers" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors mb-6 inline-block">
            ← Back to Trainers
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8 fade-up">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-4xl font-black text-white flex-shrink-0" style={{ animation: "scaleIn 0.5s ease-out both" }}>
              {trainer.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <h1 className="text-4xl font-black md:text-5xl">{trainer.name}</h1>
              <p className="mt-4 text-lg text-zinc-300 leading-relaxed max-w-2xl">{trainer.bio}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {trainer.specialties.map((s) => (<span key={s} className="badge">{s}</span>))}
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase text-zinc-400 tracking-wider">Certifications</h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  {trainer.certs.map((c) => (
                    <span key={c} className="rounded-lg bg-zinc-800/60 border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300">📜 {c}</span>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="btn-primary inline-block mt-8">
                Book a Session with {trainer.name.split(" ")[0]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
