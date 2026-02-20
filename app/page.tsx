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
  openingHours: "Mo-Su 00:00-23:59",
};

const stats = [
  { number: "2,000+", label: "Active Members" },
  { number: "12", label: "Expert Trainers" },
  { number: "9", label: "Years of Results" },
  { number: "24/7", label: "Gym Access" },
];

const gymGallery = [
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
    alt: "Strength training area with modern gym equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200",
    alt: "Group workout class at GymFit",
  },
  {
    src: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=1200",
    alt: "Personal trainer coaching a member",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200",
    alt: "Cardio zone with treadmill row",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* ─── Hero Section ────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -right-40" />
        <div className="hero-glow -bottom-40 -left-20 opacity-50" />

        <div className="container relative z-10 grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div className="fade-left">
            <span className="badge mb-4 inline-block" style={{ animation: "bounceSubtle 2s ease-in-out infinite" }}>
              🔥 #1 Rated Gym in Downtown
            </span>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Build Strength.{" "}
              <span className="gradient-text">Burn Fat.</span> Feel
              Unstoppable.
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed max-w-lg">
              GymFit blends expert coaching, a vibrant community, and
              science-backed programs to transform your body and mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                Book Free Trial
              </Link>
              <Link href="/memberships" className="btn-outline text-lg">
                View Plans
              </Link>
            </div>
          </div>

          <div className="fade-right relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-500/10">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000"
                alt="Gym training session at GymFit"
                width={900}
                height={600}
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Section ───────────────────────────────── */}
      <section className="container fade-up">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`stat-card fade-up-delay-${i + 1}`}>
                <p className="stat-number">{stat.number}</p>
                <p className="mt-2 text-sm text-zinc-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gym Gallery ─────────────────────────────────── */}
      <section className="container">
        <div className="fade-up text-center mb-10">
          <h2 className="section-title mx-auto">Inside GymFit</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Explore our premium spaces, expert coaching moments, and high-energy atmosphere.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {gymGallery.map((image, index) => (
            <article
              key={image.src}
              className="gallery-card animate-on-scroll"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={700}
                className="h-64 w-full object-cover md:h-72"
              />
              <div className="gallery-card-overlay" />
              <p className="gallery-card-label">{image.alt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Membership Plans ────────────────────────────── */}
      <section className="container">
        <div className="fade-up text-center mb-10">
          <h2 className="section-title mx-auto">Membership Plans</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. Upgrade or downgrade
            anytime.
          </p>
        </div>
        <PricingTable />
      </section>

      {/* ─── Class Schedule ──────────────────────────────── */}
      <section className="container">
        <div className="fade-up mb-8">
          <h2 className="section-title">Class Schedule</h2>
          <p className="mt-4 text-zinc-400">
            From HIIT to Yoga — find a class that works for your goals and
            schedule.
          </p>
        </div>
        <ScheduleTable />
      </section>

      {/* ─── Meet Trainers ───────────────────────────────── */}
      <section className="container">
        <div className="fade-up text-center mb-10">
          <h2 className="section-title mx-auto">Meet Our Trainers</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Certified coaches dedicated to your success. Every session is
            tailored to your goals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <div key={t.slug} className={`fade-up-delay-${i + 1}`}>
              <TrainerCard trainer={t} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────── */}
      <section className="container">
        <div className="fade-up text-center mb-10">
          <h2 className="section-title mx-auto">
            Results & Testimonials
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Real stories from real members who transformed their lives at
            GymFit.
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* ─── CTA / Visit ─────────────────────────────────── */}
      <section className="container">
        <div className="fade-up glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black md:text-4xl">
              Ready to Start Your{" "}
              <span className="gradient-text">Transformation?</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
              Visit GymFit at 123 Fitness Ave, Downtown — Open 24/7. Or
              reach out on WhatsApp for instant support.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                Book Free Trial
              </Link>
              <a
                href="https://wa.me/15550009000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-lg inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
