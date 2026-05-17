'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type NavProps = {
  simple?: boolean
}

export default function Nav({ simple = false }: NavProps) {
  return (
    <nav className={`nav`}>
      <div className="container nav-inner">
        {/* <Link className="logo" href="/" aria-label="Home">
          <span className="logo-mark">GG</span>
          <span className="logo-text">
            Gamal Gaber
            <small>Full-Stack Dev</small>
          </span>
        </Link> */}

        {simple ? (
          <Link className="back-link" href="/">
            <span className="arrow">←</span> Back to portfolio
          </Link>
        ) : (
          <>
            <div className="nav-links" role="navigation" aria-label="Main navigation">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
