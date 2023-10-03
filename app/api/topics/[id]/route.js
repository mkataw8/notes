import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongoDB";
export async function PUT(request, { params }) {
  const { id } = params;
  const { newNote: notes } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { notes });
  return NextResponse.json({ message: "Topic Edidt" }, { status: 200 });
}

export async function GET(request, { paramas }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne();
  return NextResponse.json({ topic }, { status: 200 });
}
