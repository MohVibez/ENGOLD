import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  Check, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function ArticlePage({ storyId, onBack, onOpenArticle }) {
  const [copied, setCopied] = useState(false);

  const articles = {
    'salesforce-growth': {
      title: "Architecture Firm Connects Salesforce to Scalable Revenue Growth",
      category: "CRM & Enterprise Growth",
      readTime: "4 min read",
      date: "October 2026",
      author: "Enterprise Solutions Practice",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      takeaways: [
        "35% reduction in enterprise sales cycle turnaround times.",
        "Real-time project margin tracking integrated directly into account executive dashboards.",
        "22% increase in cross-regional project collaboration and revenue capture."
      ],
      content: [
        "A leading international architectural and structural design firm faced fragmented pipeline visibility and disjointed client engagement across 14 regional offices.",
        "With partners maintaining bespoke bid spreadsheets and disparate local invoicing methods, executive leadership lacked accurate forecasting data to allocate high-value engineering resources effectively.",
        "Engold Consulting architected a synchronized Salesforce enterprise pipeline strategy, integrating operational resource allocation directly with CRM forecasting. By customizing opportunity scoring and unifying proposal automation, project margins became transparent at every stage of the client lifecycle.",
        "The newly streamlined ecosystem also integrated seamlessly with downstream ERP billing systems, eliminating manual reconciliations and empowering global partners to collaborate on flagship infrastructure bids with unprecedented agility."
      ],
      related: ['privacy-risk', 'ai-enablement']
    },
    'privacy-risk': {
      title: "Entertainment Leader Cuts Annual Privacy Risk Reviews From Weeks to Under 4 Hours",
      category: "Privacy Risk & Automation",
      readTime: "3 min read",
      date: "September 2026",
      author: "Data Governance & Privacy Practice",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      takeaways: [
        "Privacy Risk Assessment (PRA) turnaround accelerated from 3 weeks down to under 4 hours.",
        "Automated regulatory mapping across GDPR, CCPA, and global digital distribution laws.",
        "Saved over 1,200 annual specialist hours previously spent on manual risk reviews."
      ],
      content: [
        "A major digital entertainment provider was struggling under manual Privacy Risk Assessments (PRAs) across hundreds of digital media pipelines and dynamic content assets.",
        "With new privacy laws proliferating across the EU, US, and APAC, the firm's compliance team faced an unsustainable backlog of engineering approvals, delaying feature releases and streaming updates.",
        "Engold deployed an automated risk engine using customized data-lineage workflows and continuous privacy monitoring compliance frameworks. By ingesting technical architecture diagrams and automatically identifying PII touchpoints, the platform instantly flagged cross-border data transfer violations.",
        "Today, engineering squads receive automated privacy clearances during their standard CI/CD deployment gates, freeing compliance counsel to focus on proactive strategic advisory."
      ],
      related: ['ai-enablement', 'risk-ai']
    },
    'ai-enablement': {
      title: "AI Enablement: From First Model Training to Autonomous Agentic Execution",
      category: "Artificial Intelligence & Automation",
      readTime: "4 min read",
      date: "October 2026",
      author: "Engold AI Practice Group",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      takeaways: [
        "Zero-trust security wrappers around generative AI querying engines and corporate vector databases.",
        "Deployment of autonomous compliance auditing agents handling repetitive SOX control checks.",
        "Enterprise-wide adoption across 8 business units in under 90 days with deterministic guardrails."
      ],
      content: [
        "Organizations frequently encounter adoption barriers when transitioning from basic conversational LLMs to autonomous agentic workflows capable of driving operational business logic.",
        "Without deterministic security controls, granting LLMs access to core database tables or internal APIs introduces serious risks of data exfiltration, hallucinated transactions, and compliance breaches.",
        "Engold developed a modular AI enablement roadmap covering data governance, guardrail integration, agent orchestration, and workforce training. We implemented an intermediary Zero-Trust proxy that inspects every agent query and tool execution against role-based access policies prior to execution.",
        "This architecture allows clients to safely deploy autonomous auditing agents that verify evidence across thousands of ERP ledger entries while maintaining a cryptographic audit trail for external regulators."
      ],
      related: ['risk-ai', 'salesforce-growth']
    },
    'risk-ai': {
      title: "Engold Launches Advanced Risk AI to Elevate Client Research & Audit Delivery",
      category: "Product Innovation & Research",
      readTime: "3 min read",
      date: "October 2026",
      author: "Product Strategy Desk",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      takeaways: [
        "Instant contextual synthesis of complex IT governance and security frameworks.",
        "50% reduction in initial enterprise risk assessment setup timelines.",
        "Proactive automated alerting for emerging IT security vulnerabilities."
      ],
      content: [
        "Engold Consulting officially announced the launch of its proprietary Risk AI intelligence platform, purpose-built to accelerate regulatory audit research and vulnerability mitigation.",
        "The system aggregates global threat feeds, regulatory shifts, and IT compliance standards into actionable client intelligence dashboards, mapping obscure statutory clauses into actionable engineering controls.",
        "By leveraging fine-tuned domain models trained on decades of anonymized audit records, Risk AI enables our engagement teams to diagnose an enterprise's regulatory vulnerabilities in hours rather than months.",
        "Clients gain access to an interactive portal where they can simulate regulatory audits, evaluate vendor risk matrices, and receive continuous recommendations as international regulatory bodies update guidance."
      ],
      related: ['ai-enablement', 'privacy-risk']
    }
  };

  const article = articles[storyId] || articles['salesforce-growth'];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen text-slate-900 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* TOP NAVIGATION & SHARE */}
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights & Newsroom</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 shadow-sm transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-bold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Story</span>
              </>
            )}
          </button>
        </div>

        {/* ARTICLE HEADER */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-bold tracking-wide uppercase">
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-2 border-b border-slate-200 pb-6">
            <span className="font-bold text-slate-800">{article.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}</span>
            <span>•</span>
            <span>Published {article.date}</span>
          </div>
        </header>

        {/* FEATURED EDITORIAL IMAGE */}
        <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl h-[360px] sm:h-[460px]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* EXECUTIVE TAKEAWAYS BENTO BOX */}
        <section className="bg-orange-50/70 rounded-3xl border border-orange-200/70 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-orange-700">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Executive Summary & Measurable Impact</span>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2">
            {article.takeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{takeaway}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MAIN EDITORIAL CONTENT */}
        <article className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* AUTHOR & ADVISORY DESK CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-orange-500 flex items-center justify-center font-bold text-lg">
              E
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Engold Enterprise Research & Advisory</h4>
              <p className="text-xs text-slate-500">Decades of proven leadership in enterprise governance, cyber risk, and systems architecture.</p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            Explore More Insights
          </button>
        </div>

        {/* RELATED STORIES SECTION */}
        {article.related && (
          <section className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight text-slate-900">
                Related Research & Case Studies
              </h3>
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                More Reading
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {article.related.map((relId) => {
                const relArticle = articles[relId];
                if (!relArticle) return null;
                return (
                  <div
                    key={relId}
                    onClick={() => {
                      if (onOpenArticle) onOpenArticle(relId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                        {relArticle.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                        {relArticle.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {relArticle.content[0]}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-700">
                      <span>{relArticle.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-orange-600 group-hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}