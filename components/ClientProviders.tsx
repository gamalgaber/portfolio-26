'use client'

import { useEffect, useRef } from 'react'

export default function ClientProviders() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    // Parallax shapes
    const shapes = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    let ticking = false
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sy = window.scrollY
          shapes.forEach(s => {
            const speed = parseFloat(s.dataset.parallax ?? '0.1')
            s.style.translate = `0 ${(-sy * speed).toFixed(1)}px`
          })
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Custom cursor
    const cursor = cursorRef.current
    if (cursor) {
      function onMove(e: MouseEvent) {
        cursor!.style.left = e.clientX + 'px'
        cursor!.style.top = e.clientY + 'px'
        cursor!.classList.add('show')
      }
      function onLeave() { cursor!.classList.remove('show') }
      function addHover(el: Element) {
        el.addEventListener('mouseenter', () => cursor!.classList.add('hover'))
        el.addEventListener('mouseleave', () => cursor!.classList.remove('hover'))
      }
      document.addEventListener('mousemove', onMove, { passive: true })
      document.addEventListener('mouseleave', onLeave)
      document.querySelectorAll('a, button, [data-project]').forEach(addHover)
    }

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <div className="cursor" aria-hidden="true" ref={cursorRef} />
}
