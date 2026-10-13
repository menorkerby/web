import React from 'react';
import { Globe, Palette, Code2, Headphones } from 'lucide-react';
import { Container } from '../components/Container';

const CAPABILITIES = [
  { label: 'Web Experiences', icon: Globe },
  { label: 'Digital Design', icon: Palette },
  { label: 'Custom Solutions', icon: Code2 },
  { label: 'Tech Support', icon: Headphones },
];

export const Capabilities: React.FC = () => {
  return (
    <div className="relative border-y border-[var(--line)] bg-bg-elevated">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-[var(--line)]">
          {CAPABILITIES.map(({ label, icon: Icon }, idx) => (
            <div
              key={label}
              className={`flex items-center gap-3 py-5 px-4 sm:px-6 ${
                idx % 2 === 0 ? '' : 'border-l border-[var(--line)] lg:border-l-0'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(84,117,255,0.12)] flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-brand" aria-hidden="true" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-semibold text-text-secondary">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
