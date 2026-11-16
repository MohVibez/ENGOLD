import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// IMPORT PAGE COMPONENTS
import Home from './Home.jsx';
import About from './About.jsx';
import ArticlePage from './ArticlePage.jsx';
import Solutions from './Solutions.jsx';
import Industries from './Industries.jsx';
import Insights from './Insights.jsx';
import Careers from './Careers.jsx';
import Legal from './Legal.jsx';

// ENGOLD BRAND LOGO (official lockup: dark text for light backgrounds, white text for dark backgrounds)
const EngoldLogo = ({ onClick, className = '', size = 'default', inverted = false }) => {
  const heights = {
    compact: 'h-9',
    default: 'h-10 sm:h-12',
    large: 'h-12 sm:h-14',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="ENGOLD Consulting, go to homepage"
      className={`inline-flex items-center shrink-0 select-none group ${className}`}
    >
      <img
        src={inverted ? '/images/engold-logo-light.png' : '/images/engold-logo-dark.png'}
        alt="ENGOLD Consulting"
        width="3987"
        height="1349"
        className={`${heights[size] || heights.default} w-auto object-contain transition-opacity duration-300 group-hover:opacity-85`}
      />
    </button>
  );
};

// OFFICE LOCATION (used in the top bar and footer)
const OFFICE_ADDRESS = '15 S Howard Ave, Suite 20, Roselle, IL 60172';
const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

