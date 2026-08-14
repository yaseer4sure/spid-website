import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "homepage"][0]{
  headline,subheadline,primaryAction{label,href,style},secondaryAction{label,href,style},
  "featuredProgrammes":featuredProgrammes[]->[!(_id in path("drafts.**")) && status != "draftDevelopment"]{_id,title,acronym,"slug":slug.current,summary,status},
  "featuredInsight":featuredInsight->[!(_id in path("drafts.**"))][0]{_id,title,"slug":slug.current,summary,contentType,publishedAt,seo{noIndex}},
  "impactMetrics":impactMetrics[]->[!(_id in path("drafts.**")) && isPublic == true && verificationStatus == "verified"]{_id,numericValue,displayValueOverride,label,publicContext}
}`);
export const PROGRAMME_BY_SLUG_QUERY =
  defineQuery(`*[_type=="programme"&&slug.current==$slug&&!(_id in path("drafts.**"))&&status!="draftDevelopment"][0]{
  _id,title,acronym,"slug":slug.current,summary,status,overview,whyItMatters,locations,methodologySteps,milestones,expectedOutcomes,frameworkAlignments,primaryAction,
  "impactMetrics":impactMetrics[]->[!(_id in path("drafts.**"))&&isPublic==true&&verificationStatus=="verified"]{_id,numericValue,displayValueOverride,label,publicContext},
  "relatedInsights":relatedInsights[]->[!(_id in path("drafts.**"))]{_id,title,"slug":slug.current,summary,contentType,publishedAt,seo{noIndex}}
}`);
export const INSIGHT_BY_SLUG_QUERY =
  defineQuery(`*[_type=="insight"&&slug.current==$slug&&!(_id in path("drafts.**"))][0]{
  _id,title,"slug":slug.current,summary,contentType,publishedAt,organisationAuthor,body,seo,
  "relatedProgrammes":relatedProgrammes[]->[!(_id in path("drafts.**"))&&status!="draftDevelopment"]{_id,title,acronym,"slug":slug.current,summary,status}
}`);
export const SITEMAP_QUERY = defineQuery(`{
  "programmes":*[_type=="programme"&&!(_id in path("drafts.**"))&&status!="draftDevelopment"]{"slug":slug.current,_updatedAt},
  "insights":*[_type=="insight"&&!(_id in path("drafts.**"))&&seo.noIndex!=true]{"slug":slug.current,_updatedAt}
}`);
