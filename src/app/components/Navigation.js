"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLockup from "./BrandLockup";
import { NAV_LINKS, btnPrimary } from "../lib/site";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-navy">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0" aria-label="TekTagma home">
          <BrandLockup variant="light" />
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition hover:text-white ${
                  isActive(link.href) ? "text-white underline decoration-amber underline-offset-8" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className={`${btnPrimary} px-5 py-2.5`}>
            Book a Workflow Call
          </Link>
        </div>

        <button
          className="flex flex-col gap-[5px] rounded-md p-2 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className={`block h-[2px] w-6 bg-white transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-navy px-6 py-8 lg:hidden"
        >
          <ul className="flex flex-col gap-5 text-lg font-medium text-white">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? "text-amber" : "hover:text-amber"}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`${btnPrimary} mt-8 w-full`}
            onClick={() => setMenuOpen(false)}
          >
            Book a Workflow Call
          </Link>
        </div>
      ) : null}
    </header>
  );
}