// SVG ICON HELPERS FOR TOP INFO BAR
const MapPinIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MailIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// SVG ICONS
const ChevronDown = ({ className = "w-4 h-4 opacity-80" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Maps any page to exactly one top-level nav item, so only one link is ever highlighted
const getActiveNav = (page) => {
  if (page === 'home') return 'home';
  if (page === 'about') return 'about';
  if (['careers', 'open-positions'].includes(page)) return 'careers';
  if (page === 'managed-services') return 'recruitment';
  if (['industries', 'financial-services', 'healthcare', 'energy', 'retail', 'manufacturing'].includes(page)) return 'industries';
  if (['solutions', 'advisory', 'risk-consulting', 'it-risk', 'compliance', 'vendor-risk', 'data-privacy', 'cyber-data'].includes(page)) return 'services';
  return null;
};

// Animated underline: slides between nav items on the active one, grows in on hover otherwise
const NavIndicator = ({ active }) =>
  active ? (
    <motion.span
      layoutId="nav-underline"
      className="absolute left-3 right-3 -bottom-[3px] h-[3px] rounded-full bg-orange-500"
      transition={{ type: 'spring', stiffness: 500, damping: 38 }}
    />
  ) : (
    <span className="absolute left-3 right-3 -bottom-[3px] h-[3px] rounded-full bg-orange-300 origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
  );

const Menu = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ─── ROUTING: every page gets its own real URL (/about, /careers, /article/<id>) ───
const PAGES = new Set([
  'home', 'about', 'article',
  'solutions', 'advisory', 'risk-consulting', 'it-risk', 'compliance', 'vendor-risk', 'data-privacy', 'cyber-data', 'managed-services',
  'industries', 'financial-services', 'healthcare', 'energy', 'retail', 'manufacturing',
  'insights', 'ai-hub', 'global-surveys', 'thought-leadership',
  'careers', 'open-positions',
  'privacy', 'terms', 'cookies',
]);
const DEFAULT_ARTICLE_ID = 'salesforce-growth';

const pathFor = (page, articleId) => {
  if (page === 'home') return '/';
  if (page === 'article') return `/article/${encodeURIComponent(articleId || DEFAULT_ARTICLE_ID)}`;
  return `/${page}`;
};

// Reads the page from the URL. Also upgrades old "/#about" links to "/about".
const parseLocation = () => {
  const legacyHash = window.location.hash.replace(/^#\/?/, '');
  const raw = window.location.pathname === '/' && PAGES.has(legacyHash) ? legacyHash : window.location.pathname;
  const [page, id] = raw.replace(/^\/+|\/+$/g, '').split('/');
  if (page === 'article') return { page: 'article', articleId: id ? decodeURIComponent(id) : DEFAULT_ARTICLE_ID };
  return { page: PAGES.has(page) ? page : 'home', articleId: null };
};

const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Executive Advisory', page: 'advisory' },
      { label: 'Risk Consulting', page: 'risk-consulting' },
      { label: 'Compliance Management', page: 'compliance' },
      { label: 'Cyber & Data Architecture', page: 'cyber-data' },
      { label: 'Managed Services', page: 'managed-services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial Services & Banking', page: 'financial-services' },
      { label: 'Healthcare & Life Sciences', page: 'healthcare' },
      { label: 'Energy & Infrastructure', page: 'energy' },
      { label: 'Retail & Consumer', page: 'retail' },
      { label: 'Manufacturing & Industrial', page: 'manufacturing' },
    ],
  },
  {
    title: 'Insights',
    links: [
      { label: 'Artificial Intelligence Hub', page: 'ai-hub' },
      { label: 'Global Executive Surveys', page: 'global-surveys' },
      { label: 'Salesforce Case Study', page: 'article', articleId: 'salesforce-growth' },
      { label: 'Privacy Risk Automation', page: 'article', articleId: 'privacy-risk' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About ENGOLD', page: 'about' },
      { label: 'Careers & Culture', page: 'careers' },
      { label: 'Open Positions', page: 'open-positions' },
    ],
  },
];

// ─── PER-PAGE SEO META ───
const SITE_URL = 'https://engoldconsultingllc.com';
const DEFAULT_DESCRIPTION =
  'ENGOLD Consulting helps regulated enterprises turn compliance into advantage, with IT risk management, SOX & SOC 2 readiness, zero-trust cybersecurity, data privacy and ERP advisory.';
const PAGE_DESCRIPTIONS = {
  about: 'Meet ENGOLD Consulting: two decades of advisory experience bridging executive vision with operational precision across IT governance, risk and transformation.',
  solutions: 'Explore ENGOLD services: executive advisory, risk consulting, IT risk, compliance, vendor risk, data privacy, cyber & data architecture and managed services.',
  advisory: 'Executive advisory for CEOs, CIOs and boards: digital transformation roadmaps, technology operating models and M&A technology due diligence.',
  'risk-consulting': 'Enterprise risk assessments, control rationalization, internal audit co-sourcing and KRI design that give leadership a single, prioritized view of risk.',
  'it-risk': 'IT general controls, segregation of duties, cloud governance and resilience testing that stand up to auditors without slowing engineering.',
  compliance: 'SOX 404, SOC 1 & SOC 2 readiness and unified control frameworks with continuous compliance monitoring. Be audit-ready every day.',
  'vendor-risk': 'Third-party and vendor risk management: program design, due diligence, continuous monitoring and contract risk review.',
  'data-privacy': 'GDPR and CCPA/CPRA privacy programs: data mapping, privacy impact assessments, consent and DSAR automation, and AI data governance.',
  'cyber-data': 'Zero-trust architecture, IAM & PAM implementation, SIEM detection engineering and cloud security across AWS, Azure and GCP.',
  'managed-services': 'Managed GRC, 24/7 SIEM & SOC, access reviews as a service and compliance staffing, delivered by a dedicated ENGOLD team.',
  industries: 'Risk, compliance and cybersecurity expertise for financial services, healthcare, energy, retail and manufacturing.',
  'financial-services': 'SOX automation, AML safeguards and FINRA/FFIEC readiness for banks, asset managers and FinTechs.',
  healthcare: 'HIPAA and HITRUST privacy programs protecting ePHI across providers, payers, digital health and clinical trials.',
  energy: 'NERC CIP compliance, OT/SCADA security and grid resilience for utilities, oil & gas and renewables.',
  retail: 'PCI DSS 4.0, e-commerce and POS security, fraud analytics and supplier risk for retail and consumer brands.',
  manufacturing: 'IEC 62443 OT security, industrial IoT protection and ERP modernization risk for manufacturers.',
  insights: 'Research, executive surveys and case studies on risk, compliance, cybersecurity and AI from ENGOLD Consulting.',
  careers: 'Build your career at ENGOLD Consulting. Explore our culture, benefits and open roles in risk, compliance and cybersecurity.',
  'open-positions': 'Open positions at ENGOLD Consulting across risk advisory, compliance, cybersecurity and technology consulting.',
  privacy: 'How ENGOLD Consulting collects, uses and protects your personal information.',
  terms: 'Terms of service governing the use of the ENGOLD Consulting website and services.',
  cookies: 'Learn how ENGOLD Consulting uses cookies and manage your preferences.',
};

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const applyPageMeta = (page, title, path) => {
  const description = PAGE_DESCRIPTIONS[page] || DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path}`;
  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', url);
};

const titleFor = (page) =>
  page === 'home'
    ? 'ENGOLD Consulting | IT Governance, Risk & Compliance Advisory'
    : `${page.split('-').map((w) => (w.length <= 2 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1))).join(' ')} | ENGOLD Consulting`;

export default function App() {
  const [initialRoute] = useState(parseLocation);
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [activeArticleId, setActiveArticleId] = useState(initialRoute.articleId || DEFAULT_ARTICLE_ID);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubRisk, setActiveSubRisk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [openFooterColumn, setOpenFooterColumn] = useState(null);

  const closeMenus = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileExpandedSection(null);
  };

  const navigateTo = (page, articleId = activeArticleId) => {
    const path = pathFor(page, articleId);
    if (window.location.pathname !== path || window.location.hash) {
      window.history.pushState({ page, articleId }, '', path);
    }
    setCurrentPage(page);
    if (page === 'article') setActiveArticleId(articleId);
    closeMenus();
  };

  const handleOpenArticle = (id) => navigateTo('article', id);

  // Normalise the URL on first load (e.g. old "/#about" → "/about") and handle browser back/forward
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const canonical = pathFor(initialRoute.page, initialRoute.articleId);
    if (window.location.pathname !== canonical) window.history.replaceState(null, '', canonical);

    const onPopState = () => {
      const { page, articleId } = parseLocation();
      setCurrentPage(page);
      if (articleId) setActiveArticleId(articleId);
      closeMenus();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Every new page starts at the top, like a real page load
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    applyPageMeta(currentPage, titleFor(currentPage), pathFor(currentPage, activeArticleId));
  }, [currentPage, activeArticleId]);

  const activeNav = getActiveNav(currentPage);
  const navItemClass = (key) =>
    `group relative px-3 py-2 text-[14px] transition-colors duration-200 ${
      activeNav === key ? 'text-orange-600 font-semibold' : 'text-gray-700 font-semibold hover:text-orange-600'
    }`;

  const toggleMobileAccordion = (section) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 antialiased selection:bg-orange-500 selection:text-white">

      {/* ═══════════════ TOP INFO BAR (BRAND ORANGE) ═══════════════ */}
      <div className="hidden md:block bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-[12px] font-semibold">
          {/* LEFT: ADDRESS + HOURS */}
          <div className="flex items-center divide-x divide-white/30">
            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 pr-5 hover:text-orange-100 transition-colors"
            >
              <MapPinIcon className="w-4 h-4 text-white" />
              <span><span className="hidden xl:inline">Chicago Office: </span>{OFFICE_ADDRESS}</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 pl-5">
              <ClockIcon className="w-4 h-4 text-white" />
              <span>Mon – Fri: 8am - 6pm EST</span>
            </div>
          </div>

          {/* RIGHT: CONTACT */}
          <div className="flex items-center divide-x divide-white/30">
            <div className="flex items-center gap-2 pr-5">
              <MailIcon className="w-4 h-4 text-white" />
              <a href="mailto:info@engoldconsultingllc.com" className="hover:text-orange-100 transition-colors">info@engoldconsultingllc.com</a>
            </div>
            <div className="flex items-center gap-2 pl-5">
              <PhoneIcon className="w-4 h-4 text-white" />
              <a href="tel:+8882527899" className="hover:text-orange-100 transition-colors">+888 252 7899</a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ MAIN NAVIGATION BAR (WHITE: LOGO + LINKS) ═══════════════ */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 text-gray-900 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">

          {/* LOGO */}
          <EngoldLogo onClick={() => navigateTo('home')} />

          {/* DESKTOP PILL NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-1 text-[14px] font-semibold text-gray-700 mx-auto">

            {/* HOME */}
            <button
              onClick={() => navigateTo('home')}
              className={navItemClass('home')}
              aria-current={activeNav === 'home' ? 'page' : undefined}
            >
              Home
              <NavIndicator active={activeNav === 'home'} />
            </button>

            {/* SERVICES (was Solutions) */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => { setActiveDropdown(null); setActiveSubRisk(false); }}
            >
              <button
                onClick={() => navigateTo('solutions')}
                className={`${navItemClass('services')} flex items-center gap-1.5`}
                aria-current={activeNav === 'services' ? 'page' : undefined}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                <NavIndicator active={activeNav === 'services'} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-2xl rounded-2xl p-2 z-50 space-y-1 text-gray-900"
                  >
                    <button
                      onClick={() => navigateTo('advisory')}
                      className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block"
                    >
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Executive Advisory</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">Digital transformation & operational roadmap</span>
                    </button>

                    <div className="relative" onMouseEnter={() => setActiveSubRisk(true)}>
                      <button
                        onClick={() => navigateTo('risk-consulting')}
                        className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group flex justify-between items-center"
                      >
                        <div>
                          <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Risk Consulting</span>
                          <span className="text-[11px] text-gray-500 block leading-tight">IT governance & compliance matrices</span>
                        </div>
                        <ChevronRight />
                      </button>

                      {activeSubRisk && (
                        <div className="absolute top-0 left-full w-72 bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-2xl rounded-2xl p-2 ml-2 space-y-1">
                          <button onClick={() => navigateTo('it-risk')} className="w-full text-left p-2.5 rounded-lg hover:bg-orange-50 text-xs font-semibold text-gray-800 hover:text-orange-600 block">IT Risk Management</button>
                          <button onClick={() => navigateTo('compliance')} className="w-full text-left p-2.5 rounded-lg hover:bg-orange-50 text-xs font-semibold text-gray-800 hover:text-orange-600 block">Compliance Management</button>
                          <button onClick={() => navigateTo('vendor-risk')} className="w-full text-left p-2.5 rounded-lg hover:bg-orange-50 text-xs font-semibold text-gray-800 hover:text-orange-600 block">3rd Party & Vendor Risk</button>
                          <button onClick={() => navigateTo('data-privacy')} className="w-full text-left p-2.5 rounded-lg hover:bg-orange-50 text-xs font-semibold text-gray-800 hover:text-orange-600 block">Data Privacy & Protection</button>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => navigateTo('cyber-data')}
                      className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block"
                    >
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Cyber & Data Architecture</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">Zero-trust security & IAM integrations</span>
                    </button>

                    <button
                      onClick={() => navigateTo('managed-services')}
                      className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block"
                    >
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Managed Services</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">Continuous audit readiness & SIEM solutions</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRIES — added Retail & Manufacturing */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigateTo('industries')}
                className={`${navItemClass('industries')} flex items-center gap-1.5`}
                aria-current={activeNav === 'industries' ? 'page' : undefined}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                <NavIndicator active={activeNav === 'industries'} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-2xl rounded-2xl p-2 z-50 space-y-1 text-gray-900"
                  >
                    <button onClick={() => navigateTo('financial-services')} className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block">
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Financial Services</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">Banking, asset management & FinTech</span>
                    </button>
                    <button onClick={() => navigateTo('healthcare')} className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block">
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Healthcare & Life Sciences</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">HIPAA, medical tech & digital health</span>
                    </button>
                    <button onClick={() => navigateTo('energy')} className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block">
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Energy & Resources</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">Critical infrastructure & cyber resilience</span>
                    </button>
                    <button onClick={() => navigateTo('retail')} className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block">
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Retail & Consumer</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">Omnichannel commerce & supply chain risk</span>
                    </button>
                    <button onClick={() => navigateTo('manufacturing')} className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group block">
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Manufacturing & Industrial</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">OT security, ERP & operational resilience</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RECRUITMENT */}
            <button
              onClick={() => navigateTo('managed-services')}
              className={navItemClass('recruitment')}
              aria-current={activeNav === 'recruitment' ? 'page' : undefined}
            >
              Recruitment
              <NavIndicator active={activeNav === 'recruitment'} />
            </button>

            {/* CAREERS */}
            <button
              onClick={() => navigateTo('careers')}
              className={navItemClass('careers')}
              aria-current={activeNav === 'careers' ? 'page' : undefined}
            >
              Careers
              <NavIndicator active={activeNav === 'careers'} />
            </button>

            {/* ABOUT US */}
            <button
              onClick={() => navigateTo('about')}
              className={navItemClass('about')}
              aria-current={activeNav === 'about' ? 'page' : undefined}
            >
              About
              <NavIndicator active={activeNav === 'about'} />
            </button>
          </nav>

          {/* RIGHT ACTION BUTTON WITH HOVER DROPDOWN */}
          <div 
            className="hidden lg:block relative py-2"
            onMouseEnter={() => setActiveDropdown('contact')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href="https://www.linkedin.com/company/engold-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2.5 pl-1.5 pr-5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[13px] font-bold tracking-wide shadow-lg shadow-orange-500/30 ring-1 ring-orange-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40 hover:from-orange-600 hover:to-orange-700 ${activeDropdown === 'contact' ? 'shadow-xl shadow-orange-500/40' : ''}`}
            >
              <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white text-orange-600 shadow-sm">
                <PhoneIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 ring-2 ring-white" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-orange-100">Let's talk</span>
                <span className="mt-0.5">Contact Us</span>
              </span>
              <ChevronDown className={`w-3.5 h-3.5 opacity-90 transition-transform duration-300 ${activeDropdown === 'contact' ? 'rotate-180' : ''}`} />
            </a>

            <AnimatePresence>
              {activeDropdown === 'contact' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full right-0 w-80 bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-2xl rounded-2xl p-2 z-50 space-y-1 text-left text-gray-900"
                >
                  <a
                    href="https://www.linkedin.com/company/engold-consulting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">LinkedIn Profile</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">Connect with ENGOLD leadership & updates</span>
                    </div>
                  </a>

                  <a
                    href="mailto:info@engoldconsultingllc.com"
                    className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <MailIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Email Us</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">info@engoldconsultingllc.com</span>
                    </div>
                  </a>

                  <a
                    href="tel:+8882527899"
                    className="w-full text-left p-3 rounded-xl hover:bg-orange-50/80 transition-colors group flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <PhoneIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 group-hover:text-orange-600 block">Phone Support</span>
                      <span className="text-[11px] text-gray-500 block leading-tight">+888 252 7899 • 8am - 6pm EST</span>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE DRAWER NAVIGATION OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-200 overflow-hidden shadow-2xl px-6 py-6 space-y-4"
            >
              {/* HOME */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => navigateTo('home')}
                  className="w-full text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600"
                >
                  Home
                </button>
              </div>

              {/* ACCORDION: SERVICES */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleMobileAccordion('solutions')}
                  className="w-full flex justify-between items-center text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileExpandedSection === 'solutions' ? 'rotate-180 text-orange-600' : ''}`} />
                </button>
                {mobileExpandedSection === 'solutions' && (
                  <div className="pl-4 pt-2 space-y-2 text-sm text-gray-600">
                    <button onClick={() => navigateTo('advisory')} className="block w-full text-left py-1 hover:text-orange-600">Executive Advisory</button>
                    <button onClick={() => navigateTo('risk-consulting')} className="block w-full text-left py-1 hover:text-orange-600">Risk Consulting</button>
                    <button onClick={() => navigateTo('it-risk')} className="block w-full text-left py-1 hover:text-orange-600 pl-3 border-l border-gray-200">IT Risk Management</button>
                    <button onClick={() => navigateTo('compliance')} className="block w-full text-left py-1 hover:text-orange-600 pl-3 border-l border-gray-200">Compliance</button>
                    <button onClick={() => navigateTo('cyber-data')} className="block w-full text-left py-1 hover:text-orange-600">Cyber & Data Architecture</button>
                    <button onClick={() => navigateTo('managed-services')} className="block w-full text-left py-1 hover:text-orange-600">Managed Services</button>
                  </div>
                )}
              </div>

              {/* ACCORDION: INDUSTRIES */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleMobileAccordion('industries')}
                  className="w-full flex justify-between items-center text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileExpandedSection === 'industries' ? 'rotate-180 text-orange-600' : ''}`} />
                </button>
                {mobileExpandedSection === 'industries' && (
                  <div className="pl-4 pt-2 space-y-2 text-sm text-gray-600">
                    <button onClick={() => navigateTo('financial-services')} className="block w-full text-left py-1 hover:text-orange-600">Financial Services</button>
                    <button onClick={() => navigateTo('healthcare')} className="block w-full text-left py-1 hover:text-orange-600">Healthcare & Life Sciences</button>
                    <button onClick={() => navigateTo('energy')} className="block w-full text-left py-1 hover:text-orange-600">Energy & Infrastructure</button>
                    <button onClick={() => navigateTo('retail')} className="block w-full text-left py-1 hover:text-orange-600">Retail & Consumer</button>
                    <button onClick={() => navigateTo('manufacturing')} className="block w-full text-left py-1 hover:text-orange-600">Manufacturing & Industrial</button>
                  </div>
                )}
              </div>

              {/* RECRUITMENT */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => navigateTo('managed-services')}
                  className="w-full text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600 block"
                >
                  Recruitment
                </button>
              </div>

              {/* CAREERS */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => navigateTo('careers')}
                  className="w-full text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600 block"
                >
                  Careers
                </button>
              </div>

              {/* ABOUT US */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => navigateTo('about')}
                  className="w-full text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600 block"
                >
                  About Us
                </button>
              </div>

              {/* MOBILE CONTACT INFO */}
              <div className="pt-2 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4 text-orange-500" />
                  <a href="mailto:info@engoldconsultingllc.com" className="hover:text-orange-600">info@engoldconsultingllc.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-orange-500" />
                  <a href="tel:+8882527899" className="hover:text-orange-600">+888 252 7899</a>
                </div>
              </div>

              {/* MOBILE QUICK ACTION BUTTON */}
              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/company/engold-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-3.5 rounded-full bg-orange-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md hover:bg-orange-600 transition-colors"
                >
                  Contact Engagement Team
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DYNAMIC ROUTE RENDERER */}
      {currentPage === 'home' && <Home onNavigate={navigateTo} onOpenArticle={handleOpenArticle} />}
      {currentPage === 'about' && <About onNavigate={navigateTo} />}
      {currentPage === 'article' && <ArticlePage storyId={activeArticleId} onBack={() => navigateTo('insights')} onOpenArticle={handleOpenArticle} />}

      {['solutions', 'advisory', 'risk-consulting', 'it-risk', 'compliance', 'vendor-risk', 'data-privacy', 'cyber-data', 'managed-services'].includes(currentPage) && (
        <Solutions pageKey={currentPage} onNavigate={navigateTo} />
      )}

      {['industries', 'financial-services', 'healthcare', 'energy', 'retail', 'manufacturing'].includes(currentPage) && (
        <Industries pageKey={currentPage} onNavigate={navigateTo} />
      )}

      {['insights', 'ai-hub', 'global-surveys', 'thought-leadership'].includes(currentPage) && (
        <Insights pageKey={currentPage} onNavigate={navigateTo} onOpenArticle={handleOpenArticle} />
      )}

      {['careers', 'open-positions'].includes(currentPage) && (
        <Careers pageKey={currentPage} onNavigate={navigateTo} />
      )}

      {['privacy', 'terms', 'cookies'].includes(currentPage) && (
        <Legal pageKey={currentPage} onNavigate={navigateTo} />
      )}

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8 sm:pb-12">

          {/* TOP: BRAND + CONTACT  |  MOTTO CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center pb-10 sm:pb-12 border-b border-slate-800">
            <div className="lg:col-span-5 space-y-5">
              <EngoldLogo onClick={() => navigateTo('home')} inverted={true} />
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Global advisory bridging executive vision with operational precision across IT governance, risk intelligence, and enterprise transformation.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>
                  <a href="mailto:info@engoldconsultingllc.com" className="inline-flex items-center gap-2.5 hover:text-orange-400 transition-colors break-all">
                    <MailIcon className="w-4 h-4 text-orange-400 shrink-0" />
                    info@engoldconsultingllc.com
                  </a>
                </li>
                <li>
                  <a href="tel:+8882527899" className="inline-flex items-center gap-2.5 hover:text-orange-400 transition-colors">
                    <PhoneIcon className="w-4 h-4 text-orange-400 shrink-0" />
                    +888 252 7899
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2.5 hover:text-orange-400 transition-colors"
                  >
                    <MapPinIcon className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Chicago Office</span>
                      15 S Howard Ave, Suite 20<br />Roselle, IL 60172
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="space-y-2 min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold block">ENGOLD MOTTO</span>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Face the Future with Confidence<sup className="text-xs align-super">®</sup>
                </p>
                <p className="text-sm text-slate-400">Ready to strengthen your risk and governance posture?</p>
              </div>
              <a
                href="https://www.linkedin.com/company/engold-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Start an Engagement
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* LINK COLUMNS: accordions on mobile, 4-column grid from md up */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 lg:gap-12 py-4 md:py-12 text-sm">
            {FOOTER_COLUMNS.map((col) => {
              const open = openFooterColumn === col.title;
              return (
                <div key={col.title} className="border-b border-slate-800/80 md:border-0">
                  <h4>
                    <button
                      type="button"
                      onClick={() => setOpenFooterColumn(open ? null : col.title)}
                      aria-expanded={open}
                      className="md:pointer-events-none w-full flex items-center justify-between py-4 md:py-0 md:mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 md:text-slate-400"
                    >
                      {col.title}
                      <ChevronDown className={`md:hidden w-4 h-4 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180 text-orange-400' : ''}`} />
                    </button>
                  </h4>
                  <ul className={`${open ? 'block' : 'hidden'} md:block space-y-3 md:space-y-2.5 pb-5 md:pb-0 text-slate-300 font-medium`}>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={pathFor(link.page, link.articleId)}
                          onClick={(e) => {
                            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                            e.preventDefault();
                            navigateTo(link.page, link.articleId);
                          }}
                          className="hover:text-orange-400 transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* BOTTOM: COPYRIGHT · LEGAL · STATUS */}
          <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-5 text-xs text-slate-400">
            <span className="text-center md:text-left">© {new Date().getFullYear()} ENGOLD Consulting, Inc. All rights reserved.</span>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <nav aria-label="Legal" className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
                {[['privacy', 'Privacy Policy'], ['terms', 'Terms of Service'], ['cookies', 'Cookie Settings']].map(([page, label]) => (
                  <a
                    key={page}
                    href={pathFor(page)}
                    onClick={(e) => {
                      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                      e.preventDefault();
                      navigateTo(page);
                    }}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <a
                href="https://www.linkedin.com/company/engold-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ENGOLD Consulting on LinkedIn"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
