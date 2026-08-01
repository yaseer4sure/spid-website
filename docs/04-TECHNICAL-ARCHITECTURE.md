# SPiD Website Technical Architecture

**Document:** `docs/04-TECHNICAL-ARCHITECTURE.md`  
**Project:** SPiD Climate Resilience Website Redesign  
**Organisation:** Sustainable Participatory Development and Climate Resilience Initiative (SPiD)  
**Version:** 1.0  
**Status:** Working draft  
**Last reviewed:** 30 July 2026  
**Applies to:** MVP implementation and the initial production operating model  

---

## 1. Purpose

This document defines the approved technical architecture for the SPiD website.

It is the source of truth for:

- application architecture;
- repository structure;
- frontend framework;
- content-management integration;
- data fetching and rendering;
- editorial preview;
- hosting and deployment;
- environments;
- forms and email delivery;
- anti-spam protection;
- analytics and performance monitoring;
- security controls;
- testing;
- continuous integration;
- secrets and configuration;
- migration support;
- backups and rollback;
- future technical expansion.

Codex must follow this document together with `AGENTS.md`, the Product Requirements Document, MVP Scope, Information Architecture, and later content-model and acceptance-criteria documents.

---

## 2. Architecture Decision Summary

The approved MVP architecture is:

| Area | Decision |
|---|---|
| Architecture style | Headless, content-first website |
| Repository | pnpm workspace monorepo |
| Public frontend | Next.js App Router |
| UI runtime | React |
| Language | TypeScript in strict mode |
| Styling | Tailwind CSS and custom SPiD design tokens |
| CMS | Sanity |
| CMS editing | Separate Sanity Studio application |
| Content preview | Sanity Presentation Tool and Next.js Draft Mode |
| Hosting | Vercel |
| Source control | GitHub |
| Forms | Next.js Route Handler |
| Validation | Shared TypeScript schema validation |
| Anti-spam | Cloudflare Turnstile with server-side verification |
| Email delivery | Resend |
| Database | None for the MVP |
| User authentication | None for public visitors |
| Analytics | Vercel Web Analytics |
| Performance monitoring | Vercel Speed Insights |
| Automated testing | Unit, component, integration, and Playwright end-to-end tests |
| CI | GitHub Actions and Vercel deployment checks |
| Production domain | `spidclimateresilience.org` |
| Studio domain | `studio.spidclimateresilience.org` |
| Migration | Curated migration from WordPress |
| Search | Deferred unless approved as a Should-Have item |

---

## 3. Architectural Goals

The technical implementation must:

1. provide a fast and accessible public website;
2. support strong search-engine visibility;
3. allow SPiD staff to manage content without editing code;
4. keep programme, impact, people, partner, and insight content structured;
5. support editorial draft preview and click-to-edit workflows;
6. prevent draft or unsupported content from becoming public;
7. perform reliably on mobile devices and constrained connections;
8. keep the number of external services and recurring costs controlled;
9. allow code changes to be reviewed through preview deployments;
10. support safe migration from WordPress;
11. provide a clear path for future programmes and content types;
12. avoid unnecessary databases, accounts, dashboards, and infrastructure.

---

## 4. Architecture Principles

### 4.1 Server-first rendering

Public pages should render on the server or be statically generated wherever practical.

Client Components should be limited to interactions such as:

- mobile navigation;
- dropdown behaviour;
- form state;
- filters;
- preview controls;
- other browser-dependent interactions.

Important page content must not depend on client-side JavaScript to become visible.

### 4.2 Structured content over hard-coded pages

Editorial information belongs in Sanity.

Code defines:

- presentation;
- behaviour;
- validation;
- relationships;
- queries;
- page templates.

Sanity defines:

- approved copy;
- programmes;
- people;
- partners;
- impact records;
- insights;
- calls to action;
- images;
- resources;
- navigation where specified.

### 4.3 Published content by default

Normal public requests must use the published content perspective.

Draft content may be fetched only during a secure editorial preview session.

### 4.4 Minimal infrastructure

The MVP does not need:

- a relational database;
- user accounts;
- a custom administration dashboard;
- a message queue;
- a separate backend service;
- Kubernetes;
- a dedicated search engine;
- a complex CRM integration.

Additional infrastructure requires a recorded architecture decision.

### 4.5 Portable domain logic

Validation, content transformations, metadata helpers, and domain types should remain independent from individual page components where practical.

### 4.6 Progressive enhancement

Core navigation, content access, downloads, and contact information must remain understandable even when optional scripts or enhancements fail.

### 4.7 Evidence protection

The architecture must make it difficult to publish:

- impact figures without evidence metadata;
- programmes without required content;
- partners without approval;
- open-application messages without status fields;
- drafts through public queries.

---

## 5. System Context

