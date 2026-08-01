# SPiD Website Information Architecture

**Document:** `docs/03-INFORMATION-ARCHITECTURE.md`  
**Project:** SPiD Climate Resilience Website Redesign  
**Organisation:** Sustainable Participatory Development and Climate Resilience Initiative (SPiD)  
**Version:** 1.0  
**Status:** Working draft  
**Applies to:** MVP and future website expansion  

---

## 1. Purpose

This document defines how SPiD’s website content is organised, labelled, connected, navigated, and discovered.

It serves as the source of truth for:

- top-level navigation;
- route naming;
- page hierarchy;
- dropdown structure;
- mobile navigation;
- breadcrumbs;
- footer navigation;
- internal linking;
- archive behaviour;
- content relationships;
- URL naming;
- WordPress redirect planning;
- future expansion.

The Information Architecture must make the website easy to understand for first-time visitors while remaining flexible enough to support new programmes, publications, opportunities, and institutional content.

---

## 2. Information Architecture Principles

The website architecture must follow these principles.

### 2.1 Lead with user intent

Navigation labels must reflect what visitors are trying to find, not internal organisational language.

Examples:

- Use **Our Work** instead of **Products**.
- Use **Insights** instead of splitting stories, policy briefs, press releases, and blog content into disconnected top-level sections.
- Use **Get Involved** for partnership, funding, volunteering, and collaboration pathways.

### 2.2 Keep the primary navigation short

The desktop navigation should contain no more than seven top-level items, excluding the primary call-to-action button.

The recommended top-level navigation is:

1. About
2. Our Work
3. Impact
4. Insights
5. Partners
6. Get Involved
7. Contact

The primary action button should be:

> **Partner With Us**

### 2.3 Preserve all meaningful current content

Every meaningful component from the current website or content pack must be retained, renamed, regrouped, merged, archived, or redirected.

No section should disappear without a recorded decision.

### 2.4 Separate institutional content from programme content

Visitors should not have to search programme pages to understand SPiD as an organisation.

Institutional pages belong under **About**. Programme pages belong under **Our Work**.

### 2.5 Use one publishing system for knowledge content

Blog posts, policy briefs, press releases, community stories, research findings, and programme updates should share one structured content system under **Insights**.

### 2.6 Make partnerships visible

Partnership and funding routes must remain visible across the site through:

- the primary navigation call to action;
- programme-page calls to action;
- the Partners page;
- the Get Involved page;
- the footer;
- relevant insight pages.

### 2.7 Keep URLs human-readable

URLs must be:

- short;
- descriptive;
- lowercase;
- hyphen-separated;
- free from unnecessary dates;
- stable after publication.

### 2.8 Avoid publishing thin pages

A route should not be public merely because it exists in the CMS.

Incomplete programme, governance, testimonial, or impact pages must remain draft or be omitted until approved.

---

## 3. Recommended Primary Navigation

### Desktop navigation

```text
About
Our Work
Impact
Insights
Partners
Get Involved
Contact
[Partner With Us]
```

### Navigation behaviour

- The header remains visible when useful but should not consume excessive vertical space.
- The navigation must be fully keyboard accessible.
- Dropdowns must open on click and support keyboard focus.
- Hover may enhance desktop behaviour but must not be the only interaction method.
- The current page and active section must be visually indicated.
- The primary call-to-action button must remain distinct from standard navigation links.
- Navigation must remain usable at 200% zoom.
- The logo must link to the homepage.

---

## 4. Recommended Sitemap

```text
/
├── /about
│   ├── /about/our-story
│   ├── /about/approach
│   ├── /about/team
│   └── /about/governance
│
├── /our-work
│   ├── /our-work/cpi4cg
│   ├── /our-work/ayede
│   └── /our-work/[programme-slug]
│
├── /impact
│
├── /insights
│   ├── /insights/blog
│   ├── /insights/policy-briefs
│   ├── /insights/press-releases
│   ├── /insights/community-stories
│   ├── /insights/research
│   └── /insights/[slug]
│
├── /partners
├── /get-involved
├── /contact
│
├── /privacy-policy
├── /terms
├── /accessibility
├── /sitemap.xml
├── /robots.txt
├── /404
└── /500
```

