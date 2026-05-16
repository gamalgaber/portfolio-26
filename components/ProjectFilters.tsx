'use client'

import { useState } from 'react'
import { PROJECTS, FILTER_COUNTS, PROJECTS_MAP, type Project, type FilterKey, type ProjectKey } from '@/lib/projects'

type Filter = 'all' | FilterKey

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const inv = project.textInverse
  const titleColor = inv ? '#1A1A18' : '#FFFFFF'
  const badgeBg = inv ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'
  const badgeBorder = inv ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'

  return (
    <div
      className="modal-backdrop open"
      onClick={e => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-hero" style={{ background: project.color }}>
          <span className="cat-badge" style={{ color: titleColor, background: badgeBg, borderColor: badgeBorder }}>
            {project.category}
          </span>
          <h2 id="modal-title" style={{ color: titleColor }}>{project.title}</h2>
        </div>

        <div className="modal-body">
          <div>
            <h3>Overview</h3>
            <p className="lead">{project.lead}</p>
            <div className="desc">
              {project.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <aside className="modal-meta">
            <div className="row"><div className="k">Category</div><div className="v">{project.category}</div></div>
            <div className="row"><div className="k">Role</div><div className="v">{project.role}</div></div>
            <div className="row"><div className="k">Year</div><div className="v">{project.year}</div></div>
            <div className="row">
              <div className="k">Tech Stack</div>
              <div className="stack">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
            </div>
            <div className="actions">
              <a className="primary" href="#" onClick={e => e.preventDefault()}>Visit live site <span>↗</span></a>
              <a className="ghost" href="#" onClick={e => e.preventDefault()}>View on GitHub <span>↗</span></a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all',         label: 'All' },
  { key: 'agency',      label: 'Agency' },
  { key: 'ecommerce',   label: 'E-commerce' },
  { key: 'marketplace', label: 'Marketplace' },
  { key: 'saas',        label: 'SaaS' },
]

const ACCENT: Record<string, string> = {
  agency:      '#1A1A18',
  ecommerce:   '#C84517',
  marketplace: '#E85D26',
  saas:        '#7B5EA7',
}

export default function ProjectFilters() {
  const [active, setActive] = useState<Filter>('all')
  const [modal, setModal] = useState<ProjectKey | null>(null)

  const visible = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.filter === active)
  const project = modal ? PROJECTS_MAP[modal] : null

  return (
    <>
      {/* Sticky filter bar */}
      <div className="filters">
        <div className="container">
          <div className="filters-inner">
            <span className="label">Filter</span>
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-chip${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
                <span className="count">{FILTER_COUNTS[f.key]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="pgrid">
            {visible.length === 0 ? (
              <div className="empty-state">
                <h3>Nothing here yet</h3>
                <p>No projects match this filter. Try another category — or check back soon.</p>
              </div>
            ) : (
              visible.map((p, i) => (
                <article
                  key={p.key}
                  className={`pcard reveal d${i + 1}${p.textInverse ? ' invert' : ''}`}
                  style={{ ['--accent' as string]: ACCENT[p.filter] }}
                  onClick={() => setModal(p.key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setModal(p.key)}
                  aria-label={`View ${p.title} case study`}
                >
                  <div className="thumb" style={{ background: p.color }}>
                    <span className="corner-num">PRJ / {p.num}</span>
                    <span className="corner-year">{p.year}</span>
                    <h3>
                      {p.title}
                      {p.key === 'tareeq' && <span className="ar">طريق</span>}
                    </h3>
                    <span className="deco-shape" />
                  </div>
                  <div className="body">
                    <div className="cat-row">
                      <span className="cat">{p.category}</span>
                      <span className="role">{p.role}</span>
                    </div>
                    <div className="lead">{p.lead}</div>
                    <div className="tags">{p.stack.slice(0, 5).map(t => <span key={t}>{t}</span>)}</div>
                    <div className="cta-row">
                      <span className="read">Read case study <span>→</span></span>
                      <div className="ext-row">
                        <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation() }} title="Live site" aria-label="Live site">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* CTA block */}
          <div className="cta-block reveal d3">
            <div>
              <h2>Got something <em>in mind?</em></h2>
              <p>I&apos;m currently accepting freelance and contract work. Tell me about your project — Laravel, Next.js, Shopify, AI tooling, or anything full-stack.</p>
            </div>
            <div className="actions">
              <a className="primary" href="/#contact">Start a project <span>→</span></a>
              <a className="ghost" href="mailto:gamalgaber003@gmail.com">Email me directly <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      {project && (
        <Modal project={project} onClose={() => setModal(null)} />
      )}
    </>
  )
}
