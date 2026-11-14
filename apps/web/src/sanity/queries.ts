import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "homepage"][0]{
  headline,subheadline,valueProposition,workPillars[]{title,description},values[]{title,description},primaryAction{label,href,style},secondaryAction{label,href,style},
  "featuredProgrammes":(featuredProgrammes[]->)[($includeDrafts == true || !(_id in path("drafts.**"))) && status != "draftDevelopment"]{_id,title,acronym,"slug":slug.current,summary,status},
  "featuredInsight":([featuredInsight->])[($includeDrafts == true || !(_id in path("drafts.**")))][0]{_id,title,"slug":slug.current,summary,contentType,publishedAt,seo{noIndex}},
  "impactMetrics":(impactMetrics[]->)[($includeDrafts == true || !(_id in path("drafts.**"))) && isPublic == true && verificationStatus == "verified"]{_id,numericValue,displayValueOverride,label,publicContext},
  "partners":(partners[]->)[($includeDrafts == true || !(_id in path("drafts.**"))) && isPublic == true && approvalStatus == "approved" && relationshipStatus in ["active", "completed"] && featured == true && defined(logo.asset)]{_id,name,partnerType,summary,relationshipSummary,website,featured,displayOrder,"logoUrl":logo.asset->url}
}`);
export const SITE_SETTINGS_QUERY = defineQuery(`{
  "settings":*[_id == "siteSettings"][0]{socialLinks[]{platform,url},officeAddress},
  "navigation":*[_id == "mainNavigation"][0]{items[]{label,href,visible},primaryAction{label,href,style}},
  "footer":*[_id == "siteFooter"][0]{positioningStatement,copyrightText}
}`);
export const ABOUT_PAGE_QUERY = defineQuery(`{
  "page":*[_type == "page" && pageKey == "about" && ($includeDrafts == true || !(_id in path("drafts.**")))][0]{
    title,summary,eyebrow,introductionParagraphs,vision,mission,whyParagraphs,theoryOfChange,
    approaches[]{title,description},frameworks
  },
  "people":*[_type == "person" && isPublic == true && ($includeDrafts == true || !(_id in path("drafts.**")))] | order(displayOrder asc, fullName asc){
    _id,fullName,roleTitle,personType,"portraitUrl":portrait.asset->url
  }
}`);
export const CORE_PAGE_QUERY =
  defineQuery(`*[_type == "page" && pageKey == $pageKey && ($includeDrafts == true || !(_id in path("drafts.**")))][0]{
  title,summary,eyebrow,introductionParagraphs,listItems
}`);
export const CONTACT_SETTINGS_QUERY =
  defineQuery(`*[_id == "contactSettings"][0]{
  pageHeading,pageIntroduction,locationStatement,successHeading,successMessage,failureMessage
}`);
export const PUBLIC_PARTNERS_QUERY = defineQuery(`*[
  _type == "partner" &&
  ($includeDrafts == true || !(_id in path("drafts.**"))) &&
  isPublic == true &&
  approvalStatus == "approved" &&
  relationshipStatus in ["active", "completed"] &&
  defined(logo.asset)
] | order(displayOrder asc, name asc){
  _id,name,partnerType,summary,relationshipSummary,website,featured,displayOrder,
  "logoUrl":logo.asset->url
}`);
export const PROGRAMME_BY_SLUG_QUERY =
  defineQuery(`*[_type=="programme"&&slug.current==$slug&&($includeDrafts==true||!(_id in path("drafts.**")))&&status!="draftDevelopment"][0]{
  _id,title,acronym,"slug":slug.current,summary,status,tagline,"overviewText":overview[_type == "block"].children[].text,"whyItMattersText":whyItMatters[_type == "block"].children[].text,locations,methodologySteps,milestones,expectedOutcomes,frameworkAlignments,primaryAction,
  "impactMetrics":(impactMetrics[]->)[($includeDrafts==true||!(_id in path("drafts.**")))&&isPublic==true&&verificationStatus=="verified"]{_id,numericValue,displayValueOverride,label,publicContext},
  "relatedInsights":(relatedInsights[]->)[($includeDrafts==true||!(_id in path("drafts.**")))]{_id,title,"slug":slug.current,summary,contentType,publishedAt,seo{noIndex}}
}`);
export const INSIGHT_BY_SLUG_QUERY =
  defineQuery(`*[_type=="insight"&&slug.current==$slug&&($includeDrafts==true||!(_id in path("drafts.**")))][0]{
  _id,title,"slug":slug.current,summary,contentType,publishedAt,organisationAuthor,body,seo,
  "relatedProgrammes":(relatedProgrammes[]->)[($includeDrafts==true||!(_id in path("drafts.**")))&&status!="draftDevelopment"]{_id,title,acronym,"slug":slug.current,summary,status}
}`);
export const SITEMAP_QUERY = defineQuery(`{
  "programmes":*[_type=="programme"&&!(_id in path("drafts.**"))&&status!="draftDevelopment"]{"slug":slug.current,_updatedAt},
  "insights":*[_type=="insight"&&!(_id in path("drafts.**"))&&seo.noIndex!=true]{"slug":slug.current,_updatedAt}
}`);