The following routes may be added after the MVP:

```text
/opportunities
/opportunities/[slug]
/events
/events/[slug]
/reports
/reports/[slug]
/campaigns/[slug]
```

---

## 5. Top-Level Section Specifications

## 5.1 Home

**Route:** `/`

### Purpose

The homepage introduces SPiD, establishes credibility, and guides visitors toward programmes, evidence, insights, and partnership pathways.

### Required content relationships

The homepage should pull from:

- site settings;
- homepage record;
- featured programmes;
- selected impact metrics;
- featured insight;
- approved partner records;
- selected call-to-action records.

### Primary user actions

- Partner with SPiD
- Explore programmes
- Review impact
- Read insights
- Support community climate action

### Homepage sections

Recommended order:

1. Hero
2. Short organisational introduction
3. What We Do
4. Featured programmes
5. Impact evidence
6. Featured story or publication
7. Community-centred section
8. Partners
9. Get Involved
10. Newsletter or updates, if approved
11. Footer

The homepage must not become a complete copy of every page. It should guide visitors deeper into the site.

---

## 5.2 About

**Landing route:** `/about`

### Purpose

Explain who SPiD is, why it exists, how it works, and who leads it.

### Dropdown structure

```text
About
├── Overview
├── Our Story
├── Our Approach
├── Our Team
└── Governance
```

### Routes

| Label | Route |
|---|---|
| Overview | `/about` |
| Our Story | `/about/our-story` |
| Our Approach | `/about/approach` |
| Our Team | `/about/team` |
| Governance | `/about/governance` |

### About landing page

The landing page should summarise:

- organisational identity;
- purpose;
- vision;
- mission;
- why SPiD exists;
- working geography;
- links to approach, team, and governance.

### Our Story

The page should contain:

- organisational background;
- vision;
- mission;
- central positioning;
- communities prioritised;
- concise institutional narrative.

### Our Approach

The page should contain:

- Theory of Change;
- community-led research;
- knowledge exchange;
- capacity building;
- climate leadership;
- climate-resilient interventions;
- policy engagement;
- advocacy;
- relevant frameworks.

### Our Team

The page should contain:

- leadership;
- team members;
- advisory board;
- profile details;
- clear distinction between operational staff and advisers.

### Governance

The page should support:

- governance structure;
- accountability commitments;
- transparency statement;
- advisory arrangements;
- policies;
- annual reports;
- institutional documents.

Where full governance content is unavailable, the page may launch with a concise approved statement and approved documents only.

---

## 5.3 Our Work

**Landing route:** `/our-work`

### Purpose

Present SPiD’s programme portfolio in a way that communicates strategy, evidence, geography, themes, and partnership opportunities.

### Dropdown structure

```text
Our Work
├── Overview
├── CPI4CG
├── AYEDE 4 Climate Action
└── Future published programmes
```

Only published programmes may appear.

### Programme routes

| Programme | Route | MVP status |
|---|---|---|
| CPI4CG | `/our-work/cpi4cg` | Published |
| AYEDE 4 Climate Action | `/our-work/ayede` | Published |
| IICARE | `/our-work/iicare` | Draft only |
| Future programme | `/our-work/[programme-slug]` | When approved |

### Our Work landing page

The page should include:

- portfolio introduction;
- thematic focus;
- geographic scope;
- programme cards;
- evidence or selected impact;
- partnership call to action.

### Programme-page template

Each programme page should support:

1. Hero and summary
2. Programme status
3. Location or geography
4. Problem or context
5. Programme approach
6. Activities or methodology
7. Milestones
8. Impact or expected outcomes
9. Partners
10. Framework alignment
11. Related insights and resources
12. Partnership or support call to action

### Publication rule

A programme must not appear in:

- navigation;
- programme listings;
- related content;
- sitemap;
- search;
- structured data;

until its CMS record is published.

---

## 5.4 Impact

**Route:** `/impact`

### Purpose

Show credible evidence of SPiD’s contribution to climate leadership, community participation, policy influence, resilience, and green livelihoods.

### Impact-page structure

1. Impact philosophy
2. Verified headline metrics
3. Impact areas
4. Programme-linked outcomes
5. Stories or case studies
6. Publications or evidence
7. Partnership call to action

