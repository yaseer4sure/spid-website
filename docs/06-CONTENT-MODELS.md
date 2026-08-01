# SPiD Website Content Models

**Document:** `docs/06-CONTENT-MODELS.md`  
**Project:** SPiD Climate Resilience Website Redesign  
**Organisation:** Sustainable Participatory Development and Climate Resilience Initiative (SPiD)  
**Version:** 1.0  
**Status:** Working draft  
**Last reviewed:** 30 July 2026  
**Applies to:** Sanity Studio, GROQ queries, TypeScript generation, content migration, editorial governance, and public rendering  

---

## 1. Purpose

This document defines the approved content architecture for the SPiD website.

It is the source of truth for:

- Sanity document types;
- reusable object types;
- field names and data types;
- content relationships;
- publishing and verification states;
- validation rules;
- image and file metadata;
- Portable Text configuration;
- preview behaviour;
- Studio structure;
- initial-value templates;
- migration mapping;
- public GROQ query guards;
- generated TypeScript types;
- editorial responsibilities.

Codex must use this document with `AGENTS.md` and the numbered project documents.

---

## 2. Content-Modelling Decision

SPiD will use a structured, relationship-based model rather than treating each web page as one unrestricted rich-text field.

The approved approach is:

- fixed singleton records for global settings and the homepage;
- one controlled `page` document type for institutional, landing, legal, and utility pages;
- one `programme` type for projects, fellowships, and initiatives;
- one `insight` type for blog posts, policy briefs, press releases, community stories, research, and programme updates;
- separate records for people, partners, impact metrics, downloadable resources, themes, and approved testimonials;
- embedded objects for context-specific links, images, locations, milestones, facts, and calls to action;
- references for records that must be reused, governed, queried, or filtered independently.

The model must remain strong enough for growth without becoming an unrestricted page builder.

---

## 3. Modelling Principles

### 3.1 Model meaning, not screen position

Use semantic names such as:

- `summary`;
- `programmeStatus`;
- `reportingPeriod`;
- `relatedProgramme`;
- `evidenceSource`.

Avoid names such as:

- `leftColumnText`;
- `greenBox`;
- `cardThree`;
- `largeNumberSection`.

Presentation belongs in the frontend.

### 3.2 Reuse through references

Use references when the same entity can appear in several places.

Examples:

- a partner may support several programmes;
- an insight may relate to a programme;
- a person may author several policy briefs;
- a metric may appear on the homepage and Impact page;
- a resource may be linked by a programme and an insight.

### 3.3 Embed context-specific information

Embed items that make sense only inside a parent record.

Examples:

- programme milestone;
- programme quick fact;
- contextual call to action;
- image caption;
- programme location;
- social profile link.

### 3.4 Draft first

New content begins as a draft.

It becomes public only after:

- required fields pass validation;
- editorial review is complete;
- evidence-dependent claims are verified;
- the document is published;
- runtime visibility rules allow it.

### 3.5 Validation at several layers

Studio validation guides editors but does not replace:

- migration validation;
- runtime checks;
- public-query guards;
- safe frontend fallbacks;
- custom publish actions for sensitive records.

### 3.6 No unsupported claims

The model must not make it easy to publish:

- unverified metrics;
- prospective organisations as partners;
- unapproved testimonials;
- invented biographies;
- inaccurate application status;
- incomplete programme content;
- internal evidence notes.

---

## 4. Naming and File Conventions

Use lower camel case for schema and field names.

Examples:

```text
siteSettings
homepage
programme
impactMetric
publishedAt
relatedProgrammes
verificationStatus
```

Recommended schema layout:

```text
apps/studio/schemaTypes/
├── documents/
│   ├── siteSettings.ts
│   ├── navigation.ts
│   ├── footer.ts
│   ├── homepage.ts
│   ├── contactSettings.ts
│   ├── page.ts
│   ├── programme.ts
│   ├── insight.ts
│   ├── person.ts
│   ├── partner.ts
│   ├── impactMetric.ts
│   ├── resource.ts
│   ├── theme.ts
│   └── testimonial.ts
├── objects/
│   ├── seo.ts
│   ├── spidImage.ts
│   ├── internalLink.ts
│   ├── externalLink.ts
│   ├── callToAction.ts
│   ├── location.ts
│   ├── reportingPeriod.ts
│   ├── quickFact.ts
│   ├── milestone.ts
│   ├── methodologyStep.ts
│   ├── expectedOutcome.ts
│   ├── frameworkAlignment.ts
│   ├── socialLink.ts
│   ├── figure.ts
│   ├── quoteBlock.ts
│   ├── resourceLink.ts
│   └── portableText.ts
└── index.ts
```

Use Sanity’s `defineType`, `defineField`, and `defineArrayMember` helpers.

Do not depend on experimental schema presets for the MVP.

---

## 5. Schema Inventory

### 5.1 Documents

| Type | Purpose | Quantity |
|---|---|---|
| `siteSettings` | Organisation identity and metadata defaults | Singleton |
| `navigation` | Header and mobile navigation | Singleton |
| `footer` | Footer structure and utility links | Singleton |
| `homepage` | Controlled homepage content | Singleton |
| `contactSettings` | Contact presentation and enquiry types | Singleton |
| `page` | Institutional, landing, legal, and utility pages | Multiple, controlled |
| `programme` | Programmes, projects, fellowships, initiatives | Multiple |
| `insight` | Blog, policy, media, research, stories, updates | Multiple |
| `person` | Team, leadership, advisers, and authors | Multiple |
| `partner` | Approved collaborating organisations | Multiple |
| `impactMetric` | Reusable verified evidence records | Multiple |
| `resource` | Reusable downloadable files | Multiple |
| `theme` | Controlled thematic taxonomy | Multiple |
| `testimonial` | Approved quotation or endorsement | Optional |

