import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from './PageHero.jsx';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const CONTACT_EMAIL = 'mailto:info@engoldconsultingllc.com';

const INDUSTRY_SIBLINGS = [
  { key: 'industries', label: 'All Industries' },
  { key: 'financial-services', label: 'Financial Services' },
  { key: 'healthcare', label: 'Healthcare & Life Sciences' },
  { key: 'energy', label: 'Energy & Utilities' },
  { key: 'retail', label: 'Retail & Consumer' },
  { key: 'manufacturing', label: 'Manufacturing & Industrial' },
];

// Unique hero content for every Industries route
const INDUSTRY_HEROES = {
  industries: {
    eyebrow: 'Industries We Serve',
    title: 'Transforming regulatory pressure into',
    highlight: 'enterprise advantage.',
    description:
      'For over two decades, ENGOLD has partnered with executive leadership across the world’s most stringently regulated industries, deploying engineering-first compliance, zero-trust architectures and operational safeguards.',
    image: '/images/Global_finance.jpg',
    stats: [
      { value: '6', label: 'Regulated sectors with dedicated practice leads' },
      { value: '20+', label: 'Years advising regulated enterprises' },
      { value: '40+', label: 'Regulatory frameworks mastered' },
      { value: '99.9%', label: 'Average client audit pass rate' },
    ],
    primaryCta: { label: 'Find Your Sector', page: 'financial-services' },
    secondaryCta: { label: 'Browse Services', page: 'solutions' },
  },
  'financial-services': {
    eyebrow: 'Banking · Capital Markets · FinTech',
    title: 'Controls that move at the',
    highlight: 'speed of capital.',
    description:
      'From Tier-1 banks to high-growth FinTechs, we automate SOX 404 testing, harden trading and payments infrastructure, and turn regulatory scrutiny from FINRA, FFIEC and the SEC into a competitive operating advantage.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    stats: [
      { value: '$10B+', label: 'Assets under protected oversight' },
      { value: '99.9%', label: 'SOX / GLBA audit pass rate' },
      { value: '-64%', label: 'Fraud review latency' },
      { value: '120+', label: 'Automated key controls deployed' },
    ],
    primaryCta: { label: 'Book a SOX Readiness Review', href: CONTACT_EMAIL },
    secondaryCta: { label: 'Compliance Services', page: 'compliance' },
  },
  healthcare: {
    eyebrow: 'Providers · Payers · Life Sciences',
    title: 'Protect every patient record.',
    highlight: 'Accelerate every innovation.',
    description:
      'Telehealth, connected medical devices and decentralized clinical trials have expanded the attack surface overnight. We build HIPAA- and HITRUST-ready privacy programs that safeguard ePHI without slowing down care delivery or research.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    stats: [
      { value: '45M+', label: 'Patient records fortified' },
      { value: '100%', label: 'HIPAA / HITRUST compliance' },
      { value: '< 24 hrs', label: 'Vendor (BAA) risk turnaround' },
      { value: '0', label: 'Reportable breaches post-engagement' },
    ],
    primaryCta: { label: 'Request a HIPAA Risk Assessment', href: CONTACT_EMAIL },
    secondaryCta: { label: 'Data Privacy Services', page: 'data-privacy' },
  },
  energy: {
    eyebrow: 'Utilities · Oil & Gas · Renewables',
    title: 'Keep the grid running,',
    highlight: 'whatever comes at it.',
    description:
      'Nation-state actors now target pipelines, substations and smart-grid edge devices. We separate operational technology from corporate IT, modernize legacy SCADA safely, and keep you continuously audit-ready for NERC CIP and TSA directives.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80',
    stats: [
      { value: '250K+', label: 'Grid points protected' },
      { value: '100%', label: 'NERC CIP verification score' },
      { value: '< 15 min', label: 'Incident containment time' },
      { value: '24/7', label: 'OT threat monitoring coverage' },
    ],
    primaryCta: { label: 'Schedule an OT Security Review', href: CONTACT_EMAIL },
    secondaryCta: { label: 'Cyber & Data Architecture', page: 'cyber-data' },
  },
  retail: {
    eyebrow: 'Omnichannel · E-commerce · Consumer Brands',
    title: 'Secure every checkout,',
    highlight: 'in-store and online.',
    description:
      'Peak-season traffic, card-not-present fraud and sprawling supplier networks put customer trust on the line every day. We harden POS and e-commerce platforms, achieve PCI DSS 4.0 and protect the customer data your brand is built on.',
    image: 'https://images.unsplash.com/photo-1556740758-90de940ed532?auto=format&fit=crop&w=1920&q=80',
    stats: [
      { value: '120M+', label: 'Transaction records protected' },
      { value: '100%', label: 'PCI DSS compliance rate' },
      { value: '+72%', label: 'Fraud detection improvement' },
      { value: '300+', label: 'Suppliers risk-assessed' },
    ],
    primaryCta: { label: 'Start a PCI DSS 4.0 Assessment', href: CONTACT_EMAIL },
    secondaryCta: { label: 'Vendor Risk Services', page: 'vendor-risk' },
  },
  manufacturing: {
    eyebrow: 'Smart Factory · Industrial IoT · Supply Chain',
    title: 'Connected factories need',
    highlight: 'uncompromising security.',
    description:
      'As IT and OT networks converge, a single compromised sensor can halt a production line. We secure industrial IoT, protect intellectual property and de-risk ERP modernization so your plants stay productive and compliant worldwide.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    stats: [
      { value: '85K+', label: 'OT endpoints secured' },
      { value: '100%', label: 'IEC 62443 compliance' },
      { value: '-56%', label: 'Unplanned downtime' },
      { value: '40+', label: 'Plants assessed globally' },
    ],
    primaryCta: { label: 'Assess Your Plant Security', href: CONTACT_EMAIL },
    secondaryCta: { label: 'IT Risk Management', page: 'it-risk' },
  },
};

