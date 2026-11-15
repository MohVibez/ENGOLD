import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    FileText,
    Cookie,
    ChevronRight,
    CheckCircle2,
    Lock,
    Eye,
    Database,
    Globe,
    Mail,
    AlertTriangle,
    ToggleLeft,
    ToggleRight
} from 'lucide-react';

/* ─────────────────────────────────────────────
   SHARED LAYOUT PRIMITIVES
───────────────────────────────────────────── */
const SectionBadge = ({ icon: Icon, label }) => (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-bold tracking-wide uppercase">
        <Icon className="w-3.5 h-3.5 text-orange-600" />
        <span>{label}</span>
    </div>
);

const ArticleSection = ({ title, children, id }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="space-y-4"
    >
        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 leading-snug">
            {title}
        </h2>
        <div className="text-slate-600 text-[15px] leading-relaxed space-y-3 pl-4">
            {children}
        </div>
    </motion.section>
);

const InfoCard = ({ icon: Icon, title, body }) => (
    <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
        <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-orange-600" />
        </div>
        <div>
            <p className="text-sm font-bold text-slate-900 mb-1">{title}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
        </div>
    </div>
);

const Bullet = ({ children }) => (
    <div className="flex items-start gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
        <span>{children}</span>
    </div>
);

const TOCLink = ({ label, href }) => (
    <a
        href={href}
        className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-orange-50 transition-colors group text-sm font-medium text-slate-700 hover:text-orange-600"
    >
        <span>{label}</span>
        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors" />
    </a>
);

const lastUpdated = 'October 1, 2025';