```text
Editors
   |
   v
Sanity Studio
   |
   | draft and published content
   v
Sanity Content Lake and Asset CDN
   |
   | typed GROQ queries
   v
Next.js Web Application
   |
   +--> Public visitors
   |
   +--> Search engines
   |
   +--> Vercel Web Analytics and Speed Insights
   |
   +--> Contact Route Handler
            |
            +--> Cloudflare Turnstile verification
            |
            +--> Resend email delivery
            |
            +--> Approved SPiD inbox
```

WordPress remains outside the new runtime architecture. It serves only as the temporary live website and migration source until the domain cutover is completed.

---

## 6. Repository Architecture

Use one GitHub repository with a pnpm workspace.

Recommended structure:

```text
spid-website/
├── AGENTS.md
├── README.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── .nvmrc
├── .editorconfig
├── .gitignore
├── .env.example
├── docs/
│   ├── 00-PROJECT-BRIEF.md
│   ├── 01-PRD.md
│   ├── 02-MVP-SCOPE.md
│   ├── 03-INFORMATION-ARCHITECTURE.md
│   ├── 04-TECHNICAL-ARCHITECTURE.md
│   └── ...
├── content/
│   ├── source/
│   ├── migration/
│   └── seed/
├── apps/
│   ├── web/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── features/
│   │   │   ├── lib/
│   │   │   ├── sanity/
│   │   │   ├── styles/
│   │   │   └── types/
│   │   ├── tests/
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── studio/
│       ├── schemaTypes/
│       ├── structure/
│       ├── presentation/
│       ├── migrations/
│       ├── sanity.config.ts
│       ├── sanity.cli.ts
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── validation/
│   ├── types/
│   └── config/
├── scripts/
│   ├── content-audit/
│   ├── redirects/
│   └── migration/
├── tests/
│   └── e2e/
└── .github/
    ├── workflows/
    └── pull_request_template.md
```

### 6.1 Why a monorepo

A monorepo allows:

- one change to update schemas, frontend queries, types, and tests together;
- shared validation and domain types;
- one pull request for coordinated changes;
- one lockfile;
- consistent linting and TypeScript settings;
- independent deployment of the public website and Studio.

### 6.2 Workspace boundaries

`apps/web` owns:

- public routes;
- page rendering;
- components;
- metadata;
- forms;
- public Sanity queries;
- preview integration;
- redirects;
- public analytics.

`apps/studio` owns:

- Sanity configuration;
- schemas;
- editorial structure;
- Presentation Tool configuration;
- document resolvers;
- CMS validation;
- migrations.

`packages/validation` owns:

- shared form schemas;
- reusable validation helpers;
- safe parsing utilities.

`packages/types` owns only truly shared domain types that cannot be generated.

Generated Sanity types should remain generated rather than being manually duplicated.

`packages/config` may hold:

- shared TypeScript configuration;
- ESLint configuration;
- formatting configuration.

Do not create shared packages prematurely. A package must solve actual duplication across applications.

---

## 7. Version and Dependency Policy

### 7.1 Initial versions

At repository initialisation:

- use the latest stable Next.js 16.x release compatible with the approved Sanity integration;
- use the React version supported by that Next.js release;
- use a compatible current `next-sanity` release;
- use the current stable Sanity Studio release;
- use the current active Long-Term Support Node.js release supported by all selected tools;
- use pnpm as the package manager.

Exact versions must be committed in `package.json` and `pnpm-lock.yaml`.

### 7.2 Stability rules

- Do not use canary, beta, release-candidate, or experimental dependencies in production.
- Do not use floating dependency versions.
- Do not upgrade major framework versions inside an unrelated feature task.
- Major upgrades require a dedicated pull request and test pass.
- Security patches and safe minor updates should be applied regularly.
- The Node.js version must be declared in `.nvmrc` and package-engine metadata.
- The package-manager version must be declared using the `packageManager` field.

### 7.3 Sanity API version

All Sanity clients must use a fixed API-version date.

Do not use a dynamic value such as the current date at runtime.

Changing the API version requires testing and a recorded decision.

---

## 8. Public Web Application

### 8.1 Framework

The public website uses Next.js App Router.

Use:

- route segments;
- layouts;
- Server Components;
- Route Handlers;
- Metadata API;
- image optimisation;
- font optimisation;
- error boundaries;
- `not-found` handling;
- sitemap and robots conventions;
- static parameters where useful.

Do not introduce the Pages Router.

### 8.2 Rendering strategy

Use a hybrid strategy.

#### Static or cached public content

Prefer static generation or cacheable server rendering for:

- homepage;
- About pages;
- programme pages;
- Impact;
- Partners;
- Get Involved;
- Insights archives;
- individual insights;
- legal pages.

#### Dynamic server execution

