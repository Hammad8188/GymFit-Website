import type { Metadata } from "next";
import { trainers } from "@/data/trainers";
import { TrainerCard } from "@/components/TrainerCard";

export const metadata: Metadata = { title: "Trainers", description: "Certified GymFit coaches and specialties." };

export default function TrainersPage() {
  return <div className="container py-10"><h1 className="text-4xl font-black">Trainers</h1><div className="mt-6 grid gap-4 md:grid-cols-2">{trainers.map((t)=><TrainerCard key={t.slug} trainer={t} />)}</div></div>;
}