/* ─────────────────────────────────────────────
   1. PRIVACY POLICY
───────────────────────────────────────────── */
function PrivacyPolicy() {
    return (
        <div className="space-y-12">
            <div className="space-y-5 max-w-3xl">
                <SectionBadge icon={Shield} label="Privacy & Data Protection" />
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Policy</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    ENGOLD Consulting, Inc. is committed to protecting your privacy and handling your personal information with transparency and care. This policy explains how we collect, use, and protect your data.
                </p>
                <p className="text-sm text-slate-400 font-medium">Last updated: {lastUpdated}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoCard icon={Lock} title="Data Security" body="Your data is encrypted in transit and at rest using industry-standard AES-256 protocols." />
                <InfoCard icon={Eye} title="Transparency" body="We are clear about what data we collect and why, and you always have access to your information." />
                <InfoCard icon={Globe} title="Global Compliance" body="We adhere to GDPR, CCPA/CPRA, and other applicable privacy regulations worldwide." />
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-1">
                <p className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest mb-4">Table of Contents</p>
                <TOCLink label="1. Information We Collect" href="#collect" />
                <TOCLink label="2. How We Use Your Information" href="#use" />
                <TOCLink label="3. Sharing & Disclosure" href="#sharing" />
                <TOCLink label="4. Data Retention" href="#retention" />
                <TOCLink label="5. Your Rights & Choices" href="#rights" />
                <TOCLink label="6. Cookies & Tracking" href="#cookies" />
                <TOCLink label="7. International Transfers" href="#transfers" />
                <TOCLink label="8. Contact Us" href="#contact-privacy" />
            </div>

            <ArticleSection title="1. Information We Collect" id="collect">
                <p>We collect information you provide directly to us, information generated automatically through your use of our services, and information from third-party sources.</p>
                <div className="space-y-2 pt-1">
                    <Bullet>Contact details (name, email, phone, company) provided through inquiry forms or engagements.</Bullet>
                    <Bullet>Usage data including IP address, browser type, pages visited, and session duration.</Bullet>
                    <Bullet>Professional profile information such as job title, industry, and business challenges shared in consulting interactions.</Bullet>
                    <Bullet>Payment and billing information (processed securely via PCI-DSS compliant providers).</Bullet>
                    <Bullet>Communications content including emails, meeting notes, and project documentation shared with our advisory team.</Bullet>
                </div>
            </ArticleSection>

            <ArticleSection title="2. How We Use Your Information" id="use">
                <p>We use the information we collect to deliver, maintain, and improve our consulting services, and to communicate with you about our work together.</p>
                <div className="space-y-2 pt-1">
                    <Bullet>Deliver and manage consulting engagements and advisory services.</Bullet>
                    <Bullet>Respond to your inquiries and provide client support.</Bullet>
                    <Bullet>Send relevant thought leadership, regulatory updates, and insights (with your consent).</Bullet>
                    <Bullet>Conduct research and analysis to improve our service methodologies.</Bullet>
                    <Bullet>Comply with applicable legal obligations, audits, and regulatory requirements.</Bullet>
                    <Bullet>Prevent fraud, unauthorized access, and other illegal activities.</Bullet>
                </div>
            </ArticleSection>

            <ArticleSection title="3. Sharing & Disclosure" id="sharing">
                <p>We do not sell your personal information. We may share your information with trusted third parties only in the following circumstances:</p>
                <div className="space-y-2 pt-1">
                    <Bullet><strong>Service providers</strong> who assist us with IT infrastructure, analytics, CRM, and communication tools, all bound by strict data processing agreements.</Bullet>
                    <Bullet><strong>Professional advisors</strong> such as legal counsel, auditors, and insurers, under professional secrecy obligations.</Bullet>
                    <Bullet><strong>Regulatory authorities</strong> when required by law, court order, or government mandate.</Bullet>
                    <Bullet><strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets, where we will notify you in advance.</Bullet>
                </div>
            </ArticleSection>

            <ArticleSection title="4. Data Retention" id="retention">
                <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
                <p>Client engagement records are retained for a minimum of 7 years to meet professional and regulatory obligations. Marketing contact data is retained until you withdraw consent. Usage and analytics data is anonymized after 26 months.</p>
            </ArticleSection>

            <ArticleSection title="5. Your Rights & Choices" id="rights">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <div className="space-y-2 pt-1">
                    <Bullet><strong>Access:</strong> Request a copy of the personal data we hold about you.</Bullet>
                    <Bullet><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</Bullet>
                    <Bullet><strong>Deletion:</strong> Request erasure of your data under certain conditions.</Bullet>
                    <Bullet><strong>Portability:</strong> Request your data in a structured, machine-readable format.</Bullet>
                    <Bullet><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</Bullet>
                    <Bullet><strong>Restriction:</strong> Request we limit how we use your data in certain circumstances.</Bullet>
                </div>
                <p className="pt-2">To exercise any of these rights, contact us at <a href="mailto:privacy@engoldconsulting.com" className="text-orange-600 font-medium hover:underline">privacy@engoldconsulting.com</a>.</p>
            </ArticleSection>

            <ArticleSection title="6. Cookies & Tracking" id="cookies">
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. See our Cookie Settings page for full details and preference controls.</p>
            </ArticleSection>

            <ArticleSection title="7. International Data Transfers" id="transfers">
                <p>ENGOLD Consulting operates globally. If you are located outside the United States, your data may be transferred to, stored in, and processed in the U.S. or other countries. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission.</p>
            </ArticleSection>

            <ArticleSection title="8. Contact Us" id="contact-privacy">
                <p>If you have questions or concerns about this Privacy Policy, please reach out to our Data Protection team:</p>
                <div className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                    <p className="text-sm font-bold text-slate-900">ENGOLD Consulting, Inc.</p>
                    <p className="text-sm text-slate-600 flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /> privacy@engoldconsulting.com</p>
                    <p className="text-sm text-slate-600">Attn: Data Protection Officer</p>
                </div>
            </ArticleSection>
        </div>
    );
}

