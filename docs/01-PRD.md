# SPiD Website Redesign Product Requirements Document

**Product:** SPiD Website Redesign & WordPress-to-React Migration

Validated content and implementation requirements for a modern,
funder-ready climate and environmental platform.

| **Document field** | **Details**                                                                                            |
|--------------------|--------------------------------------------------------------------------------------------------------|
| Organisation       | Sustainable Participatory Development and Climate Resilience Initiative (SPiD)                         |
| Document version   | 0.2 - Content-informed requirements draft                                                              |
| Owner              | Product owner / project team - to be confirmed                                                         |
| Date               | 30 July 2026                                                                                           |
| Product            | Public institutional website and editorial platform                                                    |
| Migration          | WordPress to React using a server-rendered React framework and headless CMS                            |
| Primary audience   | International funders and partners; policy, research, community, youth, media, and programme audiences |
| Status             | For stakeholder review, technical discovery, content completion, and scope approval                    |

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Content validation update<br />
</strong>This revision incorporates the supplied SPiD website content:
official positioning, homepage message, values, Theory of Change, work
pillars, team structure, flagship initiative details, current impact
claims, engagement pathways, and contact direction. Remaining gaps are
now recorded as launch dependencies rather than assumptions.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> **Repository note:** This Markdown file is the canonical Codex-readable version of PRD v0.2. The DOCX remains the formatted stakeholder copy.

**Prepared as a living PRD.** Leadership, programme, communications,
monitoring and evaluation, design, and engineering teams should approve
their respective requirements before development begins.

# 1. Document Control

| **Version** | **Date**    | **Owner**              | **Purpose / change**                                                                                                                                                                                        |
|-------------|-------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1         | 30 Jul 2026 | Product / project team | Initial discovery draft based on the project brief, public context, PRD practice, and climate-sector benchmark patterns.                                                                                    |
| 0.2         | 30 Jul 2026 | Product / project team | Replaces content assumptions with the supplied SPiD website content; validates organisation positioning, programme portfolio, current impact claims, target sitemap, content gaps, and launch dependencies. |
| 0.3         | TBD         | SPiD + delivery team   | To incorporate WordPress crawl, analytics baseline, approved brand assets, final CMS/hosting decisions, content sign-off, delivery estimate, and launch plan.                                               |

## 1.1 Review and approval roles

| **Role**                                            | **Primary responsibility**                                                                                                           |
|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Executive sponsor / SPiD leadership                 | Approves product goals, institutional positioning, scope, public governance information, funding pathways, and launch.               |
| Product owner                                       | Owns PRD, prioritisation, decisions, acceptance criteria, scope control, and release sign-off.                                       |
| Programme leads                                     | Validate CPI4CG, AYEDE 4 Climate Action, IICARE, programme status, geography, results, partner references, and application journeys. |
| Monitoring, evaluation, research and learning owner | Approves every public metric, evidence source, reporting period, methodology note, and impact claim.                                 |
| Communications / content lead                       | Owns copy, media, consent, editorial standards, migration decisions, and content freshness.                                          |
| Design lead                                         | Owns information hierarchy, design system, responsive experience, interaction patterns, and accessibility in design.                 |
| Engineering lead                                    | Owns architecture, security, performance, CMS integration, migration tooling, testing, deployment, and handover.                     |

## 1.2 Source and evidence status

Primary product source: the project brief and the supplied “Website
Content for SPiD” document. The source confirms the proposed headline
“Locally Led. Youth Driven. Climate Resilient.”, the organisation’s
youth-led and community-rooted positioning, four work pillars, the
CPI4CG and AYEDE 4 Climate Action initiatives, current team roles,
engagement pathways, and initial impact claims.

Discovery still required: a complete crawl/export of the current
WordPress website, analytics and Search Console baselines, media and
consent records, existing forms and recipients, plugins/integrations,
legal pages, exact legacy URLs, hosting and DNS ownership, and current
accessibility or performance issues.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Navigation preservation rule<br />
</strong>Every existing public navigation item and URL must be
inventoried before the target sitemap is approved. A label may be
retained, renamed, regrouped, merged, redirected, or archived only after
its purpose, content, search value, legal relevance, and owner have been
reviewed.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# 2. Executive Summary

SPiD needs more than a visual refresh. The new website must become a
credible institutional platform that explains the organisation quickly,
shows real evidence of locally led climate work, presents its programmes
professionally, and gives funders, partners, researchers, youth,
communities, and media clear routes to act.

The supplied content gives the product a strong narrative foundation:
SPiD is a youth-led, community-rooted organisation working across
Nigeria and Africa to strengthen climate resilience through
participatory governance, local knowledge, evidence, inclusive
leadership, and innovation. The website should make that position
unmistakable within the first screen and prove it through programmes,
metrics, stories, publications, team information, partnerships, and
governance material.

The migration will replace the current WordPress presentation layer with
a modern React platform. The recommended implementation is Next.js with
TypeScript, or an equivalent server-rendered React framework, connected
to a structured headless CMS. This preserves the React requirement while
improving search visibility, page speed, accessibility, social sharing,
editorial control, and maintainability.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>North-star experience<br />
</strong>A first-time international visitor should understand what SPiD
does, where and with whom it works, what evidence it has produced, why
the organisation is credible, and how to fund or partner with it within
three purposeful navigational steps.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 2.1 Product principles

- **Evidence before decoration:** Programmes, verified metrics, named
  partners, publications, governance information, and attributable
  stories must build trust.

- **Global polish, African authorship:** The website should meet
  international expectations without losing local voice, context,
  imagery, knowledge, or leadership.

- **Locally led in practice:** Community participation should be visible
  in project methods, outcomes, stories, photography, and
  decision-making—not only in slogans.

- **Every page has a job:** Each page must inform, prove, convert, or
  support a real user task.

- **Fast on ordinary connections:** The experience must remain useful on
  mid-range mobile devices and slower networks.

- **Accessible and safe by default:** Accessibility, privacy,
  safeguarding, and consent are release criteria.

- **Editable without engineering:** Authorised staff must publish
  routine content through structured workflows.

- **Measured and improved:** Analytics, search performance, form
  conversion, content freshness, and errors must be visible after
  launch.

# 3. Validated Organisation and Product Context

## 3.1 Institutional positioning

| **Element**        | **Validated content direction**                                                                                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Positioning        | A youth-led, community-driven and community-rooted organisation advancing locally rooted climate action across Nigeria and Africa.                                                                     |
| Vision             | A just and climate-resilient Africa where empowered communities and young people shape inclusive, sustainable futures.                                                                                 |
| Mission            | Strengthen participatory development and climate resilience by building community capacity, amplifying local voices, advancing equitable policies, and promoting innovative, locally driven solutions. |
| Value proposition  | SPiD links lived experience, local knowledge, evidence, leadership, policy engagement, and practical solutions so communities help shape climate decisions and sustainable development pathways.       |
| Primary brand line | Locally Led. Youth Driven. Climate Resilient.                                                                                                                                                          |
| Core values        | Participation; equity and justice; sustainability; transparency and accountability; innovation; collaboration.                                                                                         |

## 3.2 Theory of Change and work pillars

The Theory of Change states that when communities—especially youth and
underrepresented groups—receive knowledge, tools, platforms, and
leadership opportunities, and when local insights shape policy,
governance, and programme design, climate action becomes more inclusive,
effective, and sustainable. The expected result is resilient ecosystems,
empowered communities, and more equitable participation in Africa’s
green economy.

