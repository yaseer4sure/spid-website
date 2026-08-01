import type { StructureBuilder, StructureResolver } from "sanity/structure";

export const singletonTypes = new Set([
  "siteSettings",
  "navigation",
  "footer",
  "homepage",
  "contactSettings",
]);
export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);

const singleton = (
  S: StructureBuilder,
  title: string,
  schemaType: string,
  documentId: string,
) =>
  S.listItem()
    .title(title)
    .id(documentId)
    .child(S.document().schemaType(schemaType).documentId(documentId));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("SPiD Content")
    .items([
      S.listItem()
        .title("Website")
        .child(
          S.list()
            .title("Website")
            .items([
              singleton(S, "Site Settings", "siteSettings", "siteSettings"),
              singleton(S, "Navigation", "navigation", "mainNavigation"),
              singleton(S, "Footer", "footer", "siteFooter"),
              singleton(S, "Homepage", "homepage", "homepage"),
              singleton(
                S,
                "Contact Settings",
                "contactSettings",
                "contactSettings",
              ),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem("page").title("Core Pages"),
      S.documentTypeListItem("programme").title("Our Work"),
      S.documentTypeListItem("insight").title("Insights"),
      S.listItem()
        .title("Evidence")
        .child(
          S.list()
            .title("Evidence")
            .items([
              S.documentListItem()
                .title("Verified metrics")
                .schemaType("impactMetric")
                .id("verified")
                .child(
                  S.documentList()
                    .title("Verified metrics")
                    .schemaType("impactMetric")
                    .filter(
                      '_type == "impactMetric" && verificationStatus == "verified"',
                    ),
                ),
              S.documentTypeListItem("impactMetric"),
              S.documentTypeListItem("resource"),
            ]),
        ),
      S.listItem()
        .title("People and Partners")
        .child(
          S.list()
            .title("People and Partners")
            .items([
              S.documentTypeListItem("person"),
              S.documentTypeListItem("partner"),
              S.documentTypeListItem("testimonial"),
            ]),
        ),
      S.documentTypeListItem("theme").title("Themes"),
    ]);
