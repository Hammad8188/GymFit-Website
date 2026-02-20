import Image from "next/image";
import Link from "next/link";
import { PricingTable } from "@/components/PricingTable";
import { ScheduleTable } from "@/components/ScheduleTable";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { trainers } from "@/data/trainers";
import { TrainerCard } from "@/components/TrainerCard";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "GymFit",
  address: "123 Fitness Ave, Downtown",
  telephone: "+1 555-000-9000",
  openingHours: "Mo-Su 00:00-23:59"
};

export default function HomePage() {
  return (
    <div className="container space-y-12 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div><h1 className="text-5xl font-black">Build Strength. Burn Fat. Feel Unstoppable.</h1><p className="mt-4 text-zinc-300">GymFit blends coaching, community, and science-backed programs.</p><div className="mt-6 flex gap-3"><Link href="/contact" className="rounded bg-brand-500 px-4 py-2">Book Free Trial</Link><Link href="/memberships" className="rounded border border-zinc-700 px-4 py-2">View Plans</Link></div></div>
        <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000" alt="Gym training" width={900} height={600} className="rounded-xl" priority />
      </section>
      <section><h2 className="mb-4 text-2xl font-bold">Membership Plans</h2><PricingTable /></section>
      <section><h2 className="mb-4 text-2xl font-bold">Class Schedule</h2><ScheduleTable /></section>
      <section><h2 className="mb-4 text-2xl font-bold">Meet Trainers</h2><div className="grid gap-4 md:grid-cols-2">{trainers.map((t)=><TrainerCard key={t.slug} trainer={t} />)}</div></section>
      <section><h2 className="mb-4 text-2xl font-bold">Results & Testimonials</h2><TestimonialCarousel /></section>
      <section className="rounded-xl border border-zinc-800 p-6"><h2 className="text-2xl font-bold">Visit GymFit</h2><p className="mt-2 text-zinc-300">123 Fitness Ave, Downtown • Open 24/7</p><p className="mt-3"><a className="text-brand-500" href="https://wa.me/15550009000">WhatsApp Us</a></p></section>
    </div>
  );
}
