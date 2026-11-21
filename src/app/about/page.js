import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { SITE, btnPrimary } from "../lib/site";

export const metadata = {
  title: "About",
  description:
    "TekTagma is built by a former business executive with decades of operations, accounting, and P&L experience—not a generic tech agency.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About TekTagma"
        title="Built by a Business Operator, Not a Tech Agency"
        subhead="Decades of executive operations, business administration, and accounting—applied to the busywork that slows small businesses down."
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl space-y-6 text-lg leading-8 text-muted">
          <p>
            I&apos;ve sat in the owner&apos;s chair. Cash flow, payroll, deadlines, and the staff bottleneck when the office is you. I come from executive leadership, business administration, and accounting—not from a pitch deck. I speak those headaches in plain English and build automations around the tools you already use.
          </p>
          <p>
            That operating discipline is why I also hold an active California Class B+ contractor&apos;s license and completed state security background checks while designing systems at ADT. Those credentials are proof of integrity and accountability—not a reason I only work with contractors.
          </p>
          <p>
            TekTagma is 100% U.S.-based. You keep ownership of your data. Work is never outsourced overseas. For Bay Area owners, I travel up to two hours from Sunnyvale for in-person workflow audits; I also work with small businesses nationwide.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
          {[
            "Decades of Executive, Accounting & P&L Experience",
            "Active CA Class B+ General Contractor’s License",
            "100% U.S.-Based & State Security Background-Vetted (Former ADT)",
            "In-Person Bay Area Visits (Within 2 Hours of Sunnyvale)",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-navy/10 bg-white p-6 text-base font-semibold leading-7 text-navy shadow-sm"
            >
              <span className="mb-3 block h-1.5 w-8 rounded-full bg-amber" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-5xl text-sm text-muted">
          Email:{" "}
          <a className="font-medium text-navy underline underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </p>
      </section>

      <section className="border-t border-navy/10 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy">
            Talk through how work actually moves through your office
          </h2>
          <p className="mt-4 text-muted leading-7">
            Schedule a brief 15-minute workflow call. No tech jargon—just the bottlenecks, the tools you already have, and what can run without you retyping it.
          </p>
          <Link href="/contact" className={`${btnPrimary} mt-8`}>
            Book a Workflow Call
          </Link>
        </div>
      </section>
    </main>
  );
}
