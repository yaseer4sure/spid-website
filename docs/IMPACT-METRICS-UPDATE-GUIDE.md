# Impact metrics update guide

The four dashboard values are stored in one place: `apps/web/src/config/impactMetrics.ts`.

## Current approval state

The current values were supplied and approved by the project owner on 10 November 2026. They are marked `ownerApproved`, which makes them visible without describing them as independently evidence-verified. The existing Sanity public-metric query continues to require `verificationStatus == "verified"` for CMS metrics.

## Changing values and suffixes

Edit only the relevant object in `impactMetrics`. For example, to change Communities Reached from 14 to an approved value of 20:

```ts
communitiesReached: {
  label: "Communities Reached",
  value: 20,
  suffix: "",
},
```

Change a suffix in the same object. For example, set `suffix: "+"` only when “at least” or “more than” is approved wording.

## Evidence verification

Before using the `verified` status, complete every field in `impactMetricsVerification`: reporting period, geography, evidence source, evidence owner, approver and approval date. Do not invent missing metadata. Changing the status alone does not bypass the completeness check.

If equivalent metrics are managed in Sanity, update the relevant Impact Metric records as well. Each public CMS metric must remain explicitly public and verified under the existing schema and query rules.

## Preview and deployment

Run `pnpm dev` for local review, then run formatting, linting, type checking, tests and a production build. Deploy through the approved Vercel Preview workflow, review the page at all supported widths, and obtain organisational sign-off before production promotion.
