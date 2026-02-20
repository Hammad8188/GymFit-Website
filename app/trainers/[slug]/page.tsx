import { notFound } from "next/navigation";
import { trainers } from "@/data/trainers";

export default async function TrainerDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) return notFound();
  return <div className="container py-10"><h1 className="text-4xl font-black">{trainer.name}</h1><p className="mt-3 text-zinc-300">{trainer.bio}</p><p className="mt-2">Certifications: {trainer.certs.join(", ")}</p></div>;
}
