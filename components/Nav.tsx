"use client";

import Link from "next/link";
import Image from "next/image";
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
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 text-sm tracking-tight">
          <Image src="/logo.png" alt="Body Burden" width={56} height={56} className="w-14 h-14 rounded-xl flex-shrink-0" />
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
                  : "text-slate-500 hover:text-slate-900"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm py-1 ${
                pathname === l.href ? "text-teal-700 font-medium" : "text-slate-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/calculator"
            onClick={() => setOpen(false)}
            className="bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-teal-800 transition-colors mt-1"
          >
            Take the test
          </Link>
        </div>
      )}
    </nav>
  );
}
