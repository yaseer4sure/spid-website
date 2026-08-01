# SPiD Website Redesign and Development Project Brief

**Document:** `docs/00-PROJECT-BRIEF.md`  
**Project:** SPiD Climate Resilience Website Redesign  
**Organisation:** Sustainable Participatory Development and Climate Resilience Initiative (SPiD)  
**Version:** 1.0  
**Status:** Approved working brief  
**Primary development method:** Codex-assisted development  
**Target platform:** Next.js and Sanity  

---

## 1. Project Overview

The Sustainable Participatory Development and Climate Resilience Initiative, known as SPiD, is rebuilding its public website to create a modern, credible and internationally competitive digital platform.

The current WordPress website no longer adequately represents the organisation's mission, programmes, evidence, community reach or funding potential. The replacement website must communicate SPiD's work clearly to international development partners, donors, government institutions, researchers, young climate leaders and the communities it serves.

The new website will be built as a fresh headless platform rather than as a visual modification of the existing WordPress theme.

The existing WordPress website will remain live during development. Approved content will be reviewed and migrated into the new platform, while outdated, duplicated or weak content may be rewritten, combined, archived or removed.

## 2. Organisational Context

SPiD is a youth-led and community-driven organisation advancing locally rooted climate action across Nigeria and Africa.

Its work focuses on:

- Community-led research and knowledge exchange
- Capacity building and climate leadership
- Climate-resilient interventions
- Policy engagement and advocacy
- Nature-based solutions
- Climate-resilient agriculture
- Renewable energy and just transitions
- Water and ecosystem management
- Climate entrepreneurship and green livelihoods

SPiD's central positioning is:

> **Locally Led. Youth Driven. Climate Resilient.**

The organisation works to ensure that communities, particularly young people, women and marginalised groups, participate as leaders and co-creators of climate resilience and sustainable development rather than being treated only as beneficiaries.

## 3. Project Problem

The current website has several limitations:

- Its visual presentation appears outdated.
- The organisation's programmes and evidence are not presented with sufficient depth.
- The website does not yet project the institutional maturity expected by major funders and international partners.
- The navigation and content structure require clearer organisation.
- Programme, impact, research and partnership content are not managed through strong reusable content models.
- Calls to partner, fund, collaborate or support SPiD are not sufficiently prominent.
- Updating the website is too dependent on the limitations of the existing WordPress implementation.
- The website does not yet provide the editorial flexibility required for SPiD's future growth.

## 4. Project Vision

Create a modern African climate and development website that is community-rooted, evidence-led, accessible and internationally credible.

The platform should present SPiD as an organisation capable of:

- Managing serious climate and development programmes
- Producing credible research and policy evidence
- Building climate leadership
- Working with communities and institutions
- Managing partnerships and funding responsibly
- Communicating measurable impact
- Contributing to African and global climate discussions

The website should feel confident and contemporary without becoming a generic green NGO template.

## 5. Product Goals

The new website must:

1. Strengthen SPiD's credibility with donors, funders and development partners.
2. Explain SPiD's mission, approach and Theory of Change clearly.
3. Present programmes and projects through evidence-rich pages.
4. Demonstrate impact using verified figures, stories and publications.
5. Create visible pathways for partnership, funding, volunteering and research collaboration.
6. Make policy briefs, press releases, reports and insights easy to publish and discover.
7. Allow authorised SPiD staff to update content without editing code.
8. Perform well on mobile devices and slower internet connections.
9. Meet modern accessibility, search, security and performance standards.
10. Support the organisation's growth without requiring another complete rebuild.

## 6. Primary Audiences

### International donors and philanthropic organisations

They need to understand SPiD's credibility, focus areas, geographic reach, programme results, partnerships and funding opportunities.

### Development partners and civil-society organisations

They need to identify areas for programme collaboration, research, implementation and knowledge exchange.

### Government institutions and policymakers

They need access to community evidence, policy recommendations, programme information and collaboration channels.

### Researchers and academic institutions

They need to discover policy briefs, research findings, methodologies, programme evidence and partnership opportunities.

### Young climate leaders

They need to discover fellowships, programmes, learning opportunities, alumni stories and ways to participate.

### Communities and grassroots organisations

They need to understand how SPiD works with communities and how to request or participate in collaboration.

### Media professionals

They need access to press releases, approved organisational information, programme evidence and contact details.

## 7. Initial Programme Content

### Community-led Participatory Initiative for Climate Governance

CPI4CG will serve as the first full programme-page model. Its content includes the project purpose, pilot implementation, participatory methodology, milestones, expected outcomes, partnerships and alignment with national and international climate frameworks.

