# Voices from the Ward publication integration

The authoritative source is `apps/web/src/content/research/voices-from-the-ward/Voices from the Ward.html`. Do not edit it as part of deployment preparation.

`apps/web/scripts/prepare-voices-report.mjs` creates a deployment copy and PDF under `apps/web/public/research/voices-from-the-ward/`. The deployment copy removes the Google Fonts dependency and adds a document language; it otherwise preserves the report content, embedded media, styles and local interactivity.

Publication metadata used by the version-controlled fallback is in `apps/web/src/content/research/voicesFromTheWard.ts`. SPiD confirmed publication approval in November 2026, so the landing route is indexable and included in the sitemap. The isolated full-report reader remains `noindex, follow` to prevent duplicate indexing; the landing page is the canonical discoverable URL.

Sanity already contains draft `insight` and `resource` records created by the approved migration. They should be reviewed and published through the normal editorial workflow in a separately authorised production-content action. The complete HTML remains a version-controlled asset rather than being copied into Portable Text.

The report distinguishes 365 valid household interviews, 361 captured GPS points and 368 community contributors acknowledged. Planned FGDs and KIIs were not implemented.
