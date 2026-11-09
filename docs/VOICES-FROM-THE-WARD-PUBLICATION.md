# Voices from the Ward publication integration

The authoritative source is `apps/web/src/content/research/voices-from-the-ward/Voices from the Ward.html`. Do not edit it as part of deployment preparation.

`apps/web/scripts/prepare-voices-report.mjs` creates a deployment copy and PDF under `apps/web/public/research/voices-from-the-ward/`. The deployment copy removes the Google Fonts dependency and adds a document language; it otherwise preserves the report content, embedded media, styles and local interactivity.

Publication metadata used by the version-controlled fallback is in `apps/web/src/content/research/voicesFromTheWard.ts`. The current `approvalStatus` is `pendingApproval`, so both routes are `noindex` and the landing route is excluded from the sitemap. Change this only after SPiD records publication approval.

In Sanity, create an `insight` with content type `research`, the confirmed date and organisation author, a CPI4CG reference, and a `primaryResource` pointing to the approved PDF resource. Publish the insight and resource only after editorial review. The complete HTML remains a version-controlled asset rather than being copied into Portable Text.

The report distinguishes 365 valid household interviews, 361 captured GPS points and 368 community contributors acknowledged. Planned FGDs and KIIs were not implemented.
