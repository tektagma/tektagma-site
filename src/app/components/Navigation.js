'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with wrapper */}
        <Link href="/" className="block relative w-[150px] h-[40px] sm:w-[180px] sm:h-[50px]">
          <div className="relative w-full h-full">
            <Image
              src="/tektagma-logo.webp"
              alt="TekTagma logo"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/careers">Careers</Link></li>
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
          <li><Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </header>
  );
}

