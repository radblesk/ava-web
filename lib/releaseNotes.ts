export const latestVersion = "v1.0";
export const latestBuild = "6";

export const releaseNotes: Record<string, string> = {
  "v1.0 (6)": `
  ### What's Changed
#### Fixes
* Fix: broken pagination in sidebar with more than 100 subreddits incorrectly fetching subreddits data
* Fix: stale fetch operations prevent pull-to-refresh in feed views
* Fix: changing tab or switching apps might throw 'cancellation' error when fetching trending subreddits
* Fix: possible fix for some users experiencing app crashes during search autocomplete (report back)

#### New Features
* Feature: added 'Auto-Hide Toolbar' option to iPad (iPad's tab bar is persistent unlike iOS tab bar, so on iPad only top toolbar is hiding)
* Feature: added option to expand all comments by default

#### Improvements
* Improvement: Sentry privacy improvements
* Improvement: increased legibility of post texts for both title and body (report back if not enough)

#### Debug
* Debug: added deeper tracking for posts hiding failures as they keep throwing Bad Request errors for some users
* Debug: improved HTTP error tracking and fingerprinting

### Want to see more app icons?
- Share your creations in [Discord](https://discord.gg/Yh3E2YYrKu) server! I might pick yours in the next update!
  `,
  "v1.0 (5)": `
## Bug fixing update based on users feedback and crash reports

### What's Changed
#### Fixes
* Fix: adding/removing value to user settings causing data error resulting in settings reset to default values
* Fix: string catalog out of date, localized string typos
* Fix: loading profile and trophies might cause render loop caused by recursive layout recalculations resulting in app crash
* Fix: marking already read inbox/announcements messages as read, causes Reddit server to return error 400
* Fix: inbox list selection passing incorrect identifier, incorrect condition filtering out unread announcements
* Fix: posts containing URL without host component causing a fatal crash
* Fix: fetching moderator permissions for user, displaying only eligible actions for posts and comments
* Fix: compact posts now respect subreddit on top and subreddit icon toggles
* Fix: triggering scroll-to-comments sometimes skips entire comment section **(needs testing)**

#### New Features
* Feature: you can now pick if voting buttons for compact posts are displayed on the left or right side by

#### Improvements
* Improvement: more aggressive disk media caching causing lower memory usage


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
