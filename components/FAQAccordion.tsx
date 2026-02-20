"use client";

import { useState } from "react";

const items: [string, string][] = [
  ["Can I freeze my membership?", "Yes, up to 2 months per year with prior notice. Contact our team via WhatsApp or visit the front desk to arrange a freeze."],
  ["How do cancellations work?", "Submit 14-day notice before your billing cycle. You can submit written notice at the front desk or through our contact form."],
  ["Do you offer trial sessions?", "Yes! We offer one complimentary trial class so you can experience our facilities and coaching before committing."],
  ["What should I bring on my first day?", "Bring comfortable workout clothes, a water bottle, a towel, and indoor shoes. We provide lockers and shower amenities."],
  ["Are personal trainers included?", "The Basic plan doesn't include PT. Standard includes 2 PT sessions/month, and Premium includes weekly sessions."],
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map(([q, a], i) => (
        <div key={q} className={`fade-up-delay-${i + 1} glass-card overflow-hidden`}>
          <button
            className="flex w-full items-center justify-between p-5 text-left font-semibold text-zinc-100 hover:text-brand-500 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {q}
            <span className={`text-brand-500 text-xl transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
            <p className="text-sm text-zinc-300 leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