| **Pillar**                                  | **Purpose**                                                                                                                              | **Website evidence needed**                                                                                                    |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Community-Led Research & Knowledge Exchange | Elevate indigenous knowledge, lived experience, and community priorities to inform policy and interventions.                             | Research methods, locations, datasets or summaries, publications, community voices, ethical approach, and policy use.          |
| Capacity Building & Climate Leadership      | Equip youth, grassroots leaders, communities, and institutions with climate-governance and sustainability capabilities.                  | Curriculum, participant profile, facilitators, cohorts, completion data, alumni outcomes, and application information.         |
| Climate-Resilient Interventions             | Co-design nature-based, climate-smart agriculture, renewable-energy, water, ecosystem, entrepreneurship, and resilience solutions.       | Project objectives, partners, geography, implementation evidence, output/outcome metrics, learning, and replication potential. |
| Policy Engagement & Advocacy                | Translate grassroots evidence into policy briefs, dialogues, campaigns, and recommendations aligned with national and global frameworks. | Briefs, dialogues, policy references, recommendations, institutional engagement, and documented influence.                     |

## 3.3 Validated programme portfolio

| **Initiative**         | **Current evidence from supplied content**                                                                                                                                                                                                                                                | **Required presentation**                                                                                                                                                                            |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CPI4CG                 | Flagship community-led climate-governance initiative; pilot in Sabon Gari LGA, Kaduna State; engagement across 11 wards; 368 household responses; participatory surveys, FGDs, KIIs, consultations, validation, advocacy, and technical collaboration with Nest Africa AI Innovation Lab. | Full programme page with challenge, objectives, methodology, geography, milestones, framework alignment, partners, verified metrics, outputs, gallery, learning, scale pathway, and partnership CTA. |
| AYEDE 4 Climate Action | Flagship youth capacity-building fellowship combining expert sessions, self-paced learning, mentorship, peer collaboration, practical assignments, and networking. Current claims: 5,000+ reach, 35 youth trained, 18 states represented, and one policy brief developed.                 | Fellowship landing page with cohort status, eligibility, curriculum, facilitators, alumni stories, verified impact, application status, downloadable information, and sponsor/partner pathway.       |
| IICARE                 | The supplied content provides only the title: Integrated Initiative for Climate Adaptation and Resilience Empowerment.                                                                                                                                                                    | Do not publish an empty page. Complete the programme brief before launch or show a controlled “in development” card without unsupported claims.                                                      |

## 3.4 Current product problem

The current website is perceived as outdated and does not yet present
SPiD at the standard expected by international funders, development
partners, researchers, policy actors, media, and strong programme
applicants. The supplied content is rich but currently arranged as a
long list of page copy, with duplication between “Our Stories” and “Blog
/ Insights,” an institutional mismatch in the label “Products,”
incomplete impact evidence, and missing launch assets.

## 3.5 Product opportunity

SPiD can turn the website into a funder-readiness and programme-delivery
asset: a clear institutional story, structured programme evidence,
verified impact, searchable knowledge, visible team and partners,
current opportunities, strong forms, and transparent governance. The
goal is not to copy a top-tier climate organisation’s size; it is to
match the clarity, trust, usability, and editorial discipline
appropriate to SPiD’s stage.

# 4. Goals, Non-Goals, and Success Measures

## 4.1 Business and user goals

- Position SPiD as a credible, contemporary African climate and
  participatory-development organisation.

- Increase qualified funding, partnership, implementation, research,
  government, media, and technical-collaboration inquiries.

- Present CPI4CG, AYEDE 4 Climate Action, IICARE, and future initiatives
  through consistent evidence-based templates.

- Make verified impact, publications, stories, team, partners, policies,
  and programme opportunities easy to find.

- Support fellowship applications, volunteering, programme funding,
  research collaboration, and community engagement.

- Improve international search visibility and social-media shareability.

- Give staff a safe CMS workflow so routine publishing does not require
  a developer.

- Preserve valuable WordPress content and search equity while
  simplifying the information architecture.

## 4.2 Non-goals for initial launch

- A custom mobile application.

- A full donor CRM, grant-management platform, learning-management
  system, or applicant-tracking system.

- A complex scientific climate-data portal unless a separate product
  scope and maintained dataset are approved.

- A private partner portal with accounts and document exchange.

- Multilingual launch beyond English unless translation ownership and
  review capacity are confirmed.

- Online donations or payment processing until legal, finance, security,
  settlement, privacy, and reconciliation requirements are approved.

## 4.3 Proposed success measures

| **Metric area**          | **Launch / quality target**                                                                                                                               | **Post-launch outcome target**                                                                                          |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Funding and partnerships | Dedicated partnership journey, tracked forms, clear response ownership, capability material, programmes, impact, team, partners, and governance evidence. | Establish baseline in first 30 days; target a 40% increase in qualified institutional inquiries within six months.      |
| Programme engagement     | CPI4CG and AYEDE pages complete; IICARE handled without an empty or misleading page; tracked programme CTAs.                                              | Target a 30% increase in programme-detail engagement and application/partnership clicks within six months.              |
| Discoverability          | Technical SEO, metadata, structured data, sitemap, redirects, analytics, and Search Console configured.                                                   | Target 35% growth in organic sessions and 25% growth in international sessions within six months, subject to baseline.  |
| Trust and evidence       | Every public impact metric displays an approved value, label, reporting period, geography, and source or methodology note.                                | Zero unresolved public metric discrepancies; increasing downloads of briefs and organisational material.                |
| Performance              | Representative mobile pages meet agreed Core Web Vitals and page-weight budgets at launch.                                                                | At least 75% of real-user visits remain in the “good” range for key web vitals after stabilisation.                     |
| Accessibility            | WCAG 2.2 AA review across components, templates, forms, documents, keyboard use, and screen-reader journeys.                                              | No unresolved critical accessibility defects; quarterly regression checks.                                              |
| Editorial efficiency     | Trained editors can create, review, schedule, publish, update, and archive structured content without code.                                               | Routine approved updates published within one business day; 90% of active content reviewed within its freshness window. |

Outcome targets are proposed planning targets, not existing performance
claims. They must be adjusted after analytics and operational baselines
are available.

# 5. Target Audiences and Personas

| **ID** | **Persona**                                                           | **Main questions**                                                                                           | **Primary action**                                                                                    |
|--------|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| P1     | International funder / foundation programme officer                   | Does SPiD fit our priorities? Is it credible, governed, measurable, locally rooted, and capable of delivery? | Review programmes, impact, team, partners, governance, and submit a funding/partnership inquiry.      |
| P2     | Government, multilateral, NGO, or implementation partner              | What capabilities, communities, geography, methods, evidence, and partnership models does SPiD offer?        | Explore work, download relevant material, and propose collaboration.                                  |
| P3     | Researcher, policy actor, academic, or technical expert               | What evidence, methods, local knowledge, policy insights, and publications are available?                    | Search insights, read/download publications, cite work, or collaborate on research.                   |
| P4     | Youth fellow, volunteer, job seeker, or emerging climate professional | Which opportunities are open? Am I eligible? What will I learn, and what happens after applying?             | View opportunity status, eligibility, timeline, FAQs, alumni stories, and apply or register interest. |
| P5     | Community leader, grassroots organisation, or local participant       | How does SPiD involve communities? What work is happening locally, and how are voices protected and used?    | Validate approach, view local work, contact the team, or participate safely.                          |
| P6     | Journalist, public visitor, or social-media audience                  | What is new, credible, visual, quotable, and relevant?                                                       | Read stories/news, access media facts, verify contacts, and share content.                            |
| P7     | SPiD editor / administrator                                           | Can I publish accurate content quickly without breaking design, links, or compliance?                        | Create, review, preview, publish, update, expire, and report on content.                              |

## 5.1 Audience priority