### 5.2 Reusable objects

| Type | Purpose |
|---|---|
| `seo` | Search and social metadata |
| `spidImage` | Image, caption, credit, rights, and alt text |
| `internalLink` | Reference-based internal navigation |
| `externalLink` | Validated external URL |
| `callToAction` | Action label, destination, and style |
| `location` | Structured geography |
| `reportingPeriod` | Metric or programme time context |
| `quickFact` | Compact programme fact |
| `methodologyStep` | Programme process step |
| `milestone` | Programme milestone |
| `expectedOutcome` | Expected, emerging, or achieved outcome |
| `frameworkAlignment` | Policy or development framework |
| `socialLink` | Social or professional profile |
| `figure` | Image and explanatory caption |
| `quoteBlock` | Approved quotation |
| `resourceLink` | Reference to a downloadable resource |
| `simplePortableText` | Restricted rich text |
| `portableText` | Long-form structured content |

---

## 6. Singleton Strategy

Use fixed IDs:

```text
siteSettings
mainNavigation
siteFooter
homepage
contactSettings
```

Studio behaviour:

- place each singleton directly in the desk structure;
- remove singleton types from the general “new document” menu;
- disable duplicate actions;
- disable delete actions after initial setup;
- prevent creation of extra records;
- provide preview links where applicable.

Runtime queries must use fixed IDs.

Preferred:

```groq
*[_id == "siteSettings"][0]
```

Avoid selecting an arbitrary first record by type.

---

## 7. Shared Field Rules

### `title`

- type: `string`;
- required for public records;
- recommended maximum 100 characters;
- warn above 80 characters where cards are used;
- trim whitespace;
- do not use all caps for styling.

### `shortTitle`

- type: `string`;
- optional;
- maximum about 50 characters;
- used in compact navigation or cards;
- must preserve the official meaning.

### `slug`

- type: `slug`;
- required for routed documents;
- lowercase and hyphen-separated;
- unique within its route namespace;
- changing a published slug requires a redirect.

### `summary`

- type: `text`;
- required for programmes and insights;
- recommended 120–260 characters;
- plain text;
- suitable for cards and metadata fallback.

### `publishedAt`

- type: `datetime`;
- required for time-based publications;
- may preserve a verified WordPress publication date;
- future dates are allowed only for an approved scheduling workflow.

### `lastReviewedAt`

- type: `date`;
- required for institutional, legal, programme, partner, and evidence records before launch.

### `internalNotes`

- type: `text`;
- excluded from public projections;
- must not contain passwords or credentials.

---

## 8. Image Object: `spidImage`

Fields:

| Field | Type | Required |
|---|---|---:|
| `asset` | image | Yes |
| `alt` | string | Conditional |
| `isDecorative` | boolean | Yes |
| `caption` | text | No |
| `credit` | string | No |
| `location` | location | No |
| `dateTaken` | date | No |
| `usageStatus` | string list | Yes |
| `consentReference` | string | No |
| hotspot/crop | image options | Enabled |

Usage statuses:

```text
approved
approvedWithCredit
internalOnly
pendingApproval
restricted
```

Public rendering permits only:

```text
approved
approvedWithCredit
```

Rules:

- informative images require alt text;
- decorative images use empty alt text;
- captions and alt text are separate;
- signed consent forms and identity documents must not be uploaded to the public dataset;
- `consentReference` may contain a non-sensitive internal identifier;
- context-specific alt text stays on the image object because one asset may be used differently in different contexts.

---

## 9. SEO Object: `seo`

Fields:

| Field | Type | Required |
|---|---|---:|
| `metaTitle` | string | No |
| `metaDescription` | text | No |
| `canonicalUrl` | url | No |
| `openGraphImage` | spidImage | No |
| `noIndex` | boolean | No |
| `noFollow` | boolean | No |
| `socialTitle` | string | No |
| `socialDescription` | text | No |

Rules:

- page title and summary act as fallback;
- meta title warning above about 60 characters;
- description target about 120–160 characters;
- canonical override requires technical approval;
- editors must not use `noIndex` as a substitute for keeping content in draft.

---

## 10. Link and CTA Objects

### `internalLink`

Fields:

- `reference`: required reference;
- `labelOverride`: optional string;
- `anchor`: optional safe fragment.

Allowed target types:

- `page`;
- `programme`;
- `insight`;
- public `person`;
- `resource`.

Runtime must not render links to unpublished targets.

### `externalLink`

Fields:

- `url`: required;
- `label`: required;
- `openInNewTab`: optional.

Rules:

- allow secure protocols;
- disallow unsafe protocols such as `javascript`;
- add safe rel attributes when a new tab is used;
- do not force every external link into a new tab.

### `callToAction`

Fields:

| Field | Type | Required |
|---|---|---:|
| `label` | string | Yes |
| `linkType` | list | Yes |
| `internalLink` | internalLink | Conditional |
| `externalLink` | externalLink | Conditional |
| `emailAddress` | email | Conditional |
| `resource` | resource reference | Conditional |
| `style` | list | Yes |
| `analyticsKey` | string | No |

Link types:

```text
internal
external
email
download
```

Styles:

```text
primary
secondary
text
warm
```

Exactly one destination must match the selected link type.

---

## 11. Location Object: `location`

Fields:

| Field | Type | Required |
|---|---|---:|
| `label` | string | Yes |
| `country` | string | Yes |
| `stateOrRegion` | string | No |
| `localGovernment` | string | No |
| `ward` | string | No |
| `community` | string | No |
| `coordinates` | geopoint | No |
| `publicDescription` | text | No |

Rules:

- use official place names;
- do not store precise coordinates for sensitive locations without approval;
- coordinates are optional because maps are not required for MVP;
- the public display label must be clear.

Initial CPI4CG geography should support Nigeria, Kaduna State, and Sabon Gari LGA.

---

## 12. Reporting Period: `reportingPeriod`

Fields:

| Field | Type | Required |
|---|---|---:|
| `periodType` | list | Yes |
| `startDate` | date | Conditional |
| `endDate` | date | Conditional |
| `asOfDate` | date | Conditional |
| `labelOverride` | string | No |

Types:

```text
dateRange
asOfDate
calendarYear
cohort
projectPhase
allTime
```

Rules:

- range requires start and end;
- end cannot precede start;
- “all time” must still identify the date through which the data is current;
- cohort and project phase need a clear public label.

---

## 13. `siteSettings` Singleton

Fixed ID:

```text
siteSettings
```

### Identity

| Field | Type | Required |
|---|---|---:|
| `organisationName` | string | Yes |
| `shortName` | string | Yes |
| `tagline` | string | Yes |
| `legalName` | string | No |
| `logoLight` | image/file | Yes before launch |
| `logoDark` | image/file | Yes before launch |
| `favicon` | image/file | Yes before launch |
| `defaultSocialImage` | spidImage | Yes before launch |

Initial values:

```text
Organisation:
Sustainable Participatory Development and Climate Resilience Initiative

Short name:
SPiD

Tagline:
Locally Led. Youth Driven. Climate Resilient.
```

### Contact

| Field | Type | Required |
|---|---|---:|
| `publicEmail` | email | Yes |
| `mediaEmail` | email | No |
| `partnershipEmail` | email | No |
| `locationStatement` | string | Yes |
| `socialLinks` | socialLink array | No |

Candidate values requiring confirmation:

```text
info@spidinitiative.org
Nigeria | Working Across Africa
```

### Metadata and governance

- `siteTitle`;
- `defaultMetaDescription`;
- `siteUrl`;
- `defaultSeo`;
- `contentOwner`;
- `lastReviewedAt`;
- `internalNotes`.

Disable duplicate and delete actions.

---

## 14. `navigation` Singleton

Fixed ID:

```text
mainNavigation
```

Fields:

- `items`: array of `navigationItem`;
- `primaryAction`: `callToAction`;
- `lastReviewedAt`;
- `internalNotes`.

`navigationItem`:

- label;
- internal link;
- optional child links;
- visible state.

Rules:

- maximum seven visible top-level items;
- child depth limited to one;
- no unpublished destination;
- no duplicate destination without approval;
- runtime ignores invalid or unpublished optional children.

Expected order:

```text
About
Our Work
Impact
Insights
Partners
Get Involved
Contact
```

Primary action:

```text
Partner With Us
```

---

## 15. `footer` Singleton

Fixed ID:

```text
siteFooter
```

Fields:

- positioning statement;
- navigation columns;
- legal links;
- social links;
- newsletter enabled;
- newsletter heading and description;
- copyright text;
- last reviewed date.

Rules:

- maximum five columns;
- newsletter remains disabled until provider, consent language, and workflow are approved;
- only published link targets may render;
- legal links are required for launch.

---

## 16. `homepage` Singleton

Fixed ID:

```text
homepage
```

The homepage uses explicit structured fields, not a general page builder.

### Hero

- eyebrow;
- headline;
- subheadline;
- approved image;
- primary CTA;
- secondary CTA.

Expected headline:

```text
Locally Led. Youth Driven. Climate Resilient.
```

### Introduction

- heading;
- simple rich-text body;
- optional action.

### What We Do

- heading;
- introduction;
- exactly four `workPillar` items for MVP.

Expected pillars:

1. Build Climate Leadership
2. Co-Create Local Solutions
3. Influence Policy and Governance
4. Strengthen Green Livelihoods

Each pillar contains:

- title;
- summary;
- approved icon key;
- optional internal link.

### Featured programmes

- heading;
- two or three programme references;
- action to Our Work.

CPI4CG and AYEDE are required for launch.

### Impact

- heading;
- introduction;
- one to four impact references;
- action to Impact page.

Runtime permits only public, verified metrics.

### Featured insight

- heading;
- one published insight reference;
- optional action-label override.

### Community story

- enabled state;
- approved community-story reference;
- heading.

### Partners

- heading;
- introduction;
- approved partner references;
- action.

### Get Involved

- heading;
- body;
- one to three CTAs;
- no more than one primary CTA.

### Publication guard

Block homepage publication when critical hero data, programme references, featured insight, or required SEO information is missing.

---

## 17. `contactSettings` Singleton

Fixed ID:

```text
contactSettings
```

This record configures public contact presentation, not form submissions.

Fields:

| Field | Type | Required |
|---|---|---:|
| `pageHeading` | string | Yes |
| `pageIntroduction` | text | Yes |
| `publicEmail` | email | Yes |
| `locationStatement` | string | Yes |
| `enquiryTypes` | array | Yes |
| `privacyNotice` | simplePortableText | Yes |
| `successHeading` | string | Yes |
| `successMessage` | text | Yes |
| `failureMessage` | text | Yes |
| `directEmailFallback` | email | Yes |
| `lastReviewedAt` | date | Yes |

Enquiry values:

```text
general
partnership
funding
research
volunteer
media
```

