import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "GymFit story, mission, and certifications." };

export default function AboutPage() {
  return <div className="container py-10"><h1 className="text-4xl font-black">About GymFit</h1><p className="mt-4 text-zinc-300">Our mission is to make elite coaching accessible. 2,000+ members, 12 trainers, 9 years of results.</p></div>;
}
