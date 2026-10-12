import { NextRequest, NextResponse } from "next/server";
import { latestBuild, latestVersion, releaseNotes } from "@/lib/releaseNotes";
import { validateAuthorization } from "@/lib/validation";

export function GET(request: NextRequest) {
  if (!validateAuthorization(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (request.nextUrl.searchParams.has("versions")) {
    return NextResponse.json({
      versions: Object.keys(releaseNotes),
    });
  }

  const version = request.nextUrl.searchParams.get("version") ?? latestVersion;
  const build = request.nextUrl.searchParams.get("build") ?? latestBuild;
  const notes = releaseNotes[`v${version} (${build})`];

  if (!notes) {
    return NextResponse.json({ error: "Version not found" }, { status: 404 });
  }

  return NextResponse.json({ version, build, notes });
}