Do not store provider keys, recipient credentials, or submission data in this document.

---

## 18. `page` Document

Purpose: fixed institutional, landing, legal, and utility pages.

Core `pageKey` values:

```text
about
ourStory
approach
team
governance
ourWork
impact
insights
partners
getInvolved
contact
privacyPolicy
terms
accessibility
```

Fields:

| Field | Type | Required |
|---|---|---:|
| `pageKey` | controlled string | Yes for core pages |
| `title` | string | Yes |
| `shortTitle` | string | No |
| `slug` | slug | Yes |
| `eyebrow` | string | No |
| `summary` | text | Yes |
| `heroImage` | spidImage | No |
| `body` | portableText | No |
| `sections` | approved sections | No |
| `primaryAction` | CTA | No |
| `secondaryAction` | CTA | No |
| `seo` | seo | Yes before launch |
| `lastReviewedAt` | date | Yes |
| `internalNotes` | text | No |

Approved sections:

- text section;
- image-and-text section;
- values section;
- approach pillars;
- programme grid;
- impact grid;
- insight grid;
- people grid;
- partner grid;
- resource list;
- contact pathways;
- CTA banner.

Do not support arbitrary HTML.

Core routes derive from `pageKey` and must align with the Information Architecture.

`pageKey` must be unique.

New generic pages require product approval.

---

## 19. `programme` Document

Represents all programmes, projects, fellowships, and initiatives.

### Identity

| Field | Type | Required |
|---|---|---:|
| `title` | string | Yes |
| `shortTitle` | string | No |
| `acronym` | string | No |
| `slug` | slug | Yes |
| `programmeType` | list | Yes |
| `status` | list | Yes |
| `applicationStatus` | list | Conditional |
| `summary` | text | Yes |
| `heroImage` | spidImage | Yes before publication |
| `featured` | boolean | Yes |

Programme types:

```text
programme
project
fellowship
initiative
research
campaign
```

Statuses:

```text
draftDevelopment
pilot
active
completed
paused
upcoming
archived
```

Application statuses:

```text
notApplicable
comingSoon
open
closed
rolling
```

### Context

- overview;
- why it matters;
- objectives;
- target groups;
- theme references;
- locations;
- reporting period;
- start and end dates.

### Delivery

- approach introduction;
- methodology steps;
- activities;
- milestones;
- quick facts;
- expected outcomes;
- achieved outcomes.

### Evidence

- impact metric references;
- evidence summary;
- resource references;
- related insights;
- framework alignments.

### Relationships

- programme lead;
- team members;
- partners;
- funders;
- technical partners.

An organisation must not be labelled as a funder without approval.

### Calls to action

- required primary CTA;
- optional secondary CTA;
- optional partnership prompt.

### Governance

- SEO;
- content owner;
- last reviewed date;
- internal notes.

### Programme rules

#### CPI4CG

Before publication, require:

- overview;
- problem context;
- Sabon Gari location;
- methodology;
- approved milestones;
- verified figures;
- framework alignments;
- approved partnership claims;
- partnership CTA.

#### AYEDE

Before publication, require:

- fellowship purpose;
- cultural meaning;
- learning approach;
- participant profile;
- accurate application status;
- verified metrics;
- partnership or sponsorship CTA.

#### IICARE

- remains draft;
- uses `draftDevelopment`;
- not featured;
- excluded from public listings and navigation;
- no placeholder claims.

Date rules:

- end cannot precede start;
- upcoming content cannot display achieved outcomes;
- open application status requires a valid approved application destination.

---

## 20. Programme Objects

### `quickFact`

- label;
- value;
- optional icon key;
- optional note.

Where a value is an evidence claim, reference a verified metric rather than duplicating the number whenever practical.

### `methodologyStep`

- title;
- description;
- order;
- icon key.

CPI4CG candidates:

- household surveys;
- focus group discussions;
- key informant interviews;
- community consultation;
- stakeholder dialogue;
- validation workshops;
- evidence-based advocacy.

### `milestone`

- title;
- description;
- date;
- status;
- evidence resource;
- public state.

Statuses:

```text
planned
inProgress
completed
delayed
cancelled
```

### `expectedOutcome`

- title;
- description;
- outcome type;
- status;
- related metrics;
- evidence resource;
- public note.

Outcome types:

```text
expected
emerging
achieved
```

Expected outcomes must never be presented as achieved results.

### `frameworkAlignment`

- official framework name;
- short name;
- explanation;
- external URL;
- relevant goals or articles.

---

## 21. `insight` Document

One document type supports all knowledge content.

Content types:

```text
blog
policyBrief
pressRelease
communityStory
research
programmeUpdate
```

### Shared identity

- content type;
- title;
- short title;
- slug;
- summary;
- featured image;
- featured state.

### Publication

- published date;
- editorial update date;
- person author references;
- organisation author fallback;
- optional location.

At least one approved author source is required.

### Content

- introduction;
- Portable Text body;
- resource references;
- theme references;
- related programmes;
- related insights;
- optional CTA.

### Governance

- SEO;
- content owner;
- last reviewed date;
- internal notes.

### Policy-brief fields

Visible when type is `policyBrief`:

- executive summary;
- required primary resource;
- citation text;
- policy recommendations;
- intended audience.

The web page must remain informative if the PDF cannot be downloaded.

### Press-release fields

Visible when type is `pressRelease`:

- release location;
- approved media-contact name;
- approved media-contact email;
- boilerplate;
- attachments.

### Community-story fields

Visible when type is `communityStory`:

- story location;
- consent confirmed;
- approved display names;
- approved quotations;
- internal safeguarding notes.

