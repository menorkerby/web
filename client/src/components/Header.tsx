import React, { useState, useEffect, useRef } from 'react';
import { X, Menu, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const LogoGlyph: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 36 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Left bracket */}
    <path
      d="M12 4L4 14L12 24"
      stroke="#5475FF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right bracket */}
    <path
      d="M24 4L32 14L24 24"
      stroke="#36D6DF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Merge line */}
    <path
      d="M15 14H21"
      stroke="#8D9DFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Center dot */}
    <circle cx="18" cy="14" r="1.5" fill="#8D9DFF" />
  </svg>
);

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [menuOpen]);

  // Lock body scroll when menu open on mobile
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(8,13,24,0.88)] backdrop-blur-xl border-b border-[rgba(173,194,226,0.1)] shadow-lg'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between h-[72px] md:h-[80px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
            aria-label="CodeMerge — go to top"
          >
            <LogoGlyph className="w-9 h-7" />
            <span className="font-heading font-bold text-[1.15rem] tracking-tight text-text-primary">
              CodeMerge
            </span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative px-4 py-2 text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150 group focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                >
                  {label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[14px] font-semibold text-white bg-gradient-to-r from-[#5577FF] to-[#6D66F7] hover:from-[#6688ff] hover:to-[#7e77f8] hover:shadow-brand-glow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none active:scale-[0.98]"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-[rgba(255,255,255,0.06)] transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(8,13,24,0.97)] backdrop-blur-2xl border-b border-[var(--line)] animate-slide-down"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <Container>
            <ul className="py-6 space-y-1" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className="block py-3 px-2 text-[1rem] font-medium text-text-secondary hover:text-text-primary border-b border-[var(--line)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-[12px] text-[15px] font-semibold text-white bg-gradient-to-r from-[#5577FF] to-[#6D66F7] hover:from-[#6688ff] hover:to-[#7e77f8] transition-all duration-200"
                >
                  Start a Project
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};
