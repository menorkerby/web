import React from 'react';
import { MapPin } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

const VALUES = [
  {
    title: 'Purpose first',
    description: 'Every feature should solve a real problem.',
    color: '#5475FF',
  },
  {
    title: 'Detail matters',
    description: 'We care about how a product looks, feels, and works.',
    color: '#36D6DF',
  },
  {
    title: 'Built together',
    description: 'Clear communication helps ideas turn into better outcomes.',
    color: '#8D9DFF',
  },
];

// Abstract code/merge graphic — purely decorative SVG
const MergeGraphic: React.FC = () => (
  <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
    {/* Background glow */}
    <div
      className="absolute inset-0 opacity-25 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(84,117,255,0.5), transparent 70%)',
        filter: 'blur(40px)',
      }}
      aria-hidden="true"
    />

    <div
      className="relative rounded-[26px] border border-[rgba(173,194,226,0.14)] p-8 dot-grid"
      style={{ background: 'rgba(14,23,41,0.8)' }}
      aria-hidden="true"
    >
      {/* Large decorative glyph */}
      <div className="flex items-center justify-center mb-6">
        <svg viewBox="0 0 160 100" className="w-full max-w-[260px] h-auto" fill="none" aria-hidden="true">
          {/* Left brace */}
          <path
            d="M40 10 Q20 10 20 30 L20 45 Q20 50 10 50 Q20 50 20 55 L20 70 Q20 90 40 90"
            stroke="#5475FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Right brace */}
          <path
            d="M120 10 Q140 10 140 30 L140 45 Q140 50 150 50 Q140 50 140 55 L140 70 Q140 90 120 90"
            stroke="#36D6DF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Merge arrows flowing inward */}
          <path d="M55 50 L100 50" stroke="rgba(141,157,255,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Nodes */}
          {[55, 72, 88, 100].map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={50}
              r={i === 0 || i === 3 ? 4 : 3}
              fill={i === 0 ? '#5475FF' : i === 3 ? '#36D6DF' : '#8D9DFF'}
              opacity={i === 1 || i === 2 ? 0.5 : 1}
            />
          ))}
          {/* Labels */}
          <text x="40" y="42" fontSize="8" fill="rgba(169,183,204,0.7)" fontFamily="monospace">design</text>
          <text x="105" y="42" fontSize="8" fill="rgba(169,183,204,0.7)" fontFamily="monospace">build</text>
        </svg>
      </div>

      {/* Code line decorations */}
      <div className="space-y-2 font-mono text-[11px]">
        {[
          { label: 'idea', value: '"your vision"', color: '#5475FF' },
          { label: 'craft', value: '"practical & polished"', color: '#36D6DF' },
          { label: 'result', value: '"digital experience"', color: '#8D9DFF' },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span style={{ color }} className="opacity-70">{label}</span>
            <span className="text-text-muted">→</span>
            <span className="text-text-secondary">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-[100px] lg:py-[130px] bg-bg-elevated relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Fine grid texture background accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" aria-hidden="true" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: content */}
          <div>
            <SectionHeading
              eyebrow="About CodeMerge"
              headline="Where creative thinking meets practical technology."
              className="mb-7"
            />

            <div className="space-y-5 mb-10">
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-text-secondary">
                CodeMerge is a Manila-based IT and digital services business concept built around
                one simple belief: technology should make ideas more useful, accessible, and engaging.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-text-secondary">
                We combine thoughtful design with hands-on development to help individuals and small
                businesses build a stronger digital presence.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {VALUES.map(({ title, description, color }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-7 h-7 rounded-lg flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                    aria-hidden="true"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                  </div>
                  <div>
                    <span className="font-semibold text-text-primary text-[15px]">{title}</span>
                    {' — '}
                    <span className="text-text-secondary text-[15px]">{description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.03)]">
              <MapPin className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
              <span className="text-[13px] text-text-secondary">Based in Manila, Philippines</span>
            </div>
          </div>

          {/* Right: decorative graphic */}
          <div className="flex justify-center lg:justify-end">
            <MergeGraphic />
          </div>
        </div>
      </Container>
    </section>
  );
};
