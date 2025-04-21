export default function ContactPage() {
    return (
      <main className="min-h-screen p-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Have a project in mind or need help with systems, CMS, or automation? Let’s talk.
        </p>
        <a
          href="mailto:hello@tektagma.com"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Email Us
        </a>
      </main>
    );
  }