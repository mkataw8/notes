import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongoDB";
import Topic from "../../../models/topic";

export async function POST(request) {
  const { notes } = await request.json();
  await connectMongoDB();
  await Topic.create({ notes });
  return NextResponse.json({ message: "Topic CReated" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
