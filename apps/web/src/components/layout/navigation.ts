export type NavigationItem = {
  label: string;
  href: string;
  visible?: boolean | null;
};

const homeItem = { label: "Home", href: "/" } as const;

export const navItems = [
  homeItem,
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Insights", href: "/insights" },
  { label: "Partners", href: "/partners" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Published CMS navigation is preferred, but Home is a required utility route.
 * Keep it first and deduplicate by destination so an editor-added Home entry
 * cannot create a second link.
 */
export function resolveNavigationItems(
  items?: ReadonlyArray<NavigationItem> | null,
) {
  const visibleItems = items
    ?.filter((item) => item.visible !== false)
    .map(({ label, href }) => ({ label, href }));
  const source = visibleItems?.length ? visibleItems : navItems;
  const seen = new Set<string>([homeItem.href]);

  return [
    homeItem,
    ...source.filter((item) => {
      if (seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    }),
  ];
}