/* ─────────────────────────────────────────────
   2. TERMS OF SERVICE
───────────────────────────────────────────── */
function TermsOfService() {
    return (
        <div className="space-y-12">
            <div className="space-y-5 max-w-3xl">
                <SectionBadge icon={FileText} label="Legal Agreement" />
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Service</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    These Terms of Service govern your use of ENGOLD Consulting's website, digital platforms, and professional services. By accessing our services, you agree to these terms.
                </p>
                <p className="text-sm text-slate-400 font-medium">Last updated: {lastUpdated}</p>
            </div>

            <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 flex gap-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Important:</strong> Please read these terms carefully before using our services. If you do not agree to these terms, you may not access or use our website or services.
                </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-1">
                <p className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest mb-4">Table of Contents</p>
                <TOCLink label="1. Acceptance of Terms" href="#acceptance" />
                <TOCLink label="2. Description of Services" href="#services-desc" />
                <TOCLink label="3. User Obligations" href="#obligations" />
                <TOCLink label="4. Intellectual Property" href="#ip" />
                <TOCLink label="5. Confidentiality" href="#confidentiality" />
                <TOCLink label="6. Limitation of Liability" href="#liability" />
                <TOCLink label="7. Indemnification" href="#indemnification" />
                <TOCLink label="8. Governing Law" href="#governing-law" />
                <TOCLink label="9. Changes to Terms" href="#changes" />
                <TOCLink label="10. Contact" href="#contact-terms" />
            </div>

            <ArticleSection title="1. Acceptance of Terms" id="acceptance">
                <p>By accessing and using ENGOLD Consulting's website or engaging our professional services, you confirm that you are at least 18 years of age, have the authority to enter into this agreement on behalf of yourself or your organization, and agree to be bound by these Terms of Service and our Privacy Policy.</p>
            </ArticleSection>

            <ArticleSection title="2. Description of Services" id="services-desc">
                <p>ENGOLD Consulting provides professional business and technology consulting services, including but not limited to:</p>
                <div className="space-y-2 pt-1">
                    <Bullet>Executive advisory and digital transformation strategy</Bullet>
                    <Bullet>IT risk management, GRC, and compliance services</Bullet>
                    <Bullet>Cybersecurity architecture, IAM, and SIEM solutions</Bullet>
                    <Bullet>ERP cloud transformation and application security</Bullet>
                    <Bullet>Managed services including vCISO and Compliance-as-a-Service</Bullet>
                </div>
                <p className="pt-2">Specific service terms, deliverables, and timelines are governed by the engagement-specific Statement of Work (SOW) or Master Services Agreement (MSA) executed between ENGOLD and the client.</p>
            </ArticleSection>

            <ArticleSection title="3. User Obligations" id="obligations">
                <p>When using our website and digital platforms, you agree to:</p>
                <div className="space-y-2 pt-1">
                    <Bullet>Provide accurate, current, and complete information when required.</Bullet>
                    <Bullet>Not use our platform for any unlawful, harmful, or fraudulent purpose.</Bullet>
                    <Bullet>Not attempt to gain unauthorized access to our systems or other users' accounts.</Bullet>
                    <Bullet>Not transmit malware, viruses, or any malicious code via our platform.</Bullet>
                    <Bullet>Not scrape, harvest, or systematically extract data from our website without written consent.</Bullet>
                    <Bullet>Comply with all applicable laws and regulations in your use of our services.</Bullet>
                </div>
            </ArticleSection>

            <ArticleSection title="4. Intellectual Property" id="ip">
                <p>All content published on this website and in our service deliverables — including text, graphics, logos, methodology frameworks, tools, templates, and software — is the exclusive intellectual property of ENGOLD Consulting, Inc. or its licensors and is protected by copyright, trademark, and other applicable intellectual property laws.</p>
                <p className="pt-2">You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any ENGOLD content without prior written authorization. Client deliverables are subject to the terms specified in your engagement agreement.</p>
            </ArticleSection>

            <ArticleSection title="5. Confidentiality" id="confidentiality">
                <p>Both parties acknowledge that in the course of an engagement, confidential information may be exchanged. ENGOLD and its personnel will maintain strict confidentiality of all client information and not disclose it to third parties except as required to perform services or comply with legal obligations.</p>
                <p className="pt-2">Specific confidentiality provisions, including NDA terms, duration, and exceptions, are detailed in the applicable MSA or SOW for each client engagement.</p>
            </ArticleSection>

            <ArticleSection title="6. Limitation of Liability" id="liability">
                <p>To the maximum extent permitted by applicable law, ENGOLD Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your access to or use of (or inability to access or use) our services.</p>
                <p className="pt-2">ENGOLD's total liability for any claims arising from or related to these terms or our services shall not exceed the fees paid by you to ENGOLD in the six months preceding the claim.</p>
            </ArticleSection>

            <ArticleSection title="7. Indemnification" id="indemnification">
                <p>You agree to defend, indemnify, and hold harmless ENGOLD Consulting, its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable legal fees) arising from your violation of these Terms or your use of our services in a manner inconsistent with applicable law.</p>
            </ArticleSection>

            <ArticleSection title="8. Governing Law & Dispute Resolution" id="governing-law">
                <p>These Terms of Service are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
                <p className="pt-2">Any disputes arising from these terms or our services shall first be addressed through good-faith negotiation. If unresolved after 30 days, disputes shall be submitted to binding arbitration under the American Arbitration Association (AAA) Commercial Arbitration Rules.</p>
            </ArticleSection>

            <ArticleSection title="9. Changes to Terms" id="changes">
                <p>We reserve the right to modify these Terms at any time. When changes are made, we will update the "Last Updated" date at the top of this page and, for material changes, provide a more prominent notice. Your continued use of our services after changes become effective constitutes acceptance of the revised terms.</p>
            </ArticleSection>

            <ArticleSection title="10. Contact" id="contact-terms">
                <p>For questions about these Terms of Service, please contact our Legal team:</p>
                <div className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                    <p className="text-sm font-bold text-slate-900">ENGOLD Consulting, Inc. — Legal Department</p>
                    <p className="text-sm text-slate-600 flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /> legal@engoldconsulting.com</p>
                </div>
            </ArticleSection>
        </div>
    );
}

