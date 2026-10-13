import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Container } from './Container';

const LogoGlyph: React.FC = () => (
  <svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-5" aria-hidden="true">
    <path d="M12 4L4 14L12 24" stroke="#5475FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 4L32 14L24 24" stroke="#36D6DF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 14H21" stroke="#8D9DFF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="14" r="1.5" fill="#8D9DFF" />
  </svg>
);

const FOOTER_NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-elevated border-t border-[var(--line)] pt-14 pb-8" role="contentinfo">
      <Container>
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 mb-2 focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-fit"
              aria-label="CodeMerge — back to top"
            >
              <LogoGlyph />
              <span className="font-heading font-bold text-[1.1rem] tracking-tight text-text-primary">
                CodeMerge
              </span>
            </a>
            <p className="text-[13px] text-text-muted max-w-[28ch]">
              Thoughtful design. Practical technology.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3" role="list">
              {FOOTER_NAV.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[13px] text-text-muted hover:text-text-primary transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hairline */}
        <div className="h-px bg-[var(--line)] mb-6" aria-hidden="true" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-[12px] text-text-muted">
              © {year} CodeMerge. All rights reserved.
            </p>
            <span className="hidden sm:block text-text-muted opacity-40" aria-hidden="true">·</span>
            <p className="text-[12px] text-text-muted">Manila, Philippines</p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-text-muted hover:text-text-primary transition-colors group focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
