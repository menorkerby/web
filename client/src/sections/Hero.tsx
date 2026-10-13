import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';

// Hero browser mockup — pure CSS/SVG
const HeroVisual: React.FC = () => (
  <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 animate-fade-in delay-400">
    {/* Glow behind the card */}
    <div
      className="absolute -inset-8 rounded-full opacity-30 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse, rgba(84,117,255,0.4) 0%, rgba(54,214,223,0.15) 50%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      aria-hidden="true"
    />

    {/* Main browser card */}
    <div
      className="relative rounded-[22px] border border-[rgba(173,194,226,0.18)] overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #111E31 0%, #0c1826 100%)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.45), 0 4px 24px rgba(84,117,255,0.12)',
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[rgba(173,194,226,0.1)] bg-[rgba(8,13,24,0.6)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[rgba(255,126,147,0.7)]" />
          <div className="w-3 h-3 rounded-full bg-[rgba(255,198,100,0.7)]" />
          <div className="w-3 h-3 rounded-full bg-[rgba(90,212,166,0.7)]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]">
            <span className="w-2 h-2 rounded-full bg-success opacity-70 flex-shrink-0" />
            <span className="text-[11px] text-text-muted font-mono">codemerge.studio / preview</span>
          </div>
        </div>
        <div className="w-12" />
      </div>

      {/* Browser body */}
      <div className="p-5 dot-grid">
        {/* Main concept label */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-light mb-1">
            / project concept
          </p>
          <h3 className="font-heading font-bold text-[1.25rem] text-text-primary leading-tight">
            Build better,{' '}
            <span style={{ color: '#36D6DF' }}>together.</span>
          </h3>
        </div>

        {/* Two column layout */}
        <div className="flex gap-3 mb-3">
          {/* Left: merge diagram */}
          <div
            className="flex-1 rounded-xl p-4 border border-[rgba(173,194,226,0.1)]"
            style={{ background: 'rgba(8,13,24,0.6)' }}
          >
            <p className="text-[10px] text-text-muted uppercase tracking-widest mb-3">Merge path</p>
            <div className="relative flex flex-col items-center gap-1">
              {/* Two input paths */}
              <div className="flex gap-4 mb-1">
                <div className="w-14 h-6 rounded-lg border border-[rgba(84,117,255,0.4)] bg-[rgba(84,117,255,0.1)] flex items-center justify-center">
                  <span className="text-[9px] text-brand font-semibold">Design</span>
                </div>
                <div className="w-14 h-6 rounded-lg border border-[rgba(54,214,223,0.4)] bg-[rgba(54,214,223,0.08)] flex items-center justify-center">
                  <span className="text-[9px] text-accent font-semibold">Build</span>
                </div>
              </div>
              {/* Lines merging */}
              <svg viewBox="0 0 80 30" className="w-full h-6 opacity-60" aria-hidden="true">
                <path d="M20 2 Q20 15, 40 28" stroke="#5475FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M60 2 Q60 15, 40 28" stroke="#36D6DF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="40" cy="28" r="3" fill="#8D9DFF" />
              </svg>
              <div className="w-20 h-7 rounded-lg bg-gradient-to-r from-brand to-accent flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">Your Product</span>
              </div>
            </div>
          </div>

          {/* Right: component tiles */}
          <div className="flex flex-col gap-2 w-[90px]">
            <div className="rounded-xl p-2.5 border border-[rgba(173,194,226,0.1)] bg-[rgba(8,13,24,0.5)]">
              <div className="w-4 h-4 rounded-md bg-brand mb-1.5 opacity-80" />
              <div className="w-full h-1.5 rounded-full bg-white/20 mb-1" />
              <div className="w-3/4 h-1.5 rounded-full bg-white/15" />
            </div>
            <div className="rounded-xl p-2.5 border border-[rgba(54,214,223,0.2)] bg-[rgba(54,214,223,0.05)]">
              <div className="w-4 h-4 rounded-md bg-accent mb-1.5 opacity-60" />
              <div className="w-full h-1.5 rounded-full bg-white/20 mb-1" />
              <div className="w-2/3 h-1.5 rounded-full bg-white/15" />
            </div>
          </div>
        </div>

        {/* Bottom row: two status chips */}
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[rgba(173,194,226,0.12)] bg-[rgba(8,13,24,0.5)] flex-1">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-brand flex-shrink-0" fill="none" aria-hidden="true">
              <path d="M3 8h4M9 8h4M8 3v4M8 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-semibold text-text-secondary">Design + Development</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[rgba(90,212,166,0.2)] bg-[rgba(90,212,166,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
            <span className="text-[10px] font-semibold text-success">Made to fit your idea</span>
          </div>
        </div>
      </div>
    </div>

    {/* Floating chip: Design + Development */}
    <div
      className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-[rgba(84,117,255,0.3)] bg-[rgba(8,13,24,0.92)] backdrop-blur-md shadow-lg animate-float hidden sm:flex"
      aria-hidden="true"
    >
      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand to-accent flex items-center justify-center flex-shrink-0">
        <span className="text-[9px] font-bold text-white">CM</span>
      </div>
      <div>
        <p className="text-[10px] font-semibold text-text-primary leading-none">CodeMerge Studio</p>
        <p className="text-[9px] text-text-muted">Manila, Philippines</p>
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // Trigger animation after mount
    el.style.opacity = '0';
    requestAnimationFrame(() => {
      el.style.transition = 'none';
      requestAnimationFrame(() => {
        el.style.transition = '';
        el.style.opacity = '';
      });
    });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-[88px] pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, #5475FF 0%, transparent 60%)',
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #36D6DF 0%, transparent 60%)',
            filter: 'blur(60px)',
            transform: 'translate(50%, 50%)',
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-[53fr_47fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div ref={contentRef}>
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-[rgba(84,117,255,0.3)] bg-[rgba(84,117,255,0.08)] animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-light">
                Digital ideas, thoughtfully built
              </span>
            </div>

            {/* Hero headline — h1 */}
            <h1
              id="hero-heading"
              className="font-heading font-bold text-text-primary mb-6 animate-fade-up delay-100"
              style={{
                fontSize: 'clamp(2.65rem, 6vw, 5.8rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.045em',
              }}
            >
              We build digital
              <br />
              experiences that
              <br />
              <span className="text-gradient">just click.</span>
            </h1>

            {/* Supporting copy */}
            <p
              className="text-[17px] sm:text-[18px] leading-[1.7] text-text-secondary max-w-[52ch] mb-8 animate-fade-up delay-200"
            >
              From standout websites to practical digital solutions, CodeMerge helps turn
              your ideas into polished experiences—designed with purpose and built to work.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-up delay-300">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] text-[15px] font-semibold text-white bg-gradient-to-r from-[#5577FF] to-[#6D66F7] hover:from-[#6688ff] hover:to-[#7e77f8] hover:shadow-brand-glow transition-all duration-200 active:scale-[0.98] min-h-[48px] focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] text-[15px] font-semibold text-text-primary border border-[rgba(173,194,226,0.2)] hover:border-[rgba(173,194,226,0.4)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 active:scale-[0.98] min-h-[48px] focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Small support line */}
            <p className="text-[13px] text-text-muted animate-fade-up delay-400">
              <span className="text-text-secondary font-medium">Web Development</span>
              {' / '}
              <span className="text-text-secondary font-medium">Digital Design</span>
              {' / '}
              <span className="text-text-secondary font-medium">Software Solutions</span>
            </p>
          </div>

          {/* Right: browser mockup */}
          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