Publication requires consent confirmation.

Safeguarding notes must never enter public projections.

### Research fields

Visible when type is `research`:

- abstract;
- methodology summary;
- research authors;
- primary resource;
- data-availability statement;
- citation text.

Do not imply open-data availability unless approved.

### Programme-update fields

Visible when type is `programmeUpdate`:

- at least one related programme;
- update type;
- optional milestone reference.

Update types:

```text
announcement
milestone
event
fieldUpdate
applicationNotice
result
```

### Application notice rule

Any record stating that applications are open must include:

- related programme;
- current application status;
- approved dates where available;
- valid application destination;
- responsible content owner.

Stale open notices must be removed or changed after closing.

---

## 22. `person` Document

Represents leadership, staff, community managers, advisers, authors, facilitators, and approved volunteers.

Fields:

| Field | Type | Required |
|---|---|---:|
| `fullName` | string | Yes |
| `slug` | slug | No |
| `roleTitle` | string | Yes for public team |
| `personType` | array list | Yes |
| `shortBiography` | text | No |
| `biography` | portableText | No |
| `portrait` | spidImage | No |
| `email` | email | Internal |
| `publicEmail` | email | No |
| `socialLinks` | array | No |
| `displayOrder` | number | No |
| `isPublic` | boolean | Yes |
| `lastReviewedAt` | date | Yes for public profile |
| `internalNotes` | text | No |

Person types:

```text
leadership
staff
communityManager
adviser
author
facilitator
volunteer
```

Rules:

- public email is distinct from private email;
- do not generate biographies;
- advisers must not appear as operational staff;
- missing portraits use an approved initials placeholder, never a synthetic portrait;
- a person may hold several content roles.

Candidate initial records:

- Abdulbasit Salahudeen Mikail — Founder and Chief Executive Officer;
- Nusaiba Ahmed — Operations and Administrative Manager;
- Rahmatullah Olayinka — Research and Policy Manager;
- Ebuka Vincent — Programme Manager;
- Abduljabbar Abdulsalam — Communications Manager;
- Abubakar Usman — Community Manager;
- Umar Suleiman Muhammad — Community Manager;
- Hauwa Al-bashir — Data Analyst and M&E Manager;
- Yazid Salahudeen Mikail — Advisory Board;
- Jecinta Egbim — Advisory Board.

Spelling, titles, biographies, and portraits require approval.

---

## 23. `partner` Document

Fields:

| Field | Type | Required |
|---|---|---:|
| `name` | string | Yes |
| `slug` | slug | No |
| `partnerType` | array list | Yes |
| `logo` | image/file | Yes before public display |
| `website` | url | No |
| `summary` | text | No |
| `relationshipSummary` | text | No |
| `relatedProgrammes` | programme references | No |
| `relationshipStatus` | list | Yes |
| `approvalStatus` | list | Yes |
| `featured` | boolean | Yes |
| `displayOrder` | number | No |
| `isPublic` | boolean | Yes |
| `internalOwner` | person/string | Yes |
| `lastReviewedAt` | date | Yes |
| `internalNotes` | text | No |

Partner types:

```text
communityOrganisation
government
academic
research
civilSociety
privateSector
technical
developmentPartner
philanthropic
media
```

Relationship status:

```text
active
completed
prospective
historical
```

Approval status:

```text
pending
approved
restricted
```

Public query requires:

```text
isPublic == true
approvalStatus == "approved"
relationshipStatus in ["active", "completed"]
```

Prospective organisations must never display as current partners.

---

## 24. `impactMetric` Document

Metrics are governed evidence records, not decorative text.

### Display fields

| Field | Type | Required |
|---|---|---:|
| `title` | string | Yes |
| `valueType` | list | Yes |
| `numericValue` | number | Conditional |
| `displayValueOverride` | string | No |
| `prefix` | string | No |
| `suffix` | string | No |
| `label` | string | Yes |
| `publicContext` | text | Yes |
| `featured` | boolean | Yes |

Value types:

```text
number
percentage
currency
duration
ratio
qualitative
```

### Context fields

- reporting period;
- locations;
- related programmes;
- metric category;
- cumulative state;
- methodology note.

Metric categories:

```text
peopleReached
peopleTrained
communitiesEngaged
geographicReach
policyInfluence
researchEvidence
greenLivelihoods
institutionalCollaboration
programmeDelivery
other
```

### Evidence and verification

| Field | Type | Required |
|---|---|---:|
| `evidenceSourceType` | list | Yes |
| `evidenceSourceReference` | text | Yes |
| `evidenceResource` | resource reference | No |
| `evidenceOwner` | person/string | Yes |
| `verificationStatus` | list | Yes |
| `verifiedBy` | person/string | Conditional |
| `verifiedAt` | datetime | Conditional |
| `publicEvidenceNote` | text | No |
| `internalEvidenceNotes` | text | No |
| `isPublic` | boolean | Yes |

Evidence-source types:

```text
attendanceRegister
survey
monitoringData
programmeReport
publication
administrativeRecord
partnerConfirmation
other
```

Verification statuses:

```text
unverified
underReview
verified
withdrawn
```

Public query requires:

```text
isPublic == true
verificationStatus == "verified"
```

Withdrawn records must disappear publicly even when still referenced.

A publish guard should require:

- reporting period;
- geography;
- evidence source;
- evidence owner;
- verified status;
- verifier;
- verification date;
- public context.

Candidate records requiring review:

### CPI4CG

- 11 wards engaged;
- 368 household responses;
- final number of data collectors trained;
- quantified stakeholder engagement when confirmed.