Use dynamic server execution for:

- draft preview;
- contact-form submission;
- anti-spam verification;
- environment-sensitive preview behaviour;
- any future protected webhook.

#### Client rendering

Use client rendering only for:

- navigation controls;
- form interaction;
- optional filtering;
- reduced-motion-safe enhancements;
- approved analytics components.

### 8.3 Route groups

Recommended route structure:

```text
apps/web/src/app/
├── (site)/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── our-work/
│   ├── impact/
│   ├── insights/
│   ├── partners/
│   ├── get-involved/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms/
│   └── accessibility/
├── api/
│   ├── contact/
│   │   └── route.ts
│   └── draft-mode/
│       ├── enable/
│       │   └── route.ts
│       └── disable/
│           └── route.ts
├── error.tsx
├── global-error.tsx
├── not-found.tsx
├── robots.ts
├── sitemap.ts
└── layout.tsx
```

Route groups must not change public URLs.

### 8.4 Component boundaries

Use these broad layers:

```text
components/
├── ui/           # buttons, links, form controls, typography primitives
├── layout/       # header, navigation, footer, containers
├── content/      # Portable Text, images, resources
└── feedback/     # alerts, loading, empty and error states

features/
├── programmes/
├── insights/
├── impact/
├── people/
├── partners/
├── forms/
└── preview/
```

Do not create deeply nested abstractions that obscure simple page composition.

---

## 9. Sanity Architecture

### 9.1 Studio deployment

Sanity Studio should be a separate application in `apps/studio`.

Preferred production URL:

```text
https://studio.spidclimateresilience.org
```

The Studio must:

- require Sanity authentication;
- be excluded from search indexing;
- use the same repository and review workflow as the web application;
- deploy independently from the public website;
- provide Presentation Tool access to approved preview origins.

### 9.2 Project and dataset

Use one Sanity project and one production dataset for the MVP.

The dataset contains:

- published content;
- drafts;
- image assets;
- document assets.

A second dataset should not be introduced until a real testing or governance need justifies it.

Code and preview environments may use the same dataset because unpublished drafts remain protected through Sanity permissions and Draft Mode.

### 9.3 Required content groups

The MVP schemas will include:

- global settings;
- navigation;
- footer;
- homepage;
- standard page;
- programme;
- insight;
- person;
- partner;
- impact metric;
- testimonial;
- call to action;
- downloadable resource;
- form configuration where approved.

Exact schema fields are defined in `docs/06-CONTENT-MODELS.md`.

### 9.4 Content relationships

Use Sanity references for relationships such as:

- insight to programme;
- impact metric to programme;
- person to authored insight;
- partner to programme;
- programme to related resources;
- homepage to featured records.

Avoid duplicating full records inside other documents.

### 9.5 Portable Text

Use Portable Text for long-form editorial content.

Provide explicit renderers for:

- headings;
- paragraphs;
- lists;
- links;
- quotations;
- images;
- figures and captions;
- callouts;
- downloadable resources;
- approved embeds.

Unsupported block types must fail safely and be visible during development.

### 9.6 Images and files

Use Sanity’s asset system for editorial images and downloadable resources.

Image records must support:

- meaningful alternative text;
- caption;
- credit;
- location where appropriate;
- date where appropriate;
- focal point or hotspot;
- permission or usage-status metadata where required.

Decorative images should be marked appropriately and rendered with empty alternative text.

### 9.7 Validation

Sanity schema validation must enforce critical editorial rules.

Examples:

- published programme requires title, slug, summary, and core body content;
- public person requires name and role;
- informative image requires alternative text;
- impact metric requires reporting period, geography, and evidence owner;
- partner requires approval before public display;
- opportunity status must not imply applications are open unless explicitly set;
- slug must be unique;
- SEO title and description must remain within agreed guidance.

CMS validation reduces risk but does not replace editorial approval.

---

## 10. Content Fetching and Type Safety

### 10.1 Query language

Use GROQ queries defined close to the domain feature or in the Sanity query layer.

Queries must:

- fetch only fields needed by the page;
- exclude drafts in public mode;
- avoid unbounded deeply nested projections;
- resolve required relationships explicitly;
- provide stable ordering;
- handle missing optional data safely.

### 10.2 Generated types

Use Sanity TypeGen for schemas and queries where supported.

After schema or query changes, run the type-generation command and commit generated outputs where the repository policy requires it.

Do not manually recreate generated CMS response types.

### 10.3 Public and preview clients

Provide clearly separated behaviour for:

- published public content;
- draft preview content.

Public content must:

- use the published perspective;
- avoid private tokens in browser code;
- support caching.

Preview content must:

- require a secure Draft Mode session;
- use the server-only read token;
- include draft content;
- enable click-to-edit data only in preview;
- avoid contaminating metadata with preview annotations.

