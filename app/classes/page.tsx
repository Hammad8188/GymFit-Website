import type { Metadata } from "next";
import { ScheduleTable } from "@/components/ScheduleTable";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = { title: "Classes", description: "Weekly gym class schedule with booking request." };

export default function ClassesPage() {
  return <div className="container space-y-8 py-10"><h1 className="text-4xl font-black">Classes</h1><ScheduleTable /><p className="text-zinc-300">Or embed your booking widget (Mindbody-style) in this section.</p><LeadForm type="trial" /></div>;
}
