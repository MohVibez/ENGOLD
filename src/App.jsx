import React, { useState } from 'react';
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

// WORLD-CLASS ENGOLD BRAND LOGO WITH MODERN BESIDE-TEXT TYPOGRAPHY
const EngoldLogo = ({ onClick, className = '', size = 'default', inverted = false }) => {
  const [imgError, setImgError] = useState(false);

  const iconSizes = {
    compact: 'h-9 w-auto',
    default: 'h-11 sm:h-12 w-auto',
    large: 'h-12 sm:h-14 w-auto'
  };

  return (
    <div 
      onClick={onClick} 
      className={`inline-flex items-center gap-3 sm:gap-3.5 select-none cursor-pointer group transition-all duration-300 ${className}`}
    >
      {!imgError && (
        <img
          src="/images/ENGOLD-LOGO.png"
          alt="ENGOLD Symbol"
          className={`${iconSizes[size] || iconSizes.default} object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}
          onError={() => setImgError(true)}
        />
      )}

      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline space-x-1">
          <span 
            className={`text-[21px] sm:text-[25px] font-black tracking-[0.04em] ${inverted ? 'text-white group-hover:text-orange-400' : 'text-slate-900 group-hover:text-orange-600'} transition-colors duration-200`}
            style={{ 
              fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
              letterSpacing: '0.05em'
            }}
          >
            ENGOLD
          </span>
          <span className="text-[10px] font-sans font-bold text-orange-500 align-top">®</span>
        </div>
        <span 
          className={`text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.38em] ${inverted ? 'text-slate-300' : 'text-slate-800'} mt-1 transition-colors duration-200`}
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          CONSULTING
        </span>
      </div>
    </div>
  );
};

// SVG ICON HELPERS FOR TOP INFO BAR
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeArticleId, setActiveArticleId] = useState('salesforce-growth');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubRisk, setActiveSubRisk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileExpandedSection(null);
    if (page === 'home') {
      window.history.pushState("", document.title, window.location.pathname);
    } else {
      window.location.hash = page;
    }
  };

  const handleOpenArticle = (id) => {
    setActiveArticleId(id);
    navigateTo('article');
  };

  const toggleMobileAccordion = (section) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 antialiased selection:bg-orange-500 selection:text-white">

      {/* ═══════════════ TOP INFO BAR ═══════════════ */}
      <div className="hidden md:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* LEFT: LOGO */}
          <EngoldLogo onClick={() => navigateTo('home')} />

          {/* RIGHT: CONTACT STRIP */}
          <div className="flex items-center divide-x divide-gray-200">
            {/* Business Hours */}
            <div className="flex items-center gap-2.5 px-5">
              <ClockIcon className="w-[18px] h-[18px] text-orange-500" />
              <div className="leading-tight">
                <span className="text-[11px] font-semibold text-gray-500 block">Business Hours</span>
                <span className="text-[12px] font-bold text-gray-800">8am - 6pm EST</span>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-2.5 px-5">
              <MailIcon className="w-[18px] h-[18px] text-orange-500" />
              <div className="leading-tight">
                <span className="text-[11px] font-semibold text-gray-500 block">Email Us</span>
                <a href="mailto:info@engoldconsultingllc.com" className="text-[12px] font-bold text-gray-800 hover:text-orange-600 transition-colors">info@engoldconsultingllc.com</a>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2.5 pl-5">
              <PhoneIcon className="w-[18px] h-[18px] text-orange-500" />
              <div className="leading-tight">
                <span className="text-[11px] font-semibold text-gray-500 block">Contact Us</span>
                <a href="tel:+8882527899" className="text-[12px] font-bold text-gray-800 hover:text-orange-600 transition-colors">+888 252 7899</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ MAIN NAVIGATION BAR (BRAND ORANGE) ═══════════════ */}
      <header className="sticky top-0 z-50 bg-orange-500 border-b border-orange-600 text-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

          {/* MOBILE LOGO (hidden on desktop since it's in the info bar) */}
          <div className="md:hidden">
            <EngoldLogo onClick={() => navigateTo('home')} className="!h-10" inverted={true} />
          </div>

          {/* DESKTOP PILL NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-1 text-[14px] font-semibold text-white mx-auto">

            {/* HOME */}
            <button
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 rounded-full transition-all ${currentPage === 'home' ? 'bg-white text-orange-600 font-bold shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/15'}`}
            >
              Home
            </button>

            {/* SERVICES (was Solutions) */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => { setActiveDropdown(null); setActiveSubRisk(false); }}
            >
              <button
                onClick={() => navigateTo('solutions')}
                className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${['solutions', 'advisory', 'risk-consulting', 'it-risk', 'compliance', 'vendor-risk', 'data-privacy', 'cyber-data', 'managed-services'].includes(currentPage) ? 'bg-white text-orange-600 font-bold shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/15'}`}
              >
                <span>Services</span> <ChevronDown className="w-3.5 h-3.5 opacity-80" />
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
                className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${['industries', 'financial-services', 'healthcare', 'energy', 'retail', 'manufacturing'].includes(currentPage) ? 'bg-white text-orange-600 font-bold shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/15'}`}
              >
                <span>Industries</span> <ChevronDown className="w-3.5 h-3.5 opacity-80" />
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

            {/* ABOUT US */}
            <button
              onClick={() => navigateTo('about')}
              className={`px-4 py-2 rounded-full transition-all ${currentPage === 'about' ? 'bg-white text-orange-600 font-bold shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/15'}`}
            >
              About
            </button>

            {/* CAREERS */}
            <button
              onClick={() => navigateTo('careers')}
              className={`px-4 py-2 rounded-full transition-all ${['careers', 'open-positions'].includes(currentPage) ? 'bg-white text-orange-600 font-bold shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/15'}`}
            >
              Careers
            </button>

            {/* IT */}
            <button
              onClick={() => navigateTo('cyber-data')}
              className={`px-4 py-2 rounded-full transition-all ${['cyber-data', 'it-risk'].includes(currentPage) ? 'bg-white text-orange-600 font-bold shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/15'}`}
            >
              IT
            </button>

            {/* RECRUITMENT */}
            <button
              onClick={() => navigateTo('managed-services')}
              className={`px-4 py-2 rounded-full transition-all ${['managed-services', 'open-positions'].includes(currentPage) ? 'bg-white text-orange-600 font-bold shadow-sm' : 'text-white/90 hover:text-white hover:bg-white/15'}`}
            >
              Recruitment
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
              className="px-6 py-2 rounded-full bg-slate-900 hover:bg-slate-950 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5"
            >
              <span>Contact Us</span> <ChevronDown className="w-3.5 h-3.5 opacity-80" />
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
            className="lg:hidden p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm focus:outline-none transition-colors"
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

              {/* ABOUT US */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => navigateTo('about')}
                  className="w-full text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600 block"
                >
                  About Us
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

              {/* IT */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => navigateTo('cyber-data')}
                  className="w-full text-left text-base font-bold text-gray-900 py-2 hover:text-orange-600 block"
                >
                  IT
                </button>
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

      {/* META-STYLE COMPREHENSIVE FOOTER */}
      <footer className="bg-slate-950 text-white pt-20 pb-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* TOP SECTION: BRAND & VISION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-slate-800">
            <div className="lg:col-span-5 space-y-4">
              <EngoldLogo onClick={() => navigateTo('home')} inverted={true} />
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Global advisory bridging executive vision with operational precision across IT governance, risk intelligence, and enterprise transformation.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold block">ENGOLD MOTTO</span>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Face the Future with Confidence<sup>®</sup>
                </p>
              </div>
              <a
                href="https://www.linkedin.com/company/engold-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/25 shrink-0 inline-block text-center"
              >
                Start an Engagement
              </a>
            </div>
          </div>

          {/* MIDDLE NAVIGATION COLUMNS (META STYLE) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-sm">
            {/* SOLUTIONS */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Solutions</h4>
              <ul className="space-y-2.5 text-slate-300 font-medium">
                <li><button onClick={() => navigateTo('advisory')} className="hover:text-orange-400 transition-colors">Executive Advisory</button></li>
                <li><button onClick={() => navigateTo('risk-consulting')} className="hover:text-orange-400 transition-colors">Risk Consulting</button></li>
                <li><button onClick={() => navigateTo('compliance')} className="hover:text-orange-400 transition-colors">Compliance Management</button></li>
                <li><button onClick={() => navigateTo('cyber-data')} className="hover:text-orange-400 transition-colors">Cyber & Data Architecture</button></li>
                <li><button onClick={() => navigateTo('managed-services')} className="hover:text-orange-400 transition-colors">Managed Services</button></li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Industries</h4>
              <ul className="space-y-2.5 text-slate-300 font-medium">
                <li><button onClick={() => navigateTo('financial-services')} className="hover:text-orange-400 transition-colors">Financial Services & Banking</button></li>
                <li><button onClick={() => navigateTo('healthcare')} className="hover:text-orange-400 transition-colors">Healthcare & Life Sciences</button></li>
                <li><button onClick={() => navigateTo('energy')} className="hover:text-orange-400 transition-colors">Energy & Infrastructure</button></li>
                <li><button onClick={() => navigateTo('retail')} className="hover:text-orange-400 transition-colors">Retail & Consumer</button></li>
                <li><button onClick={() => navigateTo('manufacturing')} className="hover:text-orange-400 transition-colors">Manufacturing & Industrial</button></li>
              </ul>
            </div>

            {/* INSIGHTS */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Insights</h4>
              <ul className="space-y-2.5 text-slate-300 font-medium">
                <li><button onClick={() => navigateTo('ai-hub')} className="hover:text-orange-400 transition-colors">Artificial Intelligence Hub</button></li>
                <li><button onClick={() => navigateTo('global-surveys')} className="hover:text-orange-400 transition-colors">Global Executive Surveys</button></li>
                <li><button onClick={() => handleOpenArticle('salesforce-growth')} className="hover:text-orange-400 transition-colors">Salesforce Case Study</button></li>
                <li><button onClick={() => handleOpenArticle('privacy-risk')} className="hover:text-orange-400 transition-colors">Privacy Risk Automation</button></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Company</h4>
              <ul className="space-y-2.5 text-slate-300 font-medium">
                <li><button onClick={() => navigateTo('about')} className="hover:text-orange-400 transition-colors">About ENGOLD</button></li>
                <li><button onClick={() => navigateTo('careers')} className="hover:text-orange-400 transition-colors">Careers & Culture</button></li>
                <li><button onClick={() => navigateTo('open-positions')} className="hover:text-orange-400 transition-colors">Open Positions</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-orange-400 transition-colors">Leadership & Governance</button></li>
              </ul>
            </div>
          </div>

          {/* LOWER LEGAL & COPYRIGHT (META STYLE) */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <span>© {new Date().getFullYear()} ENGOLD Consulting, Inc. All rights reserved.</span>
              <button onClick={() => navigateTo('privacy')} className="hover:text-orange-400 transition-colors">Privacy Policy</button>
              <button onClick={() => navigateTo('terms')} className="hover:text-orange-400 transition-colors">Terms of Service</button>
              <button onClick={() => navigateTo('cookies')} className="hover:text-orange-400 transition-colors">Cookie Settings</button>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Global Systems Operational</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}