### 10.4 Metadata queries

Metadata values must be fetched without visual-editing annotation characters.

Titles, descriptions, canonical URLs, JSON-LD, attributes, slugs, and identifiers must always use clean values.

---

## 11. Preview and Visual Editing

Use:

- Sanity Presentation Tool;
- Next.js Draft Mode;
- secure Draft Mode enable and disable Route Handlers;
- content-source maps;
- click-to-edit overlays;
- live draft updates.

### 11.1 Preview flow

```text
Editor opens Presentation Tool
→ Studio requests secure Draft Mode activation
→ Next.js verifies the request
→ Draft Mode cookie is enabled
→ frontend fetches draft perspective
→ visual-editing overlays connect page elements to CMS fields
→ editor changes content
→ preview updates
```

### 11.2 Preview rules

- Draft Mode enablement must use the approved secure Sanity integration.
- The read token must remain server-only.
- Preview routes must not be indexable.
- Preview content must never be cached as public output.
- A direct frontend preview must provide a way to disable Draft Mode.
- Studio URL resolvers must match actual frontend routes.
- Staging and production origins must be allow-listed correctly.
- Preview failures must not affect the published public website.

---

## 12. Caching and Content Freshness

### 12.1 Strategy

Use framework and Sanity-supported caching rather than a custom cache layer.

Public content should be cacheable and update after publication without requiring a full manual rebuild.

The approved implementation should use Sanity’s supported live-content or revalidation integration with Next.js.

### 12.2 Cache principles

- Draft Mode bypasses public caching.
- Published pages may use static or cached rendering.
- Publishing content should update affected pages promptly.
- A full site redeploy must not be required for routine editorial changes.
- Queries should use consistent cache tags or the approved Sanity live integration.
- Sitemap and archive pages must reflect newly published records.
- If a webhook fallback is added, it must verify its secret and revalidate only affected content.

### 12.3 Failure behaviour

If Sanity is temporarily unavailable:

- already cached public pages should remain available where possible;
- the website should display graceful errors for uncached requests;
- form submission must remain independent from Sanity unless form configuration is required;
- the public site must not expose stack traces.

---

## 13. Forms Architecture

### 13.1 Scope

The MVP supports:

- general enquiry;
- partnership enquiry;
- funding enquiry;
- research collaboration;
- volunteer expertise;
- media enquiry.

### 13.2 Endpoint

Use a Next.js Route Handler:

```text
POST /api/contact
```

Do not send email directly from browser code.

### 13.3 Submission flow

```text
Visitor completes form
→ client performs usability validation
→ request reaches Route Handler
→ server validates payload
→ server verifies Turnstile token
→ server checks honeypot and basic abuse controls
→ server sends message through Resend
→ approved SPiD inbox receives structured email
→ visitor receives success or safe error response
```

### 13.4 Validation

Use one shared validation schema for client and server where practical.

Validate:

- enquiry type;
- name;
- email;
- organisation if provided;
- subject if used;
- message;
- consent acknowledgement;
- Turnstile token;
- hidden honeypot field;
- maximum input lengths.

Server validation is authoritative.

### 13.5 Spam controls

Use Cloudflare Turnstile.

Requirements:

- use the public site key only in browser code;
- keep the secret key server-only;
- validate every token through Cloudflare’s server-side verification endpoint;
- reject expired, invalid, or replayed tokens;
- use official testing keys in automated tests;
- add a honeypot as a secondary low-friction control;
- apply platform-level or application-level rate limiting if abuse appears.

Do not rely on client-side CAPTCHA completion alone.

### 13.6 Email delivery

Use Resend with an authenticated SPiD sending domain.

Recommended sender:

```text
SPiD Website <website@spidclimateresilience.org>
```

Recommended destination:

```text
info@spidinitiative.org
```

The actual sender and recipients must be confirmed and configured through environment variables.

The email should include:

- enquiry type;
- sender name;
- sender email;
- organisation if supplied;
- message;
- source page;
- submission timestamp;
- generated request identifier.

Set the visitor’s email as `reply-to`, not as the sending address.

### 13.7 Submission storage

Do not add a submission database in the MVP.

The system will deliver submissions by email.

Do not store full form content in:

- Vercel logs;
- analytics events;
- Sanity;
- browser storage.

A future CRM or secure submission store requires a privacy and retention decision.

### 13.8 Failure handling

If email delivery fails:

- return a safe error message;
- provide the approved direct contact email;
- log a request identifier and non-sensitive failure metadata;
- never expose provider credentials or raw provider errors;
- avoid falsely showing a success state.

---

## 14. Analytics and Performance Monitoring

### 14.1 Web analytics

Use Vercel Web Analytics for the MVP.

Track:

