'use client'

import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Forminit } from 'forminit'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  project_type: z.string().min(1, 'Please select a project type'),
  message: z.string().min(20, 'Please add at least 20 characters'),
})

type ContactFormData = z.infer<typeof schema>

const PROJECT_TYPES = ['Full-stack app', 'Backend', 'Frontend', 'Wordpress', 'Shopify', 'Other']

const forminit = new Forminit({ proxyUrl: '/api/forminit' })

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { project_type: 'Full-stack app' },
  })

  const selectedType = useWatch({ control, name: 'project_type', defaultValue: 'Full-stack app' })

  async function onSubmit(data: ContactFormData) {
    setStatus('sending')

    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('project_type', data.project_type)
    formData.append('message', data.message)

    const { error } = await forminit.submit('8yufbmb1da4', formData)

    if (error) {
      setStatus('error')
      return
    }

    setStatus('success')
    reset()
  }

  return (
    <form className="contact-form reveal delay-2" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-head">
        <h3>Tell me about your project</h3>
        <p>I&apos;ll get back to you within 24 hours — usually faster.</p>
      </div>

      <div className="row two">
        <div className="row">
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name"
            type="text"
            placeholder="Jane Doe"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register('name')}
          />
          {errors.name && <span className="field-error">{errors.name.message}</span>}
        </div>
        <div className="row">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && <span className="field-error">{errors.email.message}</span>}
        </div>
      </div>

      <div className="row">
        <label>What are you working on?</label>
        <input type="hidden" {...register('project_type')} />
        <div className="chip-row">
          {PROJECT_TYPES.map(t => (
            <span
              key={t}
              className={`chip${selectedType === t ? ' active' : ''}`}
              onClick={() => setValue('project_type', t, { shouldValidate: true })}
              role="radio"
              aria-checked={selectedType === t}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setValue('project_type', t, { shouldValidate: true })}
            >
              {t}
            </span>
          ))}
        </div>
        {errors.project_type && <span className="field-error">{errors.project_type.message}</span>}
      </div>

      <div className="row">
        <label htmlFor="cf-message">Project details</label>
        <textarea
          id="cf-message"
          placeholder="A few sentences about what you're building, your timeline, and what success looks like."
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && <span className="field-error">{errors.message.message}</span>}
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
