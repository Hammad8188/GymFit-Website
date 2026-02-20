import type { Metadata } from "next";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export const metadata: Metadata = { title: "Results", description: "Member transformations and testimonials." };

export default function ResultsPage() {
  return <div className="container py-10"><h1 className="text-4xl font-black">Results</h1><p className="mt-3 text-zinc-300">Results vary by consistency, nutrition, and recovery.</p><div className="mt-6"><TestimonialCarousel /></div></div>;
}
