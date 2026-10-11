import { lastUpdate, policy } from "@/lib/policy";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ lastUpdate: lastUpdate, policy: policy });
}
