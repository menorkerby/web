import React from 'react';
import { MapPin } from 'lucide-react';
import { Container } from '../components/Container';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-[100px] lg:py-[130px] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(160deg, #0E1729 0%, #080D18 40%, #0a1220 100%)',
        }}
      />
      {/* Glow accent */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #5475FF, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-[42fr_58fr] gap-12 lg:gap-16 items-start">
          {/* Left: message */}
          <div>
            <span className="inline-block mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-light">
              Let's Connect
            </span>

            <h2
              id="contact-heading"
              className="font-heading font-bold text-text-primary mb-2"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
              }}
            >
              Have a project in mind?
            </h2>
            <p
              className="font-heading font-bold mb-6"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(115deg, #AFC2FF, #64DDE6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let's make it happen.
            </p>

            <p className="text-[16px] leading-[1.7] text-text-secondary mb-8 max-w-[44ch]">
              Share a little about what you need, and we'll have a better starting
              point for the conversation.
            </p>

            {/* Support info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[rgba(84,117,255,0.1)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-brand" aria-hidden="true" />
                </div>
                <span className="text-[14px] text-text-secondary">Manila, Philippines</span>
              </div>
            </div>

            {/* Decorative geometric lines */}
            <div className="mt-10 hidden lg:block" aria-hidden="true">
              <svg viewBox="0 0 200 60" className="w-48 opacity-20" fill="none">
                <path d="M0 30 Q50 10, 100 30 Q150 50, 200 30" stroke="#5475FF" strokeWidth="1.5" fill="none" />
                <path d="M0 40 Q50 20, 100 40 Q150 60, 200 40" stroke="#36D6DF" strokeWidth="1" fill="none" opacity="0.6" />
                {[0, 50, 100, 150, 200].map((x) => (
                  <circle key={x} cx={x} cy={x === 100 ? 30 : 30 + (x === 50 ? -8 : x === 150 ? 8 : 0)} r="2.5" fill={x === 100 ? '#5475FF' : '#8D9DFF'} />
                ))}
              </svg>
            </div>
          </div>

          {/* Right: form card */}
          <div
            className="rounded-[22px] border border-[var(--line)] p-7 sm:p-8"
            style={{ background: 'rgba(14, 23, 41, 0.85)', backdropFilter: 'blur(12px)' }}
          >
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
