import { plans } from "@/data/plans";

export function PricingTable() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <article key={plan.name} className={`rounded-xl border p-6 ${plan.recommended ? "border-brand-500" : "border-zinc-800"}`}>
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="mt-2 text-3xl font-black">${plan.price}<span className="text-sm font-normal">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">{plan.features.map((f) => <li key={f}>• {f}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}
