const githubBase: string =
  "https://raw.githubusercontent.com/radblesk/avaapp-changelog/refs/heads/production";

interface ReleaseNotesEntry {
  version: string;
  build: number;
  file: string;
}

export async function fetchReleaseNotes() {
  const response = await fetch(`${githubBase}/index.json`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch release notes index");
  }

  const releaseNotes: ReleaseNotesEntry[] = await response.json();

  return Promise.all(
    releaseNotes.map(async (release) => {
      const response = await fetch(
        `${githubBase}/release-notes/${release.file}`,
        {
          next: { revalidate: 300 },
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch ${release.file}`);
      }

      return {
        ...release,
        releaseNotes: await response.text(),
      };
    }),
  );
}
