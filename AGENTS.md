# SPiD Website Agent Guide

## 1. Scope

This file applies to the entire repository unless a more specific `AGENTS.md` exists in a subdirectory. More specific instructions take precedence for files within their directory tree.

This repository contains the public website and editorial platform for the Sustainable Participatory Development and Climate Resilience Initiative (SPiD).

## 2. Read Before Changing Code

Before starting a task, read the documents relevant to that task. Treat them as the source of truth in this order:

1. The user’s current task and acceptance criteria
2. `AGENTS.md`
3. `docs/00-PROJECT-BRIEF.md`
4. `docs/01-PRD.md`
5. `docs/02-MVP-SCOPE.md`
6. `docs/03-INFORMATION-ARCHITECTURE.md`
7. `docs/04-TECHNICAL-ARCHITECTURE.md`
8. `docs/05-DESIGN-DIRECTION.md`
9. The remaining numbered documents relevant to the task

Do not silently resolve conflicts between source documents. Report the conflict and follow the highest-priority source.

## 3. Product Purpose

Build a modern, accessible, evidence-led website that presents SPiD as a credible African climate and development organisation to communities, young climate leaders, governments, researchers, donors and international partners.

The website must communicate SPiD’s positioning:

> Locally Led. Youth Driven. Climate Resilient.

The product must make programmes, evidence, impact, publications and partnership pathways easy to understand and maintain.

## 4. Non-Negotiable Rules

- Do not invent impact figures, programme results, partners, quotations, testimonials, biographies, dates, locations, funding claims or institutional affiliations.
- Do not publish incomplete or unapproved content merely to fill a page.
- Keep IICARE unpublished until approved programme content is available.
- Mark missing content with an explicit typed placeholder only when the task permits placeholders.
- Preserve community dignity and avoid extractive, pity-based or sensational storytelling.
- Do not expose secrets, tokens, private datasets, personal information or unpublished CMS content.
- Do not remove routes, content or redirects without checking the information architecture and migration plan.
- Do not replace SPiD’s identity with generic NGO language or a generic green template.
- Do not introduce a new framework, CMS, package manager or hosting provider without an approved architectural decision.
- Prefer the simplest implementation that satisfies the documented requirement.

## 5. Approved Stack

Use the following stack unless an approved decision record changes it:

- Next.js App Router
- React
- TypeScript with strict checking
- Tailwind CSS
- Sanity CMS
- pnpm
- GitHub
- Vercel

Do not use the Next.js Pages Router.

## 6. Expected Repository Structure

```text
/
├── AGENTS.md
├── README.md
├── docs/
├── content/
├── public/
├── sanity/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── lib/
│   ├── styles/
│   └── types/
├── tests/
├── .env.example
└── package.json
```

Follow the established structure when it exists. Do not reorganise large parts of the repository as a side effect of an unrelated task.

## 7. Development Workflow

Before implementation:

1. Inspect the relevant code, tests and documents.
2. State any material assumption in the task notes or pull-request summary.
3. Identify the smallest complete change that satisfies the task.
4. Check whether the task affects content models, routes, redirects, analytics or accessibility.

During implementation:

- Keep changes tightly scoped.
- Reuse existing components and utilities before creating new ones.
- Add or update tests with the implementation.
- Update documentation when behaviour, architecture, commands or content contracts change.
- Avoid unrelated formatting or refactoring.

After implementation:

1. Run all required checks.
2. Inspect the final diff.
3. Report changed files, tests run, results, assumptions and unresolved risks.
4. Do not claim success when a required check failed or was not run.

## 8. Required Commands

