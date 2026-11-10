"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveNavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      data-active={active || undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
