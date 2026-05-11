'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
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
      <div className="p-10 rounded-lg border text-center" style={{ borderColor: '#E8EDF4', backgroundColor: '#F5F7FA' }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(200,150,12,0.12)' }}>
          <svg className="w-7 h-7" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-3" style={{ color: '#0B1F3A' }}>Message Sent!</h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: '#5A7390' }}>
          Thanks for getting in touch. We will get back to you within a few hours during business hours. For urgent matters, call Trent on{' '}
          <a href="tel:0479070056" className="font-bold" style={{ color: '#C8960C' }}>0479 070 056</a>.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-navy text-sm px-6 py-2.5"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Required hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
          Name <span style={{ color: '#C8960C' }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none focus:ring-2"
          style={{ borderColor: '#E8EDF4', backgroundColor: 'white' }}
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
          Phone <span style={{ color: '#C8960C' }}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none"
          style={{ borderColor: '#E8EDF4', backgroundColor: 'white' }}
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
          style={{ borderColor: '#E8EDF4', backgroundColor: 'white' }}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: '#0B1F3A' }}>
          Message <span style={{ color: '#C8960C' }}>*</span>
        </label>
        <textarea
          rows={5}
          name="message"
          required
          className="w-full px-4 py-3 rounded border text-sm font-sans focus:outline-none resize-none"
          style={{ borderColor: '#E8EDF4', backgroundColor: 'white' }}
          placeholder="How can we help?"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 font-sans">
          Something went wrong. Please try again or call us on 0479 070 056.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center"
        style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-xs mt-4 text-center" style={{ color: '#5A7390' }}>
        Or use our{' '}
        <Link href="/request-a-quote/" className="underline" style={{ color: '#C8960C' }}>
          detailed quote form
        </Link>{' '}
        for fleet and detailing enquiries.
      </p>
    </form>
  );
}