/* ─────────────────────────────────────────────
   3. COOKIE SETTINGS
───────────────────────────────────────────── */
const cookieCategories = [
    {
        id: 'essential',
        icon: Lock,
        label: 'Essential Cookies',
        description: 'Required for the website to function properly. These cannot be disabled.',
        examples: ['Session management', 'Security tokens', 'Load balancing', 'User authentication state'],
        required: true,
        defaultOn: true
    },
    {
        id: 'analytics',
        icon: Database,
        label: 'Analytics & Performance',
        description: 'Help us understand how visitors interact with our website to improve user experience.',
        examples: ['Page visit counts', 'Navigation paths', 'Error tracking', 'Performance metrics'],
        required: false,
        defaultOn: true
    },
    {
        id: 'functional',
        icon: Globe,
        label: 'Functional Cookies',
        description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
        examples: ['Language preference', 'Region settings', 'Form auto-fill', 'Accessibility preferences'],
        required: false,
        defaultOn: true
    },
    {
        id: 'marketing',
        icon: Eye,
        label: 'Marketing & Targeting',
        description: 'Used to deliver relevant content and track the effectiveness of our marketing campaigns.',
        examples: ['LinkedIn Insight Tag', 'Google Ads conversion', 'Retargeting pixels', 'A/B testing'],
        required: false,
        defaultOn: false
    }
];