### AYEDE

- 5,000+ reached;
- 35 young people trained;
- 18 states represented;
- one policy brief developed.

Each requires an approved period, geography, source, owner, verifier, and verification date.

---

## 25. `resource` Document

Represents reusable downloadable files.

Resource types:

```text
policyBrief
report
researchPaper
toolkit
mediaKit
governanceDocument
dataset
presentation
other
```

Fields:

- title;
- short title;
- slug;
- resource type;
- required file;
- cover image;
- summary;
- publication date;
- person authors;
- organisation author;
- language;
- page count;
- citation text;
- licence;
- related programmes;
- themes;
- public state;
- SEO;
- last reviewed date;
- internal notes.

Rules:

- approved file types only;
- PDF preferred for reports and policy briefs;
- public title and summary exist outside the file;
- files must be checked for sensitive content;
- accessible PDFs are preferred;
- replacement should preserve the public resource route where practical.

Public guard:

```text
isPublic == true
defined(file.asset)
```

---

## 26. `theme` Document

Fields:

- title;
- slug;
- description;
- colour key;
- active state;
- display order.

Candidate themes:

- Climate Governance;
- Youth Climate Leadership;
- Community-Led Adaptation;
- Climate Justice;
- Green Livelihoods;
- Nature-Based Solutions;
- Climate-Resilient Agriculture;
- Renewable Energy and Just Transition;
- Water and Ecosystem Management;
- Research and Policy;
- Climate Entrepreneurship.

Rules:

- themes are controlled taxonomy, not free-form hashtags;
- reuse existing themes before creating new ones;
- new themes require editorial review;
- inactive themes remain available for historical content but not active filters.

---

## 27. `testimonial` Document

Fields:

- quote;
- speaker name;
- role;
- organisation;
- image;
- related programme;
- source context;
- consent confirmed;
- approval status;
- public state;
- last reviewed date;
- internal notes.

Approval statuses:

```text
pending
approved
withdrawn
```

Public guard:

```text
isPublic == true
approvalStatus == "approved"
consentConfirmed == true
```

Testimonials are optional for MVP.

Do not invent them.

---

## 28. Portable Text

### `simplePortableText`

Allowed:

- paragraph;
- bold;
- italic;
- internal link;
- external link;
- bullet list;
- numbered list.

### `portableText`

Styles:

```text
normal
h2
h3
h4
blockquote
```

The page template supplies `h1`.

Allowed custom blocks:

- SPiD image;
- figure;
- quote;
- resource link;
- callout;
- approved video embed;
- accessible table;
- programme reference;
- impact metric reference.

Rules:

- no arbitrary HTML;
- no `h1` inside the body;
- internal links use references;
- empty blocks should be warned or rejected where practical;
- every custom block requires an explicit frontend renderer and safe fallback.

---

## 29. Approved Page Sections

The controlled `page.sections` array may include:

### Text section

- eyebrow;
- heading;
- body;
- width;
- surface;
- optional action.

### Image and text

- heading;
- body;
- image;
- image position;
- surface;
- optional action.

### Values

- heading;
- introduction;
- value items.

Initial values:

- Participation;
- Equity and Justice;
- Sustainability;
- Transparency and Accountability;
- Innovation;
- Collaboration.

### Approach pillars

Initial pillars:

- Community-Led Research and Knowledge Exchange;
- Capacity Building and Climate Leadership;
- Climate-Resilient Interventions;
- Policy Engagement and Advocacy.

### Programme grid

- heading;
- introduction;
- manual programme references;
- display limit;
- action.

### Impact grid

- heading;
- introduction;
- metric references;
- display style;
- action.

Runtime filters unverified or withdrawn metrics.

### Insight grid

- heading;
- introduction;
- manual references or query criteria;
- type filter;
- display limit;
- action.

### People grid

- heading;
- introduction;
- person-type filter;
- manual references;
- limit.

### Partner grid

- heading;
- introduction;
- type filter;
- manual references;
- limit;
- action.

### Resource list

- heading;
- introduction;
- resource references or type filter;
- action.

### Contact pathways

- heading;
- introduction;
- pathway items.

Each pathway includes:

- title;
- explanation;
- intended audience;
- action;
- icon key.

### CTA banner

- heading;
- body;
- primary action;
- secondary action;
- surface.

Maximum one primary action.

---

## 30. Public Visibility Rules

### Ordinary pages and insights

Public when:

- published;
- route data is valid;
- required content is present.

### Programmes

Public when:

- published;
- core content complete;
- status suitable for display;
- application state accurate.

### Impact metrics

Public when:

```text
published
isPublic == true
verificationStatus == "verified"
```

### Partners

Public when:

```text
published
isPublic == true
approvalStatus == "approved"
relationshipStatus in ["active", "completed"]
```

### Testimonials

Public when:

```text
published
isPublic == true
approvalStatus == "approved"
consentConfirmed == true
```

### People

Public when:

```text
published
isPublic == true
```

Private email and internal fields are always excluded.

---

## 31. Public Projection Rules

Every GROQ query must explicitly project public fields.

Do not spread whole Sanity documents into frontend responses.

Never project:

- internal notes;
- private email;
- consent references;
- safeguarding notes;
- internal evidence notes;
- private evidence-owner details;
- secret configuration;
- draft-only relationships.

Reference arrays must:

- ignore missing references;
- ignore unpublished records;
- apply type-specific guards;
- preserve editorial order.

Public requests use the published perspective.

Preview requests use a secure draft perspective.

---

## 32. Studio Structure

Recommended desk structure:

