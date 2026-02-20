import type { Metadata } from "next";
import { ScheduleTable } from "@/components/ScheduleTable";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Classes",
  description: "Weekly gym class schedule with booking request.",
};

const classTypes = [
  { icon: "⚡", name: "HIIT", desc: "High-intensity intervals to maximize calorie burn and improve cardiovascular fitness." },
  { icon: "💪", name: "Strength", desc: "Progressive overload training to build muscle, increase strength, and boost metabolism." },
  { icon: "🧘", name: "Yoga", desc: "Improve flexibility, balance, and mental clarity through guided yoga sessions." },
  { icon: "🥊", name: "Boxing", desc: "Boxing fundamentals for fitness — burn calories, build coordination, and release stress." },
];

export default function ClassesPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -left-20 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Our <span className="gradient-text">Classes</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              From high-intensity circuits to calming yoga — find the perfect class for your goals and schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classTypes.map((ct, i) => (
            <div key={ct.name} className={`fade-up-delay-${i + 1} glass-card p-6 text-center`}>
              <span className="text-4xl">{ct.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-zinc-100">{ct.name}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{ct.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="fade-up mb-8">
          <h2 className="section-title">Weekly Schedule</h2>
          <p className="mt-3 text-zinc-400">All classes are included with Standard and Premium memberships.</p>
        </div>
        <ScheduleTable />
      </section>

      <section className="container max-w-2xl">
        <div className="fade-up mb-6">
          <h2 className="section-title">Book a Trial Class</h2>
          <p className="mt-3 text-zinc-400">Try any class for free — no commitment required.</p>
        </div>
        <LeadForm type="trial" />
      </section>
    </div>
  );
}
