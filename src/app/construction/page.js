import Link from "next/link";
import { btnPrimary, btnSecondaryOnDark } from "../lib/site";

export const metadata = {
  title: "Construction Bid-to-Cash System",
  description:
    "Custom bid-to-cash and field operations systems for construction, demolition, and specialty trade contractors.",
};

const trustItems = [
  "Active CA Class B General Contractor’s License",
  "100% Client Ownership of Data & Files",
  "Enterprise Automation Engine & QuickBooks Integration",
  "100% U.S.-Based & Background-Vetted",
];

const problems = [
  {
    title: "Delayed Deposits & Slow Billing",
    body: "Waiting days to type up estimates and manually re-enter invoices into QuickBooks slows down your cash flow.",
  },
  {
    title: "Unbilled Change Orders",
    body: "Verbal approvals in the field get forgotten before final billing, eating straight into your job profit.",
  },
  {
    title: "Scattered Photos & Compliance Risks",
    body: "Crew photos, permits, and dump receipts buried in text threads leave you exposed when inspectors or clients ask for proof months later.",
  },
  {
    title: "Bloated Software Lock-In",
    body: "Paying $1,000+/month for rigid construction platforms your field crew refuses to use.",
  },
  {
    title: "Costly Typos & Dropped Balls",
    body: "One mistyped address sends a crew to the wrong site, and one forgotten invoice email delays your payout or frustrates a good customer. Manual data entry isn't just slow—human mistakes quietly drain your profit.",
  },
];

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

const outcomes = [
  {
    title: "Instant Proposals & eSignatures",
    body: "Turn site-walk notes and photos into branded PDF proposals and send them for legally binding electronic signature. The second a client signs, the system automatically sends the QuickBooks deposit invoice.",
  },
  {
    title: "Automatic Job Folders & Compliance",
    body: "Every signed contract, change order, before/after crew photo, permit, and dump receipt is automatically sorted into standardized client folders and backed up.",
  },
  {
    title: "Automated QuickBooks Online Billing",
    body: "Automatically generate deposit invoices (including permit fees) and final balance invoices (with approved change orders) in QuickBooks without double data entry.",
  },
  {
    title: "Field-to-Office Visibility",
    body: "As soon as a deposit is paid, the job moves straight to permitting and scheduling and automatically creates the right task checklist for your workers based on the job type—all visible in clean mobile views.",
  },
];

