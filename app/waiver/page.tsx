"use client";

import { useState } from "react";

export default function WaiverPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-black">Digital Waiver</h1>
      <form className="mt-4 max-w-lg space-y-3" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <input required className="w-full rounded bg-zinc-900 p-2" placeholder="Full name" />
        <input required type="date" className="w-full rounded bg-zinc-900 p-2" />
        <label className="flex items-center gap-2"><input required type="checkbox" /> I acknowledge physical activity risk and agree to participate.</label>
        <button className="rounded bg-brand-500 px-4 py-2">Acknowledge Waiver</button>
      </form>
      {submitted && <p className="mt-3 text-green-400">Waiver acknowledged.</p>}
    </div>
  );
}