### AYEDE 4 Climate Action Fellowship

AYEDE will be presented as SPiD's flagship youth climate leadership programme. Its page will include the fellowship model, learning approach, participant profile, impact, alumni stories and partnership opportunities.

### IICARE

The Integrated Initiative for Climate Adaptation and Resilience Empowerment will be created as a CMS record but will remain unpublished until sufficient approved content is available.

## 8. Selected Technical Approach

The platform will use:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- A custom SPiD component and design system
- Sanity as the headless content-management system
- GitHub for source control
- Vercel for staging and production deployment

The website will use server-rendered or statically generated pages wherever appropriate. Client-side JavaScript will be limited to features that genuinely require interaction.

## 9. Delivery Approach

Development will follow a vertical-slice method.

The first complete journey will include:

1. Homepage
2. CPI4CG programme page
3. Related insight or policy brief
4. Get Involved page
5. Partnership or contact form

This first journey will validate the visual direction, content model, navigation, CMS editing, accessibility, responsiveness, forms, metadata and deployment process.

Once approved, the same system will be expanded across the remaining pages.

## 10. Initial Launch Scope

The first public release should contain:

- Homepage
- About SPiD
- Vision, mission and values
- Theory of Change
- How We Work
- Team and advisory board
- Our Work landing page
- CPI4CG
- AYEDE 4 Climate Action
- Impact
- Insights
- Policy briefs
- Press releases
- Partners
- Get Involved
- Contact
- Privacy Policy
- Terms and Conditions
- Sitemap
- Custom error pages

## 11. Content Principles

All published content must be:

- Accurate
- Approved
- Clearly written
- Current
- Accessible
- Supported by evidence where claims are made
- Suitable for an international audience
- Respectful of communities and programme participants

Impact figures must include a reporting period, geography and internal source or responsible owner.

Codex must not invent missing programme information, impact figures, partnerships, quotations, testimonials or institutional claims.

Incomplete content should remain in draft, use an explicitly approved placeholder or be omitted until it is ready.

## 12. Design Principles

The website should be:

- Modern but not fashionable for fashion's sake
- African in context without relying on decorative stereotypes
- Community-centred
- Evidence-led
- Human and hopeful
- Easy to navigate
- Visually strong without becoming heavy
- Accessible on mobile devices
- Efficient on slower internet connections
- Suitable for funders, institutions and community audiences

Real SPiD photography should be prioritised over generic stock photography.

Animation should be restrained and should never interfere with accessibility, readability or performance.

## 13. Migration Principles

The project will use a curated migration rather than an automatic copy of the existing WordPress website.

Every existing page or content item will be classified as:

- Migrate
- Rewrite
- Merge
- Archive
- Remove
- Redirect

Existing URLs with meaningful traffic or external references must be preserved or permanently redirected.

The current WordPress website must not be taken offline until the replacement has passed content, accessibility, technical and stakeholder review.

## 14. Success Indicators

The website will be considered successful when:

- Visitors can understand SPiD's mission and focus within the first homepage view.
- Funders and partners can quickly find programme evidence and partnership pathways.
- SPiD staff can publish and update content without editing source code.
- Core pages work correctly across mobile, tablet and desktop devices.
- Programme and insight pages are discoverable through search engines.
- All published impact claims are verified.
- Forms are reliable and protected from spam.
- Important WordPress URLs are properly redirected.
- The platform meets agreed accessibility and performance standards.
- New programmes and content types can be added without redesigning the whole website.

## 15. Project Constraints

- Some organisational content is still incomplete.
- Some programme, team, partner and impact information will be updated during development.
- Final photographs and brand assets may not all be available at the beginning.
- WordPress content must be audited before migration.
- Unsupported information must not be published merely to fill a page.
- The project should avoid unnecessary technical complexity and long-term vendor dependence.

## 16. Out of Scope for the Initial Release

The following may be introduced after launch:

- Interactive impact dashboard
- Advanced geographic project map
- Multilingual publishing
- Full fellowship application portal
- Private partner dashboard
- Donation payment processing
- Volunteer account system
- Advanced learning-management features
- Large historical publication archive
- Complex user accounts
- Native mobile application

The architecture should not prevent these future additions, but they are not part of the initial launch commitment.

## 17. Definition of Project Completion

The initial project will be considered complete when:

- The approved MVP pages are live.
- The CMS is operational.
- SPiD staff have received editorial guidance.
- Forms and integrations work correctly.
- Approved WordPress content has been migrated.
- Required redirects have been tested.
- Accessibility and performance checks have been completed.
- Analytics and search configuration are active.
- A rollback and backup process exists.
- The production domain points to the approved website.
