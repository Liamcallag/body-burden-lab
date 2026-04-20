"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/calculator", label: "Calculator" },
    { href: "/methodology", label: "Methodology" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 text-sm tracking-tight">
            <img src="/logo.svg" alt="Body Burden" style={{ width: 56, height: 56, borderRadius: 10, flexShrink: 0 }} />
            Body Burden
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  pathname === l.href
                    ? "text-teal-700 font-medium"
                    : "text-slate-900 hover:text-teal-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/calculator"
              className="ml-2 bg-teal-700 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-teal-800 transition-colors"
            >
              Take the test
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-500 hover:text-slate-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-slate-100">
          <span className="font-semibold text-slate-900 text-sm">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-slate-900"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-6 gap-1 flex-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base py-3 border-b border-slate-50 transition-colors ${
                pathname === l.href
                  ? "text-teal-700 font-medium"
                  : "text-slate-800 hover:text-teal-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 pb-8">
          <Link
            href="/calculator"
            onClick={() => setOpen(false)}
            className="block bg-teal-700 text-white text-sm font-semibold px-4 py-3 rounded-full text-center hover:bg-teal-800 transition-colors"
          >
            Take the test
          </Link>
        </div>
      </div>
    </>
  );
}
