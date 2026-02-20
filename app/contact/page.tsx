import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GymFit, get location, and claim a free trial.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -right-40 opacity-30" />
        <div className="container relative z-10 py-20">
          <div className="fade-up max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Have a question or ready to start? Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="fade-up"><LeadForm type="contact" /></div>

          <div className="space-y-6">
            <div className="fade-up-delay-1 glass-card p-6">
              <h3 className="font-bold text-zinc-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Location
              </h3>
              <p className="mt-2 text-sm text-zinc-400">123 Fitness Ave, Downtown<br />Free parking available</p>
            </div>

            <div className="fade-up-delay-2 glass-card p-6">
              <h3 className="font-bold text-zinc-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Hours
              </h3>
              <p className="mt-2 text-sm text-zinc-400">Open 24/7<br />Staffed hours: 6:00 AM – 10:00 PM</p>
            </div>

            <div className="fade-up-delay-3 glass-card p-6">
              <h3 className="font-bold text-zinc-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Phone & WhatsApp
              </h3>
              <p className="mt-2 text-sm text-zinc-400">+1 555-000-9000</p>
              <a href="https://wa.me/15550009000" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600/20 border border-green-600/30 px-3 py-2 text-sm text-green-400 hover:bg-green-600/30 transition-all">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