Primary: funders and institutional partners. Secondary: policy,
research, media, youth, community, and programme audiences. Internal:
editors and administrators. The homepage should lead with mission,
evidence, and work, then provide clear partnership and participation
routes without turning the site into a fundraising brochure.

# 6. Priority User Journeys

| **Journey**                   | **Entry**                                       | **Essential flow**                                                                                                                       | **Success**                                                                                       |
|-------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| J1 - Funder validation        | Referral, search, LinkedIn, event, proposal     | Understand SPiD → review work pillars → inspect programme evidence and impact → review team, partners, governance → contact.             | Qualified institutional inquiry captured with source attribution and internal owner notification. |
| J2 - Programme partnership    | Programme card, search, shared link             | Open CPI4CG/AYEDE/IICARE page → assess challenge, method, geography, results, framework alignment, partners, and funding need → inquire. | Relevant programme inquiry or meeting request submitted.                                          |
| J3 - Fellowship / opportunity | Social media, search, alumni link               | Open AYEDE or opportunity page → confirm status, eligibility, benefits, timeline, FAQs, privacy → apply externally or register interest. | Valid application click or interest submission tracked once.                                      |
| J4 - Evidence discovery       | Search, policy dialogue, academic referral      | Search/filter insights → open publication/story → review metadata and evidence → download/cite/share → discover related work.            | Useful resource viewed or downloaded; related programme engagement.                               |
| J5 - Community validation     | Direct link, field engagement, partner referral | See locally led approach → view geography, methods, consent-safe stories, and contact options → engage.                                  | Community or grassroots inquiry reaches the correct owner safely.                                 |
| J6 - Editorial publishing     | CMS login                                       | Choose content model → complete required fields → preview → review/approve → publish/schedule → monitor/expire.                          | Accurate content published without code and with complete metadata.                               |

# 7. Information Architecture and Navigation

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Key navigation decision<br />
</strong>Maintain every supplied component, but do not keep every label
at the top level. “Products” should become “Our Work,” and “Our Stories”
plus “Blog / Insights” should be consolidated into one structured
“Insights” destination. Legacy URLs must remain available through
redirects or approved aliases.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.1 Supplied-to-target navigation cross-walk

| **Supplied component**           | **Target placement**                         | **Recommended action**              | **Reason**                                                                                                                             |
|----------------------------------|----------------------------------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Home                             | Home via logo and canonical / route          | Retain                              | Expected convention; avoid using scarce desktop navigation space for a Home label unless stakeholder preference requires it.           |
| Who We Are                       | About                                        | Rename and expand                   | “About” is clearer internationally and can house mission, Theory of Change, team, advisory board, governance, and partners.            |
| Our Stories                      | Insights → Community Stories / News          | Merge                               | Overlaps with Blog / Insights; preserve stories as a content type and legacy URL.                                                      |
| Products (Projects and Programs) | Our Work                                     | Rename                              | “Products” sounds commercial and under-describes programmes, projects, fellowships, research, and interventions.                       |
| Our Impact                       | Impact                                       | Retain with shorter label           | Create a proof-led destination with verified metrics, outcomes, evidence, stories, and reports.                                        |
| Partners                         | About → Partners; footer; contextual modules | Retain page, regroup in navigation  | Partner evidence matters to funders but does not always need a permanent top-level desktop label.                                      |
| Get Involved                     | Get Involved                                 | Retain                              | Supports partner, fund, volunteer, sponsor, research, and opportunity journeys.                                                        |
| Blog / Insights                  | Insights                                     | Rename / retain concept             | Becomes the knowledge and publishing hub, including policy briefs, research, stories, news, youth perspectives, and programme updates. |
| Contact                          | Contact page and footer                      | Retain route; move from primary nav | Keep universally accessible in footer and action menus; use Partner With Us as primary CTA.                                            |

## 7.2 Recommended top-level navigation

| **Label**       | **Primary contents**                                                                                                    | **Primary user purpose**                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| About           | About SPiD; vision, mission and why; Theory of Change; how we work; values; team; advisory board; governance; partners. | Trust, institutional understanding, leadership, and due diligence.                   |
| Our Work        | Work pillars; programmes and projects; CPI4CG; AYEDE 4 Climate Action; IICARE; where we work.                           | Explore capabilities, methods, geography, status, evidence, and opportunities.       |
| Impact          | Impact framework; verified metrics; outcomes; case studies; reports; learning.                                          | Validate results and understand what changed, for whom, where, and over what period. |
| Insights        | All insights; policy briefs; research; community stories; news; youth perspectives; programme updates; media resources. | Find evidence, stories, updates, and shareable resources.                            |
| Get Involved    | Partner; fund a programme; volunteer expertise; sponsor youth leaders; collaborate on research; opportunities.          | Take a high-value action.                                                            |
| Partner With Us | Persistent CTA to tailored partnership landing page or form.                                                            | Start an institutional conversation.                                                 |

## 7.3 Target sitemap

| **Section**       | **Required routes / destinations**                                                                            |
|-------------------|---------------------------------------------------------------------------------------------------------------|
| Home              | /                                                                                                             |
| About             | /about; /about/theory-of-change; /about/team; /about/governance; /partners                                    |
| Our Work          | /our-work; /our-work/cpi4cg; /our-work/ayede-4-climate-action; /our-work/iicare; /where-we-work               |
| Impact            | /impact; optional /impact/stories and /impact/reports when content volume justifies them                      |
| Insights          | /insights; category/filter views; /insights/\[slug\]; /publications/\[slug\] or unified content-detail routes |
| Get Involved      | /get-involved; /partner; /opportunities; /opportunities/\[slug\]; optional /volunteer                         |
| Contact and legal | /contact; /privacy; /terms; /accessibility; /safeguarding; /cookie-preferences; error and search pages        |

## 7.4 Homepage content hierarchy

| **Order** | **Module**                      | **Requirement**                                                                                                                                                                                                              |
|-----------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | Hero                            | Approved headline “Locally Led. Youth Driven. Climate Resilient.”; concise subheadline; authentic visual; Partner With Us primary CTA; Support Community Climate Action secondary CTA only when its destination is approved. |
| 2         | Credibility / evidence strip    | Geographic scope, active initiatives, selected verified metrics, and trust signals with reporting period or source.                                                                                                          |
| 3         | What We Do                      | Four work pillars with concise outcomes and links to relevant work.                                                                                                                                                          |
| 4         | Flagship work                   | CPI4CG and AYEDE featured; IICARE included only with adequate content/status.                                                                                                                                                |
| 5         | Impact proof                    | Verified numbers, outcome statements, methods, and link to full impact page; never publish placeholder counters.                                                                                                             |
| 6         | Featured evidence and voices    | One current policy brief/research item and one consented community, fellow, or partner story.                                                                                                                                |
| 7         | Partners                        | Approved logos/names with accessible text and links where appropriate.                                                                                                                                                       |
| 8         | Latest insights / opportunities | Fresh, automatically populated cards with status and dates.                                                                                                                                                                  |
| 9         | Action banner                   | Partner, fund, volunteer, sponsor, or collaborate; one clear route per intent.                                                                                                                                               |

# 8. Page and Template Requirements

