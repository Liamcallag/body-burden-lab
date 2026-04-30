import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-semibold text-slate-900 mb-1 text-sm">Body Burden</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Science-backed estimates of your microplastic exposure, built on peer-reviewed research.
            </p>
          </div>
          <div>
            <div className="font-medium text-slate-700 text-xs uppercase tracking-wider mb-3">Tools</div>
            <nav className="flex flex-col gap-2">
              <Link href="/calculator" className="text-xs text-slate-500 hover:text-teal-700">Microplastics Calculator</Link>
              <Link href="/methodology" className="text-xs text-slate-500 hover:text-teal-700">Methodology</Link>
            </nav>
          </div>
          <div>
            <div className="font-medium text-slate-700 text-xs uppercase tracking-wider mb-3">Site</div>
            <nav className="flex flex-col gap-2">
              <Link href="/blog" className="text-xs text-slate-500 hover:text-teal-700">Blog</Link>
              <Link href="/faq" className="text-xs text-slate-500 hover:text-teal-700">FAQ</Link>
              <Link href="/about" className="text-xs text-slate-500 hover:text-teal-700">About</Link>
              <a href="mailto:contact@bodyburdenlab.com" className="text-xs text-slate-500 hover:text-teal-700">contact@bodyburdenlab.com</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
            <strong className="text-slate-500">Disclaimer:</strong> This calculator provides educational estimates based on published peer-reviewed research. Results count microplastic particles only. Figures vary between studies and individual factors not captured here. Nanoplastic exposure is not included and is likely significantly higher. Scores represent a documented minimum, not a precise measurement. This is not a medical diagnosis or personalised health advice. See our{" "}
            <Link href="/methodology" className="underline hover:text-teal-700">full methodology</Link> for sources and limitations.
          </p>
          <p className="text-xs text-slate-400 mt-3">© {new Date().getFullYear()} Body Burden. For educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
