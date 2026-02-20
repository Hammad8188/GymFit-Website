import type { Metadata } from "next";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results",
  description: "Member transformations and testimonials.",
};

const transformations = [
  { name: "Sam Johnson", result: "Lost 9kg in 12 weeks", program: "Weight Loss (8 weeks)", detail: "Through a combination of HIIT classes, personalized nutrition, and weekly coaching check-ins." },
  { name: "David Chen", result: "Ran first half-marathon", program: "Body Recomp (10 weeks)", detail: "Built endurance through progressive cardio training and hybrid strength programming." },
  { name: "Nina Williams", result: "Gained 5kg lean muscle", program: "Strength Builder (12 weeks)", detail: "Focused on progressive overload with compound lifts and optimized protein intake." },
];

export default function ResultsPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -left-20 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Real <span className="gradient-text">Results</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Our members achieve incredible transformations. Results vary by consistency, nutrition, and recovery — but the dedication always pays off.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="fade-up mb-8"><h2 className="section-title">Transformation Stories</h2></div>
        <div className="grid gap-6 md:grid-cols-3">
          {transformations.map((t, i) => (
            <div key={t.name} className={`fade-up-delay-${i + 1} glass-card p-6`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-brand-500 font-bold text-lg mb-4">{t.name[0]}</div>
              <h3 className="text-lg font-bold text-zinc-100">{t.name}</h3>
              <p className="mt-1 gradient-text font-bold text-xl">{t.result}</p>
              <p className="mt-1 text-xs text-zinc-500">Program: {t.program}</p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="fade-up text-center mb-10"><h2 className="section-title mx-auto">What Members Say</h2></div>
        <TestimonialCarousel />
      </section>

      <section className="container">
        <div className="fade-up glass-card p-8 text-center">
          <h2 className="text-2xl font-bold">Your Transformation Starts <span className="gradient-text">Today</span></h2>
          <p className="mt-3 text-zinc-400 max-w-lg mx-auto">Join the hundreds of members who&apos;ve already changed their lives.</p>
          <Link href="/contact" className="btn-primary inline-block mt-6">Start Your Journey</Link>
        </div>
      </section>
    </div>
  );
}
