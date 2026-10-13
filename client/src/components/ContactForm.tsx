import React, { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { submitContact, type ContactPayload } from '../lib/api';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FieldError {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

function validateForm(data: ContactPayload): FieldError {
  const errors: FieldError = {};
  if (!data.name || data.name.trim().length < 2) errors.name = 'Please enter your full name (at least 2 characters).';
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!data.service) errors.service = 'Please select the service you need.';
  if (!data.message || data.message.trim().length < 10) errors.message = 'Please describe your project (at least 10 characters).';
  return errors;
}

const SERVICES = [
  'Website Development',
  'Software Solutions',
  'Digital Design',
  'Technical Support',
  'Other',
] as const;

const BUDGETS = ['Not sure yet', 'Below ₱10,000', '₱10,000–₱25,000', '₱25,000+'] as const;

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const [form, setForm] = useState<ContactPayload>({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: '',
    website: '', // honeypot
  });

  const update = (key: keyof ContactPayload, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (fieldErrors[key as keyof FieldError]) {
      setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      // Focus the first errored field
      const firstKey = Object.keys(errors)[0];
      (document.getElementById(`field-${firstKey}`) as HTMLElement | null)?.focus();
      return;
    }

    setFormState('loading');
    setServerMessage('');

    try {
      const result = await submitContact(form);
      if (result.success) {
        setFormState('success');
        setServerMessage('Thanks for reaching out! Your inquiry has been received.');
      } else {
        setFormState('error');
        setServerMessage(result.message || "We couldn't send your inquiry right now. Please try again later.");
      }
    } catch {
      setFormState('error');
      setServerMessage("We couldn't send your inquiry right now. Please try again later.");
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl px-4 py-3 text-[15px] bg-[var(--bg)] border text-text-primary placeholder-text-muted transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
      hasError
        ? 'border-error focus:ring-error'
        : 'border-[rgba(173,194,226,0.18)] hover:border-[rgba(173,194,226,0.32)]'
    }`;

  const labelClass = 'block text-[13px] font-semibold text-text-secondary mb-1.5';

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-[22px] border border-[rgba(90,212,166,0.3)] bg-[rgba(90,212,166,0.05)]">
        <CheckCircle2 className="w-12 h-12 text-success mb-4" aria-hidden="true" />
        <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">Inquiry received!</h3>
        <p className="text-text-secondary text-[15px] max-w-[40ch]">{serverMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project inquiry form"
      className="space-y-5"
    >
      {/* Honeypot — visually hidden */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="field-website">Website</label>
        <input
          id="field-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update('website', e.target.value)}
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="field-name" className={labelClass}>
          Full name <span className="text-error" aria-label="required">*</span>
        </label>
        <input
          id="field-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
          minLength={2}
          maxLength={100}
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className={inputClass(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? 'err-name' : undefined}
          aria-invalid={!!fieldErrors.name}
        />
        {fieldErrors.name && (
          <p id="err-name" className="mt-1.5 text-[12px] text-error flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="field-email" className={labelClass}>
          Email address <span className="text-error" aria-label="required">*</span>
        </label>
        <input
          id="field-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          maxLength={254}
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className={inputClass(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? 'err-email' : undefined}
          aria-invalid={!!fieldErrors.email}
        />
        {fieldErrors.email && (
          <p id="err-email" className="mt-1.5 text-[12px] text-error flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="field-service" className={labelClass}>
          Service needed <span className="text-error" aria-label="required">*</span>
        </label>
        <select
          id="field-service"
          name="service"
          required
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          className={`${inputClass(fieldErrors.service)} cursor-pointer`}
          aria-describedby={fieldErrors.service ? 'err-service' : undefined}
          aria-invalid={!!fieldErrors.service}
        >
          <option value="" disabled>Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {fieldErrors.service && (
          <p id="err-service" className="mt-1.5 text-[12px] text-error flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            {fieldErrors.service}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="field-budget" className={labelClass}>
          Budget range <span className="text-text-muted font-normal">(optional)</span>
        </label>
        <select
          id="field-budget"
          name="budget"
          value={form.budget}
          onChange={(e) => update('budget', e.target.value)}
          className={`${inputClass()} cursor-pointer`}
        >
          <option value="">Prefer not to say</option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="field-message" className={labelClass}>
          Tell us about your project <span className="text-error" aria-label="required">*</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          required
          rows={5}
          placeholder="What are you building? Who is it for? What matters most?"
          minLength={10}
          maxLength={3000}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputClass(fieldErrors.message)} resize-none`}
          aria-describedby={`char-count ${fieldErrors.message ? 'err-message' : ''}`}
          aria-invalid={!!fieldErrors.message}
        />
        <div className="flex justify-between items-start mt-1">
          {fieldErrors.message ? (
            <p id="err-message" className="text-[12px] text-error flex items-center gap-1" role="alert">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              {fieldErrors.message}
            </p>
          ) : (
            <span />
          )}
          <span
            id="char-count"
            className="text-[11px] text-text-muted ml-auto"
            aria-live="polite"
          >
            {form.message.length}/3000
          </span>
        </div>
      </div>

      {/* Server error */}
      {formState === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-xl border border-[rgba(255,126,147,0.3)] bg-[rgba(255,126,147,0.08)] text-error text-[14px]"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-[12px] font-semibold text-[15px] text-white transition-all duration-200 bg-gradient-to-r from-[#5577FF] to-[#6D66F7] hover:from-[#6688ff] hover:to-[#7e77f8] hover:shadow-brand-glow focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
        >
          {formState === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              Send Project Inquiry
            </>
          )}
        </button>

        <p className="mt-3 text-center text-[12px] text-text-muted leading-relaxed">
          Your details will only be used to respond to your inquiry.
        </p>
      </div>
    </form>
  );
};
