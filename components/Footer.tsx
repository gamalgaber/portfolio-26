'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [device, setDevice] = useState('Detecting…')
  const [newsEmail, setNewsEmail] = useState('')
  const [newsStatus, setNewsStatus] = useState('')

  useEffect(() => {
    const ua = navigator.userAgent
    const isMobile = /iPhone|Android|iPad/.test(ua)
    const os = /Mac/.test(ua) ? 'macOS' : /Win/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : 'Unknown'
    setDevice(`${isMobile ? 'Mobile' : 'Desktop'} · ${os}`)
  }, [])

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (!newsEmail.includes('@')) return
    setNewsStatus('You\'re on the list — thanks!')
    setNewsEmail('')
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="news-col">
            <h3>Follow what<br />I&apos;m <em>building.</em></h3>
            <p className="sub">Get notified when I ship something new — projects, write-ups, occasional case studies. No spam.</p>
            <form onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                value={newsEmail}
                onChange={e => setNewsEmail(e.target.value)}
              />
              <button type="submit">Join the list</button>
            </form>
            {newsStatus && <div className="status">{newsStatus}</div>}
          </div>

          <div className="link-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="/#about">About</a></li>
              <li><a href="/#skills">Skills <span className="new-tag">12</span></a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#projects">Blog</a></li>
              <li><a href="/#contact">Get in touch</a></li>
            </ul>
          </div>

          <div className="link-col">
            <h4>Elsewhere</h4>
            <ul>
              <li><a href="https://github.com/gamalgaber" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></li>
              <li><a href="https://linkedin.com/in/gamalgaber" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></li>
              <li><a href="https://upwork.com/freelancers/gamal" target="_blank" rel="noopener noreferrer">Upwork <span aria-hidden="true">↗</span></a></li>
              <li><a href="mailto:gamalgaber003@gmail.com">Email me <span aria-hidden="true">↗</span></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <div className="cell">
            <div className="k">© 2025 Gamal Gaber</div>
            <div className="v">Built with ♥ in Cairo</div>
          </div>
          <div className="cell">
            <div className="k">Instagram</div>
            <div className="v">
              <a href="https://instagram.com/gamalgaber" target="_blank" rel="noopener noreferrer">@gamalgaber</a>
            </div>
          </div>
          <div className="cell">
            <div className="k">Your device</div>
            <div className="v">{device}</div>
          </div>
          <div className="cell">
            <div className="k">Fonts used</div>
            <div className="v">Clash Display, Bricolage Grotesque</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
