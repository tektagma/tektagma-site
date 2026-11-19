import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { SITE, btnPrimary } from "../lib/site";

export const metadata = {
  title: "About",
  description:
    "TekTagma is built by a licensed California Class B general contractor and former construction executive—not a generic tech agency.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About TekTagma"
        title="Built by a Licensed Contractor, Not a Generic Tech Agency"
        subhead="Construction operations and bid-to-cash automation for specialty trades—designed by people who have run jobs, not just software sprints."
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl space-y-6 text-lg leading-8 text-muted">
          <p>
            Most software consultants have never stepped onto a job site or managed a construction P&amp;L. TekTagma is built around executive-level construction management experience and an active California Class B General Contractor’s license. We speak the language of change orders, lien waivers, compliance, job costing, and field reality—and we build systems that actually hold up under pressure.
          </p>
          <p>
            We work with construction, demolition, and specialty trade contractors nationwide. When a job needs eyes on the process, we run local on-site audits in the South Bay and San Francisco Bay Area.
          </p>
          <p>
            This is not a generic tech agency engagement. You keep 100% ownership of your data and files. The stack is enterprise-grade—Airtable, Make, Google Workspace, BoldSign, and QuickBooks Online—connected around how your office and field actually work.
          </p>
          <p>
            Trust matters when connecting your accounting and operations. Unlike overseas agencies that offer cut-rate templates with zero accountability, TekTagma is 100% U.S.-based and security-vetted—holding both an active California Class B General Contractor’s license and prior state security licensing with ADT. Your QuickBooks records, contracts, and proprietary business workflows are handled with the highest level of integrity and zero offshore access.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
          {[
            "Active CA Class B General Contractor’s License",
            "Executive Construction Operations & P&L Experience",
            "100% U.S.-Based & Background-Vetted (Former ADT Security Licensed)",
            "Remote Nationwide Delivery + Local South Bay On-Site Audits",
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
          <h2 className="text-3xl font-bold tracking-tight text-navy">See the system, then talk through your workflow</h2>
          <p className="mt-4 text-muted leading-7">
            Schedule a brief 15-minute call or request a video walkthrough of the live Bid-to-Cash system.
          </p>
          <Link href="/contact" className={`${btnPrimary} mt-8`}>
            Book a Workflow Call
          </Link>
        </div>
      </section>
    </main>
  );
}