The repository must provide these scripts. Use them when available:

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
pnpm format:check
```

For a normal code change, run at minimum:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Run `pnpm test:e2e` for route, navigation, form, CMS-preview or multi-page journey changes.

If a command cannot run, explain exactly why and run the strongest available alternative.

## 9. Next.js and React Rules

- Use Server Components by default.
- Add `"use client"` only when browser APIs, state, effects or interactive event handlers require it.
- Keep client-component boundaries small.
- Use `next/link`, `next/image`, the Metadata API and built-in font optimisation where appropriate.
- Prefer static generation or server rendering for public content pages.
- Do not fetch the same CMS data repeatedly in one request path when it can be cached or shared.
- Provide loading, empty, error and not-found states where applicable.
- Avoid hydration-dependent presentation for essential content.
- Do not use unsafe HTML rendering unless content is sanitised and the reason is documented.

## 10. TypeScript Rules

- Keep strict mode enabled.
- Do not use `any` unless there is a documented, temporary reason.
- Prefer explicit domain types over large anonymous objects.
- Validate untrusted external data at runtime.
- Generate and use Sanity types where supported.
- Handle nullable CMS fields deliberately; do not hide errors with non-null assertions.
- Keep public component props small, named and documented when behaviour is not obvious.

## 11. Component Rules

- Build reusable primitives before duplicating page-specific markup.
- Keep domain components close to their feature when they are not broadly reusable.
- Use semantic names such as `ProgrammeCard`, `ImpactMetric` and `PartnerLogoGrid`.
- Do not create one component per trivial HTML wrapper.
- Components must support responsive layouts, keyboard access and content variation.
- Do not hard-code page copy inside reusable presentation components.
- Use design tokens for colour, spacing, radius, type and motion.

## 12. Styling and Visual Direction

- Use Tailwind CSS and the approved SPiD design tokens.
- Do not introduce arbitrary colours or fonts when a token exists.
- Maintain a modern African climate-institution character: community-rooted, evidence-led, warm and internationally credible.
- Prioritise real SPiD photography over generic stock imagery.
- Avoid excessive gradients, glass effects, decorative leaves, animated counters and other generic climate-site clichés.
- Use animation sparingly and respect `prefers-reduced-motion`.
- Ensure layouts remain usable with long headings, missing optional media and variable CMS content.

## 13. Content and Sanity Rules

- Store editorial content in Sanity rather than hard-coding it into page components.
- Keep navigation, footer and global calls to action centrally configurable where specified.
- Use structured fields instead of one large rich-text field when content needs filtering, reuse, validation or analytics.
- Every public impact metric must support value, label, reporting period, geography and evidence owner or source.
- Programme records must support draft and published states.
- Use stable slugs and validate uniqueness.
- Use Portable Text renderers with explicit component mappings.
- Provide meaningful empty states in the Studio.
- Do not delete or rename schema fields without a migration plan.
- Do not publish draft content through public queries.

## 14. Accessibility Standard

Target WCAG 2.2 AA.

- Use semantic HTML landmarks and a logical heading order.
- Ensure full keyboard operation and visible focus states.
- Provide a working skip link.
- Every form control must have an associated label and useful error message.
- Do not communicate meaning through colour alone.
- Provide appropriate alternative text; decorative images must use empty alt text.
- Captions or transcripts must be available for meaningful audiovisual content.
- Support zoom, text resizing and reflow without loss of content.
- Respect reduced-motion preferences.
- Test interactive components with keyboard navigation and an accessibility checker.

Accessibility failures are release blockers for affected core journeys.

## 15. Performance Requirements

Optimise for mobile devices and constrained networks.

Project targets for key public pages:

- Lighthouse Performance: at least 90 in the agreed test environment
- Lighthouse Accessibility: at least 95
- Largest Contentful Paint: 2.5 seconds or better at the 75th percentile
- Cumulative Layout Shift: 0.1 or lower
- Interaction to Next Paint: 200 milliseconds or better at the 75th percentile

- Optimise and size images correctly.
- Avoid autoplay media and unnecessary client-side dependencies.
- Lazy-load below-the-fold media where appropriate.
- Do not ship large libraries for small effects.
- Treat a material bundle-size increase as a change requiring explanation.

## 16. SEO and Discoverability

- Every indexable page must have a unique title and description.
- Use canonical URLs, Open Graph data and appropriate social images.
- Generate sitemap and robots files from the deployed content model.
- Add structured data where it accurately describes the page.
- Preserve approved legacy URLs or add permanent redirects.
- Do not index preview, draft, staging or internal search pages.
- Use descriptive link text and meaningful heading structures.

## 17. Forms, Privacy and Security

- Validate forms on both client and server.
- Use spam protection that does not create unnecessary accessibility barriers.
- Apply rate limiting where appropriate.
- Collect only information required for the stated purpose.
- Display consent and privacy information where personal data is collected.
- Never log secrets or sensitive form contents.
- Keep secrets in environment variables and document required keys in `.env.example` with placeholder values only.
- Do not commit `.env` files, tokens or credentials.
- Use safe external-link handling and validate redirect destinations.
- Prefer maintained dependencies and address known high-severity vulnerabilities before release.

## 18. Testing Expectations

Add tests at the lowest useful level:

- Unit tests for utilities, validation and content transformations
- Component tests for important interactive components
- Integration tests for CMS queries, forms and routing behaviour
- End-to-end tests for core user journeys

Core end-to-end journeys include:

1. Homepage to CPI4CG to related insight to partnership enquiry
2. Homepage to AYEDE to Get Involved
3. Insights archive to article or policy brief download
4. Mobile navigation and contact form completion

Do not rely only on snapshots for behaviour.

## 19. Migration Rules

- Follow `docs/10-MIGRATION-PLAN.md` for every WordPress item.
- Classify content as migrate, rewrite, merge, archive, remove or redirect.
- Preserve publication dates and authors when verified.
- Do not migrate obsolete plugins, theme code or unreviewed HTML into the new frontend.
- Keep a redirect inventory and test it before launch.
- Do not take the WordPress site offline until the new production release is approved.

## 20. Git and Change Safety

- Do not force-push, rewrite history or amend existing commits unless explicitly instructed.
- Do not create or delete branches unless the task requires it.
- Do not discard user changes.
- Keep commits and pull requests focused on one coherent outcome.
- Use clear commit messages describing the user-visible or architectural result.
- Include migration notes for breaking changes.

## 21. Documentation Rules

Update the relevant document when changing:

- Architecture or dependencies
- Routes or navigation
- CMS schemas
- Environment variables
- Build or test commands
- Analytics events
- Accessibility behaviour
- Migration or redirect decisions

Record durable architectural or product decisions in `docs/22-DECISION-LOG.md`.

Do not turn this file into a full project encyclopedia. Put detailed specifications in `docs/` and link to them.

## 22. Definition of Done

A task is complete only when:

- The documented acceptance criteria are satisfied.
- The implementation follows the approved architecture and content model.
- Required tests pass.
- Accessibility and responsive behaviour have been checked for affected interfaces.
- No unapproved placeholder, fabricated claim or draft content is publicly exposed.
- Documentation and `.env.example` are updated where required.
- The final report states what changed, what was tested and any remaining limitation.

## 23. When to Stop and Ask

Stop and request a decision when a task would require:

- Publishing an unverified claim or impact figure
- Changing the approved technology stack
- Removing or renaming a public route without a redirect decision
- Changing the meaning of approved organisational content
- Adding payment processing or collecting sensitive personal data
- Introducing a major recurring service cost
- Making a destructive CMS or repository migration

For smaller implementation details, make the safest reasonable assumption, document it and continue.
