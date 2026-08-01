# SPiD Website MVP Scope

**Document:** `docs/02-MVP-SCOPE.md`  
**Project:** SPiD Climate Resilience Website Redesign  
**Organisation:** Sustainable Participatory Development and Climate Resilience Initiative (SPiD)  
**Version:** 1.0  
**Status:** Working draft  
**Applies to:** Initial public launch of the new website  

---

## 1. Purpose

This document defines the exact scope of the first production release of the SPiD website.

Its purpose is to prevent scope drift, guide Codex implementation, support stakeholder review, and distinguish between:

- features required for launch;
- features that may be included if time and content permit;
- features that are intentionally deferred;
- content that must remain unpublished until it is complete and approved.

The Minimum Viable Product is not a temporary or low-quality website. It is the smallest complete release that can credibly represent SPiD to communities, donors, partners, governments, researchers, media professionals, and young climate leaders.

---

## 2. MVP Product Statement

The first release will be a modern, mobile-first, accessible, content-managed website that:

1. explains who SPiD is and why it exists;
2. presents its approach, programmes, impact, team, partners, and knowledge products;
3. provides clear routes for partnership, funding, research collaboration, volunteering, and general enquiries;
4. allows authorised SPiD staff to manage content through Sanity CMS;
5. preserves important value from the existing WordPress website through a curated migration and redirect process;
6. performs well on mobile devices and constrained internet connections;
7. is ready for future expansion without requiring a structural rebuild.

---

## 3. MVP Success Condition

The MVP is successful when a first-time visitor can:

- understand SPiD’s purpose within the first homepage screen;
- identify its main areas of work;
- open a complete programme page;
- review credible evidence, activities, outcomes, or impact information;
- discover a related policy brief, story, press release, or insight;
- understand how to partner, fund, collaborate, volunteer, or contact SPiD;
- complete an enquiry form successfully;
- use the website comfortably on mobile, tablet, and desktop;
- navigate the website using a keyboard and assistive technology;
- trust that the information presented is current, structured, and institutionally credible.

---

## 4. Launch Audiences

The MVP must serve the following primary audiences:

### 4.1 International donors and philanthropic organisations

They must be able to find:

- SPiD’s mission and organisational case;
- programme priorities;
- evidence of implementation;
- verified impact figures;
- partnership and funding opportunities;
- governance and contact information;
- policy, research, and programme resources.

### 4.2 Development partners and civil-society organisations

They must be able to identify:

- areas of programme collaboration;
- research and policy opportunities;
- implementation strengths;
- geographic and thematic focus;
- contact routes for institutional partnerships.

### 4.3 Government institutions and policymakers

They must be able to access:

- programme descriptions;
- community-informed evidence;
- policy briefs;
- climate governance work;
- institutional contact details;
- partnership pathways.

### 4.4 Young climate leaders

They must be able to discover:

- AYEDE 4 Climate Action;
- learning and leadership opportunities;
- programme impact;
- alumni stories when available;
- future calls and participation routes.

### 4.5 Communities and grassroots organisations

They must be able to understand:

- how SPiD works with communities;
- how local knowledge and participation are treated;
- how to request collaboration or engagement;
- what programmes are active.

### 4.6 Researchers, academic institutions, media, and the public

They must be able to access:

- organisational background;
- programme evidence;
- policy briefs;
- press releases;
- reports and insights;
- approved contact information.

---

## 5. MVP Route Scope