| **Template**                 | **Required content and behaviour**                                                                                                                                                                                     |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Homepage                     | Mission-first hero; evidence strip; four work pillars; flagship programmes; verified impact; featured insight/story; partners; current opportunity; action banner; no unsupported counters or duplicate sections.      |
| About                        | Institutional overview; vision; mission; why; Theory of Change; how SPiD works; values; geographic scope; governance links; related work and partnership CTA.                                                          |
| Team / advisory board        | Role, name, biography, photo, expertise, social link where approved, image alt text, and ordering; separate staff and advisory categories; no image-only identification.                                               |
| Our Work landing             | Filter or group by initiative type, pillar, status, geography, and audience when content volume warrants; clear status labels and summary metrics.                                                                     |
| Programme / project detail   | Challenge; summary; objectives; approach; communities/audience; geography; dates/status; milestones; verified metrics; outcomes; framework alignment; partners; publications; gallery; learning; CTA; related content. |
| Impact                       | Impact philosophy; approved indicators; reporting periods; geography; outputs versus outcomes; qualitative evidence; methodology; case studies; reports; limitations and learning where relevant.                      |
| Insights listing             | Search, categories, tags, date, author, programme, geography, and content type; useful empty states; featured and latest items.                                                                                        |
| Insight / publication detail | Title, summary, author, date, category, reading time, accessible body, sources, related programme, share tools, downloadable file metadata, citation, and related content.                                             |
| Partners                     | Partner categories, approved logos/names, collaboration context, featured partnership examples, and partner CTA; avoid implying endorsement beyond approved wording.                                                   |
| Get Involved / Partner       | Intent-based routes: strategic partnership, fund a programme, sponsor youth leaders, volunteer expertise, collaborate on research, and other opportunities; tailored fields and privacy notice.                        |
| Opportunity / fellowship     | Status, eligibility, location, modality, benefits, dates, process, FAQs, safeguarding/privacy, apply link or interest form, automatic closure, and related opportunities.                                              |
| Contact                      | Purpose selector, minimal fields, official email, location, social links, response expectation, anti-spam protection, privacy notice, and success/error states.                                                        |
| Governance / legal           | Registration details where approved; policies, annual reports, safeguarding, privacy, terms, accessibility, cookies, and whistleblowing/reporting route where applicable.                                              |

# 9. Content Strategy, CMS, and Editorial Governance

## 9.1 Structured content types

| **Content type**           | **Required core fields**                                                                                                                                                      |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organisation settings      | Official name, short name, headline, mission, contacts, social links, registration details, default SEO, global CTAs, footer, analytics and consent settings.                 |
| Page                       | Title, slug, summary, flexible approved modules, owner, review date, SEO/social metadata, status, related content.                                                            |
| Work pillar                | Name, description, outcomes, icon/visual, related programmes, evidence, and CTA.                                                                                              |
| Programme / project        | Name, acronym, type, status, summary, challenge, objectives, method, audience, geography, dates, metrics, outcomes, frameworks, partners, publications, media, learning, CTA. |
| Impact metric              | Label, value, unit, geography, programme, reporting period, source, methodology note, approval owner, last verified date, visibility.                                         |
| Story / article            | Title, summary, author, publish date, category, body, programme, geography, people/organisations, media, consent status, SEO, related content.                                |
| Publication / policy brief | Title, abstract, authors, date, type, programme, keywords, file, file size/type, accessible alternative, citation, cover image, DOI/identifier where available.               |
| Opportunity / event        | Title, type, status, eligibility, location/modality, dates, deadline, benefits, process, apply URL/form, FAQs, expiry behaviour, owner.                                       |
| Person                     | Name, role, team/advisory category, biography, expertise, photo, alt text, social links, ordering, status.                                                                    |
| Partner                    | Name, category, logo, accessible name, URL, relationship summary, programme links, approval/usage status, ordering.                                                           |
| Testimonial / quote        | Quote, speaker, role/organisation, context, permission/consent, date, related work, image if approved.                                                                        |
| Location                   | Country, state/region, LGA/community, coordinates if safe, description, related work, map visibility and safeguarding controls.                                               |

## 9.2 Editorial workflow and controls

- Roles: administrator, editor, author/contributor, reviewer/approver,
  and read-only analyst where needed.

- Workflow: draft → review → approved → scheduled/published → updated →
  expired/archived.

- Required-field validation for impact evidence, programme status,
  dates, consent, SEO, image alt text, and form ownership.

- Preview against real responsive templates before publishing.

- Revision history, scheduled publishing, automatic opportunity expiry,
  broken-link checks, and content-review reminders.

- Reusable approved components, but no unrestricted page builder that
  permits inconsistent layouts or inaccessible design choices.

- British English editorial standard; consistent programme names,
  acronyms, capitalisation, and climate-framework references.

## 9.3 Confirmed content gaps and launch dependencies

| **Gap / issue**                                   | **Launch decision required**                                                                                                                               | **Owner**                       |
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| IICARE has only a title                           | Complete programme brief and status, or publish only a controlled “in development” reference.                                                              | Programme lead                  |
| Impact claims lack source and reporting period    | Validate 5,000+ reach, 35 youth trained, 18 states, one policy brief, 368 responses, and 11 wards; attach source, date, geography, and approval.           | MERL / programme leads          |
| Partner list and logos are absent                 | Provide approved names, categories, URLs, logos, usage rights, and relationship descriptions.                                                              | Leadership / partnerships       |
| Testimonials are placeholders                     | Provide attributable, consented quotes or remove the section at launch.                                                                                    | Communications                  |
| Team biographies and images are incomplete        | Provide final names, titles, biographies, portraits, image rights, and alt text; validate spelling of names.                                               | Operations / communications     |
| Logo referenced but not supplied                  | Provide final vector and web assets, colour variants, clear-space rules, and favicon.                                                                      | Leadership / design             |
| Domain and contact identity need alignment        | Confirm whether the official public email/domain is spidclimateresilience.org, spidinitiative.org, or another approved identity; configure SPF/DKIM/DMARC. | Leadership / IT                 |
| Support Community Climate Action CTA is undefined | Confirm whether it means donation, sponsorship, partnership, campaign support, or general inquiry; approve destination and compliance.                     | Leadership / finance / legal    |
| Governance and legal materials are absent         | Confirm what registration, policies, annual reports, safeguarding, privacy, terms, accessibility, and complaints routes may be public.                     | Leadership / operations / legal |
| Contact details are incomplete                    | Provide office address or service area wording, official phone if used, social URLs, form recipients, and response ownership.                              | Operations / communications     |

## 9.4 Editorial normalisation recommendations

- Use “Our Work” instead of “Products,” and “programmes” rather than
  mixing “programs” and “programmes.”

- Correct “Entrpreneurship” to “Entrepreneurship” and apply a documented
  style guide across all copy.

- Standardise the fellowship name as “AYEDE 4 Climate Action Fellowship”
  unless leadership approves another official form.

- Use “communities engaged,” not “community engaged,” and label every
  counter with scope and reporting period.

- Keep the strong team culture copy, but use a concise version on the
  public Team page; move the longer internal-culture narrative to a
  careers or culture section when needed.

- Avoid repeating the same “Partner With Us” message without context;
  tailor CTAs to the page and user intent.

# 10. Experience and Visual Design Requirements

## 10.1 Desired brand experience

The site should feel credible, contemporary, grounded, intelligent,
hopeful, youthful, and action-oriented. It must not resemble a generic
NGO template or use decorative leaves, green gradients, and stock
disaster photography as a substitute for evidence. Climate and
environment should be expressed through authentic place, people,
systems, data, materials, and motion.

## 10.2 Visual system direction

