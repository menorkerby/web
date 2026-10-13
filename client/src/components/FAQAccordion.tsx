import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../data/faq';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <div className="divide-y divide-[var(--line)]" role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${item.id}-panel`;
        const triggerId = `${item.id}-trigger`;

        return (
          <div key={item.id} role="listitem">
            <button
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
            >
              <span className="font-heading font-semibold text-[1rem] sm:text-[1.05rem] text-text-primary group-hover:text-white transition-colors pr-2">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 text-text-muted mt-0.5 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-brand' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Animated panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              style={{
                maxHeight: isOpen ? '400px' : '0',
                overflow: 'hidden',
                transition: 'max-height 220ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <div className="pb-5 pr-8">
                <p className="text-[15px] leading-[1.7] text-text-secondary">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
