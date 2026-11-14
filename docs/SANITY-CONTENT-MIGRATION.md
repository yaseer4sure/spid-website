# Sanity approved-content migration

## Source mapping

| Public content | Approved repository source | Sanity destination | Frontend consumption |
| --- | --- | --- | --- |
| Homepage hero, value proposition, pillars and values | `apps/web/src/content/approved.ts` | `homepage` singleton | `getHome()` and `/` |
| Navigation | Existing public navigation configuration | `mainNavigation` singleton | Root layout, desktop and mobile navigation |
| Footer positioning, office address and social accounts | Existing footer and `content/social.ts` | `siteFooter` and `siteSettings` | Root layout and Contact page |
| About, Vision, Mission, Why, Theory of Change and approach | `apps/web/src/content/approved.ts` | `page-about` | `/about`, with approved local fallback |
| Team and advisory board | `apps/web/src/content/approved.ts` and approved Team images | `person` documents | `/about`, with approved local fallback |
| CPI4CG | `apps/web/src/content/approved.ts` | `programme-cpi4cg` | Homepage card and `/our-work/cpi4cg` |
| AYEDE | `apps/web/src/content/approved.ts` | `programme-ayede` | Homepage card and `/our-work/ayede` |
| IICARE | Approved name only | `drafts.programme-iicare` | Preview only; excluded from public queries |
| Organisational impact values | `apps/web/src/config/impactMetrics.ts` | Four draft `impactMetric` records | Not public until evidence fields and verification are approved |
| Voices from the Ward metadata | `apps/web/src/content/research/voicesFromTheWard.ts` | Draft `insight` and `resource` records | Existing version-controlled publication remains the public fallback pending approval |
| Partners | `apps/web/src/content/partners.ts` and approved logo assets | Approved `partner` records | Homepage and `/partners`; local records remain fallback until migration |
| Get Involved, Insights, Impact, Partners, Our Work and Contact headings | Existing route content | Fixed `page` records and `contactSettings` | Route-level CMS values with approved fallbacks |

## Safety model

`pnpm sanity:migrate:approved` is dry-run only. It inventories target IDs,
checks every planned local asset and reports create/skip/conflict counts. It does
not upload assets or mutate Content Lake.

Production writes require both flags and explicit owner approval:

```bash
pnpm sanity:migrate:approved -- --apply --allow-production
```

Before the first write, the script exports existing documents to
`backups/sanity/`. That directory is intentionally ignored by Git because a
dataset backup may contain internal editorial fields.

The apply step also writes an `approved-content-migration-*.json` manifest in
that directory. It records the backup path, planned document IDs, successfully
created document IDs, uploaded content-addressed asset IDs and final status.
Document creation is one atomic transaction. If asset upload or document
creation fails, the command exits non-zero and marks the manifest `failed` so
any orphaned, unreferenced uploaded assets can be identified safely.

The migration uses deterministic IDs and `create`, never `createOrReplace`.
Existing target records are protected and skipped. A target ID with the wrong
document type stops the migration. This makes retries safe and prevents the
migration from overwriting later editorial work.

The dry-run also reports duplicate planned IDs and references that do not
resolve to another planned document. Sanity image assets are content addressed,
so retrying the same approved file does not create a second binary asset.

## Rollback

Do not roll back blindly. First inspect the matching migration manifest and
verify its dataset, status, `createdDocumentIds`, `uploadedAssetIds` and
`backupPath`.

Because the migration never changes pre-existing target documents, rollback is
normally limited to deleting the IDs listed in `createdDocumentIds` in one
Sanity transaction. Delete only asset IDs from `uploadedAssetIds` that Sanity
confirms are unreferenced. The JSON backup is the pre-write recovery source if
an unexpected external edit must be restored; take a fresh export and review
the backup before using Sanity dataset import tooling. Never use `--replace` as
a routine rollback.

After rollback, rerun the default dry-run. It must report the rolled-back IDs as
creatable and must report no type conflicts, duplicate IDs or unresolved
references. Retain the backup and manifest until the dataset and public website
have both been verified.

## Deliberately incomplete records

The four owner-approved organisational impact values are migrated as draft,
unverified and non-public. Their reporting period, geography, evidence source
and evidence owner are not currently approved. Editors must complete those
fields and follow the evidence-verification workflow before publication.

Voices from the Ward remains a draft CMS record because its repository metadata
currently says publication approval is pending. IICARE remains a draft-
development programme and cannot enter public programme queries.

## Image management

The apply step uploads approved homepage, programme, team and partner images to
Sanity while leaving every local file intact. After migration, editors can
replace the CMS-managed homepage/programme hero images, portraits and partner
logos in Studio. Local files remain controlled fallbacks and rollback assets.