| **Area**          | **Requirement**                                                                                                                                                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Colour            | Deep forest and water/teal tones for authority and climate identity; warm earth and sand neutrals for humanity; one solar or amber accent for action. Final palette must be derived from the approved logo and pass contrast testing. |
| Typography        | Modern, highly legible web type with a confident editorial hierarchy, strong numerals for impact data, dependable performance, and adequate language character support.                                                               |
| Photography       | Original or rights-cleared images of communities, fellows, researchers, landscapes, livelihoods, technologies, convenings, and implementation. Record consent, credits, location sensitivity, and usage rights.                       |
| Data presentation | Clear metrics, timelines, maps, project metadata, charts, and evidence notes. Distinguish output, outcome, target, and reach; always show reporting period and source.                                                                |
| Layout            | Generous spacing, strong editorial rhythm, modular cards, responsive grids, clear reading widths, prominent evidence blocks, and purposeful white space.                                                                              |
| Motion            | Subtle, purposeful, and optional. Honour reduced-motion settings; avoid autoplay audio/video, heavy parallax, and animation that delays comprehension.                                                                                |
| Iconography       | Simple, consistent, and supported by text; never rely on colour or icon alone to communicate meaning.                                                                                                                                 |
| Voice             | Plain, confident British English; specific, evidence-aware, locally grounded, and free of vague development-sector claims.                                                                                                            |

## 10.3 Required design components

- Global header, responsive navigation, accessible mega-menu or grouped
  menus, site search, language-ready space, and persistent partnership
  CTA.

- Hero variants, evidence strip, impact cards, work-pillar cards,
  programme cards, publication cards, story cards, opportunity cards,
  person cards, partner grid, testimonial, timeline, map, gallery,
  quote, downloadable resource, and action banner.

- Form fields, validation, consent, loading, success, error, empty,
  closed, archived, no-results, and 404 states.

- Design tokens for colour, typography, spacing, radius, elevation,
  motion, focus, breakpoints, and content width.

- Document templates and social cards aligned with the website identity
  where the project scope permits.

# 11. Functional Requirements

| **ID** | **Feature**                    | **Requirement**                                                                                                                                     | **Priority** |
|--------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| FR-01  | Global navigation              | Responsive, keyboard-accessible navigation reflecting approved sitemap; active states, skip link, focus management, and mobile menu.                | Must         |
| FR-02  | Legacy navigation preservation | Inventory every current navigation item and public URL; record retain/rename/merge/redirect/archive decision and approval.                          | Must         |
| FR-03  | Site search                    | Search pages, programmes, insights, publications, people, and opportunities; useful filters, no-results guidance, and analytics.                    | Must         |
| FR-04  | Homepage management            | Editors can manage approved homepage modules, ordering, featured items, evidence, and CTAs without code.                                            | Must         |
| FR-05  | Our Work listing               | Display programmes/projects with status, summary, pillar, geography, and audience; filters when volume justifies them.                              | Must         |
| FR-06  | Programme detail               | Render structured challenge, objectives, approach, geography, status, milestones, evidence, partners, frameworks, media, learning, and CTA.         | Must         |
| FR-07  | Impact presentation            | Display approved metrics with source, reporting period, geography, programme, methodology note, and related evidence.                               | Must         |
| FR-08  | Insights hub                   | List and filter policy briefs, research, community stories, news, youth perspectives, and programme updates.                                        | Must         |
| FR-09  | Publication delivery           | Accessible metadata, download, file type/size, citation, related work, and alternative format note.                                                 | Must         |
| FR-10  | Team and advisory board        | Structured profiles, role groups, ordering, biographies, photos, alt text, and approved social links.                                               | Must         |
| FR-11  | Partner directory              | Approved partner categories, logos/names, links, relationship context, programme associations, and usage controls.                                  | Must         |
| FR-12  | Opportunity management         | Status, eligibility, dates, FAQs, apply route, automatic closure, archive, and related opportunities.                                               | Must         |
| FR-13  | Partnership and contact forms  | Intent-specific fields, validation, privacy notice, anti-spam, confirmation, secure delivery/storage, owner notification, and analytics.            | Must         |
| FR-14  | Newsletter / interest capture  | Optional consent-based subscription or programme-interest capture with double opt-in where required and clear unsubscribe path.                     | Should       |
| FR-15  | Media management               | Responsive images, focal point, caption, credit, consent/rights metadata, alt text, video transcript/captions, and safe-location control.           | Must         |
| FR-16  | Related content                | Automatically and manually connect programmes, people, partners, metrics, publications, stories, opportunities, and locations.                      | Should       |
| FR-17  | Location / map                 | Show work locations at a safe level of precision; support filters and accessible non-map alternative.                                               | Should       |
| FR-18  | Governance and reports         | Publish approved policies and reports with metadata, accessible downloads, dates, and archive.                                                      | Must         |
| FR-19  | SEO and social sharing         | Editable titles, descriptions, canonical URL, robots, Open Graph image/text, structured data, sitemap, and social previews.                         | Must         |
| FR-20  | Analytics events               | Track agreed CTA, programme, publication, opportunity, search, form, outbound, and error events without collecting unnecessary personal data.       | Must         |
| FR-21  | Preview and workflow           | Draft, review, preview, approval, scheduling, revisions, expiry, and archive according to role.                                                     | Must         |
| FR-22  | Redirect management            | Support and test 301 redirects from every changed WordPress URL; log broken links and 404s after launch.                                            | Must         |
| FR-23  | Donation / sponsorship flow    | Only implement payment or donation functionality after separate legal, finance, security, processor, receipt, reconciliation, and privacy approval. | Could        |
| FR-24  | Error and service states       | Branded 404/500, form error, no-results, closed opportunity, unavailable resource, and maintenance states with recovery actions.                    | Must         |

# 12. Technical Architecture and CMS Requirements

## 12.1 Recommended architecture

Recommended implementation: Next.js with TypeScript as the React
framework; a structured headless CMS; server-rendered or statically
generated public pages with controlled revalidation; managed media
optimisation/CDN; secure server-side form handling; analytics and
consent management; automated testing and deployment; and a documented
preview/staging workflow. A client-only single-page application is not
acceptable for the public site.

| **Layer**          | **Requirement / decision**                                                                                                                                                                             |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frontend           | React through Next.js or equivalent server-rendered framework; TypeScript; reusable accessible component library; route-level error handling; progressive enhancement.                                 |
| CMS                | Evaluate suitable managed or self-hosted headless CMS options against editor usability, structured models, workflows, preview, roles, media, backups, API reliability, cost, hosting, and maintenance. |
| Hosting / delivery | Managed deployment with CDN, TLS, preview environments, environment separation, logging, rollback, uptime monitoring, backups, and documented ownership.                                               |
| Forms              | Server-side validation, spam controls, rate limiting, secure secrets, minimal data collection, approved email/CRM destination, audit trail, and failure alerts.                                        |
| Search             | Start with indexed CMS/site search appropriate to content volume; allow future upgrade without replacing templates.                                                                                    |
| Media              | Automatic responsive formats and dimensions; compression; lazy loading; focal points; rights/consent metadata; external video embedding only with privacy and performance controls.                    |
| Analytics          | Privacy-conscious analytics, Search Console, event taxonomy, campaign parameters, dashboards, consent mode where required, and data retention configuration.                                           |
| Integrations       | Email/newsletter, application forms, CRM, maps, social, payment, or other services only through approved, documented integrations with owners and failure behaviour.                                   |

## 12.2 CMS acceptance requirements

| **ID** | **Requirement**                                                                                                                              |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CMS-01 | Editors can create, preview, review, schedule, publish, update, expire, unpublish, and archive content without code.                         |
| CMS-02 | Content types and required fields match the approved models; validation prevents missing dates, evidence, alt text, status, or SEO metadata. |
| CMS-03 | Roles and permissions prevent unauthorised publishing, configuration changes, or access to sensitive form data.                              |
| CMS-04 | Revision history, backup, restore, audit trail, and documented recovery procedures are available.                                            |
| CMS-05 | Media records include alt text, captions, credits, rights/consent, focal point, and safe-location controls.                                  |
| CMS-06 | Preview accurately reflects responsive production templates and unpublished related content.                                                 |
| CMS-07 | Structured relationships connect programmes, metrics, people, partners, publications, stories, opportunities, and locations.                 |
| CMS-08 | Content export is possible in a usable format to reduce vendor lock-in.                                                                      |
| CMS-09 | Editorial training, quick-reference guidance, content ownership, and support procedures are delivered before launch.                         |

