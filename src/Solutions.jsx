import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from './PageHero.jsx';
import { Server, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

const CONTACT_EMAIL = 'mailto:info@engoldconsultingllc.com';
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=80`;

const SERVICE_SIBLINGS = [
    { key: 'solutions', label: 'All Services' },
    { key: 'advisory', label: 'Executive Advisory' },
    { key: 'risk-consulting', label: 'Risk Consulting' },
    { key: 'it-risk', label: 'IT Risk Management' },
    { key: 'compliance', label: 'Compliance' },
    { key: 'vendor-risk', label: 'Vendor Risk' },
    { key: 'data-privacy', label: 'Data Privacy' },
    { key: 'cyber-data', label: 'Cyber & Data' },
    { key: 'managed-services', label: 'Managed Services' },
];

// Unique hero + deliverables for every Services route.
// `sections` controls which shared capability blocks appear below.
const SERVICE_PAGES = {
    solutions: {
        eyebrow: 'Services & Solutions',
        title: 'Tailored strategy, managed risk &',
        highlight: 'digital enablement.',
        description:
            'Our solutions are engineered to fit your enterprise reality. We bridge executive vision with operational precision across IT governance, zero-trust cybersecurity and enterprise ERP integration.',
        image: '/images/Global_transformation.jpg',
        stats: [
            { value: '8', label: 'Integrated service lines' },
            { value: '40+', label: 'Regulatory frameworks covered' },
            { value: '6', label: 'Enterprise ERP platforms' },
            { value: '500+', label: 'Engagements delivered' },
        ],
        primaryCta: { label: 'Talk to an Advisor', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Industries We Serve', page: 'industries' },
        sections: ['cyber', 'compliance', 'erp'],
    },
    advisory: {
        eyebrow: 'Executive Advisory',
        title: 'Board-level clarity for',
        highlight: 'high-stakes technology decisions.',
        description:
            'We sit alongside CEOs, CIOs and audit committees to shape digital transformation roadmaps, operating models and investment cases, so every technology dollar is tied to measurable business outcomes and managed risk.',
        image: '/images/hero6.jpg',
        stats: [
            { value: '150+', label: 'C-suite & board advisory engagements' },
            { value: '3.2x', label: 'Average transformation ROI' },
            { value: '90 days', label: 'Typical roadmap delivery' },
            { value: '20+', label: 'Years of executive experience per partner' },
        ],
        primaryCta: { label: 'Book an Executive Briefing', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Risk Consulting', page: 'risk-consulting' },
        focus: [
            { title: 'Digital Transformation Roadmaps', desc: 'Sequenced, funded multi-year plans aligned to business strategy and risk appetite.' },
            { title: 'Technology Operating Models', desc: 'Org design, sourcing strategy and governance that scale with growth.' },
            { title: 'Board & Audit Committee Reporting', desc: 'Clear, decision-ready reporting on technology risk and program health.' },
            { title: 'M&A Technology Due Diligence', desc: 'Pre-deal IT, security and integration risk assessment with Day-1 plans.' },
        ],
        sections: ['erp'],
    },
    'risk-consulting': {
        eyebrow: 'Risk Consulting',
        title: 'See risk sooner.',
        highlight: 'Act on it with confidence.',
        description:
            'We connect seemingly disparate risks across operations, technology and compliance into a single, prioritized view, giving leadership the insight to invest in the controls that matter and retire the ones that don’t.',
        image: unsplash('1460925895917-afdab827c52f'),
        stats: [
            { value: '-40%', label: 'Redundant controls retired' },
            { value: '360°', label: 'Enterprise risk visibility' },
            { value: '4', label: 'Specialist risk practices' },
            { value: '98%', label: 'Clients renewing engagements' },
        ],
        primaryCta: { label: 'Request a Risk Assessment', href: CONTACT_EMAIL },
        secondaryCta: { label: 'IT Risk Management', page: 'it-risk' },
        focus: [
            { title: 'Enterprise Risk Assessments', desc: 'Top-down and bottom-up risk identification with quantified impact scoring.' },
            { title: 'Risk & Control Rationalization', desc: 'Map, de-duplicate and optimize controls across frameworks and business units.' },
            { title: 'Internal Audit Co-Sourcing', desc: 'Experienced auditors who extend your team for SOX, IT and operational audits.' },
            { title: 'Risk Appetite & KRI Design', desc: 'Board-approved risk appetite statements with measurable key risk indicators.' },
        ],
        sections: ['compliance', 'cyber'],
    },
    'it-risk': {
        eyebrow: 'IT Risk Management',
        title: 'Technology risk,',
        highlight: 'governed end to end.',
        description:
            'From change management to privileged access, we design and test IT general controls that stand up to auditors and regulators, while giving engineering teams the speed they need to ship.',
        image: unsplash('1558494949-ef010cbdcc31'),
        stats: [
            { value: '0', label: 'ITGC material weaknesses post-remediation' },
            { value: '-60%', label: 'Manual control testing effort' },
            { value: '30 days', label: 'Average ITGC readiness sprint' },
            { value: '6', label: 'ERP platforms covered' },
        ],
        primaryCta: { label: 'Assess Your IT Controls', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Compliance Management', page: 'compliance' },
        focus: [
            { title: 'IT General Controls (ITGC)', desc: 'Design, documentation and testing of access, change and operations controls.' },
            { title: 'Segregation of Duties (SOD)', desc: 'Cross-platform conflict detection and remediation for ERP and cloud apps.' },
            { title: 'Cloud Governance', desc: 'Guardrails and policy-as-code for AWS, Azure and GCP environments.' },
            { title: 'IT Resilience & DR Testing', desc: 'Business impact analysis, recovery planning and failover exercises.' },
        ],
        sections: ['cyber', 'erp'],
    },
    compliance: {
        eyebrow: 'Compliance Management',
        title: 'Audit-ready every day,',
        highlight: 'not just audit season.',
        description:
            'We turn SOX, SOC 2, ISO 27001, HIPAA and PCI DSS into one harmonized control set with continuous evidence collection, so audits become a formality rather than a fire drill.',
        image: unsplash('1504384308090-c894fdcc538d'),
        stats: [
            { value: '99.9%', label: 'Client audit pass rate' },
            { value: '40+', label: 'Frameworks mapped to one control set' },
            { value: '-70%', label: 'Audit evidence prep time' },
            { value: '30 days', label: 'Fastest SOC 2 readiness' },
        ],
        primaryCta: { label: 'Start a Readiness Assessment', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Vendor Risk', page: 'vendor-risk' },
        focus: [
            { title: 'SOX 404 Program Management', desc: 'Scoping, walkthroughs, testing and deficiency remediation for public companies.' },
            { title: 'SOC 1 & SOC 2 Readiness', desc: 'Gap assessment, control design and auditor coordination through Type II.' },
            { title: 'Unified Control Frameworks', desc: 'Test once, comply many: one control library mapped across all your frameworks.' },
            { title: 'Continuous Compliance Monitoring', desc: 'Automated evidence and real-time control health dashboards.' },
        ],
        sections: ['compliance'],
    },
    'vendor-risk': {
        eyebrow: '3rd Party & Vendor Risk',
        title: 'Your vendors’ risk',
        highlight: 'is your risk.',
        description:
            'Most breaches now start with a supplier. We build tiered third-party risk programs that onboard vendors faster, monitor them continuously and keep regulators and customers confident in your supply chain.',
        image: unsplash('1511512578047-dfb367046420'),
        stats: [
            { value: '5,000+', label: 'Vendors assessed for clients' },
            { value: '-50%', label: 'Vendor onboarding time' },
            { value: '24/7', label: 'Continuous vendor monitoring' },
            { value: '4 tiers', label: 'Risk-based due-diligence model' },
        ],
        primaryCta: { label: 'Review Your Vendor Program', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Data Privacy', page: 'data-privacy' },
        focus: [
            { title: 'TPRM Program Design', desc: 'Policies, risk tiering and workflows built for scale and regulator scrutiny.' },
            { title: 'Vendor Due Diligence', desc: 'Security questionnaires, SOC report reviews and on-site assessments.' },
            { title: 'Continuous Monitoring', desc: 'External attack-surface and financial-health signals on critical suppliers.' },
            { title: 'Contract & SLA Risk Review', desc: 'Security, privacy and right-to-audit clauses that actually protect you.' },
        ],
        sections: ['compliance'],
    },
    'data-privacy': {
        eyebrow: 'Data Privacy & Protection',
        title: 'Earn trust with every',
        highlight: 'byte you collect.',
        description:
            'GDPR, CCPA/CPRA and a growing patchwork of state laws demand more than a privacy policy. We operationalize privacy by design: data mapping, consent, subject rights and AI data governance that customers can trust.',
        image: unsplash('1618005182384-a83a8bd57fbe'),
        stats: [
            { value: '15+', label: 'Global privacy laws operationalized' },
            { value: '< 10 days', label: 'Data subject request fulfilment' },
            { value: '100%', label: 'Personal data assets mapped' },
            { value: '0', label: 'Regulatory privacy fines for clients' },
        ],
        primaryCta: { label: 'Get a Privacy Gap Assessment', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Cyber & Data Architecture', page: 'cyber-data' },
        focus: [
            { title: 'Data Discovery & Mapping', desc: 'Records of processing and data-flow maps across systems and vendors.' },
            { title: 'Privacy Impact Assessments', desc: 'DPIAs and PIAs for new products, AI models and cross-border transfers.' },
            { title: 'Consent & Rights Management', desc: 'Cookie consent, preference centers and automated DSAR workflows.' },
            { title: 'AI & Data Governance', desc: 'Responsible AI policies, data minimization and model data lineage.' },
        ],
        sections: ['compliance', 'cyber'],
    },
    'cyber-data': {
        eyebrow: 'Cyber & Data Architecture',
        title: 'Zero trust,',
        highlight: 'engineered for the real world.',
        description:
            'We design and implement identity-first security architectures, from IAM and PAM to SIEM and cloud hardening, that stop modern attacks without getting in the way of how your people work.',
        image: unsplash('1550751827-4bd374c3f58b'),
        stats: [
            { value: '-85%', label: 'Standing privileged access' },
            { value: '< 15 min', label: 'Mean time to detect' },
            { value: '1M+', label: 'Identities secured' },
            { value: '3 clouds', label: 'AWS, Azure & GCP expertise' },
        ],
        primaryCta: { label: 'Request an Architecture Review', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Managed Services', page: 'managed-services' },
        focus: [
            { title: 'Zero-Trust Architecture', desc: 'Identity-centric segmentation and least-privilege access by default.' },
            { title: 'IAM & PAM Implementation', desc: 'SSO, MFA, lifecycle automation and privileged credential vaulting.' },
            { title: 'SIEM & Detection Engineering', desc: 'Log pipelines, detection content and response playbooks that work.' },
            { title: 'Cloud & Application Security', desc: 'Posture management, secure SDLC and infrastructure-as-code scanning.' },
        ],
        sections: ['cyber'],
    },
    'managed-services': {
        eyebrow: 'Managed Services',
        title: 'Always-on assurance,',
        highlight: 'without growing headcount.',
        description:
            'Our managed GRC and security operations keep your controls tested, your SIEM tuned and your audit evidence current, delivered by a dedicated ENGOLD team under predictable, outcome-based pricing.',
        image: '/images/Global_finance.jpg',
        stats: [
            { value: '24/7', label: 'Monitoring & response coverage' },
            { value: '-35%', label: 'Total cost vs. in-house teams' },
            { value: '99.9%', label: 'SLA attainment' },
            { value: '1 team', label: 'Dedicated pod per client' },
        ],
        primaryCta: { label: 'Explore Managed Plans', href: CONTACT_EMAIL },
        secondaryCta: { label: 'Executive Advisory', page: 'advisory' },
        focus: [
            { title: 'Managed GRC', desc: 'Ongoing control testing, evidence collection and audit liaison.' },
            { title: 'Managed SIEM & SOC', desc: '24/7 monitoring, triage and incident response by certified analysts.' },
            { title: 'Access Reviews as a Service', desc: 'Quarterly user access certifications completed and documented for you.' },
            { title: 'Compliance Staffing', desc: 'Vetted GRC, audit and security professionals for interim or long-term roles.' },
        ],
        sections: ['cyber', 'compliance'],
    },
};

export default function Solutions({ pageKey = 'solutions', onNavigate }) {
    const page = SERVICE_PAGES[pageKey] || SERVICE_PAGES.solutions;
    const isOverview = !SERVICE_PAGES[pageKey] || pageKey === 'solutions';
    const [overviewCategory, setSelectedCategory] = useState('all');
    // Overview page keeps its filter tabs; detail pages show only their relevant blocks
    const show = (section) =>
        isOverview ? overviewCategory === 'all' || overviewCategory === section : page.sections.includes(section);

    const categories = [
        { id: 'all', label: 'All Solutions' },
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

            <PageHero
                pageKey={isOverview ? 'solutions' : pageKey}
                onNavigate={onNavigate}
                breadcrumb={[
                    { label: 'Home', page: 'home' },
                    ...(isOverview ? [] : [{ label: 'Services', page: 'solutions' }]),
                    { label: SERVICE_SIBLINGS.find((s) => s.key === pageKey)?.label || 'Services' },
                ]}
                siblings={SERVICE_SIBLINGS}
                siblingsLabel="Services"
                {...page}
            />

            {isOverview ? (
                /* OVERVIEW: FILTER TABS */
                <section className="pt-12 px-4 sm:px-6 max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                    overviewCategory === cat.id
                                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </section>
            ) : (
                /* DETAIL PAGE: WHAT WE DELIVER */
                <section className="pt-16 pb-6 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
                    <div className="border-b border-gray-200 pb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 block">WHAT WE DELIVER</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{page.eyebrow} capabilities</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {page.focus.map((item, idx) => (
                            <motion.div
                                key={`${pageKey}-${item.title}`}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.07 }}
                                className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 space-y-3 group"
                            >
                                <span className="text-xs font-mono font-bold text-orange-500">0{idx + 1}</span>
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                <div className="pt-1 flex items-center gap-1.5 text-xs font-medium text-gray-600">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Included in engagement</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* SECTION 1: CYBERSECURITY & ZERO-TRUST CONTROLS */}
            {show('cyber') && (
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
            {show('compliance') && (
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
            {show('erp') && (
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