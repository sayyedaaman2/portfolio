import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const googleFormUrl = process.env.GOOGLE_FORM_URL
    console.log(googleFormUrl)
    if (!googleFormUrl) {
      return NextResponse.json({ error: "Google Form URL not set" }, { status: 500 });
    }

    // forward to Google Form
    const res = await fetch(googleFormUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });

    return NextResponse.json({ success: true, data: await res.json() });
  } catch (err: unknown) {
    // log it for debugging
    console.error("Error in contact route:", err);

    // if it's an error object, get the message
    const message =
      err instanceof Error ? err.message : "Something went wrong";

    return NextResponse.json({ error: message }, { status: 500 });
  }

}
