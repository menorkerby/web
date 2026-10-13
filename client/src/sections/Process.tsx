import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

const STEPS = [
  {
    number: '01',
    label: 'Discover',
    description:
      "Tell us what you're building, who it's for, and what matters most. We'll define a clear direction together.",
    color: '#5475FF',
  },
  {
    number: '02',
    label: 'Design & Build',
    description:
      'We shape the experience, create the visuals, and develop a solution around your needs.',
    color: '#8D9DFF',
  },
  {
    number: '03',
    label: 'Refine & Launch',
    description:
      'We review the details, make improvements, and prepare your digital experience for use.',
    color: '#36D6DF',
  },
];

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-[100px] lg:py-[130px]"
      aria-labelledby="process-heading"
    >
      <Container>
        <div className="mb-16 max-w-[56ch]">
          <SectionHeading
            eyebrow="How We Work"
            headline="Simple process. Thoughtful results."
            description="We keep things collaborative and clear, so you're involved from the first idea to the finishing touches."
          />
        </div>

        {/* Desktop: horizontal steps with connecting line */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[28px] left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px"
            style={{ background: 'linear-gradient(90deg, #5475FF, #8D9DFF, #36D6DF)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative">
            {STEPS.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col lg:items-start">
                {/* Mobile: vertical line */}
                {idx < STEPS.length - 1 && (
                  <div
                    className="lg:hidden absolute left-[27px] top-[56px] w-px h-[calc(100%+2rem)]"
                    style={{ background: `linear-gradient(180deg, ${step.color}, transparent)` }}
                    aria-hidden="true"
                  />
                )}

                {/* Step header */}
                <div className="flex items-center gap-4 mb-5 lg:flex-col lg:items-start lg:gap-3">
                  {/* Number circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-[14px] border-2 relative z-10"
                    style={{
                      background: `rgba(${step.color === '#5475FF' ? '84,117,255' : step.color === '#8D9DFF' ? '141,157,255' : '54,214,223'},0.12)`,
                      borderColor: step.color,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-heading font-semibold text-[1.2rem] lg:text-[1.3rem] text-text-primary tracking-tight lg:mt-2">
                    {step.label}
                  </h3>
                </div>

                <p className="text-[15px] leading-[1.7] text-text-secondary pl-[74px] lg:pl-0 max-w-[36ch]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
