'use client'

import { useState } from 'react'
import { PROJECTS, PROJECTS_MAP, type Project, type ProjectKey } from '@/lib/projects'

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
          <div className="bg-deco" />
          <span className="cat-badge" style={{ color: titleColor, background: badgeBg, borderColor: badgeBorder }}>
            {project.category}
          </span>
          <h2 id="modal-title" style={{ color: titleColor }}>{project.title}</h2>
          <div className="mock-frame">
            <div className="bar"><i /><i /><i /></div>
            <div
              className="canvas"
              style={{ ['--mock-a' as string]: project.mockA, ['--mock-b' as string]: project.mockB }}
            />
          </div>
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
              <a className="primary" href="#" onClick={e => e.preventDefault()}>
                Visit live site <span>↗</span>
              </a>
              <a className="ghost" href="#" onClick={e => e.preventDefault()}>
                View on GitHub <span>↗</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsRail() {
  const [active, setActive] = useState<ProjectKey | null>(null)
  const project = active ? PROJECTS_MAP[active] : null

  return (
    <>
      <div className="projects-rail reveal delay-2">
        <div className="projects-track">
          {PROJECTS.map((p, i) => (
            <article
              key={p.key}
              className={`project-card ${p.cardClass}`}
              onClick={() => setActive(p.key)}
              data-project={p.key}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setActive(p.key)}
              aria-label={`View ${p.title} case study`}
            >
              <div className="top-row">
                <span className="num">0{i + 1} / 04</span>
                <span className="cat">{p.category}</span>
              </div>
              <div>
                <h3>
                  {p.title}
                  {p.key === 'tareeq' && <span className="ar">طريق</span>}
                </h3>
                <p>{p.lead.split('—')[0].trim()}</p>
                <div className="tags">{p.stack.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div>
                <div className="view-link">View project <span>→</span></div>
              </div>
              <span className="year-tag">{p.year}</span>
              <div className="deco" />
            </article>
          ))}
        </div>
      </div>

      {project && (
        <Modal
          project={project}
          onClose={() => {
            setActive(null)
            document.body.classList.remove('modal-open')
          }}
        />
      )}
    </>
  )
}
