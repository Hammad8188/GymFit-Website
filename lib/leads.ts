import { promises as fs } from "fs";
import path from "path";

export type Lead = {
  name: string;
  email: string;
  phone: string;
  goal?: string;
  preferredTime?: string;
  type: string;
  createdAt: string;
};

const filePath = path.join(process.cwd(), "data", "leads.json");

export async function saveLead(lead: Lead) {
  const raw = await fs.readFile(filePath, "utf-8");
  const leads = JSON.parse(raw) as Lead[];
  leads.push(lead);
  await fs.writeFile(filePath, JSON.stringify(leads, null, 2));
}

export async function getLeads() {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as Lead[];
}
