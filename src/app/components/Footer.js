import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500 py-8 px-6 border-t border-gray-200 mt-auto">
      <Link href="/contact" className="hover:underline">Contact</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/careers" className="hover:underline">Careers</Link>
      <Link href="/" className="hover:underline">Home</Link>
      <p>&copy; {new Date().getFullYear()} TekTagma. All rights reserved.</p>
    </footer>
  );
}
