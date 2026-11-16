import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

/**
 * Shared hero for section pages (Services, Industries).
 * Each page passes its own content; the sibling bar lets visitors hop between
 * related pages (real routes) without going back to the menu.
 */
export default function PageHero({
  pageKey,
  breadcrumb = [],
  eyebrow,
  title,
  highlight,
  description,
  image,
  stats = [],
  primaryCta,
  secondaryCta,
  siblings = [],
  siblingsLabel = 'Explore',
  onNavigate,
}) {
  const renderCta = (cta, variant) => {
    if (!cta) return null;
    const base =
      'group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300';
    const styles =
      variant === 'primary'
        ? `${base} bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:-translate-y-0.5`
        : `${base} bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md`;
    const content = (
      <>
        {cta.label}
        {variant === 'primary' && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </>
    );
    return cta.href ? (
      <a href={cta.href} target={cta.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={styles}>
        {content}
      </a>
    ) : (
      <button onClick={() => onNavigate(cta.page)} className={styles}>
        {content}
      </button>
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        {/* Background image + overlays */}
        <motion.img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute inset-0 -z-20 w-full h-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />

        <motion.div
          key={pageKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16"
        >
          {/* Breadcrumb */}
          {breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-400 mb-8">
              {breadcrumb.map((crumb, i) => {
                const last = i === breadcrumb.length - 1;
                return (
                  <React.Fragment key={crumb.label}>
                    {last ? (
                      <span className="text-orange-400" aria-current="page">{crumb.label}</span>
                    ) : (
                      <button onClick={() => onNavigate(crumb.page)} className="hover:text-white transition-colors">
                        {crumb.label}
                      </button>
                    )}
                    {!last && <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
                  </React.Fragment>
                );
              })}
            </nav>
          )}

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase">{eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08]">
              {title}{' '}
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">{highlight}</span>
              )}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">{description}</p>

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {renderCta(primaryCta, 'primary')}
                {renderCta(secondaryCta, 'secondary')}
              </div>
            )}
          </div>

          {/* Stats */}
          {stats.length > 0 && (
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md px-4 py-4 sm:px-5">
                  <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{s.value}</span>
                  <span className="block mt-1 text-[11px] sm:text-xs leading-snug text-slate-400 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Sibling page switcher */}
      {siblings.length > 0 && (
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
            <span className="hidden md:block shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-400">{siblingsLabel}</span>
            <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-1 px-1">
              {siblings.map((s) => {
                const active = s.key === pageKey;
                return (
                  <button
                    key={s.key}
                    onClick={() => !active && onNavigate(s.key)}
                    aria-current={active ? 'page' : undefined}
                    className={`relative shrink-0 px-3.5 py-4 text-[13px] font-semibold whitespace-nowrap transition-colors ${
                      active ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {s.label}
                    <span
                      className={`absolute left-3 right-3 bottom-0 h-[3px] rounded-full bg-orange-500 transition-transform duration-300 ${
                        active ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