- page views;
- top routes;
- referrers;
- high-level visitor environment data;
- approved custom conversion events.

Approved custom events may include:

- `partner_cta_clicked`;
- `programme_viewed`;
- `policy_brief_downloaded`;
- `contact_form_started`;
- `contact_form_succeeded`;
- `contact_form_failed`.

Do not send names, emails, message text, or other personal data to analytics.

### 14.2 Performance monitoring

Use Vercel Speed Insights to observe field performance and Core Web Vitals.

Measure at minimum:

- Largest Contentful Paint;
- Cumulative Layout Shift;
- Interaction to Next Paint.

Use lab testing in CI or pre-launch review in addition to field monitoring.

### 14.3 Consent and disclosure

Analytics use must be described accurately in the privacy policy.

If any later analytics, advertising, or embedded service introduces cookies or cross-site tracking, consent requirements must be reassessed before deployment.

### 14.4 Error monitoring

For the MVP:

- use Vercel runtime and deployment logs;
- produce structured non-sensitive server logs;
- monitor form-delivery failures;
- use build and test alerts.

A dedicated error-monitoring provider such as Sentry is deferred unless production needs justify it.

---

## 15. Hosting and Environments

### 15.1 Vercel projects

Use two Vercel projects from the same repository:

1. `spid-web`
2. `spid-studio`

Each project uses its own root directory and environment variables.

### 15.2 Environments

Use:

- Local
- Preview
- Production

#### Local

Used for developer work.

Local URLs:

```text
Web:    http://localhost:3000
Studio: http://localhost:3333
```

#### Preview

Created for pull requests and non-production branches.

Preview deployments must:

- use preview environment variables;
- be blocked from search indexing;
- support stakeholder review;
- support Sanity preview where configured;
- avoid production email recipients when testing forms;
- use test Turnstile configuration;
- display a non-production indicator where appropriate.

#### Production

Used for the public website and editorial Studio.

Production domains:

```text
https://spidclimateresilience.org
https://www.spidclimateresilience.org
https://studio.spidclimateresilience.org
```

Choose one public canonical hostname. The other must redirect permanently to it.

Recommended canonical hostname:

```text
https://spidclimateresilience.org
```

### 15.3 Branch strategy

Recommended:

- `main` is protected and production-ready;
- feature branches create preview deployments;
- pull requests require checks;
- code reaches production only after review and merge;
- urgent fixes still use a reviewed pull request where practical.

Do not maintain a permanent `develop` branch unless the team has a real need for it.

### 15.4 Deployment promotion

Every pull request should receive a preview deployment.

Production deployment requires:

- approved pull request;
- passing required checks;
- no unresolved launch blocker;
- merge into the protected production branch.

For the initial launch, domain cutover is a separate explicit approval even after the production deployment exists.

---

## 16. Environment Variables

Provide placeholder names in the root `.env.example`.

Never commit real values.

### 16.1 Web application

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SANITY_STUDIO_URL=

SANITY_API_READ_TOKEN=

NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=

RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
CONTACT_REPLY_CONFIRMATION_ENABLED=