### Impact categories

Recommended categories:

- Youth climate leadership
- Community participation
- Climate awareness
- Policy engagement
- Research and evidence
- Green livelihoods
- Institutional collaboration
- Geographic reach

### Content rules

Every metric must have:

- value;
- label;
- reporting period;
- geography;
- associated programme where applicable;
- internal evidence source or owner;
- publication status.

The public page may display a concise version, but the CMS must retain the full evidence metadata.

---

## 5.5 Insights

**Landing route:** `/insights`

### Purpose

Create one clear home for SPiD’s knowledge, evidence, organisational updates, policy engagement, and community voices.

### Dropdown structure

```text
Insights
├── All Insights
├── Blog
├── Policy Briefs
├── Press Releases
├── Community Stories
└── Research
```

### Routes

| Content type | Route |
|---|---|
| All Insights | `/insights` |
| Blog | `/insights/blog` |
| Policy Briefs | `/insights/policy-briefs` |
| Press Releases | `/insights/press-releases` |
| Community Stories | `/insights/community-stories` |
| Research | `/insights/research` |
| Individual item | `/insights/[slug]` |

### Shared content model

All insight types should use a shared base content model with type-specific fields.

Shared fields include:

- title;
- slug;
- summary;
- publication date;
- authorship;
- content type;
- featured image;
- body;
- tags;
- theme;
- related programme;
- downloadable resource;
- SEO fields;
- publication status.

### Archive behaviour

The Insights landing page should support:

- featured item;
- latest content;
- content-type navigation;
- optional theme filter;
- pagination or load-more;
- empty states;
- no-results state.

### Individual insight page

The page should include:

- content type;
- title;
- summary;
- publication date;
- author;
- body;
- downloadable resource where applicable;
- related programme;
- related insights;
- appropriate call to action.

### Slug rules

All individual insights should use:

```text
/insights/[slug]
```

This keeps URLs stable if the editorial content type changes later.

Category archive pages remain separate.

---

## 5.6 Partners

**Route:** `/partners`

### Purpose

Show how SPiD collaborates and provide a credible pathway for institutional partnership.

### Recommended sections

1. Partnership philosophy
2. Types of partners
3. Approved partner logos
4. Selected collaboration examples
5. Why partner with SPiD
6. Partnership pathways
7. Partner With Us call to action

### Partner categories

Recommended categories:

- Community-based organisations
- Government institutions
- Academic and research institutions
- Civil-society organisations
- Private-sector organisations
- Technical partners
- Development partners
- Philanthropic organisations

A partner must not appear publicly without approval.

---

## 5.7 Get Involved

**Route:** `/get-involved`

### Purpose

Translate interest into clear next actions.

### Engagement pathways

- Partner with SPiD
- Fund a programme
- Sponsor youth leaders
- Collaborate on research
- Volunteer expertise
- Support community climate action
- Invite SPiD to participate or speak
- Media enquiry

### Page behaviour

Each pathway should include:

- short explanation;
- suitable audience;
- expected form or contact route;
- next step;
- privacy statement where personal information is collected.

The page should not promise opportunities, funding arrangements, or response times that SPiD has not approved.

---

## 5.8 Contact

**Route:** `/contact`

### Purpose

Provide a reliable route for general and institutional enquiries.

### Required content

- approved email address;
- Nigeria location statement;
- working-across-Africa statement;
- approved social profiles;
- form;
- privacy notice;
- success and error states.

### Enquiry types

The form should support:

- General enquiry
- Partnership
- Funding
- Research collaboration
- Volunteer expertise
- Media enquiry

### Contact-page rules

- Do not expose personal staff emails unless approved.
- Do not publish a street address unless approved.
- Form submissions must route securely.
- The user must receive clear confirmation after submission.

---

## 6. Utility and Legal Navigation

The following links should not occupy the primary navigation:

- Privacy Policy
- Terms
- Accessibility
- Sitemap
- Cookie settings, if applicable

They should appear in the footer.

---

## 7. Header Architecture

### Desktop header

Recommended structure:

```text
[SPiD Logo]

About
Our Work
Impact
Insights
Partners
Get Involved
Contact

[Partner With Us]
```

