import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  const p = await params;

  const singleData = await dbConnect("next").findOne({
    _id: new ObjectId(p.id),
  });

  return NextResponse.json(singleData);
}

export async function DELETE(req, {params}) {
  const p = await params;
  const singleData = await dbConnect("next").findOne({_id: new ObjectId(p.id)})
  return NextResponse.json(singleData)
}
export async function PATCH(req, {params}) {
  const p = await params;
  const postedData = await req.json();
  const filter = {_id: new ObjectId(p.id)}
    
    const updatedResponse = await dbConnect("next")
        .updateOne(filter, {$set: {...postedData}}, {upsert: true})
        
 
  return NextResponse.json(updatedResponse)
}
