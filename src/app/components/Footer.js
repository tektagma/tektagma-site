import Link from "next/link";
import BrandLockup from "./BrandLockup";
import { NAV_LINKS, PRODUCT_LINKS, SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-1">
          <BrandLockup variant="light" />
          <p className="max-w-sm text-sm leading-6 text-white/75">{SITE.footerTagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            Navigate
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white hover:underline underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Products">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            Products
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            {PRODUCT_LINKS.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline underline-offset-4"
                  >
                    {item.label === "CryptoLivePulse" ? "CryptoLivePulse.com" : item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="hover:text-white hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            Service area
          </p>
          <p className="text-sm leading-6 text-white/80">{SITE.serviceArea}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 inline-block text-sm font-medium text-amber hover:underline underline-offset-4"
          >
            {SITE.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/55">
        {SITE.copyright}
      </div>
    </footer>
  );
}
