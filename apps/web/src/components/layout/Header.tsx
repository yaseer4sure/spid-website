import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import { navItems } from "./navigation";

export function Header() {
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
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="button button-primary header-cta"
          href="/contact?type=partnership"
        >
          Partner With Us
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