### Header states

The header must support:

- default state;
- scrolled state;
- dropdown-open state;
- mobile-open state;
- keyboard-focus state;
- dark-image hero treatment if used;
- light-background treatment.

### Dropdown rules

- Use simple dropdown panels.
- Do not use a large mega-menu for the MVP.
- Each dropdown item should include a concise label.
- Optional one-line descriptions may be used for About, Our Work, and Insights.
- Dropdowns must not contain unpublished routes.
- Dropdown order must match the information architecture.

---

## 8. Mobile Navigation

### Mobile menu structure

The mobile menu should preserve the same hierarchy as desktop.

Recommended behaviour:

- logo;
- menu toggle;
- full-height or large-panel navigation;
- expandable groups for About, Our Work, and Insights;
- direct links for Impact, Partners, Get Involved, and Contact;
- prominent Partner With Us button;
- visible close button;
- focus trapping while open;
- Escape-key closing;
- body-scroll lock;
- focus returned to the menu button after closing.

### Mobile menu order

```text
About
Our Work
Impact
Insights
Partners
Get Involved
Contact
Partner With Us
```

---

## 9. Footer Architecture

The footer should function as a secondary sitemap and institutional trust area.

### Recommended footer columns

#### Organisation

- About
- Our Story
- Our Approach
- Our Team
- Governance

#### Our Work

- CPI4CG
- AYEDE 4 Climate Action
- Impact

Only published programmes should appear.

#### Knowledge

- Insights
- Policy Briefs
- Press Releases
- Community Stories
- Research

#### Engage

- Partners
- Get Involved
- Contact
- Partner With Us

#### Legal and utility

- Privacy Policy
- Terms
- Accessibility
- Sitemap

### Footer identity block

Include:

- SPiD logo;
- short positioning statement;
- approved email;
- location;
- approved social links;
- copyright;
- legal links.

### Newsletter

A newsletter form should appear in the footer only when:

- the provider is approved;
- the privacy language is approved;
- consent handling is implemented;
- subscription confirmation works.

---

## 10. Breadcrumbs

Breadcrumbs should appear on:

- About subpages;
- programme pages;
- insight pages;
- archive pages where useful;
- governance;
- legal pages where appropriate.

### Examples

```text
Home / About / Our Approach
Home / Our Work / CPI4CG
Home / Insights / Policy Briefs / [Title]
```

### Breadcrumb rules

- The homepage does not need a breadcrumb.
- Breadcrumbs must use semantic navigation markup.
- The current page should be plain text or marked as current.
- Breadcrumb structured data may be added where accurate.
- Breadcrumbs must reflect the actual hierarchy, not browser history.

---

## 11. Internal Linking Strategy

Internal links must help users understand relationships across programmes, evidence, people, and engagement routes.

### Required relationships

#### Programme pages should link to:

- related insights;
- policy briefs;
- impact metrics;
- partners;
- Get Involved;
- contact or partnership form.

#### Insight pages should link to:

- related programme;
- related resources;
- author profile where appropriate;
- Get Involved or relevant call to action.

#### Team profiles may link to:

- relevant programmes;
- insights authored;
- approved professional profile.

#### Impact content should link to:

- supporting programme;
- story;
- publication;
- methodology or evidence where approved.

### Internal-link rules

- Use descriptive anchor text.
- Avoid repeated “click here” links.
- Do not link to unpublished CMS records.
- Related content should have a manual editorial override.
- Automated related content must not create irrelevant associations.

---

## 12. Search and Discovery

Basic site search is a Should-Have feature for the MVP.

If implemented, search should index:

- published programmes;
- published insights;
- policy briefs;
- press releases;
- standard pages;
- approved downloadable resources.

Search must exclude:

- drafts;
- previews;
- internal CMS content;
- unpublished programmes;
- legal boilerplate where not useful;
- staging content.

Search result fields should include:

- title;
- content type;
- summary;
- publication date where relevant;
- matching theme or programme;
- URL.

If search is not available at launch, strong archive navigation and internal linking must compensate.

---

## 13. URL and Slug Standards

### General rules

