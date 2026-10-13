import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { Service } from '../data/services';

// Distinct icons per service
const ServiceIcons: Record<string, React.FC<{ className?: string }>> = {
  'web-dev': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 14h36" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="11" r="1.5" fill="currentColor" />
      <circle cx="13" cy="11" r="1.5" fill="currentColor" />
      <circle cx="18" cy="11" r="1.5" fill="currentColor" />
      <path d="M12 22l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 22l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 22l-2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'software': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="6" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="21" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="21" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M27.5 24.5v5M25 27h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'design': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 6v6M20 28v6M6 20h6M28 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  ),
  'support': ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 28h28M14 28v4M22 28v4M10 32h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 12h2a2 2 0 012 2v8a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 18l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const Icon = ServiceIcons[service.id];

  return (
    <article
      className={`group relative flex flex-col rounded-[22px] border border-[var(--line)] bg-surface transition-all duration-300 hover:border-[rgba(84,117,255,0.3)] hover:shadow-card-hover hover:-translate-y-1 overflow-hidden ${
        featured ? 'p-8 md:p-10' : 'p-7'
      }`}
    >
      {/* Corner glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(84,117,255,0.1), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Number + icon row */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-[12px] font-semibold tracking-[0.14em] text-text-muted font-heading">
          {service.number}
        </span>
        {Icon && (
          <div className="w-10 h-10 text-brand group-hover:text-brand-light transition-colors duration-200">
            <Icon className="w-full h-full" />
          </div>
        )}
      </div>

      {/* Title */}
      <h3
        className={`font-heading font-semibold text-text-primary tracking-tight mb-3 ${
          featured ? 'text-[1.5rem]' : 'text-[1.2rem]'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-[1.65] text-text-secondary flex-1 mb-6">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[rgba(84,117,255,0.1)] text-brand-light border border-[rgba(84,117,255,0.15)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA link */}
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:text-brand-light transition-colors group/link"
        aria-label={`Let's talk about ${service.title}`}
      >
        <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
        Let's talk
        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5">
          →
        </span>
      </a>
    </article>
  );
};