VERCEL_ENV=
```

Analytics packages may not require secrets, but their activation must remain explicit.

### 16.2 Studio

```bash
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=
SANITY_STUDIO_PREVIEW_ORIGIN=
SANITY_STUDIO_PRODUCTION_ORIGIN=
```

Public Sanity project identifiers are not secrets.

Read tokens, Turnstile secrets, and email-provider keys are secrets.

### 16.3 Variable rules

- Separate Preview and Production values.
- Use test recipients for Preview.
- Validate required variables at application startup or build time.
- Never expose a server-only variable through a `NEXT_PUBLIC_` prefix.
- Document every new variable.
- Rotate compromised credentials immediately.
- Remove unused variables.

---

## 17. Security Architecture

### 17.1 Baseline controls

The web application must implement:

- HTTPS;
- secure cookies;
- safe Draft Mode handling;
- input validation;
- output encoding;
- server-side Turnstile verification;
- restricted CORS where applicable;
- dependency scanning;
- secret management;
- least-privilege Sanity tokens;
- safe external links;
- no indexing of previews;
- no exposure of draft content.

### 17.2 Security headers

Configure and test appropriate headers such as:

- Content-Security-Policy;
- Strict-Transport-Security;
- X-Content-Type-Options;
- Referrer-Policy;
- Permissions-Policy;
- frame controls appropriate to Sanity Presentation Tool behaviour.

The Content Security Policy must allow only the services the website actually uses.

Do not copy a generic policy without testing:

- Sanity images and content;
- Vercel analytics;
- Turnstile;
- Studio preview;
- Resend is server-to-server and should not require browser access.

### 17.3 Token permissions

- Public content fetching should not require a private token.
- Preview uses a server-only Sanity token with the minimum read permission required.
- Do not use write tokens in the public web application.
- Studio users authenticate through Sanity.
- Do not put provider keys in client bundles.

### 17.4 Personal data

The MVP should collect only data required to answer enquiries.

Do not collect:

- passwords;
- identity-document numbers;
- financial information;
- unnecessary demographic data;
- sensitive personal information.

Form-retention and recipient practices must be covered by the approved privacy policy.

---

## 18. Accessibility Architecture

Accessibility must be built into components rather than added at the end.

Technical requirements include:

- semantic route layouts;
- one logical page-level heading;
- keyboard-safe navigation primitives;
- focus management for dialogs and mobile menus;
- visible focus styles;
- reduced-motion media query support;
- accessible form error summaries;
- labelled fields;
- meaningful status announcements;
- sufficient colour contrast;
- alternative text handling in the CMS;
- accessible Portable Text rendering;
- no inaccessible custom controls where native elements suffice.

Automated checks are necessary but do not replace manual keyboard and screen-reader review.

---

## 19. Performance Architecture

### 19.1 Performance approach

- Server Components by default
- minimal client JavaScript
- optimised images
- font subsetting and optimisation
- code splitting
- lazy loading below-the-fold media
- cacheable content pages
- restrained third-party scripts
- no autoplay background video
- no heavy map in the MVP
- no client-side CMS fetching for initial page content

### 19.2 Performance budgets

Initial budgets for key routes:

| Area | Target |
|---|---|
| Lighthouse Performance | At least 90 in agreed test profile |
| Lighthouse Accessibility | At least 95 |
| LCP | 2.5 seconds or better at 75th percentile |
| CLS | 0.1 or lower |
| INP | 200 milliseconds or better at 75th percentile |
| Initial client JavaScript | Kept as low as practical and reviewed on material increase |
| Hero image | Responsive, compressed, correctly sized |
| Fonts | Limited families, weights, and character sets |

Any material budget exception must be documented.

### 19.3 Third-party script rule

No third-party script may be added without evaluating:

- user value;
- performance cost;
- privacy impact;
- security impact;
- accessibility;
- recurring cost.

---

## 20. SEO and Metadata Architecture

Use Next.js Metadata API for:

- titles;
- descriptions;
- canonical URLs;
- Open Graph;
- social cards;
- robots directives.

Generate:

- `sitemap.xml`;
- `robots.txt`;
- appropriate structured data;
- breadcrumb structured data where accurate.

### 20.1 Metadata source

Metadata should come from:

1. page-specific CMS fields;
2. sensible template fallbacks;
3. global site settings.

Do not allow draft annotation characters in metadata.

### 20.2 Structured data

Use structured data only where it accurately describes the content.

Possible types include:

- Organization;
- WebSite;
- BreadcrumbList;
- Article;
- NewsArticle;
- Person;
- CreativeWork or Report where appropriate.

Do not fabricate fields to make structured data appear more complete.

---

## 21. Redirect and Migration Architecture

### 21.1 Redirect source

Maintain redirects in a version-controlled data file generated from the migration inventory.

Recommended:

```text
apps/web/src/lib/redirects/legacy-redirects.ts
```

or a generated JSON file when the inventory becomes large.

### 21.2 Redirect implementation

Use framework-supported permanent redirects.

Requirements:

- no redirect chains;
- no loops;
- query-string handling where needed;
- preserve high-value file URLs where practical;
- test every approved legacy mapping;
- do not redirect unrelated removed content to the homepage.

### 21.3 Migration scripts

Migration scripts belong under:

```text
scripts/migration/
```

They must be:

- repeatable where practical;
- logged;
- non-destructive by default;
- tested on a limited sample;
- capable of preserving verified dates, authors, slugs, and resources;
- reviewed before writing to production content.

Do not migrate WordPress page-builder markup into Sanity as unreviewed HTML.

---

## 22. Testing Architecture

### 22.1 Test layers

Use:

- unit tests;
- component tests;
- integration tests;
- end-to-end tests;
- accessibility checks;
- build verification.

### 22.2 Recommended tools

- Vitest for unit and integration tests
- React Testing Library for interactive components
- Playwright for end-to-end and browser tests
- automated accessibility checks integrated into component or browser tests
- TypeScript compiler for type safety
- ESLint for static checks

Exact packages must be pinned in the lockfile.

### 22.3 Unit tests

Cover:

- validation;
- metadata helpers;
- URL builders;
- CMS transformations;
- date formatting;
- redirect utilities;
- content guards;
- form parsing.

### 22.4 Component tests

Cover:

- mobile menu;
- dropdown navigation;
- form controls;
- error summaries;
- programme cards;
- resource links;
- Portable Text custom blocks;
- empty states.

### 22.5 Integration tests

Cover:

- Sanity query projections;
- draft exclusion;
- published-content guards;
- contact Route Handler;
- Turnstile validation responses;
- email-provider success and failure;
- metadata generation;
- sitemap record inclusion.

External services must be mocked in automated tests.

### 22.6 End-to-end tests

Core journeys:

1. Homepage → CPI4CG → related insight → Get Involved → partnership form
2. Homepage → AYEDE → Get Involved
3. Insights archive → publication → resource download
4. Mobile navigation
5. Contact-form success
6. Contact-form validation failure
7. Invalid route
8. Published programme visibility
9. Unpublished programme exclusion

### 22.7 Visual review

Automated visual-regression testing may be introduced later.

For the MVP, every major page template must receive manual review at agreed desktop and mobile viewport sizes.

---

## 23. Continuous Integration

### 23.1 Required pull-request checks

GitHub Actions should run:

```bash
pnpm install --frozen-lockfile
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Run end-to-end tests in CI for changes affecting:

