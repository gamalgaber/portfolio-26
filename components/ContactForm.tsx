'use client'

import { useState } from 'react'

const PROJECT_TYPES = ['Full-stack app', 'Marketplace', 'SaaS', 'Shopify', 'Other']
const GETFORM_ENDPOINT = process.env.NEXT_PUBLIC_GETFORM_ENDPOINT ?? ''

export default function ContactForm() {
  const [selected, setSelected] = useState('Full-stack app')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!GETFORM_ENDPOINT) return

    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('project_type', selected)

    try {
      const res = await fetch(GETFORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setSelected('Full-stack app')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form reveal delay-2" onSubmit={handleSubmit} noValidate>
      {/* Honeypot spam guard */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} />

      <div className="form-head">
        <h3>Tell me about your project</h3>
        <p>I&apos;ll get back to you within 24 hours — usually faster.</p>
      </div>

      <div className="row two">
        <div className="row">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" required />
        </div>
        <div className="row">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
        </div>
      </div>

      <div className="row">
        <label>What are you working on?</label>
        <div className="chip-row">
          {PROJECT_TYPES.map(t => (
            <span
              key={t}
              className={`chip${selected === t ? ' active' : ''}`}
              onClick={() => setSelected(t)}
              role="radio"
              aria-checked={selected === t}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelected(t)}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="row">
        <label htmlFor="cf-budget">Budget range</label>
        <select id="cf-budget" name="budget">
          <option>Let&apos;s discuss</option>
          <option>$1k — $5k</option>
          <option>$5k — $15k</option>
          <option>$15k — $40k</option>
          <option>$40k+</option>
        </select>
      </div>

      <div className="row">
        <label htmlFor="cf-message">Project details</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="A few sentences about what you're building, your timeline, and what success looks like."
          required
        />
      </div>

      <div className="submit-row">
        <button type="submit" className="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'} <span>→</span>
        </button>
        {status === 'success' && (
          <div className="form-status success">Message sent — I&apos;ll be in touch soon!</div>
        )}
        {status === 'error' && (
          <div className="form-status error">Something went wrong — try emailing me directly.</div>
        )}
      </div>
    </form>
  )
}
