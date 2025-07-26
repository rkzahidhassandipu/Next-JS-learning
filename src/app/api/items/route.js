import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
 const data = await dbConnect("next").find({}).toArray()
  // const data = await res.json()
 
  return NextResponse.json({ data })
}

export async function POST(req) {
  try {
    const postedData = await req.json();
    const collection = await dbConnect("next");
    const result = await collection.insertOne(postedData);
    revalidatePath("/products")

    return NextResponse.json(
      {
        message: "Inserted successfully",
        insertedId: result.insertedId,
        data: postedData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
  }
}