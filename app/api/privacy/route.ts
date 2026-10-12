import { lastUpdate, policy } from "@/lib/policy";
import { NextRequest, NextResponse } from "next/server";
import { validateAuthorization } from "@/lib/validation";

export function GET(request: NextRequest) {
  if (!validateAuthorization(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!policy) {
    return NextResponse.json(
      { error: "Missing privacy policy" },
      { status: 404 },
    );
  }

  return NextResponse.json({ lastUpdate: lastUpdate, policy: policy });
}
