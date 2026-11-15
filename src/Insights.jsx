import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Search,
  Mail,
  ChevronRight
} from 'lucide-react';

export default function Insights({ pageKey = 'insights', onNavigate, onOpenArticle }) {
  const [selectedCategory, setSelectedCategory] = useState(
    pageKey === 'ai-hub' ? 'AI Hub & Agents' :
    pageKey === 'global-surveys' ? 'Global Surveys' :
    pageKey === 'thought-leadership' ? 'Thought Leadership' : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const articles = [
    {
      id: "ai-enablement",
      title: "AI Enablement: From First Model Training to Autonomous Agentic Execution",
      category: "AI Hub & Agents",
      readTime: "4 min read",
      date: "October 2026",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Why the true enterprise breakthrough is not chatting with an LLM, but wrapping multi-agent reasoning with Zero-Trust security and deterministic compliance boundaries.",
      author: "Engold AI Practice Group"
    },
    {
      id: "risk-ai",
      title: "Engold Launches Advanced Risk AI Platform to Elevate Client Research & Audit Delivery",
      category: "AI Hub & Agents",
      readTime: "3 min read",
      date: "October 2026",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Announcing our proprietary AI engine that ingests thousands of global regulatory changes weekly and maps them to client control baselines with 99.9% precision.",
      author: "Product Strategy Desk"
    },
    {
      id: "privacy-risk",
      title: "Entertainment Leader Cuts Annual Privacy Risk Reviews From Weeks to Under 4 Hours",
      category: "Thought Leadership",
      readTime: "3 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      excerpt: "How a major digital streaming company replaced manual spreadsheet audits with automated data-lineage workflows across 800+ microservices.",
      author: "Data Privacy Practice"
    },
    {
      id: "salesforce-growth",
      title: "Architecture Firm Connects Salesforce Enterprise Pipeline Directly to Revenue Growth",
      category: "Case Studies",
      readTime: "4 min read",
      date: "August 2026",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Aligning partner billable capacity directly with CRM opportunities delivered a 35% reduction in sales cycle turnaround times and real-time margin tracking.",
      author: "Enterprise ERP Advisory"
    },
    {
      id: "continuous-controls",
      title: "2026 Global C-Suite Benchmark: The Transition to Continuous Controls Monitoring",
      category: "Global Surveys",
      readTime: "6 min read",
      date: "October 2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Survey of 240 enterprise CISOs and CFOs indicates that 81% have phased out periodic annual testing in favor of real-time telemetry-backed control proofs.",
      author: "Engold Research Institute"
    },
    {
      id: "zero-trust-cloud",
      title: "Zero-Trust Architecture for Hybrid Multi-Cloud Banking Infrastructures",
      category: "Cyber & Zero-Trust",
      readTime: "5 min read",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      excerpt: "A tactical breakdown of microsegmentation, ephemeral certificate rotation, and tokenized PII vaults designed to withstand quantum cryptanalysis.",
      author: "Cybersecurity & Cloud Practice"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleArticleClick = (articleId) => {
    if (onOpenArticle) {
      onOpenArticle(articleId);
    } else if (onNavigate) {
      onNavigate('article');
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen text-slate-900 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HERO TITLE SECTION */}
        <section className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/70 border border-slate-300/50 text-slate-800 text-xs font-bold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5 text-orange-600" />
            <span>Engold Research & Strategic Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
            Insights That Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Executive Decision-Making</span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl">
            Empowering boardrooms, CISOs, and enterprise leaders with empirical benchmarks, AI security blueprints, and regulatory analysis crafted by seasoned practitioners.
          </p>

          {/* META-STYLE PILL FILTER TABS */}
          <div className="pt-4 flex flex-wrap gap-2 items-center">
            {['All', 'AI Hub & Agents', 'Global Surveys', 'Thought Leadership', 'Case Studies', 'Cyber & Zero-Trust'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat === 'All' ? 'All Perspectives' : cat}
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED STORY BENTO CARD */}
        <section>
          <div 
            onClick={() => handleArticleClick('ai-enablement')}
            className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
          >
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                alt="AI Enablement Featured Paper"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                  Featured Executive Report
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                  <span className="text-orange-600 font-bold uppercase tracking-wider">AI Hub & Agents</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 4 min read</span>
                  <span>•</span>
                  <span>October 2026</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-orange-600 transition-colors">
                  AI Enablement: From First Model Training to Autonomous Agentic Execution
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Organizations encounter immense hurdles when attempting to scale conversational LLMs into autonomous agentic workflows capable of executing business logic across ERPs. We outline the 4-phase architectural guardrail framework that guarantees auditability and deterministic safety.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-lg font-bold text-slate-900 block">Zero-Trust</span>
                    <span className="text-[11px] text-slate-500">API Execution Boundaries</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-lg font-bold text-slate-900 block">100% Audit</span>
                    <span className="text-[11px] text-slate-500">Deterministic Step Logging</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">By Engold AI Practice Group</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  Read Full Paper <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Latest Publications & Research
            </h3>

            {/* SEARCH BOX */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((item, idx) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -4 }}
                onClick={() => handleArticleClick(item.id)}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-[11px] text-slate-400 font-medium">{item.author}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* NEWSLETTER SUBSCRIPTION CALLOUT */}
        <section className="rounded-3xl bg-slate-900 p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Bi-Weekly Executive Bulletin</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Join 18,000+ Enterprise Leaders Receiving Our Intelligence Briefing
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Curated risk indices, emerging zero-day vulnerabilities, regulatory shift analysis, and real-world AI implementation benchmarks delivered straight to your inbox.
            </p>

            {isSubscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold">You are subscribed! Our latest Q4 benchmark report has been sent to {subscribedEmail}.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your enterprise work email..."
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/25 shrink-0"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
              <span>• Zero spam</span>
              <span>• One-click unsubscribe</span>
              <span>• Strict enterprise privacy</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}