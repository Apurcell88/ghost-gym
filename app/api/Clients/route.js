import Client from "@/app/(models)/Client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // create a client
    const body = await req.json();
    const clientData = body.formData;
    // await Client.create(clientData);

    // check if a client already exists with specified username
    const { username } = clientData;
    const existingUser = await Client.findOne({ username });

    if (!existingUser) {
      await Client.create(clientData);
    }

    return NextResponse.json({ message: "Client created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const clients = await Client.find();
    return NextResponse.json({ clients }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
