import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = { title: "Contact", description: "Contact GymFit, get location, and claim a free trial." };

export default function ContactPage() {
  return <div className="container space-y-6 py-10"><h1 className="text-4xl font-black">Contact</h1><LeadForm type="contact" /><div className="rounded border border-zinc-800 p-4"><p>123 Fitness Ave, Downtown</p><p>Hours: Open 24/7</p><a className="text-brand-500" href="https://wa.me/15550009000">WhatsApp click-to-chat</a></div></div>;
}
