export default function ProductsPage() {
  return (
    <main className="pt-24 min-h-screen p-10 text-center sm:text-left">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        
        <div className="space-y-8">
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-3">CryptoLivePulse</h2>
            <p className="text-gray-600 mb-4">
              CryptoLivePulse is a real-time cryptocurrency monitoring and alerting platform. It provides live price tracking, alerts, and analytics tools for traders and long-term investors.
            </p>
            <a
              href="https://cryptolivepulse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-black hover:underline font-medium"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

