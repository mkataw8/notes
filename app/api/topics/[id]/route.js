import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../libs/mongoDB/mongoDB";
import Topic from "../../../../models/topic";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newNote: notes } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { notes });
  return NextResponse.json({ message: "Topic Edit" }, { status: 200 });
}

export async function GET(request, { params }) {
  // Fixed typo in "params"
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findById(id); // You should use "findById" to find a topic by ID
  return NextResponse.json({ topic }, { status: 200 });
}
