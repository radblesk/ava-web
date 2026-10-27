import { NextRequest, NextResponse } from "next/server";
import { latestBuild, latestVersion } from "@/lib/releaseNotes";
import { validateAuthorization } from "@/lib/validation";

const githubBase: string =
  "https://raw.githubusercontent.com/radblesk/avaapp-changelog/refs/heads/production";

export async function GET(request: NextRequest) {
  // Validate if request was made from Ava app with a valid bearer token
  if (!validateAuthorization(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Read request parameters
  const params = request.nextUrl.searchParams;
  const version = params.get("version") ?? latestVersion;
  const build = params.get("build") ?? latestBuild;

  // Construct version key (e.g., 1.0-4) and final path to release notes file on GitHub
  const versionKey = version && build ? `${version}-${build}` : version;
  const finalPath: string = `${githubBase}/release-notes/${versionKey}.md`;

  // Fetch and return the release notes from GitHub
  try {
    if (!versionKey) {
      const indexResponse = await fetch(`${githubBase}/index.json`, {
        next: { revalidate: 300 },
      });

      if (!indexResponse.ok) {
        throw new Error("Failed to fetch release notes index");
      }

      const releases = await indexResponse.json();
      const latest = releases[0];

      if (!latest) {
        return NextResponse.json(
          { error: "Not release notes found" },
          { status: 404 },
        );
      }
    }

    if (!/^\d+\.\d+(?:\.\d+)?-\d+$/.test(versionKey)) {
      return NextResponse.json({ error: "Invalid version" }, { status: 400 });
    }

    const response = await fetch(`${finalPath}`, { next: { revalidate: 300 } });

    if (response.status === 404) {
      return NextResponse.json(
        { error: "Release notes for this version was not found" },
        { status: 404 },
      );
    }

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const releaseNotes = await response.text();

    return NextResponse.json({
      version: version,
      build: build,
      notes: releaseNotes,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch release notes" },
      { status: 502 },
    );
  }
}
