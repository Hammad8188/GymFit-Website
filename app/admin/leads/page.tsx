import { getLeads } from "@/lib/leads";

export default async function AdminLeadsPage({ searchParams }: { searchParams: Promise<{ password?: string }> }) {
  const query = await searchParams;
  if (!process.env.ADMIN_PASSWORD || query.password !== process.env.ADMIN_PASSWORD) {
    return <div className="container py-10"><h1 className="text-3xl font-black">Unauthorized</h1><p>Add ?password=ADMIN_PASSWORD in URL.</p></div>;
  }
  const leads = await getLeads();
  return <div className="container py-10"><h1 className="text-3xl font-black">Leads</h1><ul className="mt-4 space-y-2">{leads.map((l) => <li key={l.createdAt+l.email} className="rounded border border-zinc-800 p-3">{l.createdAt}: {l.name} ({l.email}) [{l.type}]</li>)}</ul></div>;
}
