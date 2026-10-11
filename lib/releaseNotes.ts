export const latestVersion = "v1.0";
export const latestBuild = "1"

export const releaseNotes: Record<string, string> = {
  "v1.0 (1)": `
## Welcome to build ${latestBuild}!

### What to test?
- Everything

---

### Known bugs
#### Media
- Video players sometimes become stale and playback stops working.
  - **Workaround:** Stop scrolling and wait a couple seconds until video playback resumes by itself, all other videos will play from now on.
- Very few videos are displayed as a **v.redd.it** link rather than in-line player.

#### Markdown
- Tables are not supported (yet).
- Nested lists are not suppored (yet).
- Dividers are not supported (yet).

---

### Found a bug or have an amazing idea?
- Head to **Settings -> About -> Submit a Feedback** or to our [Discord](https://discord.gg/Yh3E2YYrKu) server and share it!

### Want to see more app icons?
- Share your creations in [Discord](https://discord.gg/Yh3E2YYrKu) server! I might pick yours in the next update!

Thank you for being here! <3 
`,
};