```text
SPiD Content
├── Website
│   ├── Site Settings
│   ├── Navigation
│   ├── Footer
│   ├── Homepage
│   └── Contact Settings
├── Core Pages
│   ├── About
│   ├── Our Story
│   ├── Our Approach
│   ├── Our Team
│   ├── Governance
│   ├── Our Work
│   ├── Impact
│   ├── Insights
│   ├── Partners
│   ├── Get Involved
│   ├── Contact
│   └── Legal Pages
├── Our Work
│   ├── Active Programmes
│   ├── Draft Programmes
│   ├── Completed Programmes
│   └── All Programmes
├── Insights
│   ├── Blog
│   ├── Policy Briefs
│   ├── Press Releases
│   ├── Community Stories
│   ├── Research
│   ├── Programme Updates
│   └── All Insights
├── Evidence
│   ├── Verified Metrics
│   ├── Metrics Under Review
│   ├── Unverified Metrics
│   ├── Withdrawn Metrics
│   └── Resources
├── People and Partners
│   ├── Leadership
│   ├── Team
│   ├── Advisory Board
│   ├── Authors
│   ├── Approved Partners
│   └── Partner Review
├── Taxonomy
│   └── Themes
└── Optional
    └── Testimonials
```

List previews must show useful operational information.

Examples:

- programme: title, status, location, image;
- insight: title, type, publication date, image;
- metric: value, label, verification state, period;
- partner: name, type, approval, logo.

---

## 33. Field Groups

Programme:

```text
Overview
Delivery
Evidence
Relationships
Actions
SEO
Internal
```

Insight:

```text
Content
Publication
Relationships
Resources
SEO
Internal
```

Impact:

```text
Metric
Context
Evidence
Verification
Display
Internal
```

Person:

```text
Profile
Biography
Media
Links
Publication
Internal
```

Critical required fields must remain easy to find.

---

## 34. Initial-Value Templates

Provide templates for:

- CPI4CG;
- AYEDE;
- IICARE draft;
- blog;
- policy brief;
- press release;
- community story;
- research;
- programme update;
- impact metric;
- partner;
- testimonial;
- each core page.

Templates may set type, status, route key, and safe defaults.

They must not insert invented content.

Impact defaults:

```text
verificationStatus: unverified
isPublic: false
featured: false
```

Partner defaults:

```text
approvalStatus: pending
relationshipStatus: prospective
isPublic: false
featured: false
```

Testimonial defaults:

```text
approvalStatus: pending
consentConfirmed: false
isPublic: false
```

---

## 35. Publish Guards

Use standard document actions unless governance requires added control.

Recommended guards:

- singletons: disable duplicate and delete;
- impact metric: block public publication until evidence is verified;
- community story: require consent;
- partner: require approval;
- programme: block open applications without a valid destination;
- IICARE: block publication until an explicit approved-content condition is satisfied.

Studio guards do not replace public-query filtering or migration validation.

---

## 36. Editorial Responsibilities

### Administrator

- users and permissions;
- global configuration;
- migrations;
- destructive changes;
- all publishing.

### Editor

- ordinary content;
- programme and insight review;
- homepage curation;
- approved partner management.

### Contributor

- creates drafts;
- edits assigned content;
- submits for review;
- does not publish without approval.

### Evidence verifier

- checks evidence;
- records status;
- identifies verifier and date;
- withdraws invalid metrics.

This may be a workflow responsibility rather than a distinct platform role.

### Governance or legal reviewer

- privacy;
- terms;
- governance;
- sensitive claims.

If custom roles are unavailable, use the strongest available permissions and documented review procedures.

---

## 37. Preview Resolvers

| Type | Preview route |
|---|---|
| Homepage | `/` |
| Page | derived from `pageKey` |
| Programme | `/our-work/{slug}` |
| Insight | `/insights/{slug}` |
| Person | `/about/team#{slug}` or approved route |
| Resource | associated insight or future resource route |

Requirements:

- drafts preview correctly;
- IICARE can be previewed while unpublished;
- fixed core routes resolve correctly;
- visual editing maps rendered fields to Studio;
- internal fields never appear as public copy.

---

## 38. Slug Governance

Programme examples:

```text
cpi4cg
ayede
iicare
```

Insight slugs should be descriptive and title-based.

Core-page routes derive from `pageKey`.

Changing a published slug requires:

- redirect;
- canonical update;
- sitemap update;
- internal-link check;
- decision-log entry where material.

---

## 39. Sanity TypeGen

Use Sanity TypeGen for schemas and named GROQ queries.

Recommended repository commands:

```bash
pnpm sanity:schema-extract
pnpm sanity:typegen
```

The extract step should enforce required fields where supported.

Named query examples:

```text
HOME_PAGE_QUERY
PROGRAMME_BY_SLUG_QUERY
PROGRAMME_INDEX_QUERY
INSIGHT_BY_SLUG_QUERY
INSIGHT_INDEX_QUERY
IMPACT_PAGE_QUERY
SITE_SETTINGS_QUERY
NAVIGATION_QUERY
FOOTER_QUERY
```

Rules:

- do not hand-edit generated types;
- regenerate after schema or query changes;
- CI should detect stale output where practical;
- do not silence query-shape errors with `any`.

---

## 40. Runtime and Migration Validation

Migration scripts must validate:

- required fields;
- known content types;
- valid URLs;
- valid dates;
- reference targets;
- asset availability;
- safe default visibility states.

Frontend code must handle:

- missing optional fields;
- broken references;
- withdrawn metrics;
- unavailable images;
- empty arrays;
- CMS outages.

A pre-launch audit must report:

