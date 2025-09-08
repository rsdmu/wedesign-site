import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));
  // Best-effort logging (works on Vercel serverless logs)
  console.log("New lead:", data);
  return NextResponse.json({ ok: true });
}