export default function Industries({ pageKey = 'industries', onNavigate }) {
  const hero = INDUSTRY_HEROES[pageKey] || INDUSTRY_HEROES.industries;
  const selectedFilter = pageKey in INDUSTRY_HEROES && pageKey !== 'industries' ? pageKey : 'all';

  const industriesData = [
    {
      id: "financial-services",
      sectorKey: "financial-services",
      badge: "FinTech & Banking Infrastructure",
      title: "Financial Services & Asset Management",
      headline: "Automating supervisory controls and mitigating systemic fraud across multi-asset architectures.",
      description: "We empower Tier-1 investment banks, wealth managers, and modern FinTech innovators to turn strict financial regulations into continuous operating advantages. From algorithmic trade surveillance to automated SOX 404 internal testing, our advisory teams harden infrastructure while accelerating deal velocity.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      accent: "from-blue-600 to-indigo-700",
      metrics: [
        { label: "Assets Under Protected Oversight", value: "$10B+" },
        { label: "SOX / GLBA Audit Pass Rate", value: "99.9%" },
        { label: "Fraud Review Latency Reduction", value: "-64%" }
      ],
      compliancePills: ["SOX 404", "GLBA", "PCI-DSS 4.0", "FINRA Rule 3110", "FFIEC"],
      capabilities: [
        "Continuous automated controls monitoring & testing",
        "Algorithmic transaction risk scoring & AML safeguards",
        "Zero-trust cloud data lake partitioning for customer PII",
        "Third-party FinTech API vendor risk assessments"
      ]
    },
    {
      id: "healthcare",
      sectorKey: "healthcare",
      badge: "Life Sciences & Digital Health",
      title: "Healthcare & Life Sciences",
      headline: "Safeguarding confidential clinical datasets and medical IoT infrastructures.",
      description: "Modern healthcare ecosystems balance rapid telemedicine expansion with zero-tolerance patient confidentiality requirements. We engineer robust, interconnected privacy frameworks that safeguard electronic protected health information (ePHI) across distributed clinical trials, hospital networks, and cloud EHR providers.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      accent: "from-emerald-600 to-teal-700",
      metrics: [
        { label: "Patient Records Fortified", value: "45M+" },
        { label: "HIPAA / HITRUST Compliance", value: "100%" },
        { label: "Vendor Risk Turnaround Time", value: "< 24 hrs" }
      ],
      compliancePills: ["HIPAA Security", "HITRUST CSF", "FDA 21 CFR Part 11", "GDPR Health", "CCPA/CPRA"],
      capabilities: [
        "Automated Privacy Risk Assessments (PRA) for digital health apps",
        "End-to-end cryptographic lineage for decentralized clinical trials",
        "Medical device IoT firmware penetration & vulnerability scans",
        "Business Associate Agreement (BAA) vendor compliance audit"
      ]
    },
    {
      id: "energy",
      sectorKey: "energy",
      badge: "Critical Infrastructure & CleanTech",
      title: "Energy, Resources & Utilities",
      headline: "Fortifying distributed smart grids and sovereign resource operations against cyber warfare.",
      description: "Critical infrastructure operators confront state-sponsored advanced persistent threats (APTs) while migrating legacy SCADA systems to intelligent edge clouds. Engold designs defense-in-depth security architectures that isolate operational technology (OT) from enterprise corporate IT, meeting federal cyber directives.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      accent: "from-amber-600 to-orange-700",
      metrics: [
        { label: "Grid Points Protected", value: "250K+" },
        { label: "NERC CIP Verification Score", value: "100%" },
        { label: "Incident Containment Time", value: "< 15 min" }
      ],
      compliancePills: ["NERC CIP", "IEC 62443", "NIST SP 800-82", "CMMC Level 3", "TSA Pipeline"],
      capabilities: [
        "Air-gapped SCADA/ICS architecture reviews & network zoning",
        "High-fidelity cyber adversary simulation & tabletop drills",
        "Supply chain hardware integrity & firmware attestation",
        "Automated operational resilience reporting for federal agencies"
      ]
    },
    {
      id: "technology",
      sectorKey: "technology",
      badge: "Cloud SaaS & Enterprise Tech",
      title: "Technology & Software Platforms",
      headline: "Empowering hyper-growth software enterprises to achieve global certifications effortlessly.",
      description: "High-velocity SaaS and AI platforms need enterprise compliance that won't paralyze engineering sprint velocity. We implement code-native compliance monitoring and DevSecOps controls that satisfy enterprise procurement teams, unlocking multi-million-dollar ARR deals with Fortune 500 buyers.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      accent: "from-purple-600 to-indigo-700",
      metrics: [
        { label: "SOC 2 Turnaround", value: "30 Days" },
        { label: "Enterprise Deal Velocity", value: "+38%" },
        { label: "Security Questionnaire Automation", value: "85%" }
      ],
      compliancePills: ["SOC 2 Type II", "ISO/IEC 27001", "FedRAMP Moderate", "CSA STAR", "GDPR"],
      capabilities: [
        "Continuous CI/CD security posture & infrastructure-as-code linting",
        "Automated enterprise vendor security questionnaire responses",
        "Zero-Trust Cloud IAM role rationalization for AWS / GCP / Azure",
        "AI governance & prompt-injection security testing frameworks"
      ]
    },
    {
      id: "retail",
      sectorKey: "retail",
      badge: "Omnichannel Commerce & Supply Chain",
      title: "Retail & Consumer",
      headline: "Securing high-volume transaction ecosystems and building resilient omnichannel supply chains.",
      description: "Retail and consumer brands face relentless pressure to deliver seamless omnichannel experiences while safeguarding millions of customer payment records and PII. Engold helps retailers harden POS systems, e-commerce platforms, and supply chain logistics against sophisticated fraud and data-breach threats.",
      image: "https://images.unsplash.com/photo-1556740758-90de940ed532?auto=format&fit=crop&w=1200&q=80",
      accent: "from-rose-600 to-pink-700",
      metrics: [
        { label: "Transaction Records Protected", value: "120M+" },
        { label: "PCI-DSS Compliance Rate", value: "100%" },
        { label: "Fraud Detection Improvement", value: "+72%" }
      ],
      compliancePills: ["PCI-DSS 4.0", "CCPA/CPRA", "GDPR", "SOC 2 Type II", "ISO 27001"],
      capabilities: [
        "End-to-end POS & e-commerce payment security architecture",
        "Supply chain vendor risk assessment & third-party monitoring",
        "Customer PII data-loss prevention & privacy by design",
        "Omnichannel fraud analytics & real-time transaction scoring"
      ]
    },
    {
      id: "manufacturing",
      sectorKey: "manufacturing",
      badge: "OT Security & Smart Factory",
      title: "Manufacturing & Industrial",
      headline: "Protecting operational technology environments and enabling secure digital transformation at scale.",
      description: "Modern manufacturers are integrating IT/OT networks, IoT-enabled production lines, and cloud-based ERP systems—expanding attack surfaces. Engold delivers defense-in-depth strategies that secure smart factory ecosystems, protect intellectual property, and ensure regulatory compliance across global operations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      accent: "from-slate-600 to-zinc-700",
      metrics: [
        { label: "OT Endpoints Secured", value: "85K+" },
        { label: "IEC 62443 Compliance", value: "100%" },
        { label: "Downtime Reduction", value: "-56%" }
      ],
      compliancePills: ["IEC 62443", "NIST SP 800-82", "CMMC", "ISO 27001", "GDPR Industrial"],
      capabilities: [
        "IT/OT convergence security architecture & network segmentation",
        "Industrial IoT firmware integrity & vulnerability management",
        "ERP cloud migration risk assessment (SAP, Oracle)",
        "Intellectual property protection & trade-secret safeguards"
      ]
    }
  ];

  const filteredIndustries = selectedFilter === 'all' 
    ? industriesData 
    : industriesData.filter(item => item.sectorKey === selectedFilter);

  return (
    <main className="bg-[#F8FAFC] min-h-screen text-slate-900">
      <PageHero
        pageKey={pageKey}
        onNavigate={onNavigate}
        breadcrumb={[
          { label: "Home", page: "home" },
          ...(pageKey === "industries" ? [] : [{ label: "Industries", page: "industries" }]),
          { label: INDUSTRY_SIBLINGS.find((s) => s.key === pageKey)?.label || "Industries" },
        ]}
        siblings={INDUSTRY_SIBLINGS}
        siblingsLabel="Industries"
        {...hero}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 space-y-16">

        {/* COMPREHENSIVE SECTOR BENTO CARDS */}
        <section className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredIndustries.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 group"
              >
                {/* LEFT COLUMN: HERO IMAGE & STATS OVERLAY */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold block mb-1">
                      {ind.badge}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight mb-4">
                      {ind.title}
                    </h3>

                    {/* METRICS ROW */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
                      {ind.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <span className="text-lg sm:text-xl font-extrabold text-white block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-slate-300 block leading-tight font-medium">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: CORE SOLUTION INTELLIGENCE */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                        {ind.headline}
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                        {ind.description}
                      </p>
                    </div>

                    {/* COMPLIANCE STANDARDS CHIPS */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Verified Regulatory Coverage
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.compliancePills.map((pill, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CAPABILITIES CHECKLIST */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Operational Engineering Engagements
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {ind.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM ACTION BAR */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <ShieldCheck className="w-4 h-4 text-orange-600" />
                      <span>Dedicated practice leads with Fortune 100 C-level experience</span>
                    </div>

                    <button
                      onClick={() => onNavigate('solutions')}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-orange-500 text-white text-xs font-bold tracking-wide uppercase transition-all duration-200 shadow-sm"
                    >
                      <span>Explore Sector Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {/* META-STYLE CONSULTATION CALLOUT BANNER */}
        <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-10 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 block">
              ENGAGEMENT BRIEFING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Request a Sector-Specific Risk & Strategy Diagnostic
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Our partners will conduct an initial 30-minute confidential briefing to benchmark your current regulatory posture against peer institutions in your sector.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/25"
              >
                Schedule Confidential Review
              </button>
              <button
                onClick={() => onNavigate('solutions')}
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-colors border border-white/15"
              >
                Browse All Solutions
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}