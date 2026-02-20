import type { Metadata } from "next";
import { PricingTable } from "@/components/PricingTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Memberships",
  description: "GymFit plans, pricing, and membership FAQs.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I freeze my membership?", acceptedAnswer: { "@type": "Answer", text: "Yes, up to 2 months per year with prior notice." } },
    { "@type": "Question", name: "How do cancellations work?", acceptedAnswer: { "@type": "Answer", text: "Submit 14-day notice before your billing cycle." } },
  ],
};

const perks = [
  { icon: "🏋️", text: "Modern equipment" },
  { icon: "🚿", text: "Premium locker rooms" },
  { icon: "📱", text: "Workout tracking app" },
  { icon: "🥤", text: "Juice bar & supplements" },
  { icon: "🅿️", text: "Free parking" },
  { icon: "📶", text: "Free Wi-Fi" },
];

export default function MembershipsPage() {
  return (
    <div className="space-y-20 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -right-40 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Flexible memberships designed to match your goals and budget. No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="container"><PricingTable /></section>

      <section className="container">
        <div className="fade-up text-center mb-8">
          <h2 className="section-title mx-auto">All Plans Include</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {perks.map((p, i) => (
            <div key={p.text} className={`fade-up-delay-${i + 1} glass-card p-4 text-center`}>
              <span className="text-2xl">{p.icon}</span>
              <p className="mt-2 text-sm text-zinc-300">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container max-w-2xl">
        <div className="fade-up mb-6">
          <h2 className="section-title">Join Now</h2>
          <p className="mt-3 text-zinc-400">Fill out the form and our team will get in touch within 24 hours.</p>
        </div>
        <LeadForm type="join" />
      </section>

      <section className="container max-w-2xl">
        <div className="fade-up mb-6">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <FAQAccordion />
      </section>
    </div>
  );
}
