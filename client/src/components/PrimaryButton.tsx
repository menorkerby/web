import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  href?: string;
  loading?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  variant = 'primary',
  icon = true,
  href,
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const base =
    'inline-flex items-center gap-2 font-semibold text-[15px] rounded-[12px] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none select-none min-h-[46px] px-6';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#5577FF] to-[#6D66F7] text-white shadow-lg hover:shadow-brand-glow hover:from-[#6688ff] hover:to-[#7e77f8] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed',
    secondary:
      'bg-transparent border border-[rgba(173,194,226,0.2)] text-text-primary hover:border-[rgba(173,194,226,0.4)] hover:bg-[rgba(255,255,255,0.04)] active:scale-[0.98]',
  };

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : null}
      {children}
      {icon && !loading && <ArrowUpRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};