- Use lowercase.
- Use hyphens between words.
- Avoid underscores.
- Avoid unnecessary stop words.
- Avoid dates unless the date is essential to the content identity.
- Avoid file extensions in page URLs.
- Keep routes stable after publication.
- Do not expose CMS identifiers.

### Approved patterns

```text
/about/our-story
/about/approach
/about/team
/our-work/cpi4cg
/our-work/ayede
/insights/community-led-climate-governance
```

### Avoid

```text
/products/project-1
/page?id=273
/2026/07/30/article-title
/our_work/CPI4CG_Project
```

### Slug changes

When a published slug changes:

- create a permanent redirect;
- update internal links;
- update canonical URL;
- update sitemap;
- check external references where known.

---

## 14. Content Labels and Naming Standards

Use consistent public labels.

| Internal or former label | Recommended public label |
|---|---|
| Products | Our Work |
| Our Stories | Insights |
| Blog / Insights | Insights |
| Blog Post | Blog |
| Policy Brief | Policy Brief |
| Press Release | Press Release |
| Team Members | Our Team |
| Advisory Board Members | Advisory Board |
| Support Community Climate Action | Support Community Climate Action |
| Become a Strategic Partner | Partner With Us |

### Programme naming

Use full programme names on first reference and approved short names thereafter.

Examples:

- Community-led Participatory Initiative for Climate Governance (CPI4CG)
- African Youth Expert Development for Climate Action Fellowship (AYEDE 4 Climate Action)

---

## 15. Navigation Cross-Walk from the Supplied Content

The supplied content contains the following major components:

| Supplied component | Recommended destination |
|---|---|
| Home Page | `/` |
| Who We Are | `/about` and `/about/our-story` |
| Vision | `/about/our-story` |
| Mission | `/about/our-story` |
| Our Why | `/about/our-story` |
| Our Approach | `/about/approach` |
| Theory of Change | `/about/approach` |
| How We Work | `/about/approach` |
| Our Team | `/about/team` |
| Advisory Board | `/about/team` |
| Our Stories | `/insights` |
| Press Release | `/insights/press-releases` |
| Blog Post | `/insights/blog` |
| Policy Brief | `/insights/policy-briefs` |
| Products | `/our-work` |
| CPI4CG | `/our-work/cpi4cg` |
| AYEDE | `/our-work/ayede` |
| IICARE | Draft CMS record |
| Our Impact | `/impact` |
| Partners | `/partners` |
| Get Involved | `/get-involved` |
| Blog / Insights | `/insights` |
| Contact | `/contact` |

No meaningful supplied section is removed. Some are regrouped to improve clarity.

---

## 16. WordPress Legacy URL Handling

A complete redirect inventory must be created during migration.

### Redirect principles

- Preserve a legacy URL when it is already clear and suitable.
- Redirect renamed routes permanently using HTTP 301 or 308.
- Redirect merged pages to the strongest relevant destination.
- Avoid redirecting unrelated old pages to the homepage.
- Remove low-value content only after checking backlinks, traffic, and references.
- Preserve downloadable-file URLs where practical.
- Test every redirect before launch.

### Redirect decision table

Each old URL must record:

- old URL;
- old title;
- content type;
- migration decision;
- new URL;
- redirect status;
- owner;
- review status;
- notes.

### Example redirect patterns

```text
/products/ → /our-work
/our-stories/ → /insights
/blog/ → /insights/blog
/policy-brief/ → /insights/policy-briefs
/team/ → /about/team
```

These examples must be verified against the actual WordPress routes before implementation.

### Redirect chains

Redirect chains are not permitted.

Incorrect:

```text
/products → /projects → /our-work
```

Correct:

```text
/products → /our-work
/projects → /our-work
```

---

## 17. Sitemap and Indexing Rules

### Include in sitemap

- published standard pages;
- published programme pages;
- published insight pages;
- category archive pages with meaningful content;
- legal pages where appropriate.

### Exclude from sitemap

- drafts;
- preview pages;
- staging pages;
- unpublished programmes;
- form-success pages;
- internal search result pages;
- duplicate filtered archive states;
- CMS Studio;
- utility API routes.

### Robots rules

Production should allow indexing of approved public routes.

