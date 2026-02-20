"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ type = "trial" }: { type?: "trial" | "join" | "contact" }) {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("type", type);

    const response = await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });
    setLoading(false);
    setStatus(response.ok ? "✅ Thanks! We will contact you shortly." : "❌ Submission failed. Please try again.");
    if (response.ok) form.reset();
  }

  const titles: Record<string, string> = {
    trial: "🏋️ Book Your Free Trial",
    join: "💪 Join GymFit Today",
    contact: "📩 Get In Touch",
  };

  return (
    <form onSubmit={onSubmit} className="fade-up glass-card p-6 space-y-4">
      <h3 className="text-xl font-bold text-zinc-100">{titles[type] || "Contact Us"}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Full Name" className="form-input" aria-label="Name" />
        <input name="email" type="email" required placeholder="Email Address" className="form-input" aria-label="Email" />
        <input name="phone" required placeholder="Phone Number" className="form-input" aria-label="Phone" />
        <input name="goal" placeholder="Fitness Goal" className="form-input" aria-label="Fitness goal" />
      </div>
      <input name="preferredTime" placeholder="Preferred Time (e.g. Morning, Evening)" className="form-input" aria-label="Preferred time" />
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button className="btn-primary w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
      {status && <p className="text-sm text-zinc-300">{status}</p>}
    </form>
  );
}
