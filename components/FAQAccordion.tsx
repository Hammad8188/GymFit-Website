const items = [
  ["Can I freeze my membership?", "Yes, up to 2 months per year with prior notice."],
  ["How do cancellations work?", "Submit 14-day notice before your billing cycle."],
  ["Do you offer trial sessions?", "Yes, one complimentary trial class."]
];

export function FAQAccordion() {
  return (
    <div className="space-y-2">
      {items.map(([q, a]) => (
        <details key={q} className="rounded border border-zinc-800 p-4">
          <summary className="cursor-pointer font-semibold">{q}</summary>
          <p className="mt-2 text-sm text-zinc-300">{a}</p>
        </details>
      ))}
    </div>
  );
}
