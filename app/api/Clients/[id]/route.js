import Client from "@/app/(models)/Client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    console.log(params);
    const { id } = params;

    const foundClient = Client.findOne({ _id: id });

    return NextResponse.json({ foundClient }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
