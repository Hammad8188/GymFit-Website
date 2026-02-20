"use client";

import { useState } from "react";

export default function WaiverPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-12 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -left-20 opacity-20" />
        <div className="container relative z-10 py-20 max-w-2xl">
          <h1 className="text-4xl font-black fade-up">Digital Waiver</h1>
          <p className="mt-4 text-zinc-400 fade-up-delay-1">
            Please read and acknowledge the waiver below before using GymFit facilities.
          </p>

          <div className="mt-8 glass-card p-6 fade-up-delay-2">
            <div className="mb-6 rounded-lg bg-zinc-900/60 p-4 text-sm text-zinc-400 leading-relaxed max-h-40 overflow-y-auto border border-zinc-800">
              <p>
                I understand that physical exercise involves inherent risks including but not limited to muscle strain, sprains, fractures, and cardiovascular events. I voluntarily assume all risks associated with my participation in fitness activities at GymFit. I release GymFit, its trainers, and staff from any liability for injuries sustained during workouts.
              </p>
            </div>

            {!submitted ? (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <input required className="form-input" placeholder="Full Legal Name" />
                <input required type="date" className="form-input" />
                <label className="flex items-start gap-3 text-sm text-zinc-300 cursor-pointer">
                  <input required type="checkbox" className="mt-1 accent-brand-500" />
                  <span>I acknowledge the physical activity risks and agree to participate voluntarily at GymFit.</span>
                </label>
                <button className="btn-primary">Sign Waiver</button>
              </form>
            ) : (
              <div className="text-center py-8" style={{ animation: "scaleIn 0.5s ease-out both" }}>
                <div className="text-5xl mb-4">✅</div>
                <p className="text-xl font-bold text-green-400">Waiver Acknowledged</p>
                <p className="mt-2 text-sm text-zinc-400">Thank you! You&apos;re all set to start training.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
