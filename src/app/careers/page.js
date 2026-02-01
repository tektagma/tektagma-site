import Link from "next/link";

export const metadata = {
  title: "Careers",
  description: "Open roles at TekTagma. Remote-first, timezone-aware.",
};

// Local scaffold for open roles (replace with API/cms later)
const OPEN_ROLES = [
  {
    id: "1",
    title: "Senior Full Stack Engineer",
    location: "Remote, US timezones preferred",
    note: "Build and own product features across the stack. React, Node, and modern tooling.",
  },
  {
    id: "2",
    title: "Product Designer",
    location: "Remote, flexible",
    note: "Shape product experience and design systems. User research and high-fidelity design.",
  },
  {
    id: "3",
    title: "Support Agent",
    location: "Remote, shifts",
    note: "Help customers get the most out of our products. Written communication and empathy.",
  },
];

export default function CareersPage() {
  return (
    <main className="pt-24 min-h-screen p-10 text-center sm:text-left">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Careers at TekTagma</h1>
          <p className="text-lg text-gray-700 max-w-2xl mb-6">
            Remote-first, timezone-aware, global talent. We’re open to local hiring where it makes sense.
          </p>
          <Link
            href="#open-roles"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-medium"
          >
            View open roles
          </Link>
        </section>

        {/* Open roles */}
        <section id="open-roles" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Open roles</h2>
          {OPEN_ROLES.length === 0 ? (
            <div className="p-8 rounded-xl border border-gray-200 bg-gray-50 text-center">
              <p className="text-gray-600">No open roles right now. Check back soon or reach out — we’re always interested in great people.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {OPEN_ROLES.map((role) => (
                <li
                  key={role.id}
                  className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition text-left"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{role.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{role.location}</p>
                  <p className="text-gray-700">{role.note}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* How hiring works */}
        <section className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">How hiring works</h2>
          <p className="text-gray-700 mb-4">
            Apply by email for now. Send a short intro and your resume or portfolio to{" "}
            <a
              href="mailto:careers@tektagma.com"
              className="text-black font-medium hover:underline"
            >
              careers@tektagma.com
            </a>
            .
          </p>
          <p className="text-sm text-gray-600">
            A candidate portal with accounts, editable application templates, and status tracking is coming later.
          </p>
        </section>
      </div>
    </main>
  );
}