# 13. Non-Functional Requirements

| **ID** | **Area**                 | **Requirement**                                                                                                                                                 | **Priority** |
|--------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| NFR-01 | Accessibility            | Meet WCAG 2.2 AA across templates, components, forms, navigation, keyboard use, focus, colour, motion, media, and downloadable-document pathways.               | Must         |
| NFR-02 | Performance              | Agree page-weight and script budgets; optimise media/fonts; minimise third-party code; target good Core Web Vitals on representative mobile journeys.           | Must         |
| NFR-03 | Search visibility        | Server-rendered indexable HTML, semantic headings, metadata, canonical URLs, structured data, XML sitemap, robots controls, redirects, and social cards.        | Must         |
| NFR-04 | Responsive experience    | Support current mobile, tablet, laptop, and large-screen layouts without horizontal scrolling, clipping, or loss of function.                                   | Must         |
| NFR-05 | Low-bandwidth resilience | Useful content appears before heavy media; images are responsive; video is optional; interactions tolerate slow or interrupted connections.                     | Must         |
| NFR-06 | Security                 | TLS, secure headers, dependency scanning, least privilege, secrets management, rate limiting, input validation, backups, incident ownership, and patch process. | Must         |
| NFR-07 | Privacy and safeguarding | Data minimisation, consent, retention, deletion, secure access, child/youth safeguards where relevant, safe stories, and documented third parties.              | Must         |
| NFR-08 | Reliability              | Monitoring, error reporting, form-delivery alerts, backup/restore testing, deployment rollback, and agreed availability target.                                 | Must         |
| NFR-09 | Maintainability          | Typed code, documented components, linting, tests, code review, environment parity, dependency policy, and handover documentation.                              | Must         |
| NFR-10 | Compatibility            | Test agreed current versions of major browsers and representative Android/iOS devices; define graceful degradation.                                             | Must         |
| NFR-11 | Scalability              | Content models, navigation, search, hosting, and caching support growth in programmes, countries, publications, traffic, and languages.                         | Should       |
| NFR-12 | Sustainable web practice | Avoid unnecessary page weight, autoplay, oversized imagery, duplicate tracking, and excessive requests; report page budgets during QA.                          | Should       |

# 14. WordPress-to-React Migration Requirements

| **ID** | **Requirement**                                                                                                                                                      |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MIG-01 | Obtain WordPress admin/export access and crawl the public site before sitemap and redirect sign-off.                                                                 |
| MIG-02 | Inventory every URL, navigation item, page, post, category, tag, author, form, file, image, video, metadata field, redirect, plugin-generated page, and integration. |
| MIG-03 | Classify each item: retain, rewrite, merge, redirect, archive, delete, or legal hold; record owner and approval.                                                     |
| MIG-04 | Map legacy WordPress structures to the approved CMS content types and target routes.                                                                                 |
| MIG-05 | Preserve titles, useful copy, dates, authors, files, image credits, alt text, internal links, canonical metadata, and search intent where valid.                     |
| MIG-06 | Clean duplicate, outdated, unsupported, inaccessible, or inconsistent content before import; do not automate poor content into the new site.                         |
| MIG-07 | Create and test a one-to-one redirect map for all changed URLs; prevent redirect chains, loops, soft 404s, and broken campaign links.                                |
| MIG-08 | Rebuild forms with approved fields, recipients, privacy notice, anti-spam, confirmation, analytics, storage/retention, and failure alerts.                           |
| MIG-09 | Optimise and rename media safely; preserve rights, captions, credits, consent, and references; do not expose sensitive metadata.                                     |
| MIG-10 | Run content, functional, accessibility, performance, security, SEO, browser/device, and analytics QA on staging.                                                     |
| MIG-11 | Plan DNS, TLS, email, deployment freeze, backup, rollback, sitemap submission, monitoring, and communication.                                                        |
| MIG-12 | Keep the old site privately accessible during stabilisation and decommission only after sign-off and archive.                                                        |

## 14.1 Current content cross-walk starter

| **Current label / content**                 | **Target destination**                       | **Action**                 | **Validation needed**                                                                         |
|---------------------------------------------|----------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------------|
| HOME PAGE                                   | /                                            | Retain and redesign        | Final hero media, approved impact metrics, partners, featured content, CTA destinations.      |
| WHO WE ARE / About Us / Our Approach / Team | /about; /about/theory-of-change; /about/team | Regroup                    | Final biographies, advisory information, governance materials, official organisational facts. |
| OUR STORIES / BLOG / INSIGHTS               | /insights and detail routes                  | Merge and categorise       | Complete inventory, categories, authors, dates, files, redirects, duplicate review.           |
| PRODUCTS / Projects and Programs            | /our-work and programme routes               | Rename and structure       | Programme status, dates, owners, evidence, media, partner approvals, IICARE content.          |
| OUR IMPACT                                  | /impact                                      | Retain and strengthen      | Metric sources, periods, methodologies, outcomes, reports, limitations.                       |
| PARTNERS                                    | /partners                                    | Retain and enrich          | Approved partner list, logos, links, relationship wording, usage rights.                      |
| GET INVOLVED                                | /get-involved; /partner; /opportunities      | Retain and split by intent | Form owners, donation/sponsorship decision, volunteer process, privacy and safeguarding.      |
| CONTACT                                     | /contact and footer                          | Retain route               | Official domain/email, address, social URLs, response ownership, anti-spam and privacy.       |

# 15. Analytics, SEO, and Conversion Measurement

## 15.1 Event taxonomy

| **Event**                                 | **Required properties / purpose**                                                                                            |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| partner_cta_click                         | Page, programme, CTA label, placement, campaign/source; measures partnership intent.                                         |
| partnership_form_start / submit / error   | Form type, page, programme, source, validation/error category; exclude sensitive free-text and personal data from analytics. |
| programme_view                            | Programme, status, geography, entry source, engagement depth.                                                                |
| opportunity_view / apply_click            | Opportunity, status, cohort, deadline, source; distinguish external apply from internal interest form.                       |
| publication_view / download               | Resource type, programme, title/ID, file format, source.                                                                     |
| search_submit / no_results / result_click | Query category or privacy-safe term, filters, result count, clicked content.                                                 |
| impact_interaction                        | Metric, programme, reporting period, source-note interaction, related evidence click.                                        |
| outbound_link / social_share              | Destination domain or channel, page, content ID.                                                                             |
| 404_view / broken_link                    | Requested path, referrer, route group; supports migration and maintenance.                                                   |

## 15.2 SEO requirements

- Define search intent and primary topic for each landing page; avoid
  duplicate pages competing for the same terms.

- Unique title, meta description, H1, canonical URL, Open Graph
  image/text, and index controls for every public route.

- Organisation, Article, Breadcrumb, Event, Person, and other
  appropriate structured data only when the visible content supports it.

- XML sitemap by content type, clean robots rules, redirect monitoring,
  broken-link reporting, and Search Console verification.

- Readable URLs, descriptive internal links, related-content paths,
  accessible media, and optimised downloadable documents.

- International credibility through clear geography, dates, authors,
  programme status, partners, evidence, and organisational contact—not
  keyword stuffing.

## 15.3 Reporting dashboard

