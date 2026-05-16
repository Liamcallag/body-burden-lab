import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Do Microplastics Do to the Human Body? The Research So Far",
  description:
    "Microplastics have been found in human blood, lungs, brain, heart, and placenta. Here is what peer-reviewed science currently shows about health effects — and what remains unknown.",
  alternates: {
    canonical: "https://www.bodyburdenlab.com/blog/what-do-microplastics-do-to-the-body",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-05-10",
    title: "What Do Microplastics Do to the Human Body? The Research So Far",
    description:
      "Microplastics have been found in human blood, lungs, brain, heart, and placenta. Here is what peer-reviewed science currently shows about health effects — and what remains unknown.",
    images: [
      {
        url: "https://www.bodyburdenlab.com/api/og-image?title=What+Do+Microplastics+Do+to+the+Human+Body%3F&tag=Science",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Do Microplastics Do to the Human Body? The Research So Far",
    description:
      "Microplastics have been found in human blood, lungs, brain, heart, and placenta. Here is what peer-reviewed science currently shows about health effects — and what remains unknown.",
    images: [
      "https://www.bodyburdenlab.com/api/og-image?title=What+Do+Microplastics+Do+to+the+Human+Body%3F&tag=Science",
    ],
  },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Do Microplastics Do to the Human Body? The Research So Far",
    "description": "Microplastics have been found in human blood, lungs, brain, heart, and placenta. Here is what peer-reviewed science currently shows about health effects — and what remains unknown.",
    "datePublished": "2026-05-10",
    "dateModified": "2026-05-10",
    "author": {
      "@type": "Person",
      "@id": "https://www.bodyburdenlab.com/author/liam-murphy#person",
      "name": "Liam Murphy",
      "url": "https://www.bodyburdenlab.com/author/liam-murphy",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.bodyburdenlab.com/#organization",
      "name": "Body Burden",
      "url": "https://www.bodyburdenlab.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bodyburdenlab.com/blog/what-do-microplastics-do-to-the-body",
    },
    "url": "https://www.bodyburdenlab.com/blog/what-do-microplastics-do-to-the-body",
    "inLanguage": "en-US",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are microplastics harmful to human health?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The evidence is accumulating but not yet conclusive on causation. Microplastics have been detected in human blood, lungs, brain, arterial plaques, and placenta. A 2024 study in the New England Journal of Medicine found that patients with microplastics in their arterial plaques had a 4.5-fold greater risk of a composite endpoint of heart attack, stroke, or death over 34 months. Laboratory studies show microplastics can induce oxidative stress, inflammation, and cell death. However, establishing direct causation in humans — rather than association — remains an active area of research."
        }
      },
      {
        "@type": "Question",
        "name": "Where have microplastics been found in the human body?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microplastics have been detected in human blood (77% of samples tested), lung tissue (85% of live tissue samples), brain tissue (every sample tested, with concentrations substantially higher than liver or kidney), arterial plaques (58% of samples), placenta (both fetal and maternal sides), breast milk (76% of samples), semen (76% of samples tested), and meconium (infant first stool). The ubiquity of detection across tissue types reflects decades of accumulation since mass plastic production began in the 1950s."
        }
      },
      {
        "@type": "Question",
        "name": "Can you remove microplastics from your body?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is currently no peer-reviewed, clinically tested method for removing microplastics from human tissue. The immune system clears some particles via lymphatic drainage, and the gut passes many before absorption. However, particles that reach blood and organs appear to accumulate over time. No supplement, sauna protocol, or dietary intervention has been confirmed in controlled human trials to accelerate clearance. The most evidence-backed approach is reducing ongoing exposure."
        }
      }
    ]
  };
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bodyburdenlab.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.bodyburdenlab.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "What Do Microplastics Do to the Human Body? The Research So Far", "item": "https://www.bodyburdenlab.com/blog/what-do-microplastics-do-to-the-body" },
  ]
}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-8">
        <Link href="/blog" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Science</span>
          <Link href="/author/liam-murphy" className="text-xs text-slate-400 hover:text-teal-700 transition-colors">Liam Murphy</Link>
          <span className="text-xs text-slate-400">·</span>
          <time className="text-xs text-slate-400" dateTime="2026-05-10">May 10, 2026</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          What Do Microplastics Do to the Human Body? The Research So Far
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Microplastics are no longer just an environmental problem. They have been found in human blood, lungs, brain tissue, arterial plaques, and placenta. Here is what the peer-reviewed evidence currently shows about health effects — and where the science is still developing.
        </p>
      </div>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-0.5">Find out your current exposure level</p>
          <p className="text-xs text-slate-500">15 questions · 2 minutes · based on peer-reviewed science</p>
        </div>
        <Link href="/calculator" className="bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-800 transition-colors whitespace-nowrap">
          Take the calculator →
        </Link>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key takeaways</p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>→ Microplastics have been detected in human blood, lungs, brain, arterial plaques, placenta, breast milk, and semen</li>
          <li>→ Every brain sample tested contained microplastics — at concentrations 7–30 times higher than liver or kidney (Nihart et al., Nature Medicine, 2025)</li>
          <li>→ People with microplastics in arterial plaque had a 4.5-fold greater risk of heart attack, stroke, or death over 34 months (Marfella et al., NEJM, 2024)</li>
          <li>→ Brain microplastic concentrations rose significantly between 2016 and 2024, broadly aligned with rising global plastic production over the same period</li>
          <li>→ Causation has not been definitively established — but the associations are large and the detection data is not in dispute</li>
          <li>→ No peer-reviewed method currently exists to remove microplastics from human tissue</li>
        </ul>
      </div>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-5">

        <p>
          For most of the past decade, the primary concern about microplastics was environmental — their impact on marine ecosystems and wildlife. That framing has shifted sharply. A series of studies published between 2021 and 2025 have detected microplastics in almost every human tissue examined, and at least one landmark clinical study has linked their presence to significantly elevated health risk in humans.
        </p>

        <p>
          The honest position is that the science is young and causation has not been definitively established. But the detection data is no longer in dispute, and the volume and quality of evidence is growing rapidly.
        </p>

        <figure className="my-8">
          <img
            src="/blog-microplastics-body.png"
            alt="Illustration showing how microplastics enter the body through food and water, travel through the digestive tract into the bloodstream, and accumulate in arterial plaque"
            className="w-full rounded-xl"
          />
          <figcaption className="text-xs text-slate-400 text-center mt-2">
            Microplastics enter the body through ingestion and inhalation, pass into the bloodstream, and have been detected in arterial plaque — where their presence was associated with significantly higher cardiovascular risk in a 2024 NEJM study.
          </figcaption>
        </figure>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Where microplastics have been found in the human body</h2>

        <p>
          Peer-reviewed studies have now confirmed microplastic presence in the following tissues and fluids:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Blood:</strong> Leslie et al. (2022) in <em>Environment International</em> detected microplastics in 77% of blood samples from healthy adult donors. The most common polymers were PET and polystyrene.</li>
          <li><strong>Lung tissue:</strong> Jenner et al. (2022) in <em>Science of the Total Environment</em> found microplastics in 85% of live human lung tissue samples, concentrated in the lower lobes.</li>
          <li><strong>Brain tissue:</strong> Nihart et al. (2025) in <em>Nature Medicine</em> detected microplastics in every brain sample tested, at concentrations 7–30 times higher than those found in liver or kidney. Samples from 2016–2024 showed significantly rising concentrations over time.</li>
          <li><strong>Arterial plaques:</strong> Marfella et al. (2024) in the <em>New England Journal of Medicine</em> found microplastics in 58% of arterial plaque samples from cardiovascular patients.</li>
          <li><strong>Placenta:</strong> Ragusa et al. (2021) in <em>Environment International</em> detected microplastics on both the fetal and maternal sides of human placentas.</li>
          <li><strong>Breast milk:</strong> Ragusa et al. (2022) in <em>Polymers</em> found microplastics in 76% of breast milk samples (26 of 34), with polyethylene, PVC, and polypropylene the most commonly identified polymers.</li>
          <li><strong>Semen:</strong> Guo et al. (2025) in <em>Toxics</em> detected microplastics in 76% of human semen samples (34 of 45). Men with PET microplastics present showed a trend toward reduced progressive sperm motility, though the association did not reach statistical significance. No significant association was found with sperm count.</li>
          <li><strong>Meconium:</strong> Liu et al. (2022) in <em>Science of the Total Environment</em> detected microplastics in meconium samples collected from a cohort of mother-infant pairs, alongside detections in placenta, breast milk, and infant formula — indicating that plastic exposure begins before birth.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The cardiovascular finding — the strongest clinical signal so far</h2>

        <p>
          The most significant health finding to date was published in March 2024 in the <em>New England Journal of Medicine</em> by Marfella and colleagues. The study followed 257 patients who had undergone surgery to remove arterial plaque from their carotid arteries. Researchers tested the plaque samples for microplastic and nanoplastic content, then followed patients for approximately 34 months.
        </p>

        <p>
          The results were stark: patients whose plaque contained detectable microplastics or nanoplastics had a <strong>4.5-fold greater risk of heart attack, stroke, or death</strong> during the follow-up period compared to patients whose plaque was free of plastic particles.
        </p>

        <p>
          This is an association, not proof of causation — it is possible that microplastic accumulation in plaque reflects other risk factors, or that the plastics are a consequence of the same conditions that drive cardiovascular risk rather than a direct cause. The authors acknowledged this. However, the magnitude of the association — a 4.5-fold difference — is large enough to be clinically significant, and the study was published in one of the most rigorous medical journals in the world.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Microplastics in the brain — a rising concentration</h2>

        <p>
          The 2025 Nature Medicine study by Nihart and colleagues found something particularly concerning: not just that microplastics are present in brain tissue, but that their concentrations have been rising over time. Samples from 2024 contained significantly higher microplastic concentrations than samples from 2016 — roughly tracking the increase in global plastic production and environmental contamination over the same period.
        </p>

        <p>
          Brain tissue concentrations were also higher than those found in the liver or kidney — organs that play a more direct role in filtering contaminants from blood. The mechanism by which plastic particles accumulate preferentially in brain tissue is not yet understood.
        </p>

        <p>
          What this means for neurological health is an open question. The study documents presence and rising concentration, not specific harm. But the brain is a uniquely sensitive organ, and the finding has generated significant attention in the scientific community.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Fertility and reproductive effects</h2>

        <p>
          Guo et al. (2025) detected microplastics in 76% of human semen samples tested (34 of 45). Men with PET microplastics present in their semen showed a trend toward reduced progressive sperm motility compared to those without, though the association fell short of statistical significance. No significant association was found with sperm concentration or total sperm count. The authors note that larger studies are needed to confirm whether microplastic exposure affects male fertility. This sits alongside earlier animal studies showing reproductive disruption at microplastic concentrations comparable to those now detected in humans.
        </p>

        <p>
          The detection of microplastics in placenta (Ragusa et al., 2021) and meconium raises the specific question of whether in utero exposure affects fetal development. This is an active area of research with no definitive human data yet — but it is the reason infant microplastic exposure is treated as a priority concern by researchers in this field.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What laboratory studies show about mechanisms</h2>

        <p>
          Alongside the detection studies, laboratory research has examined what microplastic particles actually do at the cellular level. Consistent findings across multiple studies include:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Oxidative stress:</strong> Microplastic particles trigger the production of reactive oxygen species in cells, which damages DNA, proteins, and cell membranes.</li>
          <li><strong>Inflammation:</strong> Particles activate inflammatory pathways in immune cells, including macrophages. Chronic low-grade inflammation is a shared mechanism across cardiovascular disease, cancer, and neurodegeneration.</li>
          <li><strong>Cell death:</strong> At sufficient concentrations, microplastics induce apoptosis (programmed cell death) in multiple cell types in laboratory settings.</li>
          <li><strong>Gut microbiome disruption:</strong> A 2025 systematic review of 12 human and human-derived studies found that microplastic exposure consistently suppresses beneficial gut bacteria — including Bifidobacterium, Faecalibacterium, and Lactobacillus — while enriching pathogenic species. MPs also impair short-chain fatty acid production and disrupt immune and metabolic pathways (Soe Thin et al., 2025).</li>
          <li><strong>Endocrine disruption:</strong> Plastic additives — including phthalates, bisphenol A, flame retardants, and organotins — are not covalently bonded to the plastic matrix, allowing them to leach from particles after ingestion. A review of mammalian studies found these chemicals disrupt multiple hormonal axes, with documented effects on thyroid function, reproductive health, and stress hormone regulation (Ullah et al., 2023).</li>
        </ul>

        <p>
          The key caveat: most laboratory studies use concentrations that, while comparable to real-world human exposures in some cases, are not always directly translatable to clinical outcomes. The gap between "this damages cells in a petri dish" and "this causes disease in humans" is significant and requires careful bridging through epidemiological research.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">What we don't yet know</h2>

        <p>
          The field is young and moving fast. The key open questions as of 2026:
        </p>

        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Dose-response relationship:</strong> At what concentration do microplastics cause measurable harm in humans? This has not been established.</li>
          <li><strong>Nanoplastics:</strong> Particles below 1 micron are thought to be more biologically active — they cross cell membranes more readily and have higher surface area per unit mass. But detection methods for nanoplastics are still inconsistent, so the full picture of nanoplastic exposure and health effects is incomplete.</li>
          <li><strong>Long-term accumulation:</strong> The Nihart et al. data shows rising brain concentrations over 8 years. Where this trend leads over a lifetime of exposure is unknown.</li>
          <li><strong>Causation vs. association:</strong> The cardiovascular finding is the strongest clinical signal, but even the NEJM study cannot rule out confounding. Randomised controlled trials — the gold standard for causation — are effectively impossible for microplastic exposure research.</li>
          <li><strong>Polymer-specific effects:</strong> Not all plastics are equal. PP, PE, PET, PVC, and polystyrene may have different biological effects. Most studies do not disaggregate by polymer type.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">The practical implication</h2>

        <p>
          The precautionary case for reducing microplastic exposure does not require certainty about causation. The detection data alone — microplastics in blood, brain, heart, placenta — establishes that these particles are being distributed throughout the body and accumulating in sensitive tissues. The cardiovascular association is large enough to take seriously. And exposure varies enormously between individuals based on specific habits.
        </p>

        <p>
          <Link href="/blog/how-to-avoid-microplastics" className="text-teal-700 hover:underline">The highest-impact exposure reductions</Link> — stopping microwaving in plastic, switching from plastic tea bags, filtering drinking water — are low-cost, low-effort changes. The case for making them does not depend on the science being complete.
        </p>

        <p>
          To understand where your own exposure currently sits, across 15 specific pathways covered in the peer-reviewed literature, see our <Link href="/methodology" className="text-teal-700 hover:underline">full methodology</Link> and take the calculator below.
        </p>

      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Related articles</h3>
        <div className="flex flex-col gap-3">
          <Link href="/blog/how-to-avoid-microplastics" className="text-sm text-teal-700 hover:underline">How to Avoid Microplastics: The Highest-Impact Changes, Ranked →</Link>
          <Link href="/blog/how-many-microplastics-do-you-consume" className="text-sm text-teal-700 hover:underline">How Many Microplastics Do You Consume Per Week? →</Link>
          <Link href="/blog/microplastics-in-baby-formula" className="text-sm text-teal-700 hover:underline">Microplastics in Baby Formula and Breast Milk: What Parents Need to Know →</Link>
        </div>
      </div>

      <div className="bg-teal-700 rounded-2xl p-6 mt-10 text-white text-center">
        <p className="font-semibold text-lg mb-1">Find out your personal exposure</p>
        <p className="text-teal-200 text-sm mb-4">15 questions · 2 minutes · peer-reviewed science</p>
        <Link href="/calculator" className="bg-white text-teal-700 font-semibold px-7 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors">
          Start the calculator →
        </Link>
      </div>

      <div className="mt-10 border-t border-slate-100 pt-8">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">References</h3>
        <ol className="space-y-2 text-xs text-slate-500 list-decimal list-inside leading-relaxed">
          <li>Marfella R et al. Microplastics and Nanoplastics in Atheromas and Cardiovascular Events. <em>N Engl J Med</em>. 2024. DOI: 10.1056/NEJMoa2309822</li>
          <li>Nihart AJ et al. Bioaccumulation of microplastics in decedent human brains. <em>Nature Medicine</em>. 2025. DOI: 10.1038/s41591-024-03453-1</li>
          <li>Leslie HA et al. Discovery and quantification of plastic particle pollution in human blood. <em>Environ Int</em>. 2022. DOI: 10.1016/j.envint.2022.107199</li>
          <li>Jenner LC et al. Detection of microplastics in human lung tissue using μFTIR spectroscopy. <em>Sci Total Environ</em>. 2022. DOI: 10.1016/j.scitotenv.2022.154907</li>
          <li>Ragusa A et al. Plasticenta: First evidence of microplastics in human placenta. <em>Environ Int</em>. 2021. DOI: 10.1016/j.envint.2020.106274</li>
          <li>Ragusa A et al. Raman Microspectroscopy Detection and Characterisation of Microplastics in Human Breastmilk. <em>Polymers</em>. 2022. DOI: 10.3390/polym14132700</li>
          <li>Guo Y et al. The Presence of Microplastics in Human Semen and Their Associations with Semen Quality. <em>Toxics</em>. 2025. DOI: 10.3390/toxics13070566</li>
          <li>Liu S et al. Detection of various microplastics in placentas, meconium, infant feces, breastmilk and infant formula: A pilot prospective study. <em>Sci Total Environ</em>. 2022. DOI: 10.1016/j.scitotenv.2022.158699</li>
          <li>Soe Thin Z et al. Impact of microplastics on the human gut microbiome: a systematic review of microbial composition, diversity, and metabolic disruptions. <em>BMC Gastroenterol</em>. 2025. DOI: 10.1186/s12876-025-04140-2</li>
          <li>Ullah S et al. A review of the endocrine disrupting effects of micro and nano plastic and their associated chemicals in mammals. <em>Front Endocrinol (Lausanne)</em>. 2023. DOI: 10.3389/fendo.2022.1084236</li>
        </ol>
      </div>
    </article>
  );
}
