import Link from "next/link";

type Trainer = { name: string; slug: string; specialties: string[]; bio: string; certs: string[] };

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="rounded-xl border border-zinc-800 p-5">
      <h3 className="text-xl font-semibold">{trainer.name}</h3>
      <p className="mt-2 text-sm text-zinc-300">{trainer.bio}</p>
      <p className="mt-2 text-xs text-zinc-400">{trainer.specialties.join(" • ")}</p>
      <Link href={`/trainers/${trainer.slug}`} className="mt-4 inline-block text-brand-500">Book Session</Link>
    </article>
  );
}
