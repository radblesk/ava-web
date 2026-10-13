export const latestVersion = "v1.0";
export const latestBuild = "5";

export const releaseNotes: Record<string, string> = {
  "v1.0 (5)": `
  ## Bug fixing update based on users feedback and crash reports

### What's Changed
#### Fixes
* Fix: adding/removing value to user settings causing data error resulting in settings reset to default values by @radblesk in https://github.com/radblesk/avaapp/pull/37
* Fix: string catalog out of date, localized string typos by @radblesk in https://github.com/radblesk/avaapp/pull/38
* Fix: loading profile and trophies might cause render loop caused by recursive layout recalculations resulting in app crash by @radblesk in https://github.com/radblesk/avaapp/pull/39
* Fix: marking already read inbox/announcements messages as read, causes Reddit server to return error 400 by @radblesk in https://github.com/radblesk/avaapp/pull/40
* Fix: inbox list selection passing incorrect identifier, incorrect condition filtering out unread announcements by @radblesk in https://github.com/radblesk/avaapp/pull/41
* Fix: posts containing URL without host component causing a fatal crash by @radblesk in https://github.com/radblesk/avaapp/pull/43
* Fix: fetching moderator permissions for user, displaying only eligible actions for posts and comments by @radblesk in https://github.com/radblesk/avaapp/pull/44
* Fix: compact posts now respect subreddit on top and subreddit icon toggles by @radblesk in https://github.com/radblesk/avaapp/pull/46
* Fix: triggering scroll-to-comments sometimes skips entire comment section **(needs testing)** by @radblesk in https://github.com/radblesk/avaapp/pull/48

#### New Features
* Feature: you can now pick if voting buttons for compact posts are displayed on the left or right side by @radblesk in https://github.com/radblesk/avaapp/pull/47

#### Improvements
* Improvement: more aggressive disk media caching causing lower memory usage by @radblesk in https://github.com/radblesk/avaapp/pull/49


**Thanks to everyone who contributed with feedback!**
  `,
  "v1.0 (4)": `
  ### What's Changed
* Fix third party services login
  `,
  "v1.0 (3)": `
  ### What's Changed
* Fixed missing URL when submitting a link post

### What to test?
- Posting (self, link, image, gallery, video)
- Everything

### Found a bug or have an amazing idea?
- Head to **Settings -> About -> Submit a Feedback** or to our [Discord](https://discord.gg/Yh3E2YYrKu) server and share it!

### Want to see more app icons?
- Share your creations in [Discord](https://discord.gg/Yh3E2YYrKu) server! I might pick yours in the next update!
  `,
  "v1.0 (2)": `
  ### What's Changed
* Fix conditions blocking post submissions

### What to test?
- Posting (self, link, image, gallery, video)
- Everything

### Found a bug or have an amazing idea?
- Head to **Settings -> About -> Submit a Feedback** or to our [Discord](https://discord.gg/Yh3E2YYrKu) server and share it!

### Want to see more app icons?
- Share your creations in [Discord](https://discord.gg/Yh3E2YYrKu) server! I might pick yours in the next update!

Thank you for being here! <3 
  `,
  "v1.0 (1)": `
## Welcome to build 1!

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