- missing SEO;
- missing image alt text;
- referenced drafts;
- invalid partner state;
- unverified public metric;
- application-status conflict;
- broken file;
- missing core page.

---

## 41. Source-Content Mapping

### Homepage

Maps to:

- hero;
- value proposition;
- CTAs;
- work pillars;
- impact references;
- featured programmes;
- featured insight;
- partner section;
- Get Involved actions.

### About

Maps to core page records:

- About;
- Our Story;
- Our Approach;
- Team;
- Governance.

### Team

Maps to individual `person` records.

### Stories and Blog/Insights

Map to `insight` with the appropriate content type.

### Products

Maps to `programme` under the public label **Our Work**.

### CPI4CG

Maps to:

- programme;
- impact metrics;
- partner references;
- resources;
- related insights;
- framework alignments.

### AYEDE

Maps to:

- programme;
- candidate impact metrics;
- alumni stories or testimonials when approved;
- policy brief resource;
- partnership and sponsorship CTA.

### IICARE

Maps to one draft programme:

```text
status: draftDevelopment
featured: false
```

### Contact

Maps to:

- site settings;
- contact settings;
- contact page;
- approved social links.

---

## 42. Initial Seed Package

Create:

### Singletons

- site settings;
- navigation;
- footer;
- homepage;
- contact settings.

### Core pages

- About;
- Our Story;
- Our Approach;
- Team;
- Governance;
- Our Work;
- Impact;
- Insights;
- Partners;
- Get Involved;
- Contact;
- draft legal pages.

### Programmes

- CPI4CG;
- AYEDE;
- IICARE draft.

### People

Initial team and advisory records.

### Evidence

Candidate metrics in `unverified` or `underReview`.

### Insights

At least one approved item for the first vertical slice.

### Themes

Initial controlled taxonomy.

Seed scripts must:

- be repeatable where practical;
- use fixed IDs for core records;
- avoid overwriting production without explicit confirmation;
- never publish unverified metrics;
- never publish incomplete legal text;
- keep temporary media clearly identified.

---

## 43. Reference and Deletion Rules

Use strong references by default.

Weak references require a documented migration or historical need.

Before deleting a public record:

- check incoming references;
- check its public route;
- decide redirect or removal;
- inspect external links;
- preserve required files;
- record the decision.

When replacing fields:

- mark the old field deprecated;
- migrate content;
- update queries;
- regenerate types;
- remove only after confirming the dataset no longer depends on it.

---

## 44. Content Quality Rules

- Use actual dates in durable content.
- Contextualise every public number.
- Use approved organisation names.
- Do not overstate framework alignment.
- Store quotation context and approval.
- Use factual approved biographies.
- Keep application status current.
- Check external links before publication.
- Do not present expected outcomes as completed impact.
- Do not publish stock images as programme evidence.

---

## 45. Search and Analytics Readiness

Filterable fields should support future discovery by:

- content type;
- programme;
- theme;
- publication date;
- programme status;
- partner type;
- person type;
- country and state;
- resource type.

Stable public analytics attributes may include:

- document ID;
- slug;
- content type;
- programme acronym;
- CTA analytics key;
- resource type.

Do not expose private fields through analytics.

---

## 46. Acceptance Criteria

The content model is correctly implemented when:

1. global settings use fixed singleton IDs;
2. homepage content is structured and controlled;
3. core pages use fixed route keys;
4. one programme type supports all programmes;
5. one insight type supports all knowledge content;
6. people, partners, metrics, resources, and themes are reusable;
7. public images include alt and approval data;
8. internal links use references;
9. public queries exclude drafts;
10. impact metrics require evidence and verification;
11. unverified or withdrawn metrics cannot render publicly;
12. prospective or unapproved partners cannot render publicly;
13. community stories require consent;
14. private fields never enter public projections;
15. IICARE remains draft;
16. application status cannot be inferred from body copy alone;
17. core routes are controlled;
18. Portable Text has an explicit allow-list;
19. arbitrary HTML is unsupported;
20. schema and query types are generated;
21. migration scripts validate imports;
22. singletons cannot be duplicated;
23. Studio lists and previews are meaningful;
24. all public types have preview resolvers;
25. the first vertical slice can be fully entered and previewed.

---

## 47. Confirmed Decisions

This document confirms:

- structured Sanity content;
- fixed singletons;
- one controlled page model;
- one programme model;
- one Insights model;
- reusable people, partner, metric, resource, and theme records;
- reference-based relationships;
- contextual embedded objects;
- image rights and alt metadata;
- evidence-gated metric publishing;
- approval-gated partners and testimonials;
- consent-gated community stories;
- Sanity TypeGen;
- no arbitrary HTML;
- no unrestricted page builder;
- IICARE as draft;
- current metrics entered as unverified until reviewed.

---

## 48. Open Decisions

The following do not block initial schema implementation:

- final biographies;
- final portraits;
- approved partner list;
- exact evidence owners;
- current metric reporting periods;
- whether authors receive individual routes;
- whether Resources gets a public archive;
- whether search launches with MVP;
- legal-page content;
- governance-document list;
- future multilingual fields.

They must be resolved before affected records become public.

---

## 49. Definition of Done

The content-model milestone is complete only when:

- approved schemas are implemented;
- validations are present;
- public and internal fields are separated;
- Studio structure works;
- singleton controls work;
- templates work;
- preview resolvers work;
- TypeGen succeeds;
- public queries are typed;
- seed content imports safely;
- candidate metrics remain unverified;
- IICARE remains unpublished;
- no private fields appear publicly;
- critical visibility guards have automated tests.
