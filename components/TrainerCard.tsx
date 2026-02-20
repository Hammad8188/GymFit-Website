import Link from "next/link";

type Trainer = {
  name: string;
  slug: string;
  specialties: string[];
  bio: string;
  certs: string[];
};

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="glass-card p-6 group h-full">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-2xl font-black text-white transition-transform duration-300 group-hover:scale-110">
        {trainer.name.split(" ").map((n) => n[0]).join("")}
      </div>
      <h3 className="text-xl font-bold text-zinc-100">{trainer.name}</h3>
      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{trainer.bio}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {trainer.specialties.map((s) => (
          <span key={s} className="badge">{s}</span>
        ))}
      </div>
      <p className="mt-3 text-xs text-zinc-500">📜 {trainer.certs.join(" · ")}</p>
      <Link
        href={`/trainers/${trainer.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-400 transition-colors group/link"
      >
        Book Session
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </Link>
    </article>
  );
}
