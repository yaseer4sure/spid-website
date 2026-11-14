import type { PublicPartner } from "@/sanity/fallback";
import { approvedPartnerManifest } from "./partnerManifest";

/**
 * Project-owner approved partner marks supplied for public display. These local
 * records do not weaken the Sanity query's approval checks for future records.
 */
export const ownerApprovedPartners: PublicPartner[] =
  approvedPartnerManifest.map(([id, name, partnerType, filename], index) => ({
    _id: `owner-partner-${id}`,
    name,
    partnerType: [partnerType],
    logoUrl: `/images/partners/${filename}`,
    featured: true,
    displayOrder: index + 1,
  }));

export function mergeApprovedPartners(cmsPartners: PublicPartner[]) {
  return cmsPartners.length > 0 ? cmsPartners : ownerApprovedPartners;
}
