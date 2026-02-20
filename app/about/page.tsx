import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "GymFit story, mission, and certifications.",
};

const values = [
  { icon: "🎯", title: "Results-Driven", desc: "Every program is built on evidence-based training principles and measurable outcomes." },
  { icon: "🤝", title: "Community First", desc: "We foster a supportive environment where every member feels welcome and motivated." },
  { icon: "🏆", title: "Expert Coaching", desc: "12 certified trainers with specializations from powerlifting to yoga and rehabilitation." },
  { icon: "💡", title: "Innovation", desc: "We continually upgrade our equipment, programs, and technology to stay ahead." },
];

const milestones = [
  { year: "2017", event: "GymFit founded with 200 sq ft studio" },
  { year: "2019", event: "Expanded to 5,000 sq ft facility" },
  { year: "2021", event: "Launched online coaching programs" },
  { year: "2023", event: "Reached 2,000+ members milestone" },
  { year: "2025", event: "Opened second location in Midtown" },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -left-20 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <span className="badge mb-4 inline-block">Est. 2017</span>
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              About <span className="gradient-text">GymFit</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Our mission is to make elite coaching accessible to everyone.
              With 2,000+ members, 12 certified trainers, and 9 years of
              results, we&apos;ve built more than a gym — we&apos;ve built a community.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="container">
        <div className="fade-up relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200"
            alt="GymFit facility interior"
            width={1200}
            height={500}
            className="w-full object-cover h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xl font-bold text-white">State-of-the-art facility, open 24/7</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container">
        <div className="fade-up text-center mb-10">
          <h2 className="section-title mx-auto">Our Values</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className={`fade-up-delay-${i + 1} glass-card p-6 text-center`}>
              <span className="text-4xl">{v.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-zinc-100">{v.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container">
        <div className="fade-up mb-10">
          <h2 className="section-title">Our Journey</h2>
        </div>
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <div key={m.year} className={`fade-up-delay-${i + 1} flex items-start gap-6`}>
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 text-brand-500 font-bold text-sm border border-brand-500/30">
                  {m.year}
                </div>
                {i < milestones.length - 1 && <div className="mt-2 h-10 w-0.5 bg-zinc-800" />}
              </div>
              <p className="pt-3 text-zinc-300">{m.event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
