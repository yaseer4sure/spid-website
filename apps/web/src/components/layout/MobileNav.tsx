"use client";

import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "./navigation";
import { ActiveNavLink } from "./ActiveNavLink";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const first = panel.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <div className="mobile-nav">
      <button
        ref={button}
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div
          ref={panel}
          id="mobile-menu"
          className="mobile-panel"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <ActiveNavLink
              key={item.href}
              {...item}
              onNavigate={() => setOpen(false)}
            />
          ))}
          <Link
            className="button button-primary"
            href="/donate"
            onClick={() => setOpen(false)}
          >
            <HeartHandshake aria-hidden="true" /> Donate
          </Link>
        </div>
      )}
    </div>
  );
}
