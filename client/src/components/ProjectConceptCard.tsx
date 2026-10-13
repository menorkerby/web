import React from 'react';
import type { Concept } from '../data/concepts';

// Mini CSS mockups for each concept type
const ConceptMockup: React.FC<{ concept: Concept }> = ({ concept }) => {
  if (concept.id === 'local-business') {
    return (
      <div className="w-full h-full flex flex-col gap-2 p-4" style={{ background: concept.bgColor }}>
        {/* Navbar bar */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-2.5 rounded-full bg-white/20" />
          <div className="flex gap-2">
            <div className="w-8 h-2 rounded-full bg-white/10" />
            <div className="w-8 h-2 rounded-full bg-white/10" />
            <div className="w-12 h-5 rounded-full" style={{ background: concept.accentColor, opacity: 0.8 }} />
          </div>
        </div>
        {/* Hero area */}
        <div className="flex-1 flex flex-col justify-center gap-2 mt-2">
          <div className="w-3/4 h-3 rounded-full bg-white/30" />
          <div className="w-1/2 h-3 rounded-full bg-white/20" />
          <div className="w-2/3 h-2 rounded-full bg-white/15 mt-1" />
          <div className="flex gap-2 mt-2">
            <div className="w-20 h-6 rounded-lg" style={{ background: concept.accentColor, opacity: 0.7 }} />
            <div className="w-16 h-6 rounded-lg border border-white/20" />
          </div>
        </div>
        {/* Cards row */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] p-2">
              <div className="w-3 h-3 rounded-full mb-1" style={{ background: concept.accentColor, opacity: 0.6 }} />
              <div className="w-full h-1.5 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (concept.id === 'student-portfolio') {
    return (
      <div className="w-full h-full flex gap-3 p-4" style={{ background: concept.bgColor }}>
        {/* Left sidebar */}
        <div className="w-1/3 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20" />
          <div className="w-full h-2 rounded-full bg-white/25" />
          <div className="w-3/4 h-2 rounded-full bg-white/15" />
          <div className="mt-2 flex flex-col gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: concept.accentColor, opacity: 0.7 }} />
                <div className="flex-1 h-1.5 rounded-full bg-white/15" />
              </div>
            ))}
          </div>
        </div>
        {/* Right content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full h-2.5 rounded-full bg-white/30" />
          <div className="w-2/3 h-2 rounded-full bg-white/20" />
          <div className="grid grid-cols-2 gap-2 mt-2 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl border border-white/[0.1] bg-white/[0.04]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // dashboard
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4" style={{ background: concept.bgColor }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="w-20 h-2.5 rounded-full bg-white/25" />
        <div className="flex gap-1.5">
          <div className="w-6 h-6 rounded-lg bg-white/10" />
          <div className="w-6 h-6 rounded-full bg-white/15" />
        </div>
      </div>
      {/* Stats row */}
      <div className="flex gap-2">
        {[concept.accentColor, 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0.08)'].map((c, i) => (
          <div key={i} className="flex-1 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] p-2 flex flex-col justify-between">
            <div className="w-3 h-3 rounded-sm" style={{ background: c, opacity: 0.8 }} />
            <div className="w-2/3 h-1.5 rounded-full bg-white/25" />
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="flex-1 rounded-xl bg-white/[0.04] border border-white/[0.08] p-3 flex flex-col justify-end">
        <div className="flex items-end gap-1 h-2/3">
          {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === 3 ? concept.accentColor : 'rgba(255,255,255,0.12)',
                opacity: i === 3 ? 0.8 : 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectConceptCardProps {
  concept: Concept;
}

export const ProjectConceptCard: React.FC<ProjectConceptCardProps> = ({ concept }) => {
  return (
    <article className="group relative rounded-[22px] border border-[var(--line)] bg-surface overflow-hidden transition-all duration-300 hover:border-[rgba(84,117,255,0.25)] hover:shadow-card-hover hover:-translate-y-1">
      {/* Concept label badge */}
      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-sm">
        <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-text-muted">
          Concept Preview — Not a Client Project
        </span>
      </div>

      {/* Mockup area */}
      <div
        className="relative h-48 sm:h-52 overflow-hidden"
        style={{ background: concept.bgColor }}
        aria-label={`${concept.title} mockup preview`}
      >
        <ConceptMockup concept={concept} />
        {/* Overlay gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-[1.1rem] text-text-primary tracking-tight mb-2">
          {concept.title}
        </h3>
        <p className="text-[14px] leading-[1.65] text-text-secondary mb-4">
          {concept.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {concept.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full border"
              style={{
                background: `${concept.accentColor}15`,
                borderColor: `${concept.accentColor}30`,
                color: concept.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
