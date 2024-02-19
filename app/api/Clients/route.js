import Client from "@/app/(models)/Client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // create a client
    const body = await req.json();
    const clientData = body.formData;
    await Client.create(clientData);

    return NextResponse.json({ message: "Client created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
