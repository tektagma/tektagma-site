import Link from "next/link";

const outcomes = [
  {
    title: "Capture every opportunity",
    detail: "Turn website inquiries, forms, and internal requests into organized work instead of scattered messages.",
  },
  {
    title: "Keep follow-up moving",
    detail: "Route the right information to the right owner and create a clear next action before a lead goes cold.",
  },
  {
    title: "Reduce repetitive admin",
    detail: "Connect the tools you already use so routine handoffs, reminders, and updates take less manual effort.",
  },
];

export const metadata = {
  title: "Business Automation | TekTagma",
  description: "Practical, owner-controlled automation systems for growing businesses.",
  openGraph: {
    title: "Business Automation | TekTagma",
    description: "Practical, owner-controlled automation systems for growing businesses.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Automation | TekTagma",
    description: "Practical, owner-controlled automation systems for growing businesses.",
    images: ["/og.png"],
  },
};

export default function BusinessAutomationPage() {
  return (
    <main className="pt-24 min-h-screen">
      <section className="bg-gray-950 text-white px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-300 mb-6">TekTagma services</p>
          <h1 className="max-w-4xl text-4xl sm:text-6xl font-bold tracking-tight leading-tight">Business automation that keeps work moving.</h1>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-8 text-gray-300">
            TekTagma designs practical, owner-controlled systems that reduce admin work, organize handoffs, and help businesses respond before opportunities are lost.
          </p>
          <Link href="/contact" className="inline-block mt-10 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Request a workflow review
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-18 sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-500">What this helps solve</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <h2 className="text-xl font-bold">{outcome.title}</h2>
              <p className="mt-3 text-gray-600 leading-6">{outcome.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-18 sm:py-24 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-500">Featured use case</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">For contractors and home-service businesses</h2>
            <p className="mt-5 text-gray-600 leading-7">
              When a team is on the job, leads and estimate requests can arrive at the worst possible time. TekTagma helps turn those requests into an organized, accountable follow-up process.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-7 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">LIVE PORTFOLIO DEMO</p>
            <h3 className="mt-3 text-2xl font-bold">Missed Lead Rescue</h3>
            <p className="mt-3 text-gray-600 leading-6">
              See a sample inquiry captured, validated, classified, and routed to a human owner. The public demonstration uses fictional data and never sends visitor information outside the page.
            </p>
            <a
              href="https://tektagma.github.io/missed-lead-rescue/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-black text-white px-5 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Try the live demo ↗
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-18 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-500">Built for trust</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Your business stays in control.</h2>
          <p className="mt-5 text-gray-600 text-lg leading-8">
            Every project starts with the actual workflow, not a generic tool stack. TekTagma designs around appropriate access, clear documentation, human review for consequential decisions, and client-owned accounts whenever practical.
          </p>
          <Link href="/contact" className="inline-block mt-8 text-black font-semibold underline underline-offset-4 hover:text-gray-600">
            Tell us what is getting in the way →
          </Link>
        </div>
      </section>
    </main>
  );
}
