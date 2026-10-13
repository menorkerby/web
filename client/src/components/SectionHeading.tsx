import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  headline: React.ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  headline,
  description,
  center = false,
  className = '',
}) => {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="inline-block mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-light opacity-90">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-text-primary">
        {headline}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] leading-[1.7] text-text-secondary max-w-[56ch]">
          {description}
        </p>
      )}
    </div>
  );
};
