import { NextRequest, NextResponse } from "next/server";

export function GET(_req: NextRequest) {
  return NextResponse.json({ message: "signin page opened" });
}
