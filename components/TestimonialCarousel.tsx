import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {testimonials.map((t, i) => (
        <blockquote
          key={t.name}
          className={`fade-up-delay-${i + 1} glass-card testimonial-card p-6`}
        >
          <div className="relative z-10">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <svg key={j} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f97316">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-zinc-200 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-brand-500 font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{t.name}</p>
                <p className="text-xs text-zinc-500">GymFit Member</p>
              </div>
            </footer>
          </div>
        </blockquote>
      ))}
    </div>
  );
}
