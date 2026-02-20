import type { Metadata } from "next";
import { trainers } from "@/data/trainers";
import { TrainerCard } from "@/components/TrainerCard";

export const metadata: Metadata = {
  title: "Trainers",
  description: "Certified GymFit coaches and specialties.",
};

export default function TrainersPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -right-40 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Meet Our <span className="gradient-text">Trainers</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Every trainer at GymFit is nationally certified and passionate about helping you reach your goals. Book a session and experience the difference.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <div key={t.slug} className={`fade-up-delay-${i + 1}`}>
              <TrainerCard trainer={t} />
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="fade-up glass-card p-8 text-center">
          <h2 className="text-2xl font-bold">Want to Join Our Team?</h2>
          <p className="mt-3 text-zinc-400 max-w-lg mx-auto">
            We&apos;re always looking for passionate, certified trainers. Send your resume and certifications to{" "}
            <span className="text-brand-500">careers@gymfit.com</span>
          </p>
        </div>
      </section>
    </div>
  );
}
