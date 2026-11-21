"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandLockup from "./BrandLockup";
import { NAV_LINKS, PRODUCT_LINKS, btnPrimary } from "../lib/site";

function ProductItems({ onNavigate, itemClassName, descriptionClassName }) {
  return PRODUCT_LINKS.map((item) => {
    const shared = itemClassName;
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={shared}
          onClick={onNavigate}
        >
          <span className="font-semibold">{item.label}</span>
          <span className={descriptionClassName}>{item.description}</span>
        </a>
      );
    }
    return (
      <Link key={item.href} href={item.href} className={shared} onClick={onNavigate}>
        <span className="font-semibold">{item.label}</span>
        <span className={descriptionClassName}>{item.description}</span>
      </Link>
    );
  });
}

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onPointerDown(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    }
    function onKeyDown(event) {
      if (event.key === "Escape") setProductsOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const productsActive = pathname.startsWith("/construction") || pathname.startsWith("/system");

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-navy">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0" aria-label="TekTagma home">
          <BrandLockup variant="light" />
        </Link>

        <ul className="hidden items-center gap-5 text-sm font-medium text-white/80 xl:gap-6 lg:flex">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`whitespace-nowrap transition hover:text-white ${
                  isActive(link.href) ? "text-white underline decoration-amber underline-offset-8" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 whitespace-nowrap transition hover:text-white ${
                productsActive ? "text-white underline decoration-amber underline-offset-8" : ""
              }`}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              aria-controls="products-menu"
              onClick={() => setProductsOpen((open) => !open)}
            >
              Products
              <svg
                viewBox="0 0 12 8"
                aria-hidden="true"
                className={`h-2.5 w-2.5 transition ${productsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1.4 1.6 6 6.2 10.6 1.6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {productsOpen ? (
              <div
                id="products-menu"
                role="menu"
                className="absolute left-0 top-full z-50 w-[22rem] pt-3"
              >
                <div className="rounded-2xl border border-white/10 bg-navy p-2 shadow-2xl">
                  <ProductItems
                    onNavigate={() => setProductsOpen(false)}
                    itemClassName="flex flex-col gap-1 rounded-xl px-4 py-3 text-white transition hover:bg-white/10"
                    descriptionClassName="text-sm font-normal leading-5 text-white/65"
                  />
                </div>
              </div>
            ) : null}
          </li>
          {NAV_LINKS.slice(2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`whitespace-nowrap transition hover:text-white ${
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
            {NAV_LINKS.slice(0, 2).map((link) => (
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
            <li>
              <button
                type="button"
                className={`inline-flex items-center gap-2 ${productsActive ? "text-amber" : "hover:text-amber"}`}
                aria-expanded={mobileProductsOpen}
                onClick={() => setMobileProductsOpen((open) => !open)}
              >
                Products
                <svg
                  viewBox="0 0 12 8"
                  aria-hidden="true"
                  className={`h-2.5 w-2.5 transition ${mobileProductsOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M1.4 1.6 6 6.2 10.6 1.6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {mobileProductsOpen ? (
                <div className="mt-4 flex flex-col gap-3 border-l border-white/15 pl-4 text-base font-normal">
                  <ProductItems
                    onNavigate={() => setMenuOpen(false)}
                    itemClassName="flex flex-col gap-1 text-white/90 hover:text-amber"
                    descriptionClassName="text-sm text-white/60"
                  />
                </div>
              ) : null}
            </li>
            {NAV_LINKS.slice(2).map((link) => (
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