export default function ConstructionPage() {
  return (
    <main>
      <section className="bg-navy px-6 pb-16 pt-32 text-white sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber uppercase">
            BUILT BY A LICENSED CLASS B CONTRACTOR & CONSTRUCTION EXECUTIVE
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Cut Your Office Paperwork in Half & Get Deposits Paid Faster
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
            Custom Bid-to-Cash and Field Operations systems built exclusively for construction, demolition, and specialty trade contractors. Connect estimating, eSignatures, field photos, compliance files, and QuickBooks—without paying thousands a month for bloated software lock-in.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Book a Free 15-Minute Workflow Call
            </Link>
            <Link href="/system" className={btnSecondaryOnDark}>
              See How the System Works
            </Link>
          </div>
          <ul className="mt-12 grid gap-3 border-t border-white/15 pt-8 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Stop Burning Payroll on Office Busywork
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            If you have two office employees, a connected system lets you cut that administrative workload down to one. If you run a one-person office—or you are the office—it takes the repetitive paperwork off your plate. Either way, those hours shift from re-typing invoices and shuffling files to customers, bid follow-ups, and winning work.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {problems.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-navy/10 bg-white p-6 shadow-sm ${
                  index < 3
                    ? "lg:col-span-2"
                    : index === 4
                      ? "sm:col-span-2 lg:col-span-3"
                      : "lg:col-span-3"
                }`}
              >
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-muted leading-7">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            One Connected Command Center From Site Walk to Final Check
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {outcomes.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-navy/10 bg-canvas p-6">
                <p className="text-xl font-bold text-amber">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-muted leading-7">{item.body}</p>
              </article>
            ))}
          </div>
          <Link href="/system" className={`${btnPrimary} mt-12`}>
            See the 5-Step Bid-to-Cash System
          </Link>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            CONSTRUCTION PRICING
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Bid-to-Cash Implementation Roadmap
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Built for Owners, Estimators, Office Staff, and Field Foremen—from the first job intake through crew scheduling and final billing.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
                <h3 className="mt-3 text-2xl font-bold text-navy">{phase.title}</h3>
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

          <section className="mt-12 rounded-2xl border border-navy/10 bg-canvas px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
              THE BOTTOM-LINE MATH
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why $650/Month Pays for Itself
            </h3>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              Less Than Two Days of Office Payroll — Working for You 24/7
            </p>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">
              Full-time office administration often runs $4,500–$6,000+ a month. Plenty of those hours still get lost to redundant data entry and invoicing—typing the same job into estimates, folders, and QuickBooks. At $650 a month, the retainer costs less than two days of that payroll, and it keeps working after the office is locked up.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-bold text-navy">Two-Person Office</h4>
                <p className="mt-3 leading-7 text-muted">
                  If you have two people in the office, a connected system lets you streamline that admin load down to one. The thousands you save each month on a second admin salary can go back into the business—instead of redundant data entry.
                </p>
              </article>
              <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-bold text-navy">One-Person Office / Solo</h4>
                <p className="mt-3 leading-7 text-muted">
                  If you are the office, or you have one admin doing everything, those hours spent re-typing invoices and chasing paper can go back to customer service, bid follow-ups, and sales.
                </p>
              </article>
            </div>
            <h4 className="mt-10 text-2xl font-bold tracking-tight text-navy">
              Eliminate the Hidden Cost of Human Mistakes
            </h4>
            <p className="mt-3 max-w-4xl text-lg leading-8 text-muted">
              When office staff rush through repetitive typing, mistakes happen—a wrong address sends crews to the wrong job site, a forgotten email delays your payment, and late receipts upset clients. Our system eliminates those costly dropped balls so every proposal, folder, and invoice goes out accurate and on time.
            </p>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted">
              $650 a month buys a reliable 24/7 back-office system: deposits billed on time, change orders not forgotten, and job records you can actually find when you need them.
            </p>
          </section>

          <h3 className="mt-14 text-3xl font-bold tracking-tight text-navy">Optional contractor add-ons</h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {addons.map((addon) => (
              <article key={addon.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                {addon.badge ? (
                  <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
                    {addon.badge}
                  </p>
                ) : null}
                <h4 className={`${addon.badge ? "mt-3 " : ""}text-xl font-bold text-navy`}>
                  {addon.title}
                </h4>
                {addon.sublabel ? (
                  <p className="mt-1 text-sm font-medium text-navy">{addon.sublabel}</p>
                ) : null}
                <p className="mt-3 leading-7 text-muted">{addon.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built by a Licensed Contractor & Systems Architect
            <br />
            100% U.S.-Based & Vetted
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Most software developers don't understand job costing or field operations—and most agencies outsource your sensitive accounting and client files overseas. TekTagma bridges that gap by pairing executive-level construction management, accounting expertise, and an active California Class B General Contractor’s license with custom systems architecture. Backed by a state security-cleared background (formerly licensed with ADT), you work directly with a U.S.-based peer who builds automated systems that cut administrative overhead while protecting strict confidentiality.
          </p>
          <Link href="/about" className="mt-8 inline-block font-semibold text-amber hover:underline underline-offset-4">
            Read Our Background →
          </Link>
        </div>
      </section>

      <section className="bg-navy px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Eliminate Office Bottlenecks?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule a brief 15-minute call or request a video walkthrough of the live Bid-to-Cash system.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Get in Touch
            </Link>
            <Link href="#pricing" className={btnSecondaryOnDark}>
              View Construction Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
