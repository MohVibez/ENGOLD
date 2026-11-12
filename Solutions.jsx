import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Lock, Layers, CheckCircle2, ArrowRight, ArrowUpRight, Cpu, FileCheck } from 'lucide-react';

export default function Solutions({ pageKey, onNavigate }) {
    const [selectedCategory, setSelectedCategory] = useState(
        pageKey === 'compliance' ? 'compliance' : 'all'
    );

    const categories = [
        { id: 'all', label: 'All Solutions' },
        { id: 'advisory', label: 'Executive Advisory' },
        { id: 'compliance', label: 'GRC & Compliance' },
        { id: 'cyber', label: 'Cyber & Zero-Trust' },
        { id: 'erp', label: 'Enterprise ERP' }
    ];

    const erpPlatforms = [
        { name: "Oracle", desc: "ERP Cloud & Fusion Governance" },
        { name: "SAP", desc: "S/4HANA Security & SOD" },
        { name: "NetSuite", desc: "Financial Controls & Audit" },
        { name: "Workday", desc: "HCM & Financial Architecture" },
        { name: "Salesforce", desc: "Enterprise Pipeline & CRM" },
        { name: "SuccessFactors", desc: "Access Assurance & Compliance" }
    ];

    const securityOfferings = [
        { title: "PAM Implementation", desc: "Privileged Access Management with continuous credential rotation." },
        { title: "Identity & Access Management (IAM)", desc: "Role-based access controls and seamless SSO enterprise integration." },
        { title: "SIEM & Security Intelligence", desc: "Real-time automated incident detection, log ingestion, and response." },
        { title: "Application & Infrastructure Security", desc: "Vulnerability assessments, code reviews, and cloud hardening." },
        { title: "Continuous Controls Audit", desc: "Automated controls testing eliminating manual audit bottlenecks." },
        { title: "Segregation of Duties (SOD)", desc: "Cross-platform conflicting access detection and mitigation matrices." }
    ];

    const frameworks = [
        { name: "Sarbanes-Oxley Act (SOX)", category: "Financial" },
        { name: "GDPR & CCPA / CPRA", category: "Privacy" },
        { name: "HIPAA & HITRUST CSF", category: "Healthcare" },
        { name: "PCI DSS 4.0", category: "Payments" },
        { name: "NIST Cybersecurity Framework", category: "Security" },
        { name: "ISO/IEC 27001 & 27701", category: "Global Standard" },
        { name: "FFIEC IT Security Guidelines", category: "Banking" },
        { name: "Federal FISMA Compliance", category: "Government" },
        { name: "COBIT & COSO Controls", category: "Governance" },
        { name: "NIST SP 800-53 / 800-171", category: "Defense" }
    ];

    return (
        <main className="bg-[#F8FAFC] min-h-screen text-gray-900 pb-24">

            {/* HEADER SECTION (META STYLE) */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase">
                        SOLUTIONS & ARCHITECTURE
                    </span>
                </div>

                <div className="max-w-4xl space-y-4">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
                        Tailored strategy, managed risk & <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">digital enablement</span>.
                    </h1>
                    <p className="text-gray-600 text-base sm:text-xl leading-relaxed font-normal">
                        At Engold Consulting, our solutions are engineered to fit your enterprise reality. We bridge executive vision with operational precision across IT governance, zero-trust cybersecurity, and enterprise ERP integration.
                    </p>
                </div>

                {/* META-STYLE PILL TABS */}
                <div className="flex flex-wrap gap-2 pt-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                selectedCategory === cat.id
                                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* SECTION 1: CYBERSECURITY & ZERO-TRUST CONTROLS */}
            {(selectedCategory === 'all' || selectedCategory === 'cyber' || selectedCategory === 'advisory') && (
                <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
                    <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 block">CORE CAPABILITIES</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Cybersecurity, IAM & Controls Assurance</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {securityOfferings.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -4 }}
                                className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                            >
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="pt-2 flex items-center text-xs font-semibold text-gray-400 group-hover:text-orange-600 transition-colors">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* SECTION 2: GRC COMPLIANCE MATRIX */}
            {(selectedCategory === 'all' || selectedCategory === 'compliance') && (
                <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
                    <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 block">REGULATORY MASTERY</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Governance & Regulatory Compliance Frameworks</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {frameworks.map((fw, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:border-orange-500/50 transition-all space-y-2"
                            >
                                <div className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold">{fw.category}</span>
                                </div>
                                <h4 className="text-xs font-bold text-gray-900 leading-snug">{fw.name}</h4>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* SECTION 3: ENTERPRISE ERP TRANSFORMATION */}
            {(selectedCategory === 'all' || selectedCategory === 'erp' || selectedCategory === 'advisory') && (
                <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
                    <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 block">ECOSYSTEM ADVISORY</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Enterprise ERP & Cloud Platforms</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {erpPlatforms.map((erp, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -4 }}
                                className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-extrabold text-gray-900 tracking-tight">{erp.name}</span>
                                    <span className="p-1.5 rounded-full bg-gray-100 text-gray-500">
                                        <Server className="w-4 h-4" />
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">{erp.desc}</p>
                                <div className="pt-2 flex items-center text-xs font-bold text-orange-600">
                                    <span>Specialized Architecture</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* BOTTOM CALLOUT */}
            <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 block">
                            INTEGRATED ADVISORY
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Build an agile compliance & risk architecture.
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Discover how our seasoned consultants help Fortune 500 enterprises and emerging tech leaders navigate audit readiness without friction.
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/company/engold-consulting/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/30 shrink-0 inline-block text-center"
                    >
                        Request Capabilities Deck
                    </a>
                </div>
            </section>

        </main>
    );
}