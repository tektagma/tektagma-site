import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { btnPrimary } from "../lib/site";

export const metadata = {
  title: "The System",
  description:
    "A modular bid-to-cash and field operations workflow engineered for specialty contractors.",
};

const steps = [
  {
    title: "Lead Capture & Job Intake",
    body: "Website inquiries, phone leads, and bid requests flow straight into a central Jobs & Bids pipeline—zero sticky notes or lost emails.",
  },
  {
    title: "One-Click Branded Proposals & eSign",
    body: "Enter job scope and site-walk photos into your estimator view. The system generates a polished PDF proposal and sends it via BoldSign for instant mobile signature.",
  },
  {
    title: "Automatic Job Folder & QuickBooks Deposit",
    body: "The moment a client signs, the system builds a standardized Google Drive folder tree and automatically dispatches the deposit invoice in QuickBooks Online. As soon as that deposit is paid, the job advances to permitting/scheduling and automatically generates trade-specific tasks for your crew based on the job type.",
    folders: [
      "Contracts & Bids",
      "Invoices & Receipts",
      "Photos & Site Media",
      "Permits & Compliance",
      "Change Orders",
    ],
  },
  {
    title: "Field Crew Mobile Capture & Change Orders",
    body: "Foremen upload Before/After photos and dump/disposal receipts from their phones straight into the right job folder. Any mid-job scope changes trigger instant digital Change Orders that automatically update the final bill.",
  },
  {
    title: "Automated Final Billing & Nightly Backup",
    body: "When the job wraps, QuickBooks generates the final balance invoice (accounting for deposits and approved change orders), archives paid receipts, and backs up your records automatically.",
  },
];

const stack = [
  {
    title: "Built on Proven Enterprise Tools",
    body: "Powered by our dedicated cloud automation engine alongside Airtable, Google Workspace, BoldSign, and QuickBooks Online—rock-solid business software, never experimental code.",
  },
  {
    title: "Role-Based Security",
    body: "Field foremen only see simple mobile forms; office staff and owners get tailored dashboards so nobody accidentally breaks a formula or deletes a record.",
  },
  {
    title: "Zero Vendor Lock-In",
    body: "You retain 100% ownership of your Airtable databases, Google Drive folders, and QuickBooks accounting records.",
  },
];

export default function SystemPage() {
  return (
    <main>
      <PageHeader
        eyebrow="The System"
        title="The Bid-to-Cash & Field Operations System"
        subhead="A modular, custom-tailored workflow engineered around how specialty contractors actually bid, build, document, and bill."
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-5 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:grid-cols-[88px_1fr] md:items-start"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-amber">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">{step.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{step.body}</p>
                  {step.folders ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {step.folders.map((folder) => (
                        <li
                          key={folder}
                          className="rounded-md bg-canvas px-3 py-1.5 font-mono text-xs text-navy"
                        >
                          {folder}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Enterprise Tools You Already Trust. 100% Data Ownership.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stack.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy/10 bg-canvas p-6">
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className={`${btnPrimary} mt-12`}>
            Book a Free 15-Minute Workflow Call
          </Link>
        </div>
      </section>
    </main>
  );
}