The following routes are required for launch.

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
│   └── /our-work/ayede
│
├── /impact
│
├── /insights
│   ├── /insights/blog
│   ├── /insights/policy-briefs
│   ├── /insights/press-releases
│   └── /insights/[slug]
│
├── /partners
├── /get-involved
├── /contact
├── /privacy-policy
├── /terms
├── /sitemap.xml
├── /robots.txt
└── /404
```

The final route names may be refined through the approved Information Architecture document, but the capabilities and content represented above remain required.

---

## 6. Required Public Pages

### 6.1 Homepage

The homepage must include:

- global header and navigation;
- hero headline: **Locally Led. Youth Driven. Climate Resilient.**
- concise SPiD value proposition;
- primary call to action: **Partner With Us**;
- secondary call to action: **Support Community Climate Action**;
- summary of what SPiD does;
- featured programme section;
- verified impact metrics;
- featured story, policy brief, or insight;
- partner or collaborator section;
- clear Get Involved pathways;
- newsletter or updates section only if the integration is approved;
- global footer.

The homepage must not display unverified impact numbers, incomplete testimonials, or partner logos without approval.

### 6.2 About landing page

The page must explain:

- who SPiD is;
- its purpose;
- its geographic and thematic focus;
- its audience and institutional positioning;
- links to vision, mission, approach, team, and governance.

### 6.3 Our Story

The page must include:

- organisational overview;
- vision;
- mission;
- why SPiD exists;
- central positioning;
- communities and groups prioritised by the organisation.

### 6.4 Our Approach

The page must include:

- Theory of Change;
- community-led research and knowledge exchange;
- capacity building and climate leadership;
- climate-resilient interventions;
- policy engagement and advocacy;
- relevant national and global frameworks.

### 6.5 Team

The page must support:

- leadership profiles;
- staff profiles;
- advisory board profiles;
- role title;
- biography;
- profile photograph;
- optional social or professional links.

Incomplete biographies may be omitted or displayed in an approved shortened format. Codex must not generate biographies.

### 6.6 Governance

The MVP governance page must contain approved public information such as:

- organisational status;
- governance structure;
- accountability commitments;
- transparency statement;
- advisory structure;
- reports or policies where available.

The page may launch with a concise approved governance statement if full governance documents are not yet available.

### 6.7 Our Work landing page

The page must:

- explain SPiD’s programme portfolio;
- display published programmes;
- support thematic and geographic context;
- link to individual programme pages;
- exclude programmes that remain in draft.

### 6.8 CPI4CG programme page

CPI4CG is required as the first complete programme page.

It must include:

- programme title and summary;
- project overview;
- problem or context;
- approach and methodology;
- pilot location;
- implementation milestones;
- verified figures;
- expected outcomes;
- strategic partnerships;
- alignment with national and global priorities;
- related insights or publications;
- clear partnership call to action.

### 6.9 AYEDE 4 Climate Action page

The page must include:

- programme purpose;
- cultural and functional meaning of AYEDE;
- target participants;
- fellowship approach;
- learning model;
- expected impact;
- verified impact figures;
- alumni stories when approved;
- partnership and sponsorship pathway;
- application status or future opportunity notice.

If applications are closed or unavailable, the website must not imply that applications are open.

### 6.10 Impact page

The page must:

- explain SPiD’s impact philosophy;
- present only verified metrics;
- support reporting period and geography;
- show programme-linked outcomes;
- include stories or evidence where approved;
- avoid decorative counters without evidence.

Every impact record must contain:

- value;
- label;
- reporting period;
- geography;
- programme association where applicable;
- internal owner or evidence source;
- publication status.

### 6.11 Insights landing page

The page must aggregate:

- blog posts;
- policy briefs;
- press releases;
- community stories;
- research findings;
- programme updates.

It must support:

- content type;
- title;
- summary;
- publication date;
- author or organisational attribution;
- featured image where available;
- tags or themes;
- downloadable resource where applicable;
- related programme.

### 6.12 Policy briefs

The MVP must support:

- policy-brief listing;
- individual policy-brief page;
- downloadable PDF where available;
- publication date;
- authorship;
- summary;
- related programme;
- social-sharing metadata.

### 6.13 Press releases

The MVP must support:

- press-release listing;
- individual release page;
- publication date;
- approved media contact;
- related programme or event;
- downloadable attachment where applicable.

### 6.14 Partners

The page must:

- explain SPiD’s partnership approach;
- display approved partner names and logos;
- group partners where useful;
- include a partnership call to action;
- avoid implying active partnerships without approval.

### 6.15 Get Involved

The page must present clear pathways to:

- partner with SPiD;
- fund a programme;
- sponsor youth leaders;
- collaborate on research;
- volunteer expertise;
- support community-led climate action.

Each pathway must lead to an appropriate form, email route, or approved next action.

### 6.16 Contact

The page must include:

- approved organisational email;
- Nigeria location statement;
- operating-across-Africa statement;
- approved social links;
- contact form;
- privacy notice;
- confirmation and error states.

### 6.17 Privacy Policy and Terms

The MVP must include:

- privacy policy;
- website terms;
- form-data handling explanation;
- analytics or cookie disclosure where applicable;
- last-updated date;
- responsible contact.

Legal text must be approved before launch.

---

## 7. Required Global Components

The MVP must include:

- responsive header;
- desktop navigation;
- mobile navigation;
- skip link;
- footer;
- button system;
- link styles;
- hero component;
- section-heading component;
- programme cards;
- insight cards;
- impact metric component;
- team profile component;
- partner logo grid;
- call-to-action section;
- form controls;
- alert and validation messages;
- breadcrumb component where appropriate;
- pagination or load-more behaviour for insight archives;
- social-sharing metadata;
- not-found page;
- error state;
- empty state;
- loading state.

All components must work with variable CMS content and must not rely on fixed text lengths.

---

## 8. Required CMS Scope

Sanity CMS must support the following document types for the MVP:

- site settings;
- navigation;
- footer;
- homepage;
- standard page;
- programme;
- insight;
- policy brief;
- press release;
- person;
- advisory board member;
- partner;
- impact metric;
- testimonial;
- call to action;
- downloadable resource;
- contact or enquiry configuration.

The following editorial capabilities are required:

- draft and publish workflow;
- preview;
- unique slug validation;
- image alternative text;
- publication date;
- author attribution;
- programme relationships;
- featured content controls;
- search-preview metadata;
- Open Graph image support;
- content validation;
- unpublished content exclusion from public queries.

Testimonials may exist as a schema but must not be published until approved.

---

## 9. Required Forms

The MVP must include one unified contact and partnership enquiry system or clearly separated forms.

Minimum supported enquiry types:

- general enquiry;
- partnership enquiry;
- funding enquiry;
- research collaboration;
- volunteer expertise;
- media enquiry.

Each form must include:

- accessible labels;
- required-field indicators;
- client-side validation;
- server-side validation;
- spam protection;
- success state;
- error state;
- privacy notice;
- secure delivery or storage;
- analytics event where approved.

The MVP does not require user accounts or an internal applicant dashboard.

---

## 10. Required Technical Capabilities

The MVP must include:

- Next.js App Router;
- React;
- TypeScript strict mode;
- Tailwind CSS;
- Sanity CMS integration;
- preview and draft mode;
- production and staging environments;
- environment-variable management;
- responsive image optimisation;
- metadata generation;
- sitemap generation;
- robots configuration;
- canonical URLs;
- permanent redirects;
- structured data where appropriate;
- error monitoring where approved;
- analytics where approved;
- automated linting;
- type checking;
- unit tests;
- integration tests;
- end-to-end tests;
- production build verification.

---

## 11. Accessibility Scope

The MVP must target WCAG 2.2 AA.

Required accessibility behaviours include:

- semantic HTML;
- logical heading structure;
- keyboard-accessible navigation;
- visible focus states;
- skip link;
- sufficient colour contrast;
- accessible forms;
- descriptive links;
- appropriate alternative text;
- reduced-motion support;
- responsive reflow;
- meaningful error messages;
- no information communicated through colour alone.

Accessibility defects affecting core navigation, forms, programme access, or content reading are launch blockers.

---

## 12. Performance Scope

The MVP must be designed for mobile devices and constrained internet conditions.

Targets for key public pages:

- Lighthouse Performance score of at least 90 in the agreed test environment;
- Lighthouse Accessibility score of at least 95;
- Largest Contentful Paint of 2.5 seconds or better at the 75th percentile;
- Cumulative Layout Shift of 0.1 or lower;
- Interaction to Next Paint of 200 milliseconds or better at the 75th percentile.

Required performance measures include:

- optimised responsive images;
- restrained use of JavaScript;
- Server Components by default;
- lazy loading below the fold;
- font optimisation;
- limited animation;
- no autoplay background video in the MVP;
- no heavy interactive map in the MVP.

---

## 13. SEO Scope

The MVP must include:

- unique page titles;
- unique meta descriptions;
- canonical URLs;
- Open Graph metadata;
- social-sharing images;
- sitemap;
- robots file;
- structured data where accurate;
- descriptive URLs;
- redirect mapping from WordPress;
- index control for staging, previews, and drafts;
- heading and internal-link structure;
- downloadable-resource metadata.

---

## 14. WordPress Migration Scope

The MVP includes a curated migration of approved content from the current WordPress website.

Each content item must be assigned one of these decisions:

- migrate;
- rewrite;
- merge;
- archive;
- remove;
- redirect only.

Migration must preserve, where verified:

- title;
- slug;
- publication date;
- author;
- featured image;
- body content;
- attachment;
- SEO value;
- relevant internal links.

The MVP does not include copying the old WordPress theme, plugins, page-builder code, or unreviewed HTML.

The old WordPress website must remain live until the new website is approved for launch.

---

## 15. Content Required Before Launch

The following must be approved before production launch:

- homepage copy;
- organisational overview;
- vision and mission;
- Theory of Change;
- CPI4CG content;
- AYEDE content;
- team names, titles, biographies, and images;
- advisory board information;
- approved impact figures;
- partner names and logos;
- contact details;
- social links;
- privacy policy;
- terms;
- form recipients and workflows;
- approved photographs;
- image permissions;
- downloadable policy briefs and reports;
- redirect list.

Missing non-critical content may be omitted, but must not be fabricated.

---

## 16. Content Allowed to Remain Incomplete During Early Development

The following may remain as controlled development placeholders before launch:

- final team photography;
- final partner logos;
- selected downloadable reports;
- some team biographies;
- final social-sharing images;
- optional testimonials;
- historical WordPress articles;
- newsletter integration;
- additional programme stories.

Development placeholders must never appear on the production website unless explicitly approved.

---

## 17. Must-Have Launch Scope

The following are classified as **Must Have**:

- approved technology stack;
- responsive website shell;
- homepage;
- About pages;
- Our Work landing page;
- CPI4CG;
- AYEDE;
- Impact page;
- Insights archive;
- policy brief support;
- press release support;
- team and advisory board;
- partners;
- Get Involved;
- contact form;
- legal pages;
- Sanity CMS;
- preview workflow;
- metadata and sitemap;
- WordPress redirect handling;
- accessibility compliance for core journeys;
- performance checks;
- automated build and test workflow;
- staging and production deployment;
- CMS documentation for editors.

---

## 18. Should-Have Scope

The following are **Should Have** and may be included if the launch schedule and content readiness permit:

- homepage featured story controls;
- programme-related content recommendations;
- downloadable-resource filtering;
- basic site search;
- newsletter sign-up;
- enhanced partner categorisation;
- alumni spotlight section;
- social-sharing buttons;
- simple impact visualisations;
- basic event or opportunity notices;
- downloadable media kit;
- governance-document downloads.

A Should-Have item must not delay launch unless stakeholders formally reclassify it.

---

## 19. Could-Have Scope

The following are **Could Have**:

- animated impact transitions;
- enhanced filtering across Insights;
- project-location map using a lightweight implementation;
- thematic programme filters;
- related-content automation;
- optional dark-mode treatment;
- campaign landing-page template;
- event listing;
- opportunity application links;
- multilingual readiness fields;
- richer media galleries.

These items are not part of the default Codex task backlog unless explicitly added.

---

## 20. Out of Scope for MVP

The following are excluded from the first release:

- donation payment processing;
- user accounts;
- applicant accounts;
- fellowship application management portal;
- learning-management system;
- private partner portal;
- volunteer account system;
- discussion forum;
- complex customer relationship management system;
- custom email-marketing platform;
- mobile application;
- advanced interactive impact dashboard;
- real-time climate-data dashboard;
- complex GIS map;
- multilingual publishing;
- automated grant matching;
- AI chatbot;
- ecommerce;
- merchandise;
- live-event streaming;
- large historical archive migration without editorial review.

Codex must not implement these items unless the MVP scope is formally changed.

---

## 21. Programme Publication Rules

### CPI4CG

Status for MVP: **Required and published**

The page may launch only when its figures, locations, milestones, partnerships, and claims have been reviewed.

### AYEDE 4 Climate Action

Status for MVP: **Required and published**

Application status must be accurate. Impact figures must include an approved reporting period and source.

### IICARE

Status for MVP: **CMS-ready but unpublished**

Codex must:

- create the content-model capability;
- allow the programme to exist as a draft;
- exclude it from public queries, navigation, sitemap, and related-content results;
- avoid producing public placeholder content.

IICARE becomes public only after approved content and a publication decision are recorded.

---

## 22. First Vertical Slice

The first build milestone must deliver one complete end-to-end journey:

```text
Homepage
→ CPI4CG programme page
→ Related insight or policy brief
→ Get Involved
→ Partnership enquiry form
```

This slice must validate:

- repository structure;
- design tokens;
- typography;
- responsive layout;
- global navigation;
- Sanity schemas;
- CMS queries;
- draft preview;
- programme content;
- insight content;
- forms;
- accessibility;
- metadata;
- analytics hooks where approved;
- staging deployment;
- automated tests.

The remaining MVP pages should reuse the patterns approved through this slice.

---

## 23. MVP Acceptance Summary

The MVP is ready for launch only when:

1. all Must-Have pages are implemented;
2. approved content is entered;
3. CPI4CG and AYEDE are complete and published;
4. IICARE remains unpublished unless separately approved;
5. navigation works across mobile and desktop;
6. contact and partnership enquiries are delivered successfully;
7. public CMS queries exclude drafts;
8. important WordPress URLs are redirected;
9. metadata, sitemap, robots, and canonical URLs are correct;
10. accessibility checks pass for core journeys;
11. performance targets are met or any exception is formally approved;
12. tests, type checking, linting, and production build pass;
13. no unsupported claims, unapproved placeholders, or exposed secrets remain;
14. SPiD staff can update content through the CMS;
15. a rollback plan exists;
16. the production domain switch has been approved.

---

## 24. Scope Change Process

Any requested addition must be assessed against:

- launch necessity;
- audience value;
- content readiness;
- accessibility impact;
- security and privacy impact;
- recurring cost;
- development effort;
- testing effort;
- effect on the launch date.

A scope item may move between Must Have, Should Have, Could Have, and Out of Scope only when the decision is recorded in the project decision log.

Codex must not silently expand the MVP.

---

## 25. Definition of Done for This Scope Document

This scope document is complete when:

- stakeholders agree on the Must-Have launch pages;
- the programme publication decisions are confirmed;
- form and CMS requirements are accepted;
- excluded features are acknowledged;
- the first vertical slice is approved as the implementation starting point;
- any later scope change is recorded rather than assumed.
