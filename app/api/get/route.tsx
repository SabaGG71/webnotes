import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const msg = formData.get("msg");

  // Forward request to Flask
  const response = await fetch("http://34.51.215.227/get", {
    method: "POST",
    body: formData,
  });

  const text = await response.text();
  return NextResponse.json({ text });
}
