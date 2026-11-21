import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "TekTagma | Business Operations & Workflow Automation",
    template: "%s | TekTagma",
  },
  description:
    "I help small businesses connect the tools they already use—Google Workspace, QuickBooks, spreadsheets, and phones—to stop double data entry, capture missed leads, and get paid faster.",
  metadataBase: new URL("https://tektagma.com"),
  openGraph: {
    title: "TekTagma | Business Operations & Workflow Automation",
    description:
      "I help small businesses connect the tools they already use—Google Workspace, QuickBooks, spreadsheets, and phones—to stop double data entry, capture missed leads, and get paid faster.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/TekTagma-Logo-favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-canvas font-sans text-body antialiased flex flex-col`}
      >
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
