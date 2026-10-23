export const latestVersion = "v1.0";
export const latestBuild = "8";

export const releaseNotes: Record<string, string> = {
  "v1.0 (10)": `
### Performance & Reliability Update
This update focuses on making Ava faster, smoother and more reliable. It brings improved media performance, clearer error messages, major stability improvements and fixes for features affected by recent Reddit API changes.

### What's Changed
#### Fixes
* Fix: resolved issues preventing additional comments from loading
  * Note: this fix needs further testing to confirm long-term reliability
* Fix: restored Trending Subreddits in the Search tab after Reddit API changes caused it to stop working
  * Note: this fix needs further testing to confirm long-term reliability
* Fix: user profiles, multireddits and search results now correctly scroll back to the top when changing sort order
* Fix: cancelled requests no longer display unnecessary error notifications
* Fix: error notifications no longer display raw HTML responses or technical decoding errors
* Fix: Add/Remove Friend button is now only available to Reddit Premium users, matching Reddit's behavior
* Fix: various smaller bugs and stability issues

#### Improvements
* Improvement: completely reworked error and response handling for more reliable operation
* Improvement: error notifications now provide clearer, more user-friendly explanations
* Improvement: improved automatic error reporting to help identify and resolve issues more accurately
* Improvement: improved media caching, prefetching, processing and playback for smoother scrolling and faster media loading
* Improvement: various behind-the-scenes performance and reliability improvements
`,
  "v1.0 (9)": `
  ### Hotfix Update
This update removes trending subreddits grid from Search tab after Reddit API changes caused it to stop working.
  `,
  "v1.0 (8)": `
### What's Changed
#### Fixes
* Fix: link hit areas was still overlapping causing accidental link taps
* Fix: issue in build 7 where long press on media prevents videos from being opened in fullscreen
* Fix: unavailable media label now only shows icon for compact posts
* Fix: crosspost in compact posts might be unclickable 
* Fix: compact post media overlay might prevent media tap gesture 
* Fix: oversized link media might increase hit area 
* Fix: soft line breaks are ignored by Ava's custom markdown renderer, causing single "enter" to render on the same line 
* Potential Fix: opening videos fullscreen may sometimes result in undismissable blank screen and app restart is needed 
* Fix: add/remove friend results in error 403 
* Fix: smaller behind-the-scenes bug fixes and improvements

#### New Features
* Feature: added option to hide post voting buttons 
* Feature: compact posts media overlay are now smaller in the right bottom corner, rather than covering media in the middle 
* Feature: added stepper to change title line limit for compact posts 
* Feature: added picker for compact posts thumbnail size (default, bigger) 
* Feature: added long press to open context menu for galleries in compact posts 
* Feature: videos in compact posts now also have long press to open context menu like other media 
* Feature: added RedGifs indicator for compact posts thumbnail 
* Feature: add skip comment button with editable position (left, middle, right) 
* Feature: added nested lists support to Ava's custom markdown renderer 
* Feature: added divider support to Ava's custom markdown renderer 
* Feature: added tables support for Ava's custom markdown renderer 

#### Debug
* Debug: added automatic error reporting while fetching trending subreddits to help investigate and fix 'Invalid Response' errors while fetching them
  `,
  "v1.0 (7)": `
### What's Changed
#### Fixes
* Fix: an issue where tapping near post media could accidentally open the media
* Fix: an issue where tapping near comment media or bottom row could accidentally open the media instead collapsing comment
* Fix: hiding over 50 posts at once returns bad request error, added sequential batching
* Fix: incorrect subreddit data returned from Reddit might cause decoding error (observed in search view)
* Fix: random 500 errors might occur when fetching inbox
* Fix: quickly opening and closing post prevents it from being marked as seen
* Some other smaller behind-the-scenes bug fixes and improvements

#### New Features
* Feature: disable video scrubbing while scrolling to prevent accidental touches
* Feature: long press on any media to open context menu (works for both, posts and comments)
* Feature: long press on post to open post options menu (OPTIONAL! If disabled, classic 3-dot menu icon is displayed instead)
* Feature: increased hit area for comment menu button
* Feature: multi's toolbar now have a button to display all subreddits in current multi, allowing direct navigation to specific subreddit

#### From Feedback
* If you have questions about Ava, feel free to join a Discord server. Link can be found in Settings -> About. I get many questions through anonymous feedback, which means, I would love to, but I have no way to reply to you, since you did not attach an email address to the feedback. If you wish to stay anonymous, I respect that. You can use a throwaway email address if you want.
* Tapping current tab returns to sidebar behavior: this is a default behavior controlled by Apple. In SwiftUI, there is no way around this. I am investigating this request, but no promises yet. I don't want to introduce custom solution that might break iPad or iPhone Duo compatibility, which Ava currently has.
`,
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
