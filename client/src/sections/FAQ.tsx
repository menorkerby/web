import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { faqItems } from '../data/faq';

export const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-[100px] lg:py-[130px]"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-[42fr_58fr] gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-[100px]">
            <SectionHeading
              eyebrow="Common Questions"
              headline="A few things you might be wondering."
            />
            <p className="mt-4 text-[15px] leading-[1.7] text-text-muted">
              Have a different question?{' '}
              <a
                href="#contact"
                className="text-brand hover:text-brand-light underline underline-offset-2 transition-colors"
              >
                Send us an inquiry.
              </a>
            </p>
          </div>

          {/* Right: accordion */}
          <div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
};
