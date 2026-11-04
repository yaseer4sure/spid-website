# Impact Metrics Update Guide

## Current status

The four dashboard values are stored in:

```text
apps/web/src/config/impactMetrics.ts
```

They are currently marked `illustrative`. They are sample values for local and
Vercel Preview design review, not verified SPiD achievements. Production keeps
the dashboard layout but withholds the numbers.

## Updating values and suffixes

Edit only the corresponding entry in `impactMetrics`:

- `communitiesReached.value`
- `peopleImpacted.value`
- `projectsImplemented.value`
- `pipelineProjects.value`

Edit a metric's `suffix` to change or remove a suffix. For example,
`peopleImpacted.suffix` is currently `"+"`; change it to `""` to remove the
plus sign.

Example: change Communities Reached from the illustrative `25` to an approved
value of `42`:

```ts
communitiesReached: {
  label: "Communities Reached",
  value: 42,
  suffix: "",
},
```

The `Impact3DChart` reads this configuration directly; its JSX does not need to
be edited.

## Reporting period, evidence and approval

Before any value is described as verified, complete every field in
`impactMetricsVerification` in the same file:

- `reportingPeriod`
- `geography`
- `evidenceSource`
- `evidenceOwner`
- `approvedBy`
- `approvedAt`

Then create or update the corresponding Sanity `impactMetric` records. Each
public record must retain the existing governance fields and pass the public
query guard:

```text
isPublic == true
verificationStatus == "verified"
```

The Sanity record must include the approved reporting period, geography,
evidence source, evidence owner, verifier and verification date. Changing
`impactMetricsStatus` in code alone does not bypass this process.

Only after organisational approval, completed evidence metadata and matching
verified Sanity records should `impactMetricsStatus` be changed from
`"illustrative"` to `"verified"`. The illustrative warning then disappears.
If evidence metadata is incomplete, the dashboard continues to withhold the
numbers even when the status is changed.

## Preview and deployment

1. Update the four values and evidence metadata in the configuration file.
2. Update and approve the matching Sanity impact-metric records when values are
   real rather than illustrative.
3. Run `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`,
   `pnpm build` and `pnpm test:e2e`.
4. Run `pnpm dev` for local review. Illustrative figures are visible locally
   with their warning.
5. Review the change on a Vercel Preview deployment. Vercel Preview also shows
   illustrative figures with the warning.
6. Obtain SPiD approval before merging or promoting verified values to the
   production deployment.

Production never displays illustrative values. When verified values and their
evidence have been approved, deploy through the repository's normal Vercel
workflow; do not change the public domain or DNS as part of a metrics update.
