import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { btnPrimary } from "../lib/site";

export const metadata = {
  title: "Services & Pricing",
  description:
    "Start with a low-risk diagnostic audit, deploy a custom bid-to-cash system, and keep it running with ongoing support.",
};

const phases = [
  {
    tag: "STEP 1 • START HERE",
    title: "Phase 1: Workflow & QuickBooks Audit",
    price: "$750",
    note: "100% credited toward full implementation",
    featured: true,
    items: [
      "90-minute deep-dive diagnostic of your current estimating, filing, field photo, and billing process",
      "QuickBooks Online ledger & workflow readiness check",
      "Custom 1-page Bid-to-Cash automation blueprint with clear ROI breakdown",
    ],
  },
  {
    tag: "STEP 2 • CUSTOM BUILD",
    title: "Phase 2: Full System Implementation",
    price: "$8,500 – $12,500",
    note: "Typically $9,500 one-time | 50% upfront, 50% at Go-Live",
    featured: false,
    items: [
      "Custom operations hub with separate, easy-to-use views for Owners, Estimators, Office Staff, and Field Foremen",
      "Automated branded PDF proposals, Change Orders, and BoldSign eSignature routing",
      "Standardized Google Drive folder architecture & field photo/receipt sorting",
      "Two-way QuickBooks Online customer, deposit, and final invoice integration",
      "Hands-on team onboarding & training",
    ],
  },
  {
    tag: "STEP 3 • ONGOING SUPPORT",
    title: "Phase 3: Managed Automation & Monitoring",
    price: "$650 / month",
    note: "",
    featured: false,
    items: [
      "TekTagma-hosted automation engine with 24/7 error monitoring and automatic retries",
      "Proactive connection maintenance whenever QuickBooks, Google, or eSignature platforms update",
      "Up to 1 hour/month of minor workflow tweaks and field adjustments",
    ],
  },
];

const addons = [
  {
    title: "Multi-Channel Lead Capture",
    badge: "CUSTOM QUOTED",
    sublabel: "Custom Priced Based on Your Lead Sources",
    body: "Want new leads to create a job record and enter your automation pipeline automatically—without anyone typing them in? We can connect your website contact forms, Google Local Services, Yelp, Thumbtack, Angi, Houzz, Facebook/Instagram ads, inbound phone calls, and more. Because every contractor uses different lead platforms and intake rules, we leave this out of the base system so you never pay for bloated features you don’t need. Once we review how your leads come in, we’ll give you a clear custom quote based on the exact sources you want connected.",
  },
  {
    title: "Automatic Nightly Backups",
    body: "Scheduled nightly copies of all your job records, contracts, photos, and receipts saved to a separate cloud drive or local hard drive for total peace of mind.",
  },
  {
    title: "Custom Future Add-Ons (No Second Audit Fee)",
    body: "Need something extra as your business grows—like equipment tracking, crew scheduling, or subcontractor compliance? Once you are a client, you never have to pay another $750 audit fee. Just book a quick call, tell us what will make your job easier, and we will send you a clear flat price to build it.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services & Solutions"
        title="Clear, Practical Implementation"
        subhead="Start with a low-risk diagnostic audit, deploy a custom system built for your trade, and keep it running smoothly with ongoing support."
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.title}
              className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                phase.featured ? "border-amber/70 ring-1 ring-amber/20" : "border-navy/10"
              }`}
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
                {phase.tag}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy">{phase.title}</h2>
              <p className="mt-4 text-3xl font-bold text-navy">{phase.price}</p>
              {phase.note ? <p className="mt-2 text-sm text-muted">{phase.note}</p> : null}
              <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-muted">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mx-auto mt-12 max-w-6xl rounded-2xl border border-navy/10 bg-canvas px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            THE BOTTOM-LINE MATH
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Why $650/Month Pays for Itself
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Less Than Two Days of Office Payroll — Working for You 24/7
          </p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">
            Full-time office administration often runs $4,500–$6,000+ a month. Plenty of those hours still get lost to redundant data entry and invoicing—typing the same job into estimates, folders, and QuickBooks. At $650 a month, the retainer costs less than two days of that payroll, and it keeps working after the office is locked up.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy">Two-Person Office</h3>
              <p className="mt-3 leading-7 text-muted">
                If you have two people in the office, a connected system lets you streamline that admin load down to one. The thousands you save each month on a second admin salary can go back into the business—instead of redundant data entry.
              </p>
            </article>
            <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy">One-Person Office / Solo</h3>
              <p className="mt-3 leading-7 text-muted">
                If you are the office, or you have one admin doing everything, those hours spent re-typing invoices and chasing paper can go back to customer service, bid follow-ups, and sales.
              </p>
            </article>
          </div>
          <h3 className="mt-10 text-2xl font-bold tracking-tight text-navy">
            Eliminate the Hidden Cost of Human Mistakes
          </h3>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-muted">
            When office staff rush through repetitive typing, mistakes happen—a wrong address sends crews to the wrong job site, a forgotten email delays your payment, and late receipts upset clients. Our system eliminates those costly dropped balls so every proposal, folder, and invoice goes out accurate and on time.
          </p>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-muted">
            $650 a month buys a reliable 24/7 back-office system: deposits billed on time, change orders not forgotten, and job records you can actually find when you need them.
          </p>
        </section>

        <aside className="mx-auto mt-10 max-w-6xl rounded-2xl border border-amber/40 bg-navy px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            Data Security & U.S. Accountability
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Zero Offshore Outsourcing. Complete Financial & Data Confidentiality.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-white/80 sm:text-lg">
            Handing an outside consultant access to your QuickBooks ledger, proposals, and customer records requires complete trust. TekTagma is 100% U.S.-based and operates under full U.S. legal accountability—never cheap overseas freelancers. Backed by an active CA Class B license and prior state security clearance with ADT, your company’s financial data and job files remain strictly protected.
          </p>
        </aside>
      </section>

      <section className="border-t border-navy/10 bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Optional add-ons</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {addons.map((addon) => (
              <article key={addon.title} className="rounded-2xl border border-navy/10 bg-canvas p-6">
                {addon.badge ? (
                  <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
                    {addon.badge}
                  </p>
                ) : null}
                <h3 className={`${addon.badge ? "mt-3 " : ""}text-xl font-bold text-navy`}>
                  {addon.title}
                </h3>
                {addon.sublabel ? (
                  <p className="mt-1 text-sm font-medium text-navy">{addon.sublabel}</p>
                ) : null}
                <p className="mt-3 leading-7 text-muted">{addon.body}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className={`${btnPrimary} mt-12`}>
            Book a Workflow Call
          </Link>
        </div>
      </section>
    </main>
  );
}
