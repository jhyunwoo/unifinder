import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
import { universities } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const universityName = searchParams.get("universityName");
  if (universityName) {
    const universityData = await db
      .select({
        symbolImage: universities.symbolImage,
        name: universities.name,
        address: universities.address,
      })
      .from(universities)
      .where(eq(universities.name, decodeURIComponent(universityName)));
    return NextResponse.json(universityData[0]);
  } else {
    return NextResponse.json({ error: "universityName is required" });
  }
}
