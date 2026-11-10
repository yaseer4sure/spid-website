import type { PublicPartner } from "@/sanity/fallback";

/**
 * Project-owner approved partner marks supplied for public display. These local
 * records do not weaken the Sanity query's approval checks for future records.
 */
export const ownerApprovedPartners: PublicPartner[] = [
  {
    _id: "owner-partner-bridge-connect",
    name: "Bridge Connect Africa Initiative",
    partnerType: ["Community-based organisation"],
    logoUrl: "/images/partners/Bridge Connect.png",
    featured: true,
    displayOrder: 1,
  },
  {
    _id: "owner-partner-casdi",
    name: "CASDI",
    partnerType: ["Climate and development organisation"],
    logoUrl: "/images/partners/CASDI.jpeg",
    featured: true,
    displayOrder: 2,
  },
  {
    _id: "owner-partner-ecocykle",
    name: "Ecocykle Development Foundation",
    partnerType: ["Climate and development organisation"],
    logoUrl: "/images/partners/Ecocykle.png",
    featured: true,
    displayOrder: 3,
  },
  {
    _id: "owner-partner-fam",
    name: "FAM Initiative",
    partnerType: ["Community-based organisation"],
    logoUrl: "/images/partners/Fam Initiative.jpg",
    featured: true,
    displayOrder: 4,
  },
  {
    _id: "owner-partner-lcoy",
    name: "LCOY Nigeria",
    partnerType: ["Youth climate organisation"],
    logoUrl: "/images/partners/LCOY-nigeria.png",
    featured: true,
    displayOrder: 5,
  },
  {
    _id: "owner-partner-environment",
    name: "Ministry of Environment",
    partnerType: ["Government agency"],
    logoUrl: "/images/partners/Ministry of environment.jpg",
    featured: true,
    displayOrder: 6,
  },
  {
    _id: "owner-partner-nest-africa",
    name: "Nest Africa AI Innovation Lab",
    partnerType: ["Technical organisation"],
    logoUrl: "/images/partners/Nest Africa.jpg",
    featured: true,
    displayOrder: 7,
  },
  {
    _id: "owner-partner-plogging-abu",
    name: "Plogging Club ABU",
    partnerType: ["Youth climate organisation"],
    logoUrl: "/images/partners/Ploggin Club ABU.jpg",
    featured: true,
    displayOrder: 8,
  },
  {
    _id: "owner-partner-life-we-deserve",
    name: "The Life We Deserve",
    partnerType: ["Community-based organisation"],
    logoUrl: "/images/partners/The Life We deserve.png",
    featured: true,
    displayOrder: 9,
  },
  {
    _id: "owner-partner-yandytech",
    name: "YandyTech",
    partnerType: ["Private sector actor"],
    logoUrl: "/images/partners/yandytech.png",
    featured: true,
    displayOrder: 10,
  },
];

export function mergeApprovedPartners(cmsPartners: PublicPartner[]) {
  const localNames = new Set(
    ownerApprovedPartners.map((partner) => partner.name.toLowerCase()),
  );
  return [
    ...ownerApprovedPartners,
    ...cmsPartners.filter(
      (partner) => !localNames.has(partner.name.toLowerCase()),
    ),
  ];
}
