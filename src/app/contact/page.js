import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import { SITE } from "../lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Book a free 15-minute workflow call to walk through how work actually moves through your office.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Book a Free 15-Minute Workflow Call"
        subhead="Schedule a brief 15-minute call to walk through how work actually moves through your office."
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy">What to expect</h2>
            <p className="mt-4 leading-7 text-muted">
              Tell me how work currently moves through your office—quotes, invoices, folders, phones, QuickBooks, or the construction bid-to-cash path. I will follow up to confirm a quick 15-minute workflow call.
            </p>
            <p className="mt-4 leading-7 text-muted">{SITE.serviceArea}</p>
            <p className="mt-6 text-sm text-muted">
              Prefer email?{" "}
              <a className="font-medium text-navy underline underline-offset-4" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