A monthly dashboard should cover traffic by geography/source, top
landing pages, programme engagement, partnership and opportunity
conversion, publication downloads, search usage/no-results, Core Web
Vitals, accessibility issues, form errors, 404s, content freshness, and
campaign performance. Owners must review results and convert findings
into a prioritised optimisation backlog.

# 16. Acceptance Criteria and Definition of Done

| **ID** | **Given / When / Then criterion**                                                                                                                                                                                                                                                      |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AC-01  | Given the approved legacy inventory, when migration QA is completed, then every retained public URL resolves correctly and every changed URL redirects to the approved destination.                                                                                                    |
| AC-02  | Given a first-time mobile visitor, when the homepage loads, then the approved headline, concise SPiD value proposition, primary action, and useful content appear quickly without layout instability.                                                                                  |
| AC-03  | Given the supplied navigation components, when the target site is reviewed, then Home, Who We Are, Our Stories, Products, Our Impact, Partners, Get Involved, Blog/Insights, and Contact are all represented through retained, renamed, merged, regrouped, or redirected destinations. |
| AC-04  | Given a funder, when navigating from the homepage, then relevant work, verified impact, team, partners, governance material, and a partnership inquiry route are reachable within three purposeful steps.                                                                              |
| AC-05  | Given CPI4CG and AYEDE content, when their pages are published, then each presents approved status, challenge, approach, geography/audience, evidence, partners/frameworks, outcomes, related resources, and tailored CTA.                                                             |
| AC-06  | Given incomplete IICARE content, when the site launches, then no empty or misleading programme page is published; the approved status treatment is used.                                                                                                                               |
| AC-07  | Given a public impact number, when displayed anywhere, then it includes an approved label, value, unit, geography, reporting period, source or methodology note, and last verification owner/date.                                                                                     |
| AC-08  | Given a keyboard or screen-reader user, when using any launch template, then navigation, forms, content, media, status messages, and downloads are understandable and operable in logical order.                                                                                       |
| AC-09  | Given an authorised editor, when creating a programme, impact metric, publication, story, person, partner, or opportunity, then required fields are validated and the item can be previewed, reviewed, scheduled, published, updated, and archived without code.                       |
| AC-10  | Given a partnership/contact submission, when valid data is sent, then confirmation is shown, the approved owner is notified, the record is handled securely, failure is monitored, and the analytics event fires once.                                                                 |
| AC-11  | Given an expired opportunity, when its deadline passes, then active application CTAs are removed, closed status is clear, useful information remains, and alternatives are suggested where available.                                                                                  |
| AC-12  | Given launch readiness review, when representative templates and documents are tested, then there are no unresolved critical defects in content accuracy, redirects, functionality, accessibility, security, performance, forms, analytics, or SEO.                                    |

## 16.1 Global definition of done

- Requirements approved by accountable owners; open deviations
  documented and accepted.

- Content complete, edited, legally/operationally approved, and free of
  placeholders or unsupported claims.

- Responsive design and components implemented against the approved
  design system.

- Accessibility, performance, security, SEO, privacy, browser/device,
  form, analytics, and content QA passed.

- Redirects, sitemap, DNS, TLS, monitoring, backups, rollback, and
  launch communications ready.

- CMS training, editorial guide, admin access, code/documentation, and
  support ownership handed over.

- Post-launch stabilisation period and optimisation reporting cadence
  agreed.

# 17. Prioritisation and Release Scope

| **Priority**                    | **Included**                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Must have                       | Approved sitemap and legacy cross-walk; responsive design system; About, Our Work, Impact, Insights, Get Involved, Partner, Contact, and legal routes; CPI4CG and AYEDE pages; controlled IICARE status; team and partners; verified metrics; headless CMS; forms; migration; redirects; SEO; accessibility; performance; security; analytics; training and handover. |
| Should have                     | Impact methodology/reporting modules; location/map with accessible alternative; newsletter or interest capture; advanced filters; editorial reminders; automated opportunity expiry; richer related content; media factsheet.                                                                                                                                         |
| Could have                      | Online sponsorship/donation after separate approval; interactive data visualisations; campaign landing-page builder; multilingual content; partner portal discovery; applicant-system integration.                                                                                                                                                                    |
| Will not have at initial launch | Custom mobile app; full CRM/grant platform; complex climate-data platform; authenticated partner portal; unapproved payments; unrestricted page builder.                                                                                                                                                                                                              |

## 17.1 Recommended launch content pack

| **Content group** | **Minimum launch requirement**                                                                                                                                                             |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Institution       | Approved About, vision, mission, why, Theory of Change, four pillars, values, team, advisory board, governance/contact facts.                                                              |
| Work              | CPI4CG and AYEDE complete; IICARE approved status; programme register; geography; framework alignment; relevant partner and publication links.                                             |
| Impact            | Verified homepage metrics and impact page; source/period/methodology; at least two evidence-backed outcome stories or learning examples where available.                                   |
| Insights          | Enough current, dated content to avoid an empty hub: recommended minimum six strong items across policy/research, community/youth stories, and programme updates.                          |
| Partners          | Approved partner list and logos/names, relationship categories, usage rights, and at least one meaningful partnership example if available.                                                |
| Engagement        | Partnership, contact, opportunity, volunteer/research interest routes; form owners, privacy, confirmations, and response process.                                                          |
| Trust and legal   | Registration details where approved; privacy, terms, accessibility, safeguarding, cookie approach, and annual/policy documents available at launch or on an approved publication schedule. |

# 18. Risks, Dependencies, and Mitigations

| **ID** | **Risk / dependency**                                                                 | **Impact** | **Mitigation**                                                                                                     |
|--------|---------------------------------------------------------------------------------------|------------|--------------------------------------------------------------------------------------------------------------------|
| R1     | Current WordPress site has not yet been fully crawled or exported.                    | High       | Secure access, crawl before design freeze, maintain signed inventory, test redirects, and retain rollback/archive. |
| R2     | Public impact claims are not yet linked to sources and reporting periods.             | High       | Metric evidence register; named approval owner; CMS validation; no placeholder or unsupported counters.            |
| R3     | IICARE and other content gaps remain incomplete.                                      | High       | Content deadline and owner; controlled status; remove empty templates from launch scope.                           |
| R4     | Domain, official email, DNS, and sender authentication may be inconsistent.           | High       | Approve digital identity; configure domain, redirects, SPF, DKIM, DMARC, TLS, and ownership documentation.         |
| R5     | React is implemented as a client-only SPA.                                            | High       | Use server rendering/static generation; validate rendered HTML, metadata, speed, and progressive enhancement.      |
| R6     | Weak CMS workflow creates developer dependency.                                       | High       | Select CMS through editor testing; enforce structured models, preview, roles, backups, export, and training.       |
| R7     | Partner logos, photos, stories, or locations lack permission or safeguarding review.  | High       | Rights/consent register; safe-location rules; approval fields; remove unapproved assets.                           |
| R8     | Scope expands into donation, CRM, applicant tracking, multilingual, or data products. | Medium     | MoSCoW priorities, separate product briefs, change impact assessment, and product-owner approval.                  |
| R9     | Heavy design and third-party scripts harm mobile experience.                          | Medium     | Page budgets, image/video optimisation, script review, lazy loading, and real-device testing.                      |
| R10    | Forms have unclear recipients or fail silently.                                       | High       | Owner and escalation per form; monitored server-side delivery; confirmation; test schedule; fallback contact.      |
| R11    | Content becomes stale after launch.                                                   | Medium     | Owner and review date per item; dashboard; reminders; archive rules; quarterly editorial review.                   |

# 19. Delivery Approach and High-Level Milestones

