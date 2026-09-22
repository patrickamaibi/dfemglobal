import React, { useEffect, useId, useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { siteSettings } from '../../data/siteSettings';
import { ContactFormData } from '../../types';

interface ContactFormProps {
  preselectedService?: string;
  isCompact?: boolean;
  title?: string;
  subtitle?: string;
}

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-cream-50/50 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500';
const labelClass = 'mb-1.5 block text-sm font-semibold text-navy-900';
const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

type Status = 'idle' | 'loading' | 'success' | 'error';
type FormError = { kind: 'validation' | 'send'; message: string } | null;

const defaultService = () => servicesData[0]?.title ?? '';

const emptyForm = (service: string): ContactFormData => ({
  fullName: '',
  email: '',
  phone: '',
  serviceOfInterest: service || defaultService(),
  travelDate: '',
  passengersOrDelegates: '',
  message: '',
  companyName: '',
  _honeypot: '',
});

export const ContactForm: React.FC<ContactFormProps> = ({
  preselectedService = '',
  isCompact = false,
  title,
  subtitle,
}) => {
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;

  const [formData, setFormData] = useState<ContactFormData>(() => emptyForm(preselectedService));
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<FormError>(null);

  // Keep the selected service in step if the page passes a different one later.
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceOfInterest: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const whatsappHref = (text: string) =>
    `https://wa.me/${siteSettings.whatsapp.number}?text=${encodeURIComponent(text)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    // Honeypot: real visitors never fill this, so bots get a quiet "success" and nothing is sent.
    if (formData._honeypot) {
      setStatus('success');
      return;
    }

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!fullName || !email || !phone || !message) {
      setStatus('error');
      setError({ kind: 'validation', message: 'Please complete all required fields.' });
      return;
    }

    const recipient = siteSettings?.email?.general;
    if (!recipient) {
      setStatus('error');
      setError({
        kind: 'send',
        message: 'We could not send your enquiry just now. Please contact us on WhatsApp instead.',
      });
      return;
    }

    setStatus('loading');
    setError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Travel Enquiry: ${formData.serviceOfInterest} - ${fullName}`,
          Name: fullName,
          Email: email,
          Phone: phone,
          Service: formData.serviceOfInterest,
          Travel_Date: formData.travelDate?.trim() || 'Not specified',
          Organization: formData.companyName?.trim() || 'Individual',
          Message: message,
          _captcha: 'false',
        }),
      });

      let delivered = response.ok;
      try {
        const data = await response.json();
        if (data && (data.success === false || data.success === 'false')) delivered = false;
      } catch {
        // No JSON body: rely on the HTTP status alone.
      }

      if (!delivered) throw new Error(`Enquiry not accepted (HTTP ${response.status})`);

      setStatus('success');
    } catch (err) {
      console.warn('Enquiry submission failed:', err);
      setStatus('error');
      setError({
        kind: 'send',
        message:
          'We could not send your enquiry. Please try again, or send it to us on WhatsApp instead.',
      });
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-gold-300/40 bg-white p-8 text-center shadow-xl sm:p-10"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h3 className="mb-2 font-serif text-2xl font-bold text-navy-900">Enquiry received</h3>
        <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
          Thank you{formData.fullName.trim() ? `, ${formData.fullName.trim()}` : ''}. We have your
          details and will contact you by email or phone.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setError(null);
              setFormData(emptyForm(preselectedService));
            }}
            className={`rounded-lg border border-navy-900 px-6 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white ${focusRing}`}
          >
            Send another enquiry
          </button>
          <a
            href={whatsappHref(
              `Hi D'Kingsfems, I just submitted an enquiry for ${formData.serviceOfInterest}. My name is ${formData.fullName.trim()}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 ${focusRing}`}
          >
            Follow up on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-gold-300/30 bg-white shadow-xl ${
        isCompact ? 'p-6 sm:p-8' : 'p-8 sm:p-12'
      }`}
    >
      {/* Decorative top gold border */}
      <div
        className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900"
        aria-hidden="true"
      />

      {(title || subtitle) && (
        <div className="mb-6 text-center sm:mb-8 sm:text-left">
          {title && (
            <h3 className="font-serif text-xl font-bold text-navy-900 sm:text-2xl lg:text-3xl">
              {title}
            </h3>
          )}
          {subtitle && <p className="mt-2 text-sm text-slate-600 sm:text-base">{subtitle}</p>}
        </div>
      )}

      {status === 'error' && error && (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" aria-hidden="true" />
            <div>
              <p>{error.message}</p>
              {error.kind === 'send' && (
                <a
                  href={whatsappHref(
                    `Hi D'Kingsfems, I would like to enquire about ${formData.serviceOfInterest}. My name is ${formData.fullName.trim()}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-semibold underline underline-offset-2 hover:text-rose-900"
                >
                  Chat with us on WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Hidden honeypot for bot filtering */}
        <input
          type="text"
          name="_honeypot"
          value={formData._honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div>
            <label htmlFor={fieldId('fullName')} className={labelClass}>
              Full name <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId('fullName')}
              type="text"
              name="fullName"
              required
              autoComplete="name"
              placeholder="e.g. Oluwaseun Adeleke"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={fieldId('email')} className={labelClass}>
              Email address <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId('email')}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="e.g. adeleke@example.com"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div>
            <label htmlFor={fieldId('phone')} className={labelClass}>
              Phone / WhatsApp <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId('phone')}
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              placeholder="e.g. +234 803 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={fieldId('service')} className={labelClass}>
              Service of interest <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <select
              id={fieldId('service')}
              name="serviceOfInterest"
              value={formData.serviceOfInterest}
              onChange={handleChange}
              className={inputClass}
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {!isCompact && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div>
              <label htmlFor={fieldId('travelDate')} className={labelClass}>
                Intended travel date or timeline
              </label>
              <input
                id={fieldId('travelDate')}
                type="text"
                name="travelDate"
                placeholder="e.g. Mid November 2026"
                value={formData.travelDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor={fieldId('companyName')} className={labelClass}>
                Company or organisation (if applicable)
              </label>
              <input
                id={fieldId('companyName')}
                type="text"
                name="companyName"
                autoComplete="organization"
                placeholder="e.g. Zenith Energy Ltd"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor={fieldId('message')} className={labelClass}>
            Details of your travel or enquiry <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id={fieldId('message')}
            name="message"
            required
            rows={isCompact ? 3 : 4}
            placeholder="Tell us about destinations, passenger count, dates, class preference, or specific requests..."
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-navy-900/20 transition-all hover:bg-navy-800 hover:shadow-xl disabled:opacity-50 ${focusRing}`}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-gold-400" aria-hidden="true" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send enquiry</span>
                <Send className="h-4 w-4 text-gold-400" aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        <p className="pt-1 text-center text-xs text-slate-500">
          We use your details only to respond to your enquiry.
        </p>
      </form>
    </div>
  );
};