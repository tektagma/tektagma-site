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
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              Most software consultants have never stepped onto a job site or managed a construction P&amp;L. TekTagma is built around executive-level construction management experience and an active California Class B General Contractor’s license. We speak the language of change orders, lien waivers, compliance, job costing, and field reality—and we build systems that actually hold up under pressure.
            </p>
            <p>
              We work with construction, demolition, and specialty trade contractors nationwide. When a job needs eyes on the process, we run local on-site audits in the South Bay and San Francisco Bay Area.
            </p>
            <p>
              This is not a generic tech agency engagement. You keep 100% ownership of your data and files. The stack is enterprise-grade—Airtable, Make, Google Workspace, BoldSign, and QuickBooks Online—connected around how your office and field actually work.
            </p>
          </div>
          <aside className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.18em] text-amber uppercase">Credentials & coverage</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Active CA Class B General Contractor’s License</li>
              <li>Former construction executive experience</li>
              <li>Serving contractors nationwide</li>
              <li>Local on-site audits in South Bay &amp; SF Bay Area</li>
              <li>
                Email:{" "}
                <a className="font-medium text-navy underline underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </aside>
        </div>
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
