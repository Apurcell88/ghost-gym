import Trainer from "@/app/(models)/Trainer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // create a trainer
    const body = await req.json();
    const trainerData = body.trainerData;

    await Trainer.create(trainerData);

    return NextResponse.json({ message: "Trainer created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const trainers = await Trainer.find();
    return NextResponse.json({ trainers }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
