import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  GraduationCap, 
  Globe2, 
  Sparkles, 
  Zap
} from 'lucide-react';

export default function Careers({ onNavigate }) {
  const perks = [
    {
      icon: <Globe2 className="w-5 h-5 text-orange-600" />,
      title: "Remote-First Flexibility",
      desc: "Work asynchronously from anywhere across the globe with comprehensive home-office and wellness stipends."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      title: "100% Sponsored Certifications",
      desc: "Uncapped annual budget for CISSP, CISA, AWS/Azure Solutions Architect, and emerging AI safety credentials."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
      title: "Top-Tier Total Compensation",
      desc: "Competitive base salaries, equity participation, performance bonuses, and fully covered health & retirement plans."
    },
    {
      icon: <Zap className="w-5 h-5 text-purple-600" />,
      title: "Executive Partner Mentorship",
      desc: "Direct collaboration with former Fortune 100 CISOs and Big-4 advisory partners on high-impact client engagements."
    }
  ];

  return (
    <main className="bg-[#F8FAFC] min-h-screen text-slate-900 pb-24">
      {/* 1. CINEMATIC HERO SECTION MATCHING HOMEPAGE LAYOUT WITH HERO7 */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-slate-950 text-white mb-16">
        {/* BACKGROUND IMAGE WITH LIGHTER, CRISP PRESENTATION */}
        <img
          src="/images/hero7.jpg"
          alt="Careers at Engold"
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[1.0] contrast-[1.05]"
        />

        {/* LIGHTER CINEMATIC OVERLAYS FOR CLEAR TEXT LEGIBILITY WHILE REVEALING THE IMAGE */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-20 sm:py-24 flex flex-col items-start justify-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6 max-w-3xl text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-orange-400 uppercase block">
              CAREERS AT ENGOLD • GLOBAL COLLECTIVE
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl text-left">
              Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Enterprise Trust & AI</span>
            </h1>

            <p className="text-gray-100 text-base sm:text-xl leading-relaxed max-w-2xl font-medium text-left">
              We are looking for bold problem solvers, cybersecurity leaders, risk strategists, and cloud architects passionate about building resilient systems for the world's most critical organizations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a
              href="https://www.linkedin.com/company/engold-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/40 text-center inline-block"
            >
              Explore Openings on LinkedIn
            </a>
            <button
              onClick={() => onNavigate && onNavigate('about')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/80 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 backdrop-blur-md transition-all shadow-md"
            >
              Our Culture & Values
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">

        {/* CULTURE & BENEFITS BENTO GRID */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Why Leaders Thrive at Engold
            </h2>
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest hidden sm:block">
              Culture & Benefits
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
                  {perk.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {perk.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </section>



        {/* TALENT PIPELINE & DIRECT LINKEDIN DESK */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-700/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Talent Network</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Explore All Open Roles on LinkedIn
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We manage our official job listings, continuous consultant network, and executive advisory placements through the official ENGOLD Consulting LinkedIn talent desk. Connect directly with our partners and recruiters.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/company/engold-consulting/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/30 flex items-center gap-3 shrink-0"
          >
            <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>Visit Engold LinkedIn</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </section>

        {/* SPONTANEOUS APPLICATION CALLOUT */}
        <section className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 block">
              TALENT NETWORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Don't see your specific specialization listed?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We frequently assemble confidential specialist pods for premier clients. Send your credentials and our practice leads will reach out when tailored advisory projects arise.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/company/engold-consulting/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-orange-500 hover:text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 inline-block text-center"
          >
            Submit General Profile
          </a>
        </section>

      </div>
    </main>
  );
}