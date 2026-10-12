export const lastUpdate = new Date(2026, 9, 11);

const formattedDate = lastUpdate
  .toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
  .replace(",", "");

export const policy = `
# Privacy Policy

**Last updated: ${formattedDate}**

## 1. Introduction

Ava is an independently developed Reddit client designed with privacy in mind.

This Privacy Policy explains how information is handled when you use the Ava application ("Ava" or "the App") and its official website ("the Website").

Ava does not use advertising trackers, sell personal information, or operate a backend that collects and stores users' Reddit accounts, posts, comments, or browsing histories.

Most information used by Ava remains on your device. Limited technical diagnostic information is processed through Sentry to maintain application reliability and performance. Users may also voluntarily submit feedback, and certain application preferences may be synchronized through Apple's iCloud service.

## 2. Developer and Contact Information

Ava is independently developed and maintained by:

**Radoslav Bley**  
Independent Developer  
Slovakia, European Union

**Privacy inquiries:** support@radobley.com

**General support and feedback:** feedback@radobley.com

I act as the data controller for personal information processed through Ava's diagnostic and feedback services and the Website, where applicable.

## 3. Reddit Authentication and Account Data

Ava communicates directly with Reddit to provide browsing, account management, and other Reddit-related functionality.

When you sign in, Ava uses Reddit session cookies and authentication-related information, including Reddit's modhash, to authenticate requests.

Authentication cookies are stored locally on your device using Apple's \`HTTPCookieStorage\` and included in requests to Reddit when required.

Ava may retrieve information necessary to provide its features, including posts, comments, communities, account information, saved content, and other Reddit-related data.

This information is processed and, where necessary, cached locally on your device.

I do not operate an intermediary server that collects or stores your Reddit credentials, authentication cookies, account information, posts, comments, or private messages.

Requests to Reddit are made directly from the App. Reddit may process information associated with these requests according to its own privacy practices.

Limited information about network requests may appear in diagnostic reports, as explained in Section 5.

## 4. Local Storage and iCloud Synchronization

Ava stores application settings, cached content, and other app-related information locally on your device.

Certain preferences, including user-created filters, are synchronized between your devices using Apple's iCloud key-value storage service.

Synchronization is handled by Apple's infrastructure and associated with your Apple Account.

I do not operate a separate database for synchronized preferences and do not have independent access to the contents of your personal iCloud storage.

Deleting Ava generally removes its locally stored application data. Information separately retained through iCloud or Reddit may remain available through those services.

## 5. Crash Reporting, Diagnostics, and Performance Monitoring

Ava uses **Sentry** to identify application crashes, investigate software errors, detect application hangs, and monitor performance.

Depending on the event, diagnostic reports may contain:

- Crash reports, exception details, and stack traces.
- Device model, operating system version, and application version.
- Application execution information and diagnostic timestamps.
- Technical information about application errors and unexpected behavior.
- Performance measurements, operation timings, and execution profiling information.
- Application lifecycle and interface navigation events.
- Recent HTTP requests, including destination URLs, HTTP methods, response status codes, and technical request metadata.

### Network Request Information

To investigate errors associated with specific Reddit content or API endpoints, Ava may include recent network request paths in Sentry diagnostic reports.

These paths may contain subreddit names, Reddit post identifiers, or other identifiers associated with requested resources.

Ava removes HTTP query parameters from automatically recorded HTTP breadcrumbs before they are submitted to Sentry.

Request and response bodies, Reddit authentication credentials, session cookies, and Reddit account identifiers are not intentionally included in diagnostic reports.

Network request information is used exclusively for troubleshooting and identifying application failures, not for tracking or profiling individual users.

### Performance Monitoring and Profiling

Ava uses sampled performance tracing and profiling to identify slow operations and improve application responsiveness.

Performance tracing is configured to sample approximately 20% of eligible transactions.

Profiling is configured to sample approximately 10% of eligible sessions, with profiling associated with active traces.

These features may collect technical information about execution timing, application responsiveness, and the performance of application operations.

Performance information is not used for advertising or marketing.

### Privacy Protections

Ava implements additional privacy protections for Sentry:

- Default personally identifiable information collection is disabled.
- User information and automatically generated installation identifiers are removed from error events before submission.
- Reddit usernames, account IDs, and authentication credentials are not intentionally attached to diagnostic reports.
- Storage of users' IP addresses in Sentry event reports is disabled.
- Geographic information is filtered through Sentry's data-scrubbing configuration.
- HTTP query parameters are removed from automatically captured HTTP breadcrumbs.
- Screenshots are not automatically attached to diagnostic reports.
- Session replay recording is not enabled.

Diagnostic events may still include technical event or trace identifiers necessary to operate the monitoring service.

Although these protections are designed to minimize personal information, some technical diagnostic data, including resource URLs, may qualify as personal data under applicable privacy laws.

Diagnostic information is used exclusively to investigate errors, improve application performance, maintain reliability, and resolve technical problems.

## 6. User Feedback and Attachments

Ava provides a built-in feedback system for reporting problems, suggesting improvements, and requesting features.

When you submit feedback, the information you provide is transmitted to Sentry.

This may include:

- The selected feedback category and affected application area.
- Your written feedback or description.
- Your email address, if voluntarily provided.
- A screenshot, if voluntarily attached.
- Relevant technical context associated with the submission.

**Providing an email address is optional.**

Your email address is used only if additional information or clarification is needed concerning your submission.

### Screenshots

Ava never automatically attaches screenshots to feedback.

You may manually select a screenshot using Apple's photo picker.

Selected attachments are displayed in the feedback interface and may be removed before submission.

Screenshots may contain information visible on your screen, including Reddit content or personal information. You should review screenshots before submitting them.

Screenshots and other feedback information are transmitted only when you explicitly submit the feedback.

Submitted feedback is used exclusively for troubleshooting, reviewing suggestions, responding to inquiries, and improving Ava.

## 7. Third-Party Services

Ava uses the following third-party services to provide its functionality.

### Reddit

Reddit provides account authentication, Reddit content, and account-related functionality.

Ava communicates directly with Reddit, which may process information about your requests according to its own privacy policy.

Privacy Policy: https://www.reddit.com/policies/privacy-policy

### Sentry

Sentry processes diagnostic reports, performance information, profiling data, and voluntarily submitted feedback on my behalf.

Ava uses Sentry's European data storage region, located in Frankfurt, Germany.

A Data Processing Amendment has been established with Sentry to govern its processing of personal information.

Certain service administration, account metadata, or support operations may involve processing outside the European Economic Area under applicable safeguards.

Privacy Policy: https://sentry.io/privacy/

### Apple iCloud

Apple provides infrastructure for synchronizing certain application preferences between your devices.

Synchronization is managed through your Apple Account and Apple's iCloud services.

Privacy Policy: https://www.apple.com/legal/privacy/

### RedGIFs

Ava communicates directly with RedGIFs to resolve and display supported media content within the App.

RedGIFs may receive technical connection information associated with these requests.

Website: https://www.redgifs.com/

### Subriff

Ava communicates directly with Subriff to retrieve information about trending subreddits displayed in the Search tab.

Subriff may receive technical connection information associated with these requests.

Website: https://subriff.com/

### External Service Requests

When Ava communicates with external services, those services may receive your IP address, requested resources, and other technical connection information as part of normal internet communication.

Information received by external services is processed according to their respective privacy practices.

I do not independently receive or store the information processed by these external services, except for limited diagnostic information transmitted to Sentry as described in this policy.

Ava does not sell personal information or share it with advertising networks or data brokers.

## 8. Website Privacy and Analytics

The Ava Website is hosted by **Vercel** and provides information about Ava, download links, and related resources.

The Website uses **Vercel Web Analytics** to measure website traffic and understand how visitors use its pages.

Vercel Web Analytics collects anonymized statistics, which may include:

- Page views and visited pages.
- Referring websites.
- Approximate geographic location.
- Browser, operating system, and device type.
- Visit timestamps.

Vercel Web Analytics does not use cookies or persistent identifiers to track visitors. It uses temporary identifiers derived from incoming requests to distinguish visits, which are discarded after 24 hours.

The statistics available to me are aggregated and are not used to identify individual visitors, build advertising profiles, or track users across websites.

Separately, Vercel's hosting infrastructure may process technical connection information, including IP addresses and server logs, to deliver the Website, maintain security, and prevent abuse.

The Website does not use advertising trackers or tracking cookies.

**Vercel Analytics Privacy Documentation:** https://vercel.com/docs/analytics/privacy-policy

**Vercel Privacy Notice:** https://vercel.com/legal/privacy-notice

## 9. Legal Basis for Processing

Where the General Data Protection Regulation (GDPR) applies, personal information is processed on the following legal grounds:

**Application functionality:** Processing necessary to provide requested application features, where applicable under Article 6(1)(b) of the GDPR.

**Crash reporting and diagnostics:** Legitimate interests under Article 6(1)(f), consisting of maintaining application reliability, identifying failures, and investigating software errors.

**Performance monitoring and profiling:** Legitimate interests under Article 6(1)(f), consisting of identifying performance problems and improving application responsiveness.

**User feedback and support:** Legitimate interests under Article 6(1)(f), consisting of reviewing submissions, resolving reported issues, and responding to user inquiries.

**Website operation and security:** Legitimate interests under Article 6(1)(f), consisting of delivering the Website, maintaining security, and preventing technical abuse.

Processing based on legitimate interests is subject to applicable data protection requirements, including users' rights to object where applicable.

Where consent is legally required for particular processing, that processing will be conducted on an appropriate consent basis.

## 10. Data Retention and Deletion

Ava follows a data-minimization approach and does not maintain a centralized database of Reddit accounts or user activity.

**Local application data:** Remains on your device until removed by you, the App, or the operating system.

**iCloud data:** Retained and managed according to your iCloud configuration and Apple's applicable policies.

**Sentry diagnostic events:** Under Sentry's free Developer plan, diagnostic event data is generally retained for 30 days.

**Performance data:** Retained according to Sentry's applicable retention policies for the relevant data category.

**Feedback and screenshots:** Retained through Sentry's infrastructure according to its applicable retention settings and deletion procedures, for as long as necessary to manage feedback and resolve reported issues.

**Support correspondence:** Emails are retained as long as reasonably necessary to respond to inquiries, manage related follow-up, or meet applicable legal obligations.

**Website connection information:** Retained by Vercel according to the applicable hosting configuration and its retention policies.

You may request deletion of personal information under my control by contacting support@radobley.com.

I cannot independently delete data held by Reddit, Apple, or other independent service providers under their own policies.

## 11. International Data Processing

Sentry's event-related diagnostic information is stored in its European data region.

Some service administration and other processing activities may occur outside the European Economic Area.

Vercel and other third-party services may also process technical information internationally.

Where international transfers of personal information occur under my responsibility, applicable safeguards are used in accordance with data protection requirements, including contractual protections where appropriate.

You may request further information about international data processing by contacting support@radobley.com.

## 12. Your Privacy Rights

If the GDPR applies to you, you may have the right to:

- Request access to personal information held about you.
- Request correction of inaccurate personal information.
- Request deletion of personal information.
- Request restriction of certain processing.
- Object to processing based on legitimate interests.
- Request data portability where applicable.
- Withdraw consent where processing is based on consent.

To exercise these rights, contact:

**support@radobley.com**

Requests will be handled in accordance with applicable law, normally within one month under GDPR.

Because Ava does not maintain its own user-account database and is configured to minimize user-identifying information in diagnostic reports, it may not always be possible to associate a particular diagnostic event with an identifiable individual.

You also have the right to lodge a complaint with a competent data protection authority, including the Slovak Data Protection Authority.

https://dataprotection.gov.sk/

## 13. Data Security

Ava is designed to minimize unnecessary collection and transmission of information.

Reddit authentication information is handled locally through the App's session storage and transmitted to Reddit when required.

Communication with external services uses secure network connections.

Diagnostic information is subject to Sentry's security measures and data protection commitments.

Synchronized preferences are handled through Apple's iCloud infrastructure.

Although reasonable precautions are taken, no method of electronic transmission or storage can be guaranteed to be completely secure.

## 14. Children's Privacy

Ava is not specifically directed at children.

Access to Reddit through Ava remains subject to Reddit's eligibility requirements and applicable laws.

I do not knowingly collect personal information from children for advertising or marketing.

If you believe a child has submitted personal information through Ava's feedback functionality, please contact support@radobley.com.

## 15. Advertising, Tracking, and Automated Decision-Making

Ava does not use personal information for targeted advertising, cross-app advertising tracking, or the creation of marketing profiles.

Technical diagnostic information is collected only for application maintenance, troubleshooting, and performance improvement.

Ava does not use collected diagnostic or feedback information for automated decision-making that produces legal or similarly significant effects on users.

## 16. Changes to This Privacy Policy

This Privacy Policy may be updated to reflect changes to Ava, its functionality, third-party services, or applicable legal requirements.

Updated versions will be published on the official Ava Website with a revised effective date.

Where required by law, additional notice or consent will be provided before materially different processing takes place.

## 17. Contact

For questions about this Privacy Policy or requests concerning personal information:

**Radoslav Bley**  
Independent Developer  
Slovakia, European Union

**Privacy inquiries:** support@radobley.com  
**General support and feedback:** feedback@radobley.com

`;