function CookieSettings() {
    const [prefs, setPrefs] = useState(() =>
        Object.fromEntries(cookieCategories.map(c => [c.id, c.defaultOn]))
    );
    const [saved, setSaved] = useState(false);

    const toggle = (id) => {
        const cat = cookieCategories.find(c => c.id === id);
        if (cat?.required) return;
        setPrefs(p => ({ ...p, [id]: !p[id] }));
        setSaved(false);
    };

    const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };
    const handleAcceptAll = () => { setPrefs(Object.fromEntries(cookieCategories.map(c => [c.id, true]))); setSaved(true); setTimeout(() => setSaved(false), 3000); };
    const handleRejectAll = () => { setPrefs(Object.fromEntries(cookieCategories.map(c => [c.id, c.required]))); setSaved(true); setTimeout(() => setSaved(false), 3000); };

    return (
        <div className="space-y-12">
            <div className="space-y-5 max-w-3xl">
                <SectionBadge icon={Cookie} label="Cookie Preferences" />
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Settings</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    We use cookies to give you the best possible experience. Manage your preferences below. Essential cookies are always active as they are necessary for the site to function.
                </p>
                <p className="text-sm text-slate-400 font-medium">Last updated: {lastUpdated}</p>
            </div>

            <div className="flex flex-wrap gap-3">
                <button onClick={handleAcceptAll} className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm">Accept All</button>
                <button onClick={handleRejectAll} className="px-6 py-2.5 rounded-full border-2 border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300">Reject Non-Essential</button>
            </div>

            <div className="space-y-4">
                {cookieCategories.map((cat) => {
                    const Icon = cat.icon;
                    const isOn = prefs[cat.id];
                    return (
                        <motion.div
                            key={cat.id}
                            layout
                            className={`rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${isOn ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-50 border-slate-200/60'}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOn ? 'bg-orange-100 border border-orange-200' : 'bg-slate-100 border border-slate-200'}`}>
                                        <Icon className={`w-5 h-5 transition-colors ${isOn ? 'text-orange-600' : 'text-slate-400'}`} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="text-base font-bold text-slate-900">{cat.label}</h3>
                                            {cat.required && (
                                                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wide">Always Active</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">{cat.description}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => toggle(cat.id)}
                                    disabled={cat.required}
                                    aria-label={`${isOn ? 'Disable' : 'Enable'} ${cat.label}`}
                                    className={`shrink-0 transition-opacity ${cat.required ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    {isOn
                                        ? <ToggleRight className="w-10 h-10 text-orange-500" />
                                        : <ToggleLeft className="w-10 h-10 text-slate-300" />
                                    }
                                </button>
                            </div>
                            <div className="mt-4 pl-[60px]">
                                <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Examples</p>
                                <div className="flex flex-wrap gap-2">
                                    {cat.examples.map((ex) => (
                                        <span key={ex} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{ex}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex items-center gap-4 pt-2">
                <button onClick={handleSave} className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/25">
                    Save My Preferences
                </button>
                {saved && (
                    <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-emerald-700 text-sm font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        Preferences saved!
                    </motion.div>
                )}
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 space-y-3">
                <p className="text-sm font-bold text-slate-900">Learn More About Our Cookie Usage</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                    For detailed information on the specific cookies we use, their providers, and retention periods, please review our full Privacy Policy. If you have questions, contact us at{' '}
                    <a href="mailto:privacy@engoldconsulting.com" className="text-orange-600 font-medium hover:underline">privacy@engoldconsulting.com</a>.
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────────── */
const pageMap = {
    privacy: { component: PrivacyPolicy, title: 'Privacy Policy' },
    terms: { component: TermsOfService, title: 'Terms of Service' },
    cookies: { component: CookieSettings, title: 'Cookie Settings' }
};

export default function Legal({ pageKey = 'privacy', onNavigate }) {
    const { component: PageComponent } = pageMap[pageKey] ?? pageMap.privacy;

    return (
        <main className="bg-slate-50 min-h-screen text-gray-900 pb-24">
            <div className="bg-white border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                    <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-8">
                        <button onClick={() => onNavigate('home')} className="hover:text-orange-600 transition-colors">Home</button>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-slate-700">{pageMap[pageKey]?.title ?? 'Legal'}</span>
                    </nav>
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(pageMap).map(([key, { title }]) => (
                            <button
                                key={key}
                                onClick={() => onNavigate(key)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                    pageKey === key
                                        ? 'bg-slate-900 text-white shadow-sm'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                }`}
                            >
                                {title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <motion.div
                    key={pageKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    <PageComponent />
                </motion.div>
            </div>
        </main>
    );
}
