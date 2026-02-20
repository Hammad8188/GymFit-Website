import { plans } from "@/data/plans";
import Link from "next/link";

export function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan, i) => (
        <article
          key={plan.name}
          className={`fade-up-delay-${i + 1} glass-card p-7 flex flex-col ${plan.recommended ? "pricing-recommended" : ""
            }`}
        >
          <h3 className="text-xl font-bold text-zinc-100">{plan.name}</h3>
          <p className="mt-3">
            <span className="stat-number text-5xl">${plan.price}</span>
            <span className="text-sm text-zinc-400 ml-1">/mo</span>
          </p>
          <ul className="mt-5 flex-1 space-y-3 text-sm text-zinc-300">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`mt-6 block text-center rounded-lg py-3 font-semibold transition-all ${plan.recommended
                ? "btn-primary"
                : "border border-zinc-700 text-zinc-200 hover:border-brand-500 hover:text-brand-500"
              }`}
          >
            Get Started
          </Link>
        </article>
      ))}
    </div>
  );
}
