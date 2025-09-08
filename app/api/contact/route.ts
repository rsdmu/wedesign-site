import { NextResponse } from "next/server";

export async function POST(request: Request){
  const data = await request.json().catch(() => null);
  console.log("[Contact] submission", data);
  return NextResponse.json({ ok: true });
}
