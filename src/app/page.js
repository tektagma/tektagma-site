import Link from "next/link";
import { btnPrimary, btnSecondaryOnDark } from "./lib/site";

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
];

const outcomes = [
  {
    title: "Instant Proposals & eSignatures",
    body: "Turn site-walk notes and photos into branded PDF proposals, dispatch them for legally binding electronic signature, and get notified the second they are signed.",
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
    body: "Simple mobile upload forms for field foremen and clean, role-based dashboards for owners, estimators, and office admins.",
  },
];

export default function Home() {
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
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {problems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
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
                <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-muted leading-7">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built by a Licensed Contractor — 100% U.S.-Based & Vetted
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Most software agencies have never stepped onto a job site—or outsource your sensitive accounting and client files overseas. TekTagma brings executive-level construction management experience, an active California Class B General Contractor’s license, and a state security-cleared background (formerly licensed with ADT). You deal directly with a U.S.-based peer who understands job costing, compliance, and strict confidentiality.
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
          <Link href="/contact" className={`${btnPrimary} mt-8`}>
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