| **Phase** | **Workstream**           | **Main activities**                                                                                                                          | **Exit criterion**                                   |
|-----------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| 0         | Access and alignment     | Confirm sponsor, product owner, goals, primary conversions, budget/window, delivery team, technical ownership, access, and decision log.     | Approved discovery brief and ownership.              |
| 1         | Audit and baseline       | Crawl/export WordPress; analytics, SEO, content, media, accessibility, performance, security, hosting, DNS, forms, and integration audit.    | Signed inventory, risks, baselines, and updated PRD. |
| 2         | IA and content           | Approve navigation cross-walk, sitemap, content models, page briefs, evidence register, content owners, gaps, and migration plan.            | Approved sitemap and content plan.                   |
| 3         | UX and visual design     | Wireframes, content prototypes, design system, responsive key templates, usability and accessibility review.                                 | Approved prototype and design system.                |
| 4         | Engineering and CMS      | Set up environments, frontend, CMS schemas, components, search, forms, analytics, integrations, tests, preview and deployment.               | Feature-complete staging site.                       |
| 5         | Migration and QA         | Clean/import content and media; redirects; content, accessibility, functional, performance, security, SEO, browser/device, and analytics QA. | UAT sign-off and launch checklist.                   |
| 6         | Launch and stabilisation | DNS/deploy, monitor, fix critical issues, verify forms/indexing/analytics, train editors, and maintain rollback.                             | Stable production and handover.                      |
| 7         | Optimisation             | Monthly reporting, search/content improvement, conversion testing, accessibility regression, and backlog releases.                           | Quarterly improvement cycle.                         |

# 20. Open Decisions for Stakeholder Review

| **ID** | **Decision required**                                                                          | **Recommended starting position**                                                                                                           | **Owner**                       |
|--------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| Q1     | What action should dominate the homepage?                                                      | Partner With Us as primary; Support Community Climate Action secondary only after destination/compliance approval.                          | Leadership / product            |
| Q2     | Is “Support Community Climate Action” a donation, sponsorship, partnership, or campaign route? | Treat as non-payment partnership/funding inquiry until finance/legal approval.                                                              | Leadership / finance / legal    |
| Q3     | What is the final IICARE scope and status?                                                     | Complete brief before launch or publish a controlled in-development reference.                                                              | Programme lead                  |
| Q4     | Which impact numbers are approved for public use?                                              | Publish only values with source, geography, reporting period, methodology, and approval owner.                                              | MERL / leadership               |
| Q5     | What is the official domain and email identity?                                                | Choose one canonical identity; redirect alternatives and authenticate official sending domain.                                              | Leadership / IT                 |
| Q6     | Which governance, registration, annual, safeguarding, and financial documents may be public?   | Publish the strongest appropriate transparency pack that has formal approval.                                                               | Leadership / operations         |
| Q7     | Which headless CMS and hosting model fit budget and staff capacity?                            | Run editor and engineering evaluation against CMS-01 to CMS-09; avoid selection by developer familiarity alone.                             | Product / engineering / editors |
| Q8     | Who owns each form and response-time expectation?                                              | Named primary and backup owner; monitored delivery; internal service-level target.                                                          | Operations                      |
| Q9     | What original photography/video can be used?                                                   | Prioritise authentic approved assets; commission a focused shoot if gaps weaken key pages.                                                  | Communications / design         |
| Q10    | Does the redesign include a light brand refresh?                                               | Use the supplied/new logo as the starting point; approve palette, typography, image direction, and usage rules before high-fidelity design. | Leadership / design             |
| Q11    | Is English-only acceptable at launch?                                                          | English first with translation-ready architecture; add languages only with content ownership and quality review.                            | Leadership / community          |
| Q12    | What are the approved budget, launch window, and maintenance model?                            | Agree before engineering estimate and release commitment.                                                                                   | Sponsor / product owner         |

# 21. Traceability Starter Matrix

| **Goal**                         | **Persona / journey** | **Requirements**                                    | **Acceptance**                    | **Primary metric**                                                             |
|----------------------------------|-----------------------|-----------------------------------------------------|-----------------------------------|--------------------------------------------------------------------------------|
| G1 - Funding readiness           | P1 / J1               | FR-06, FR-07, FR-10, FR-11, FR-13, FR-18            | AC-04, AC-07, AC-10               | Qualified partnership inquiries; capability/report downloads.                  |
| G2 - Programme visibility        | P2, P4 / J2, J3       | FR-05, FR-06, FR-12, FR-16                          | AC-05, AC-06, AC-11               | Programme engagement; apply and partner CTA clicks.                            |
| G3 - Evidence and policy value   | P3 / J4               | FR-07, FR-08, FR-09, FR-18                          | AC-07, AC-12                      | Publication views/downloads; impact interactions; citations/referrals.         |
| G4 - Community credibility       | P5 / J5               | FR-06, FR-07, FR-15, FR-17                          | AC-05, AC-08                      | Community/grassroots inquiries; consent-safe local evidence use.               |
| G5 - Editorial independence      | P7 / J6               | FR-04, FR-21; CMS-01 to CMS-09                      | AC-09                             | Publishing turnaround; freshness; publishing errors.                           |
| G6 - Discoverability and quality | All                   | FR-01, FR-03, FR-19, FR-20, FR-22; NFR-01 to NFR-12 | AC-01, AC-02, AC-03, AC-08, AC-12 | Organic/international traffic; search success; Core Web Vitals; accessibility. |

# Appendix A. Validated SPiD Content Summary

| **Area**           | **Validated direction**                                                                                                                        |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Homepage headline  | Locally Led. Youth Driven. Climate Resilient.                                                                                                  |
| Homepage promise   | Build climate resilience across Africa through participatory development, inclusive leadership, and community-driven sustainability solutions. |
| Primary CTA        | Partner With Us.                                                                                                                               |
| Secondary CTA      | Support Community Climate Action - destination requires approval.                                                                              |
| What SPiD does     | Build climate leadership; co-create local solutions; influence policy and governance; strengthen green livelihoods.                            |
| Core values        | Participation; equity and justice; sustainability; transparency and accountability; innovation; collaboration.                                 |
| Priority groups    | Communities, youth, women, and marginalised or underrepresented groups as co-creators and leaders.                                             |
| Main initiatives   | CPI4CG; AYEDE 4 Climate Action Fellowship; IICARE.                                                                                             |
| Engagement options | Partner; fund a programme; volunteer expertise; sponsor youth leaders; collaborate on research.                                                |
| Contact direction  | info@spidinitiative.org; Nigeria, working across Africa - both require final identity/contact validation.                                      |

# Appendix B. Recommended Immediate Discovery Pack

- WordPress admin/export access, full crawl, sitemap, analytics, Search
  Console, forms, plugins, hosting, DNS, and current-domain records.

- Approved logo package, brand references, photo/video library, media
  rights, consent records, social links, and official contact details.

- Programme register with status, owners, dates, geography,
  budgets/funding needs, evidence, outputs, outcomes, partners,
  frameworks, and publications.

- Impact evidence register for every public number and claim, including
  source, methodology, reporting period, geography, limitations, and
  approver.

- Team and advisory biographies/photos; partner list/logos; consented
  testimonials; at least six launch-ready insights; governance/legal
  documents.

- Form map with purpose, fields, recipients, backups, retention, privacy
  basis, confirmation, response-time target, and failure escalation.

- Budget, target launch window, delivery roles, CMS/hosting constraints,
  maintenance owner, training plan, and change-control process.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Recommended next revision<br />
</strong>Version 0.3 should incorporate the complete WordPress
inventory, approved navigation cross-walk, analytics baseline, evidence
register, final programme content, official brand/contact identity, CMS
and hosting decision, delivery estimate, and prioritised launch
backlog.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
