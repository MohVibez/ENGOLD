import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HeartHandshake,
    Users,
    ShieldCheck,
    Compass,
    ShieldAlert,
    Lock,
    Server,
    CheckCircle2,
    Layers,
    Sparkles,
    Clock,
    BookOpen
} from 'lucide-react';

const ArrowUpRight = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
);

const ArrowRight = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const PlayIcon = () => (
    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PauseIcon = () => (
    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);

// ANIMATED HEADLINE EFFECT
const AnimatedHeadline = ({ text, className = "" }) => {
    const words = text.split(" ");
    return (
        <motion.h1
            className={`flex flex-wrap justify-start ${className}`}
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.08 } },
                hidden: {}
            }}
        >
            {words.map((word, idx) => (
                <motion.span
                    key={idx}
                    className="inline-block mr-2"
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        hidden: { opacity: 0, y: 20 }
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default function Home({ onNavigate, onOpenArticle }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [heroSlideIndex, setHeroSlideIndex] = useState(0);

    const heroSlideContent = [
        {
            tag: "GLOBAL ADVISORY & EXECUTION",
            title: "Empowering Enterprises to Transform Protect & Respond",
            subtitle: "ENGOLD Consulting is a global business advisory firm bridging executive vision with operational precision across IT governance, risk management, and digital strategy."
        },
        {
            tag: "COMPREHENSIVE SOLUTIONS",
            title: "Tailored Strategy Managed Risk & Digital Enablement",
            subtitle: "We offer end-to-end consulting—from AI enablement and cybersecurity architecture to internal controls optimization and Salesforce enterprise integration."
        },
        {
            tag: "ABOUT ENGOLD CONSULTING",
            title: "Two Decades of Engineering Unshakable Client Confidence",
            subtitle: "By prioritizing your unique goals, we partner deeply with leadership teams to mitigate compliance vulnerabilities and unlock sustainable financial growth."
        }
    ];

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(() => {
            setHeroSlideIndex((prev) => (prev + 1) % heroSlideContent.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isPlaying, heroSlideContent.length]);

    const corporateBgImages = [
        '/images/hero2.jpg',
        '/images/hero3.jpg',
        '/images/hero4.jpg'
    ];
    const [bgImageIndex, setBgImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setBgImageIndex((prev) => (prev + 1) % corporateBgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [corporateBgImages.length]);

    // FEATURED INSIGHTS BENTO DATA
    const featuredInsightsData = {
        hero: {
            id: "ai-hub",
            articleId: "ai-enablement",
            category: "ARTIFICIAL INTELLIGENCE HUB",
            badge: "FLAGSHIP RESEARCH",
            title: "Unlock the Full Potential of Your Business",
            subtitle: "Pioneering AI & Cloud Transformation by integrating generative AI and autonomous agentic workflows into core operating models with deterministic Zero-Trust guardrails.",
            readTime: "4 min read",
            date: "October 2026",
            image: "/images/Artificial_intelligence_hub.jpg",
            highlights: [
                { num: "01", label: "AI & Cloud Transformation", desc: "Enterprise architecture modernization" },
                { num: "02", label: "Strategic Execution", desc: "Real-time risk intelligence" },
                { num: "03", label: "Agile Advisory", desc: "Sustainable consulting frameworks" }
            ]
        },
        secondary: [
            {
                id: "global-surveys",
                articleId: "privacy-risk",
                category: "GLOBAL TRANSFORMATION SURVEY",
                badge: "C-SUITE BENCHMARK",
                title: "The Alignment Advantage in Transformation",
                subtitle: "Aligning strategic executive vision with operational grit, closing execution gaps between IT infrastructure, legacy stacks, and emerging regulatory requirements.",
                readTime: "5 min read",
                date: "Q4 2026",
                image: "/images/Global_transformation.jpg",
                points: [
                    "Proactive Risk & Compliance Governance",
                    "Continuous audit monitoring & threat modeling",
                    "Fostering adaptive innovation cultures"
                ]
            },
            {
                id: "finance-trends",
                articleId: "salesforce-growth",
                category: "SYNCHRONIZE",
                badge: "FINANCIAL GOVERNANCE",
                title: "2026 Global Finance Trends Survey",
                subtitle: "Optimizing financial process controls and engineering automated internal safeguards that streamline reporting, mitigate fraud, and maximize technology ROI.",
                readTime: "4 min read",
                date: "October 2026",
                image: "/images/Global_finance.jpg",
                points: [
                    "Optimizing financial process controls",
                    "Scalable enterprise risk management",
                    "Maximizing bottom-line ROI on tech investments"
                ]
            }
        ]
    };

    // CORE SERVICES DATA
    const coreServices = [
        {
            id: "advisory",
            pillar: "01",
            title: "Advisory",
            url: "https://engoldconsultingllc.com/advisory/",
            routeKey: "advisory",
            icon: <Compass className="w-6 h-6 text-orange-500" />,
            badge: "ENTERPRISE TRANSFORMATION",
            items: [
                "ERP Cloud Transformation",
                "Application Security",
                "Process Control Integration",
                "Segregation of Duties/ Sensitive Access and Cross-Platform SOD"
            ]
        },
        {
            id: "risk-consulting",
            pillar: "02",
            title: "Risk Consulting",
            url: "https://engoldconsultingllc.com/it-risk-management/",
            routeKey: "risk-consulting",
            icon: <ShieldAlert className="w-6 h-6 text-amber-500" />,
            badge: "IT GOVERNANCE & GRC",
            items: [
                "IT Risk Management",
                "Compliance Management",
                "3rd Party & Vendor Risk Management",
                "Data Privacy"
            ]
        },
        {
            id: "cyber-data",
            pillar: "03",
            title: "Cyber & Data",
            url: "https://engoldconsultingllc.com/cybersecurity/",
            routeKey: "cyber-data",
            icon: <Lock className="w-6 h-6 text-blue-500" />,
            badge: "ZERO-TRUST & SECURITY",
            items: [
                "IAM – Identity access management",
                "Security Information & Event Management (SIEM)",
                "Vulnerability Assessment and Scanning"
            ]
        },
        {
            id: "managed-services",
            pillar: "04",
            title: "Managed Services",
            url: "https://engoldconsultingllc.com/managed-services/",
            routeKey: "managed-services",
            icon: <Server className="w-6 h-6 text-emerald-500" />,
            badge: "ON-DEMAND LEADERSHIP",
            items: [
                "Staff Augmentation",
                "vCISO",
                "CAAS – Compliance as a service"
            ]
        }
    ];

    // CLIENT STORIES DATA FOR META LAYOUT
    const clientStories = [
        {
            id: "salesforce-growth",
            title: "Architecture Firm Connects Salesforce to Revenue Growth",
            readTime: "4 min read",
            image: "/images/hero2.jpg"
        },
        {
            id: "privacy-risk",
            title: "Entertainment Leader Cuts Annual Privacy Risk Reviews From Weeks to Hours",
            subtitle: "The client's annual Privacy Risk Assessment once consumed dozens of specialists' hours...",
            readTime: "3 min read",
            image: "/images/Entertainment_graph.jpg"
        },
        {
            id: "ai-enablement",
            title: "AI Enablement, From First Training to Agentic Execution",
            readTime: "4 min read",
            image: "/images/AI Enablement.jpg"
        },
        {
            id: "risk-ai",
            title: "Engold Launches Advanced Risk AI to Elevate Client Research & Delivery",
            readTime: "3 min read",
            image: "/images/hero4.jpg"
        }
    ];

    return (
        <main>
            {/* 1. HERO BANNER */}
            <section className="relative min-h-[620px] sm:min-h-[720px] flex items-center px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-slate-950 text-white">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 filter brightness-105 contrast-105"
                    onError={(e) => { e.target.style.display = 'none'; }}
                >
                    <source src="/videos/Transitioning_Video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-0 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-0 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto w-full py-20 sm:py-24 flex flex-col items-start justify-center space-y-6 sm:space-y-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={heroSlideIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4 sm:space-y-6 max-w-3xl text-left"
                        >
                            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-orange-400 uppercase block">
                                {heroSlideContent[heroSlideIndex].tag}
                            </span>

                            <AnimatedHeadline
                                text={heroSlideContent[heroSlideIndex].title}
                                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl text-left"
                            />

                            <p className="text-gray-100 text-base sm:text-xl leading-relaxed max-w-2xl font-medium text-left">
                                {heroSlideContent[heroSlideIndex].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                        <a
                            href="https://www.linkedin.com/company/engold-consulting/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/40 text-center inline-block"
                        >
                            Who we are
                        </a>
                        <button
                            onClick={() => onNavigate('about')}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/80 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 backdrop-blur-md transition-all shadow-md"
                        >
                            About us
                        </button>
                    </div>
                </div>

                {/* VERTICAL SLIDE INDICATORS */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-3">
                    {heroSlideContent.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setHeroSlideIndex(idx)}
                            className={`transition-all rounded-full ${heroSlideIndex === idx
                                ? "h-8 w-2.5 bg-orange-500 shadow-lg"
                                : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
                                }`}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* AUTOPLAY PLAY/PAUSE TOGGLE */}
                <div className="absolute bottom-6 right-6 z-20">
                    <button
                        onClick={togglePlayPause}
                        className="w-12 h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/70 hover:scale-105 transition-all shadow-2xl"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                </div>
            </section>

            {/* 2. META-STYLE FEATURED INSIGHTS BENTO SUITE */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 sm:space-y-12">
                {/* SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-bold tracking-wide uppercase">
                            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                            <span>Research & Strategic Intelligence</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Insights</span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                            Empirical benchmarks, AI transformation frameworks, and executive surveys designed to empower C-suite leaders with high-conviction decision clarity.
                        </p>
                    </div>

                    <button
                        onClick={() => onNavigate('insights')}
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all shrink-0 self-start md:self-auto group"
                    >
                        <span>Browse All Research</span>
                        <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* ASYMMETRICAL META-STYLE BENTO GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                    {/* HERO BENTO CARD: ARTIFICIAL INTELLIGENCE HUB (7 COLS) */}
                    <motion.div
                        whileHover={{ y: -6 }}
                        onClick={() => {
                            if (onOpenArticle) onOpenArticle(featuredInsightsData.hero.articleId);
                            else onNavigate(featuredInsightsData.hero.id);
                        }}
                        className="lg:col-span-7 rounded-3xl overflow-hidden relative shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-slate-800/80 bg-slate-950 text-white flex flex-col justify-between min-h-[560px]"
                    >
                        {/* HERO BACKGROUND IMAGE */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src={featuredInsightsData.hero.image}
                                alt={featuredInsightsData.hero.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-75 contrast-105"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            {/* SCRIM GRADIENTS FOR METICULOUS READABILITY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/20 z-10 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none z-10" />
                        </div>

                        {/* TOP METADATA ROW */}
                        <div className="relative z-20 p-6 sm:p-8 flex items-center justify-between">
                            <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-orange-400 border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider">
                                {featuredInsightsData.hero.badge}
                            </span>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-slate-300 text-xs font-medium border border-white/10">
                                <Clock className="w-3.5 h-3.5 text-orange-400" />
                                <span>{featuredInsightsData.hero.readTime}</span>
                            </div>
                        </div>

                        {/* BOTTOM CONTENT BLOCK */}
                        <div className="relative z-20 p-6 sm:p-10 space-y-6">
                            <div className="space-y-3 max-w-2xl">
                                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-orange-400 block">
                                    {featuredInsightsData.hero.category}
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-orange-300 transition-colors">
                                    {featuredInsightsData.hero.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                                    {featuredInsightsData.hero.subtitle}
                                </p>
                            </div>

                            {/* 3 PILLARS CHIPS */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/15">
                                {featuredInsightsData.hero.highlights.map((h, hIdx) => (
                                    <div key={hIdx} className="p-3 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 space-y-0.5">
                                        <span className="text-[10px] font-mono font-bold text-orange-400 block uppercase">
                                            {h.num} • {h.label}
                                        </span>
                                        <span className="text-[11px] text-slate-300 block font-medium leading-tight">
                                            {h.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA ACTION ROW */}
                            <div className="pt-2 flex items-center justify-between">
                                <span className="text-xs font-bold text-orange-400 tracking-wide uppercase">
                                    Explore AI Hub Paper
                                </span>
                                <div className="p-3 rounded-full bg-orange-500 text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-300 shadow-lg shadow-orange-500/30">
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* SECONDARY BENTO STACK (5 COLS) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
                        {featuredInsightsData.secondary.map((sec) => (
                            <motion.div
                                key={sec.id}
                                whileHover={{ y: -6 }}
                                onClick={() => {
                                    if (onOpenArticle && sec.articleId) onOpenArticle(sec.articleId);
                                    else onNavigate(sec.routeKey);
                                }}
                                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-pointer flex-1"
                            >
                                <div className="space-y-4">
                                    {/* THUMBNAIL WITH BADGE OVERLAY */}
                                    <div className="h-40 sm:h-44 w-full rounded-2xl overflow-hidden relative shadow-inner bg-slate-900">
                                        <img
                                            src={sec.image}
                                            alt={sec.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-95"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                                                {sec.badge}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                                            <Clock className="w-3 h-3 text-orange-400" />
                                            <span>{sec.readTime}</span>
                                        </div>
                                    </div>

                                    {/* TITLE & DESCRIPTION */}
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-widest block">
                                            {sec.category}
                                        </span>
                                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                                            {sec.title}
                                        </h4>
                                        <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                                            {sec.subtitle}
                                        </p>
                                    </div>

                                    {/* KEY POINTS CHIPS */}
                                    <div className="space-y-1.5 pt-1">
                                        {sec.points.map((pt, pIdx) => (
                                            <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                                <span className="line-clamp-1">{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* BOTTOM ACTION BAR */}
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                                    <span className="group-hover:text-orange-600 transition-colors">Read Full Survey</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-all duration-200">
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM TOPIC PILL QUICK-SWITCHER */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                            Explore Practices:
                        </span>
                        <button
                            onClick={() => onNavigate('ai-hub')}
                            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                        >
                            AI Hub & Agents
                        </button>
                        <button
                            onClick={() => onNavigate('global-surveys')}
                            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                        >
                            C-Suite Risk Surveys
                        </button>
                        <button
                            onClick={() => onNavigate('solutions')}
                            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                        >
                            Enterprise ERP & Controls
                        </button>
                    </div>

                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                        Updated continuously with global industry benchmarks
                    </span>
                </div>
            </section>

            {/* 3. EXPLORE OUR CORE SERVICES SECTION */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
                {/* SECTION HEADER */}
                <div className="space-y-5 max-w-4xl">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-bold tracking-wide uppercase">
                        <Layers className="w-3.5 h-3.5 text-orange-600" />
                        <span>Practice Domains & Capabilities</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Core Services</span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                        Clients value our ideas and tailored methodologies grounded in leading best practices to help them address risks associated with their processes, technologies, and people within their IT organization by connecting seemingly disparate risks and opportunities in operations, technology, and compliance.
                    </p>
                </div>

                {/* 4 CORE SERVICES BENTO CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {coreServices.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ y: -6 }}
                            onClick={() => onNavigate(service.routeKey)}
                            className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer relative overflow-hidden"
                        >
                            {/* TOP GRADIENT ACCENT ON HOVER */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="space-y-5">
                                {/* CARD HEADER: ICON & PILLAR */}
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:scale-105 transition-all duration-300 shadow-sm">
                                        {service.icon}
                                    </div>
                                    <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-orange-600 transition-colors uppercase tracking-widest">
                                        Pillar {service.pillar}
                                    </span>
                                </div>

                                {/* SERVICE TITLE */}
                                <div>
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                                        {service.badge}
                                    </span>
                                    <a
                                        href={service.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            // Allow in-app navigation on standard click, external link on Ctrl/Cmd click
                                            if (!e.ctrlKey && !e.metaKey) {
                                                e.preventDefault();
                                                onNavigate(service.routeKey);
                                            }
                                        }}
                                        className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors inline-block"
                                    >
                                        {service.title}
                                    </a>
                                </div>

                                {/* SERVICE ITEMS LIST */}
                                <div className="space-y-2.5 pt-1">
                                    {service.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CARD FOOTER WITH CALL TO ACTION */}
                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                                    Explore Practice
                                </span>
                                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-all duration-200">
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. MODERN CONSULTING PHILOSOPHY & MANIFESTO */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white border border-slate-800/80 shadow-2xl">
                    {/* ROTATING CINEMATIC BACKGROUND */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={bgImageIndex}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 0.22, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0 z-0 pointer-events-none"
                        >
                            <img
                                src={corporateBgImages[bgImageIndex]}
                                alt="Engold Consulting Strategic Execution"
                                className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* AMBIENT GRADIENTS & MODERN MESH GLOWS */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/60 z-0 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-0 pointer-events-none" />
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* SECTION CONTENT */}
                    <div className="relative z-10 p-8 sm:p-12 lg:p-16 space-y-10 sm:space-y-12">
                        {/* HEADER BLOCK */}
                        <div className="space-y-5 max-w-4xl">
                            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-orange-400">
                                    OUR CONSULTING PHILOSOPHY
                                </span>
                            </div>

                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
                                Business consulting to enable you to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">grow and operate with confidence</span>.
                            </h2>

                            <p className="text-base sm:text-xl text-gray-200 leading-relaxed max-w-3xl font-normal">
                                By caring about your priorities, listening to you and understanding your business needs, we continuously collaborate to deliver the very best ideas and solutions to meet your objectives.
                            </p>
                        </div>

                        {/* 3 MODERN BENTO PILLARS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* PILLAR 1: CARING */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07] backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/10">
                                        <HeartHandshake className="w-6 h-6" />
                                    </div>
                                    <span className="text-[11px] font-mono font-bold text-orange-400 tracking-wider uppercase block">
                                        01 • Listen & Understand
                                    </span>
                                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                                        Caring About Your Priorities
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                                        We take the time to deeply understand your operating reality, stakeholder dynamics, and corporate mandates before architecting recommendations.
                                    </p>
                                </div>
                            </motion.div>

                            {/* PILLAR 2: COLLABORATE */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07] backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/10">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <span className="text-[11px] font-mono font-bold text-orange-400 tracking-wider uppercase block">
                                        02 • Agile Partnership
                                    </span>
                                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                                        Continuous Collaboration
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                                        Working hand-in-hand with executive leadership and internal teams to bridge IT governance, change management, and technical delivery.
                                    </p>
                                </div>
                            </motion.div>

                            {/* PILLAR 3: DELIVER */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07] backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/10">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="text-[11px] font-mono font-bold text-orange-400 tracking-wider uppercase block">
                                        03 • Measurable Execution
                                    </span>
                                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                                        Delivering Proven Solutions
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                                        Translating strategy into fortified data security, audit readiness, streamlined processes, and unshakable business confidence.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* BOTTOM ACTION & NAVIGATION BAR */}
                        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    onClick={() => onNavigate('about')}
                                    className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/25 group"
                                >
                                    <span>Learn more about us</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => onNavigate('solutions')}
                                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 backdrop-blur-md transition-all"
                                >
                                    <span>Explore solutions</span>
                                </button>
                            </div>

                            {/* MODERN AMBIENT IMAGE SELECTOR */}
                            <div className="flex items-center space-x-3 self-end sm:self-center">
                                <span className="text-[11px] text-gray-400 font-mono tracking-widest uppercase">
                                    0{bgImageIndex + 1} / 0{corporateBgImages.length}
                                </span>
                                <div className="flex space-x-1.5">
                                    {corporateBgImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setBgImageIndex(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${bgImageIndex === idx ? "w-7 bg-orange-500" : "w-2.5 bg-white/40 hover:bg-white"}`}
                                            aria-label={`Switch to image ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. META-STYLE FEATURED CLIENT STORIES SECTION */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 sm:space-y-10">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Featured client stories</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {clientStories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -6 }}
                            onClick={() => onOpenArticle(story.id)}
                            className="flex flex-col justify-between cursor-pointer group space-y-4"
                        >
                            {/* TOP ROUNDED IMAGE CONTAINER (MATCHING META STYLE) */}
                            <div className="h-56 sm:h-64 w-full rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-gray-200 relative">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* CLEAN BELOW-CARD TEXT & ACTION BUTTON (MATCHING META STYLE) */}
                            <div className="space-y-3 px-1 flex-1 flex flex-col justify-between">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-orange-600 transition-colors">
                                    {story.title}
                                </h3>

                                <div className="flex items-center space-x-2 pt-1 text-xs font-semibold text-gray-700">
                                    <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all">
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                    <span>Read article</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}