- routes;
- navigation;
- forms;
- CMS integration;
- preview;
- redirects;
- core journeys.

### 23.2 Vercel checks

Each pull request should provide:

- web preview;
- Studio preview where affected;
- build status;
- deployment logs;
- preview URL.

### 23.3 Merge protection

The production branch should require:

- passing checks;
- resolved review comments;
- at least one approval where team workflow permits;
- no unresolved merge conflict;
- updated documentation for architectural changes.

---

## 24. Logging and Operational Visibility

### 24.1 Logging rules

Server logs may include:

- request identifier;
- route;
- timestamp;
- response status;
- external provider status category;
- duration;
- environment.

Server logs must not include:

- full name;
- email address;
- message body;
- Turnstile token;
- Sanity token;
- Resend API key;
- other secrets.

### 24.2 Alerts

At minimum, the team should notice:

- failed production deployment;
- repeated contact-form delivery failures;
- domain or certificate failure;
- serious build or dependency vulnerability;
- material performance regression.

The exact notification channel may be configured during deployment planning.

---

## 25. Backup, Recovery, and Rollback

### 25.1 Code

GitHub is the source of truth for code and documentation.

Use:

- protected production branch;
- tagged launch release;
- pull-request history;
- Vercel deployment history.

### 25.2 Content

Sanity is the source of truth for new editorial content after migration.

Before launch:

- export or otherwise preserve a content snapshot;
- retain the WordPress source and database backup;
- keep original media files where available;
- preserve the redirect inventory.

### 25.3 Rollback

If a code deployment fails:

- promote or restore the last known good Vercel deployment.

If the initial domain cutover fails:

- restore DNS to the previous stable website while the issue is corrected.

If a content error is published:

- unpublish or correct it through the CMS;
- use document history where available;
- confirm that public caches have updated.

### 25.4 WordPress retirement

Do not delete WordPress immediately after launch.

Recommended sequence:

1. launch the new website;
2. monitor traffic, forms, redirects, and errors;
3. retain a private or restricted legacy copy;
4. create final backups;
5. retire public WordPress access only after the agreed verification period.

---

## 26. Domain and DNS Plan

The initial target is:

```text
spidclimateresilience.org        → Vercel web production
www.spidclimateresilience.org    → permanent redirect to canonical hostname
studio.spidclimateresilience.org → Vercel Studio production
```

Before DNS change:

- reduce DNS TTL where appropriate;
- record current DNS values;
- verify Vercel domains;
- verify email DNS records are not disturbed;
- verify Resend sending-domain records;
- verify the current WordPress rollback destination;
- test certificates;
- approve redirects.

Website DNS changes must not accidentally remove MX, SPF, DKIM, or DMARC records used for organisational email.

---

## 27. Email-Domain Architecture

Resend requires an approved sending domain.

Recommended dedicated sending identity:

```text
website@spidclimateresilience.org
```

DNS configuration should support:

- domain verification;
- SPF;
- DKIM;
- DMARC alignment where configured.

The website may send from the verified domain while delivering enquiries to the approved operational inbox.

Do not make the visitor’s address the `from` address because that can conflict with domain authentication.

---

## 28. Development Commands

The root repository should provide orchestration commands.

Recommended scripts:

```bash
pnpm dev
pnpm dev:web
pnpm dev:studio
pnpm build
pnpm build:web
pnpm build:studio
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm format
pnpm format:check
pnpm sanity:typegen
```

`pnpm dev` should run the web and Studio applications together.

The README must document setup from a clean clone.

---

## 29. Local Development

A new developer or Codex environment should be able to:

1. clone the repository;
2. activate the declared Node.js and pnpm versions;
3. install dependencies;
4. copy `.env.example` to local environment files;
5. provide required development values;
6. start both applications;
7. run lint, type checking, tests, and build;
8. access the website and Studio locally.

