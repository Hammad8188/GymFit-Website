import { NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";

export async function POST(req: Request) {
  const body = await req.json();
  if (body.website) return NextResponse.json({ ok: true });
  if (!body.name || !body.email || !body.phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await saveLead({
    name: body.name,
    email: body.email,
    phone: body.phone,
    goal: body.goal,
    preferredTime: body.preferredTime,
    type: body.type || "contact",
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ ok: true });
}
