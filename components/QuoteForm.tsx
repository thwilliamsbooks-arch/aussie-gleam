'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const enquiryTypes = [
  'Fleet / Commercial Cleaning',
  'Fleet Contract',
  'Car Detailing Package',
  'Pre-Sale Detailing',
  'Car Mould Removal',
  'Caravan Detailing',
];

const fleetSizes = [
  '1 vehicle (private)',
  '2–4 vehicles',
  '5–10 vehicles',
  '11–25 vehicles',
  '26–50 vehicles',
  '50+ vehicles',
];

const frequencies = [
  'One-off',
  'Weekly',
  'Fortnightly',
  'Monthly',
  'Not sure — need advice',
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new URLSearchParams();
    new FormData(form).forEach((val, key) => {
      data.append(key, val.toString());
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="py-20 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(200,150,12,0.12)' }}>
            <svg className="w-8 h-8" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl mb-4" style={{ color: '#0B1F3A' }}>Quote Request Received!</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A7390' }}>
            Thank you — we have received your quote request and will send a tailored proposal within 24 hours.
          </p>
          <p className="text-sm mb-8" style={{ color: '#5A7390' }}>
            For urgent enquiries, call Trent directly on{' '}
            <a href="tel:0479070056" className="font-bold" style={{ color: '#C8960C' }}>0479 070 056</a> or email{' '}
            <a href="mailto:info@aussiegleam.com" className="font-bold" style={{ color: '#C8960C' }}>info@aussiegleam.com</a>.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-navy text-sm px-6 py-2.5"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      name="quote-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Required hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="quote-request" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Enquiry type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#0B1F3A' }}>
          What are you enquiring about? <span style={{ color: '#C8960C' }}>*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {enquiryTypes.map(opt => (
            <label
              key={opt}
              className="flex items-center gap-2 p-3 rounded border cursor-pointer text-sm transition-colors hover:border-gold"
              style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}
            >
              <input type="radio" name="enquiry_type" value={opt} required className="shrink-0" />
              <span style={{ color: '#1C2B3A' }}>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
            Name <span style={{ color: '#C8960C' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
            style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
            Company / Business
          </label>
          <input
            type="text"
            name="company"
            className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
            style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}
            placeholder="Business name (if applicable)"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
            Phone <span style={{ color: '#C8960C' }}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
            style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
            Email <span style={{ color: '#C8960C' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
            style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
          Location / Suburb <span style={{ color: '#C8960C' }}>*</span>
        </label>
        <input
          type="text"
          name="location"
          required
          className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
          style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}
          placeholder="Where are the vehicles located?"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
          Fleet Size
        </label>
        <select
          name="fleet_size"
          className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
          style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD', color: '#1C2B3A' }}
        >
          <option value="">Select fleet size</option>
          {fleetSizes.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
          Preferred Cleaning Frequency
        </label>
        <select
          name="frequency"
          className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
          style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD', color: '#1C2B3A' }}
        >
          <option value="">Select frequency</option>
          {frequencies.map(f => <option key={f}>{f}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
          Additional Details
        </label>
        <textarea
          rows={5}
          name="message"
          className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none resize-none"
          style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}
          placeholder="Tell us more about your vehicles, any specific requirements, or questions you have…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 font-sans">
          Something went wrong. Please try again or call us on{' '}
          <a href="tel:0479070056" className="underline">0479 070 056</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center text-base py-4"
        style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Quote Request'}
        {status !== 'submitting' && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: '#5A7390' }}>
        We will respond within 24 hours. For urgent enquiries, call Trent on{' '}
        <a href="tel:0479070056" className="underline" style={{ color: '#C8960C' }}>0479 070 056</a>.
      </p>
    </form>
  );
}
