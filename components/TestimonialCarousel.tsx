import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {testimonials.map((t) => (
        <blockquote key={t.name} className="rounded-xl border border-zinc-800 p-4">
          <p>“{t.quote}”</p><footer className="mt-2 text-sm text-zinc-400">— {t.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}
