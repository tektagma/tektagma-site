import Link from "next/link";
import { btnPrimary, btnSecondaryOnDark, btnSecondaryOnLight } from "./lib/site";

const trustItems = [
  "Decades of Executive & Accounting Experience",
  "Works With Your Existing Software & Phone",
  "100% U.S.-Based & Security Background-Vetted",
  "In-Person Bay Area Visits (Within 2 Hrs of Sunnyvale)",
];

const solutions = [
  {
    title: "Quote-to-Invoice & QuickBooks Sync",
    body: "Enter job or order details once to auto-generate PDF quotes, capture e-signatures, and create matching QuickBooks invoices without double data entry.",
  },
  {
    title: "Instant Missed-Call Text-Backs",
    body: "Never lose a lead when busy. Automatically text missed callers back within seconds and log their details while keeping your existing business phone number.",
  },
  {
    title: "Automatic Client Folders & File Organization",
    body: "Auto-create standardized Google Drive folders for every new client and route signed contracts, receipts, and photos into the right place.",
  },
  {
    title: "Automated Payment & Appointment Reminders",
    body: "Cut no-shows and awkward late-invoice chasing with polite, automated text and email follow-ups.",
  },
  {
    title: "Automated Google Review Requests",
    body: "Automatically text satisfied customers a direct review link the moment an invoice is paid or a service is completed.",
  },
  {
    title: "Messy Spreadsheet & Database Cleanup",
    body: "Consolidate scattered, broken Excel/CSV files into one clean, searchable dashboard so you can clearly see your numbers.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="bg-navy px-6 pb-16 pt-32 text-white sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber uppercase">
            BUILT BY A FORMER BUSINESS EXECUTIVE — NOT A TECH AGENCY
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Eliminate Office Busywork & Automate Your Daily Operations—Without Changing Your Software.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
            I help small businesses connect the tools they already use—Google Workspace, QuickBooks, spreadsheets, and phones—to stop double data entry, capture missed leads, and get paid faster. I speak business, not tech jargon.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Book a Free 15-Minute Workflow Call
            </Link>
            <Link href="#solutions" className={btnSecondaryOnDark}>
              Explore Automation Solutions
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

      <section className="bg-ink px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber uppercase">
            HIGH-TRUST OPERATIONS
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            I&apos;ve Been in Your Shoes
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-white/80">
            <p>
              Most tech freelancers and overseas agencies have never sat in the owner&apos;s chair. They don&apos;t feel cash flow, deadlines, or the staff bottleneck that happens when the office is you—not from a developer&apos;s cubicle.
            </p>
            <p>
              I&apos;ve spent decades in executive leadership, accounting, payroll, and P&amp;L. I&apos;ve run the numbers, made payroll, and watched how small delays in billing or follow-up hit the bottom line. An active California Class B+ contractor&apos;s license is extra proof of that accountability—not a sign this work is only for one trade.
            </p>
            <p>
              You don&apos;t get a junior developer reading a script. You get a U.S.-based peer who has lived those pressures from the owner&apos;s chair, and who builds systems that cut the busywork without talking down to you.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            I Work With What You Already Have
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            You don&apos;t need a new platform, a new login, or a six-month software migration. Automations wrap the Google Sheets, Gmail, QuickBooks, Excel, and phone system you already run—so the office stops typing the same thing twice. Built for overwhelmed owners in medical and dental, auto shops, property management, law firms, professional services, retail, and the trades.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <p className="text-xl font-bold text-amber">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Two Products. Same Operator.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Most owners start with a workflow audit around the tools they already have. If you run a trade company—or you want live crypto market intelligence—those packaged products are ready to explore.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-navy/10 bg-canvas p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
                FOR CONTRACTORS
              </p>
              <h3 className="mt-3 text-2xl font-bold text-navy">Construction Bid-to-Cash OS</h3>
              <p className="mt-4 flex-1 leading-7 text-muted">
                End-to-end operations and billing automation for contractors: proposals, eSignatures, job folders, QuickBooks deposits, field capture, and final billing—without bloated construction software lock-in.
              </p>
              <Link href="/construction" className={`${btnSecondaryOnLight} mt-8`}>
                Explore Construction System →
              </Link>
            </article>
            <article className="flex flex-col rounded-2xl border border-navy/10 bg-navy p-8 text-white">
              <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">
                MARKET INTELLIGENCE
              </p>
              <h3 className="mt-3 text-2xl font-bold">CryptoLivePulse.com</h3>
              <p className="mt-4 flex-1 leading-7 text-white/80">
                Real-time crypto market intelligence and AI voice alerts—a TekTagma product for people who need the pulse without staring at a screen all day.
              </p>
              <a
                href="https://cryptolivepulse.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnPrimary} mt-8`}
              >
                Visit CryptoLivePulse →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Security, Privacy &amp; Local Commitment
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            I am a U.S. citizen based in Sunnyvale, CA. For Bay Area clients, I travel up to two hours for in-person workflow audits. I previously designed systems at ADT and completed state security background checks. You retain 100% ownership of your data and files. Engagements are covered by a confidentiality agreement. Work is never outsourced overseas.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "U.S. citizen — Sunnyvale, CA",
              "In-person visits within 2 hours of Sunnyvale",
              "Former ADT systems designer, state security background checks",
              "100% client data ownership · confidentiality agreement · never outsourced overseas",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/85"
              >
                <span className="mb-3 block h-1.5 w-8 rounded-full bg-amber" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Stop Doing the Same Work Twice?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a brief 15-minute call. We&apos;ll look at how work actually moves through your office—and what can run without you retyping it.
          </p>
          <Link href="/contact" className={`${btnPrimary} mt-8`}>
            Book a Free 15-Minute Workflow Call
          </Link>
        </div>
      </section>
    </main>
  );
}
