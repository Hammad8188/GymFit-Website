"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ type = "trial" }: { type?: "trial" | "join" | "contact" }) {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Submitting...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("type", type);

    const response = await fetch("/api/leads", { method: "POST", body: JSON.stringify(Object.fromEntries(formData.entries())) });
    setStatus(response.ok ? "Thanks! We will contact you shortly." : "Submission failed.");
    if (response.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-zinc-800 p-5">
      <input name="name" required placeholder="Name" className="w-full rounded bg-zinc-900 p-2" aria-label="Name" />
      <input name="email" type="email" required placeholder="Email" className="w-full rounded bg-zinc-900 p-2" aria-label="Email" />
      <input name="phone" required placeholder="Phone" className="w-full rounded bg-zinc-900 p-2" aria-label="Phone" />
      <input name="goal" placeholder="Fitness goal" className="w-full rounded bg-zinc-900 p-2" aria-label="Fitness goal" />
      <input name="preferredTime" placeholder="Preferred time" className="w-full rounded bg-zinc-900 p-2" aria-label="Preferred time" />
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button className="rounded bg-brand-500 px-4 py-2 font-semibold">Submit</button>
      {status && <p className="text-sm text-zinc-300">{status}</p>}
    </form>
  );
}
