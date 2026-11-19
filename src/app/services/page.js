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
    tag: "START HERE",
    title: "Phase 1: Workflow & QuickBooks Audit",
    price: "$750",
    note: "100% credited toward full implementation",
    featured: false,
    items: [
      "90-minute deep-dive diagnostic of your current estimating, filing, field photo, and billing process",
      "QuickBooks Online ledger & workflow readiness check",
      "Custom 1-page Bid-to-Cash automation blueprint with clear ROI breakdown",
    ],
  },
  {
    tag: "MOST POPULAR",
    title: "Phase 2: Full System Implementation",
    price: "$8,500 – $12,500",
    note: "Typically $9,500 one-time | 50% upfront, 50% at Go-Live",
    featured: true,
    items: [
      "Custom operations hub with separate, easy-to-use views for Owners, Estimators, Office Staff, and Field Foremen",
      "Automated branded PDF proposals, Change Orders, and BoldSign eSignature routing",
      "Standardized Google Drive folder architecture & field photo/receipt sorting",
      "Two-way QuickBooks Online customer, deposit, and final invoice integration",
      "Hands-on team onboarding & training",
    ],
  },
  {
    tag: "ONGOING PEACE OF MIND",
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
    body: "Automatically send every new lead from your website, Google Local Services, Yelp, Thumbtack, and phone calls straight into your job pipeline so no bid opportunity slips through the cracks.",
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
        eyebrow="Services & Pricing"
        title="Clear, Practical Implementation"
        subhead="Start with a low-risk diagnostic audit, deploy a custom system built for your trade, and keep it running smoothly with ongoing support."
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.title}
              className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                phase.featured ? "border-amber ring-2 ring-amber/30" : "border-navy/10"
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
                <h3 className="text-xl font-bold text-navy">{addon.title}</h3>
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