The repository must not depend on undocumented local state.

Use official test keys or mocks for form services during local automated testing.

---

## 30. Content Seeding

Provide a controlled seed process for initial content.

Seed content should include, when approved:

- site settings;
- navigation;
- footer;
- homepage;
- CPI4CG;
- AYEDE;
- one related insight or policy brief;
- Get Involved content;
- contact configuration.

IICARE may be seeded as a draft only.

The seed process must not overwrite production editorial changes without an explicit flag and warning.

---

## 31. Architecture for the First Vertical Slice

The first Codex build must implement:

```text
Homepage
→ CPI4CG
→ Related insight or policy brief
→ Get Involved
→ Contact or partnership submission
```

Required technical work:

- workspace and applications;
- Next.js layout;
- Sanity Studio;
- initial schemas;
- typed queries;
- Draft Mode;
- Presentation Tool;
- global design tokens;
- header and mobile navigation;
- footer;
- programme template;
- insight template;
- Get Involved page;
- form Route Handler;
- Turnstile integration;
- Resend integration;
- metadata;
- sitemap foundation;
- draft exclusion;
- automated tests;
- Vercel previews.

The first slice must be complete enough to validate architecture, not merely display static mockups.

---

## 32. Deferred Technical Capabilities

The following are deferred unless separately approved:

- dedicated search service;
- database-backed form archive;
- CRM integration;
- newsletter provider;
- donation payments;
- user authentication;
- applicant portal;
- multilingual routing;
- advanced GIS;
- live climate data;
- real-time impact dashboard;
- dedicated error-monitoring vendor;
- complex consent-management platform;
- digital asset management beyond Sanity;
- separate API service;
- mobile application.

Deferred capabilities must not be partially introduced without an approved use case.

---

## 33. Architecture Decision Records

Durable technical decisions must be recorded in:

```text
docs/22-DECISION-LOG.md
```

Record a decision when changing:

- framework;
- CMS;
- hosting;
- repository structure;
- form provider;
- analytics;
- search;
- database;
- authentication;
- deployment model;
- major content architecture;
- privacy-sensitive integration.

Each decision should include:

- date;
- context;
- decision;
- alternatives considered;
- consequences;
- owner;
- status.

---

## 34. Technical Definition of Done

A technical milestone is complete only when:

- code follows this architecture;
- required tests pass;
- production build succeeds;
- affected documentation is updated;
- required environment variables are documented;
- previews work;
- draft content remains private;
- no secrets appear in code or logs;
- accessibility is checked;
- responsive behaviour is checked;
- metadata is valid;
- external-service failures are handled safely;
- the final implementation report identifies assumptions and remaining risks.

---

## 35. Technical Architecture Acceptance Criteria

This architecture is correctly implemented when:

1. the repository uses a pnpm workspace;
2. web and Studio applications deploy independently;
3. the public site uses Next.js App Router and strict TypeScript;
4. public initial content is rendered server-side or statically;
5. Sanity is the editorial source of truth;
6. public requests exclude drafts;
7. secure Draft Mode and visual editing work;
8. generated CMS types are used;
9. forms submit through a server Route Handler;
10. Turnstile is verified on the server;
11. Resend uses an authenticated SPiD domain;
12. form content is not stored or logged by default;
13. Preview and Production use separate configuration;
14. preview deployments are not indexable;
15. analytics receives no personal data;
16. redirects are version-controlled and tested;
17. CI runs formatting, linting, type checking, tests, and build;
18. core journeys have end-to-end tests;
19. rollback is possible through Vercel deployment history;
20. WordPress remains recoverable during the launch-verification period.

---

## 36. Confirmed Decisions

This document confirms:

- one repository;
- two applications;
- Next.js App Router;
- Sanity Studio as a separate application;
- one Sanity production dataset for the MVP;
- Vercel hosting;
- no MVP database;
- no public user accounts;
- Resend for contact delivery;
- Cloudflare Turnstile for anti-spam;
- Vercel Web Analytics and Speed Insights;
- Vercel logs instead of a dedicated error-monitoring vendor initially;
- hybrid static and server rendering;
- secure Draft Mode and visual editing;
- curated WordPress migration;
- manual approval before production domain cutover.

---

## 37. Open Technical Decisions

The following can be completed in later documents without blocking repository initialisation:

- exact font files and design tokens;
- exact Sanity field definitions;
- exact contact-form recipient list;
- whether users receive an automatic acknowledgement email;
- whether basic search launches with the MVP;
- whether a newsletter provider is added;
- exact production branch protection policy;
- length of the WordPress post-launch retention period;
- whether preview deployments require additional access protection;
- final legal and analytics disclosure language.

These decisions must be resolved before their affected feature reaches production.
