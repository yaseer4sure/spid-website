import Link from "next/link";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { navItems as fallbackNavItems } from "./navigation";
import { ActiveNavLink } from "./ActiveNavLink";

type NavigationItem = { label: string; href: string };

export function Header({
  items = fallbackNavItems,
}: {
  items?: ReadonlyArray<NavigationItem>;
}) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="SPiD home">
          <Image
            className="brand-logo"
            src="/brand/NEW LOGO SPID_043453 (1).png"
            width={2481}
            height={790}
            priority
            alt="SPiD"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {items.map((item) => (
            <ActiveNavLink key={item.href} {...item} />
          ))}
        </nav>
        <Link className="button button-primary header-cta" href="/donate">
          <HeartHandshake aria-hidden="true" /> Donate
        </Link>
        <MobileNav items={items} />
      </div>
    </header>
  );
}
