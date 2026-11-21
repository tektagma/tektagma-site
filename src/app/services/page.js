import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { btnPrimary } from "../lib/site";

export const metadata = {
  title: "Services & Pricing",
  description:
    "Low-risk workflow audits and custom flat-rate automation quotes built around the tools your small business already uses.",
};

const tiers = [
  {
    tag: "STEP 1 • START HERE",
    title: "Workflow Audit",
    price: "$250–$500",
    note: "100% credited toward your build",
    featured: true,
    items: [
      "In-person (Bay Area) or Zoom diagnostic of how work actually moves through your office",
      "Plain-English action plan of what to automate first—and what to leave alone",
      "A clear next-step quote so you are not buying a bloated package you don’t need",
    ],
  },
  {
    tag: "TIER 1 • QUICK WIN",
    title: "Single Fix / Cleanup",
    price: "Starting at $750–$1,500",
    note: "One urgent bottleneck, done",
    featured: false,
    items: [
      "Excel/CSV cleanup into a clean, searchable dashboard",
      "Instant missed-call text-backs on your existing business number",
      "Automated Google review requests after a visit or invoice is paid",
    ],
  },
  {
    tag: "TIER 2 • FULL WORKFLOW",
    title: "Multi-System Automation",
    price: "Starting at $2,500–$5,500+",
    note: "Custom flat-rate quote after the audit",
    featured: false,
    items: [
      "Intake forms that create the client record automatically",
      "PDF quotes, eSignatures, and matching QuickBooks invoices",
      "Folders, reminders, and follow-ups wrapped around tools you already use",
    ],
  },
  {
    tag: "OPTIONAL • PEACE OF MIND",
    title: "Peace of Mind",
    price: "Starting at $250/month",
    note: "Ongoing care after go-live",
    featured: false,
    items: [
      "24/7 monitoring, automatic retries, and error alerts",
      "System updates when QuickBooks, Google, or eSign platforms change",
      "Minor workflow adjustments so the office does not fall back on retyping",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services & Pricing"
        title="Clear, Practical Implementation — Built Around Your Existing Tools"
        subhead="I start with a low-risk workflow audit, then give you a custom flat-rate quote. No software migration. No disruption to the Google Workspace, QuickBooks, spreadsheets, and phone system you already run."
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            PRICING & ENGAGEMENT
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Four honest ways to start
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            I work with overwhelmed owners across medical and dental, auto shops, property management, law firms, professional services, retail, and the trades. If you run a construction company and need the Bid-to-Cash system, that packaged roadmap lives on the{" "}
            <Link href="/construction" className="font-semibold text-navy underline underline-offset-4">
              Construction page
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.title}
              className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                tier.featured ? "border-amber/70 ring-1 ring-amber/20" : "border-navy/10"
              }`}
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
                {tier.tag}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-navy">{tier.title}</h3>
              <p className="mt-4 text-2xl font-bold text-navy xl:text-[1.65rem]">{tier.price}</p>
              {tier.note ? <p className="mt-2 text-sm text-muted">{tier.note}</p> : null}
              <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-muted">
                {tier.items.map((item) => (
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
            Why Automation Pays for Itself
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            About a Day of Office Payroll — Working for You 24/7
          </p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">
            Full-time office administration often runs $4,500–$6,000+ a month. Plenty of those hours still get lost to retyping the same customer into spreadsheets, folders, and QuickBooks. Ongoing care starts at $250 a month—about a day of that payroll, or less—and it keeps working after the office is locked up. The $250–$500 audit is credited toward your build. A $750–$1,500 Quick Win often pays for itself the first time a missed call becomes a customer or a late invoice actually gets collected.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy">Two-Person Office</h3>
              <p className="mt-3 leading-7 text-muted">
                If you have two people in the office, a connected workflow lets you streamline that admin load down to one. The thousands you save each month on a second admin salary can go back into the business—instead of redundant data entry.
              </p>
            </article>
            <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy">One-Person Office / Solo</h3>
              <p className="mt-3 leading-7 text-muted">
                If you are the office, or you have one admin doing everything, those hours spent re-typing invoices and chasing paper can go back to customers, follow-ups, and sales.
              </p>
            </article>
          </div>
          <h3 className="mt-10 text-2xl font-bold tracking-tight text-navy">
            Eliminate the Hidden Cost of Human Mistakes
          </h3>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-muted">
            When the office rushes through repetitive typing, mistakes happen—a wrong address sends someone to the wrong appointment, a forgotten follow-up email delays your payment, and late paperwork upsets a good customer. I build the checks so quotes, folders, and invoices go out accurate and on time, including address verification and customer follow-ups that used to live in someone&apos;s head.
          </p>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-muted">
            $250 a month buys 24/7 monitoring so those dropped balls stay caught: reminders sent, records findable, and the system still running when you are not at the desk.
          </p>
        </section>

        <aside className="mx-auto mt-10 max-w-6xl rounded-2xl border border-amber/40 bg-navy px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            Data Security & U.S. Accountability
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            You work with me—not an overseas bench.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-white/80 sm:text-lg">
            Handing someone access to your QuickBooks ledger, proposals, and customer records requires complete trust. I am a U.S. citizen based in Sunnyvale, CA, and I travel up to two hours for in-person Bay Area audits. I hold an active California Class B+ contractor&apos;s license and completed state security background checks while designing systems at ADT. Your data stays yours. Work is never outsourced overseas.
          </p>
        </aside>
      </section>

      <section className="border-t border-navy/10 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy">
            Start with a free 15-minute workflow call
          </h2>
          <p className="mt-4 text-muted leading-7">
            Tell me how work currently moves through your office. I will tell you, in plain English, whether an audit, a Quick Win, or a full workflow is the honest next step.
          </p>
          <Link href="/contact" className={`${btnPrimary} mt-8`}>
            Book a Free 15-Minute Workflow Call
          </Link>
        </div>
      </section>
    </main>
  );
}
