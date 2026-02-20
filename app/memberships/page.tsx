import type { Metadata } from "next";
import { PricingTable } from "@/components/PricingTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = { title: "Memberships", description: "GymFit plans, pricing, and membership FAQs." };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I freeze my membership?", acceptedAnswer: { "@type": "Answer", text: "Yes, up to 2 months per year with prior notice." } },
    { "@type": "Question", name: "How do cancellations work?", acceptedAnswer: { "@type": "Answer", text: "Submit 14-day notice before your billing cycle." } }
  ]
};

export default function MembershipsPage() {
  return <div className="container space-y-8 py-10"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><h1 className="text-4xl font-black">Memberships</h1><PricingTable /><h2 className="text-2xl font-bold">Join Now</h2><LeadForm type="join" /><h2 className="text-2xl font-bold">FAQ</h2><FAQAccordion /></div>;
}
