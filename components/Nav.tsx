'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

type NavProps = {
  simple?: boolean
}

export default function Nav({ simple = false }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currentRoute = usePathname();
  const isHome = currentRoute === '/';
  const getHref = (hash: string) => isHome ? hash : `/${hash}`;

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
  }, [isOpen])

  // Nav scroll shrink
  useEffect(() => {
    const nav = document.getElementById('nav')
    if (!nav) return
    function onScroll() {
      nav!.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.classList.remove('menu-open')
    }
  }, [])

  const close = () => setIsOpen(false)

  return (
    <>
      <nav className="nav" id="nav">
        <div className="container nav-inner">
            <div className="nav-links" role="navigation" aria-label="Main navigation">
              <Link href={getHref('#about')}>About</Link>
              <Link href={getHref('#experience')}>Experience</Link>
              <Link href={getHref('#skills')}>Skills</Link>
              <Link href={getHref('#projects')}>Projects</Link>
              <Link href="/blog" className={`${currentRoute === '/blog' ? 'active' : ''}`}>Blog</Link>
              <Link href={getHref('#contact')}>Contact</Link>
            </div>
          <button
            className="nav-burger"
            id="navBurger"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <aside className="mobile-panel" id="mobilePanel" aria-hidden={!isOpen}>
        <button className="mp-close" onClick={close} aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="container">
          <div className="mp-links">
            <Link href={getHref('#about')} onClick={close}>About <span className="arr">→</span></Link>
            <Link href={getHref('#experience')} onClick={close}>Experience <span className="arr">→</span></Link>
            <Link href={getHref('#skills')} onClick={close}>Skills <span className="arr">→</span></Link>
            <Link href={'/projects'} onClick={close} className={`${currentRoute === '/projects' ? 'active' : ''}`}>Projects <span className="arr">→</span></Link>
            <Link href="/blog" onClick={close} className={`${currentRoute === '/blog' ? 'active' : ''}`}>Blog <span className="arr">→</span></Link>
            <Link href={getHref('#contact')} onClick={close}>Contact <span className="arr">→</span></Link>
          </div>
          <div className="mp-foot">
            <span>Cairo, Egypt · Open to remote</span>
            <a href={getHref('#contact')} onClick={close}>Hire me ↗</a>
          </div>
        </div>
      </aside>
    </>
  )
}
