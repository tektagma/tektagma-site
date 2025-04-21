'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pt-[80px] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* 🔝 Top Navigation with Logo */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with Link */}
          <Link href="/" className="relative w-[150px] h-[40px] sm:w-[180px] sm:h-[50px]">
            <Image
              src="/tektagma-site-logo.webp"
              alt="TekTagma logo"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden flex flex-col gap-[3px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="sm:hidden flex flex-col items-center gap-4 p-4 bg-white border-t border-gray-200">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        )}
      </header>

      {/* ✅ Main Content */}
      <main className="row-start-2 text-center sm:text-left flex flex-col items-center sm:items-start gap-6">
        <div className="relative w-[240px] h-[100px] sm:w-[300px] sm:h-[120px]">
          <Image
            src="/tektagma-site-logo.webp"
            alt="TekTagma hero logo"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Build Better Business Systems
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          TekTagma designs custom CMS and automation solutions that help modern companies scale,
          save time, and stay organized.
        </p>
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Get in Touch
        </Link>

        {/* 💼 Services Section */}
        <section id="services" className="mt-16 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold text-center sm:text-left mb-8">
            Our Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Custom CMS Solutions</h3>
              <p className="text-gray-600 text-sm">
                We build structured, scalable CMS systems using React, Airtable, and Notion — tailored for your workflow.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Business Automation</h3>
              <p className="text-gray-600 text-sm">
                Save hours every week with smart automation that connects your tools and streamlines operations.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">System Design & Consulting</h3>
              <p className="text-gray-600 text-sm">
                From ideation to implementation, we help you design systems that run smoothly from day one.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Notion & Airtable Setup</h3>
              <p className="text-gray-600 text-sm">
                We turn messy Notion or Airtable setups into powerfully organized systems — with dashboards, filters, and smart views.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 👣 Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/" className="hover:underline">Home</Link>
        <p>&copy; {new Date().getFullYear()} TekTagma. All rights reserved.</p>
      </footer>
    </div>
  );
}