Staging and preview deployments must be blocked from search indexing.

---

## 18. Canonical and Duplicate-Content Rules

- Every indexable page must have a canonical URL.
- Archive filters should not create uncontrolled duplicate URLs.
- Downloadable PDFs may use canonical or indexing rules appropriate to the publication strategy.
- Preview URLs must not be indexable.
- Query-string variants must not become separate canonical pages.
- Printer-friendly or campaign variants must be handled deliberately.

---

## 19. Navigation and Content States

The interface must support:

- published content;
- no content;
- one content item;
- many content items;
- missing optional image;
- missing optional biography;
- no related content;
- temporarily closed applications;
- unavailable downloadable resource;
- archived opportunity;
- invalid route;
- CMS or network failure.

The design must not collapse when optional content is unavailable.

---

## 20. Content Governance and Navigation Ownership

The following should require editorial or product approval:

- adding a new top-level navigation item;
- renaming a top-level section;
- publishing a new programme;
- changing a published programme slug;
- adding a new Insights content type;
- removing a public page;
- changing a primary call to action;
- changing footer legal links;
- redirecting an established URL.

Routine editorial updates within an approved page or content model do not require architecture changes.

---

## 21. Future Expansion Rules

Future sections should be added only when they represent a real, sustained content need.

### Opportunities

Add `/opportunities` when SPiD has recurring fellowships, vacancies, calls, or volunteer opportunities.

### Events

Add `/events` when events are published often enough to justify an archive.

### Reports

Add `/reports` when downloadable reports become a substantial standalone collection. Until then, reports may live within Insights.

### Campaigns

Use `/campaigns/[slug]` for time-bound public campaigns that require distinct landing pages.

### Multilingual content

Do not add language prefixes until translation workflows, editorial ownership, and content parity are defined.

---

## 22. First Vertical Slice Routes

The first Codex implementation should prioritise:

```text
/
├── /our-work/cpi4cg
├── /insights/[approved-first-insight]
├── /get-involved
└── /contact
```

Supporting architecture required in the first slice:

- global header;
- mobile navigation;
- footer;
- breadcrumbs;
- programme-to-insight relationship;
- insight-to-programme relationship;
- partnership enquiry route;
- metadata;
- sitemap support;
- draft exclusion;
- not-found state.

---

## 23. Information Architecture Acceptance Criteria

This document is implemented correctly when:

1. every required MVP page has an approved route;
2. the desktop navigation contains no more than seven standard top-level items;
3. the primary partnership call to action is distinct;
4. desktop and mobile navigation use the same information hierarchy;
5. only published programmes appear publicly;
6. all supplied content components have a recorded destination;
7. Insights content is managed through one coherent system;
8. breadcrumbs reflect the true hierarchy;
9. footer navigation provides a useful secondary sitemap;
10. URLs follow the approved naming standards;
11. old WordPress URLs have migration decisions and redirect targets;
12. staging, drafts, and previews are excluded from indexing;
13. no redirect chains are created;
14. internal links connect programmes, evidence, insights, and engagement pathways;
15. the architecture can accept future programmes without changing the primary navigation.

---

## 24. Decisions Confirmed by This Document

The following decisions are confirmed:

- **Products** becomes **Our Work**.
- **Our Stories** and **Blog / Insights** are consolidated under **Insights**.
- CPI4CG and AYEDE are public programme routes for the MVP.
- IICARE remains a draft CMS record.
- Impact remains a top-level destination.
- Partners and Get Involved remain separate because they serve different user intents.
- Contact remains directly accessible in the primary navigation.
- Partner With Us is the primary header call to action.
- Legal and utility pages belong in the footer.
- A simple dropdown system is preferred over a mega-menu for the MVP.

---

## 25. Open Decisions

The following decisions may be completed during later specification work:

- whether basic site search is included at launch;
- whether newsletter sign-up is included;
- whether Governance requires a full standalone page at launch or begins with a concise approved statement;
- whether Community Stories and Research require separate visible archive pages at launch;
- whether an Accessibility Statement is available for launch;
- whether Reports becomes a separate archive after the MVP;
- the exact old WordPress redirect inventory.

These open decisions must not prevent the first vertical-slice build.
