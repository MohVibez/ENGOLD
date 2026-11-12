import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight, Sparkles, Building2, TrendingUp } from 'lucide-react';

export default function About({ onNavigate }) {
    const certifications = [
        { title: "CISA", full: "Certified Information Systems Auditor", issuer: "ISACA" },
        { title: "CISSP", full: "Certified Information Systems Security Professional", issuer: "(ISC)²" },
        { title: "CISM", full: "Certified Information Security Manager", issuer: "ISACA" },
        { title: "CEH", full: "Certified Ethical Hacker", issuer: "EC-Council" },
        { title: "CDPSE", full: "Certified Data Privacy Solutions Engineer", issuer: "ISACA" },
        { title: "CRISC", full: "Certified in Risk and Information Systems Control", issuer: "ISACA" }
    ];

    const impactStats = [
        { stat: "20+", label: "Years of Leadership", sub: "Advising global enterprises since inception" },
        { stat: "$10B+", label: "Enterprise Value Assured", sub: "Critical asset protection & governance" },
        { stat: "100%", label: "Audit Readiness", sub: "Zero unmitigated compliance vulnerabilities" },
        { stat: "50+", label: "Platforms Integrated", sub: "Oracle, SAP, Workday, Salesforce & AI" }
    ];

    const pillars = [
        {
            icon: <Users className="w-6 h-6 text-orange-500" />,
            title: "Executive Strategic Empathy",
            desc: "We align deeply with board mandates and departmental leaders, converting dense regulatory burdens into strategic agility."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
            title: "Rigorous Technical Governance",
            desc: "From Zero-Trust architecture to multi-cloud SOD controls, we build defense-in-depth frameworks engineered for longevity."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-orange-500" />,
            title: "AI & Digital Enablement",
            desc: "Pioneering safe, compliant enterprise AI adoption—from automated risk scoring to autonomous compliance agent workflows."
        }
    ];

    return (
        <main className="bg-[#F8FAFC] min-h-screen text-gray-900 pb-24">

            {/* HERO SECTION (META STYLE) */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN: NARRATIVE */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase">
                                ABOUT ENGOLD CONSULTING
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
                            Engineering unshakable confidence for the <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">modern enterprise</span>.
                        </h1>

                        <p className="text-gray-600 text-base sm:text-xl leading-relaxed font-normal max-w-2xl">
                            At Engold Consulting, our advisors possess deep domain knowledge, drawing on over two decades of specialized expertise to deliver comprehensive IT risk intelligence, cybersecurity assurance, and Enterprise Risk Management (ERM) frameworks across global industries.
                        </p>

                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => onNavigate('solutions')}
                                className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-slate-900/10 flex items-center space-x-2 group"
                            >
                                <span>Explore Solutions</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => onNavigate('careers')}
                                className="px-7 py-3.5 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 text-xs font-bold uppercase tracking-wider transition-all"
                            >
                                Careers at ENGOLD
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: HERO VISUAL WITH META OVERLAY BADGE */}
                    <div className="lg:col-span-5 relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-slate-900 relative aspect-[4/3] sm:aspect-auto sm:h-[480px]">
                            <img
                                src="/images/hero3.jpg"
                                alt="ENGOLD Executive Advisory in Session"
                                className="w-full h-full object-cover filter contrast-105"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* FLOATING META-STYLE CALLOUT CARD */}
                        <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[260px] sm:max-w-[290px] space-y-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-orange-600 block">20+</span>
                            <span className="text-xs uppercase font-bold tracking-wider text-gray-900 block">Years of Industry Leadership</span>
                            <p className="text-[11px] text-gray-500 leading-tight">Proven methodologies across North America, Europe & APAC.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* IMPACT STATS BENTO (META STYLE) */}
            <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {impactStats.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -4 }}
                            className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-2"
                        >
                            <span className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight block">
                                {item.stat}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                                {item.label}
                            </span>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                {item.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CORE VALUE PILLARS */}
            <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
                <div className="max-w-2xl space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 block">
                        HOW WE DELIVER VALUE
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Our Operational Principles
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {pillars.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center border border-orange-100">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{pillar.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CERTIFIED CONSULTANT MATRIX */}
            <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-b border-gray-200 pb-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 block">
                            ACCREDITED TALENT
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Industry-Recognized Certifications
                        </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-md">
                        Every Engold consultant maintains elite professional credentials, guaranteeing verified rigor and standard compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-500/50 transition-all flex items-start space-x-4"
                        >
                            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex-shrink-0">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-extrabold text-gray-900">{cert.title}</span>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-bold">{cert.issuer}</span>
                                </div>
                                <span className="text-xs text-gray-500 leading-snug block">{cert.full}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA CALLOUT */}
            <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 block">
                            GET STARTED
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Ready to assess your enterprise risk posture?
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Connect with our senior partners for an introductory assessment of your governance, compliance readiness, or digital integration roadmap.
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/company/engold-consulting/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/30 shrink-0 inline-block text-center"
                    >
                        Schedule Executive Briefing
                    </a>
                </div>
            </section>

        </main>
    );
}