import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroMarquee from '@/components/HeroMarquee'
import ProjectsRail from '@/components/ProjectsRail'
import ContactForm from '@/components/ContactForm'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  title: 'Gamal Gaber — Full-Stack Developer',
  description:
    'Full-Stack Developer based in Cairo, Egypt. I build fast, beautiful digital products — from the database to the pixel. Laravel · Next.js · Shopify.',
  alternates: { canonical: 'https://gamalgaber.dev' },
}

export default function HomePage() {
  return (
    <>
      <ClientProviders />
      <div className="page-halos" aria-hidden="true">
        <i className="h1" /><i className="h2" /><i className="h3" />
      </div>

      <Nav />

      {/* ── HERO ──────────────────────────────────── */}
      <header id="top" className="hero">
        {/* Floating shapes */}
        <div className="shape float" data-parallax="0.08" style={{ top: 200, left: '6%', width: 110, height: 110, ['--dur' as string]: '6s' }}>
          <svg viewBox="0 0 100 100"><defs><radialGradient id="s1" cx="35%" cy="30%" r="70%"><stop offset="0%" stopColor="#C8B0E2"/><stop offset="55%" stopColor="#7B5EA7"/><stop offset="100%" stopColor="#3A2A60"/></radialGradient></defs><circle cx="50" cy="50" r="46" fill="url(#s1)"/><ellipse cx="36" cy="32" rx="14" ry="8" fill="rgba(255,255,255,0.5)"/></svg>
        </div>
        <div className="shape float" data-parallax="0.14" style={{ top: 150, right: '4%', width: 130, height: 130, ['--dur' as string]: '7s', ['--delay' as string]: '-2s' }}>
          <svg viewBox="0 0 120 120"><defs><linearGradient id="p1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFB078"/><stop offset="1" stopColor="#E85D26"/></linearGradient><linearGradient id="p1b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#C84517"/><stop offset="1" stopColor="#7A2A0E"/></linearGradient></defs><polygon points="60,8 110,100 60,82" fill="url(#p1)"/><polygon points="60,8 10,100 60,82" fill="url(#p1b)"/><polygon points="10,100 60,82 110,100 60,116" fill="#2A0F05" opacity="0.4"/></svg>
        </div>
        <div className="shape float" data-parallax="0.1" style={{ bottom: '12%', right: '12%', width: 90, height: 90, ['--dur' as string]: '5s', ['--delay' as string]: '-1s', animationName: 'float-alt' }}>
          <svg viewBox="0 0 100 100"><defs><linearGradient id="st1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5FC9A4"/><stop offset="1" stopColor="#0F6F4E"/></linearGradient></defs><path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="url(#st1)"/></svg>
        </div>
        <div className="shape float" data-parallax="0.06" style={{ bottom: '22%', left: '10%', width: 95, height: 95, ['--dur' as string]: '8s', ['--delay' as string]: '-3s' }}>
          <svg viewBox="0 0 100 100"><defs><linearGradient id="c1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFD68A"/><stop offset="1" stopColor="#E8A820"/></linearGradient><linearGradient id="c1b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#B07A11"/><stop offset="1" stopColor="#6E4A05"/></linearGradient></defs><polygon points="50,10 90,28 50,46 10,28" fill="url(#c1a)"/><polygon points="10,28 50,46 50,90 10,72" fill="#9F6A0F"/><polygon points="90,28 50,46 50,90 90,72" fill="url(#c1b)"/></svg>
        </div>

        <div className="container">
          <div className="hero-meta reveal">
            <div className="meta-pill">
              <span className="avatars"><span /><span /><span /></span>
              Trusted by 10+ clients worldwide
            </div>
            <div className="meta-pill location">
              <span className="ping" />
              Cairo, Egypt · Open to remote
            </div>
          </div>

          <h1 className="display-name reveal delay-1" aria-label="Gamal Gaber">
            <span className="row">
              Gamal
              <span className="swatch" aria-hidden="true" />
              <span className="ital">Gaber.</span>
            </span>
            <span className="row second">
              Full-Stack<em className="ital" style={{ fontStyle: 'italic', fontWeight: 500 }}>↘</em>
            </span>
          </h1>

          <div className="hero-lower">
            <div>
              <p className="tagline reveal delay-2">
                I build fast, beautiful digital products — <strong>from the database to the pixel.</strong> Currently shipping Laravel + Next.js apps for marketplaces, SaaS, and Arabic-first products.
              </p>
              <div className="cta-row reveal delay-3">
                <a href="#projects" className="btn primary">See my work <span className="arrow">↓</span></a>
                <a href="#contact" className="btn ghost">Let&apos;s talk <span className="arrow">→</span></a>
              </div>
            </div>

            <div className="profile-card reveal delay-2" aria-label="Profile photo placeholder">
              <span className="corner-tag"><span className="dot" />Live</span>
              <svg className="silhouette" viewBox="0 0 200 260" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
                <defs>
                  <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(255,255,255,0.18)" />
                    <stop offset="1" stopColor="rgba(0,0,0,0.18)" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="44" fill="url(#sg)" />
                <path d="M30 260 Q30 180 100 180 Q170 180 170 260 Z" fill="url(#sg)" />
              </svg>
              <div className="placeholder-label">Drop your photo here<small>3 : 4 ratio</small></div>
            </div>
          </div>

          <HeroMarquee />

          <div className="hero-bottom">
            <div className="scroll-badge reveal" title="Scroll down">
              <div className="ring">
                <svg viewBox="0 0 200 200" width="130" height="130">
                  <defs><path id="cp" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" /></defs>
                  <text fontFamily="Bricolage Grotesque, sans-serif" fontSize="13" fontWeight="500" fill="#1A1A18" letterSpacing="3">
                    <textPath href="#cp" startOffset="0">✦ SCROLL DOWN ✦ DISCOVER MY WORK </textPath>
                  </text>
                </svg>
              </div>
              <div className="core">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat reveal delay-1"><div className="n">1<span className="plus">+</span></div><div className="l">Year shipping<br />production code</div></div>
              <div className="divider" />
              <div className="stat reveal delay-2"><div className="n">10<span className="plus">+</span></div><div className="l">Projects<br />delivered</div></div>
              <div className="divider" />
              <div className="stat reveal delay-3"><div className="n">3</div><div className="l">Tech stacks<br />mastered</div></div>
              <div className="divider" />
              <div className="stat reveal delay-4"><div className="n">∞</div><div className="l">Cups of coffee<br />per week</div></div>
            </div>
          </div>
        </div>
      </header>

      {/* ── ABOUT ─────────────────────────────────── */}
      <section id="about" className="about">
        <div className="shape float" data-parallax="0.1" style={{ top: 60, right: '5%', width: 110, height: 110, ['--dur' as string]: '6s' }}>
          <svg viewBox="0 0 100 100"><defs><linearGradient id="c2a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7BD9B9"/><stop offset="1" stopColor="#1D9E75"/></linearGradient></defs><polygon points="50,10 90,28 50,46 10,28" fill="url(#c2a)"/><polygon points="10,28 50,46 50,90 10,72" fill="#0E6E4F"/><polygon points="90,28 50,46 50,90 90,72" fill="#168A66"/></svg>
        </div>
        <div className="container">
          <span className="section-eyebrow reveal">About</span>
          <h2 className="section-title reveal delay-1">A developer who treats <em>craft</em> as a love letter.</h2>
          <div className="about-grid">
            <div className="about-quote reveal delay-2">
              <span className="qmark" aria-hidden="true">&ldquo;</span>
              <p>Hi! I&apos;m Gamal — a Full-Stack Developer based in Cairo, Egypt. I love turning <span className="hl">complex ideas</span> into clean, fast, and beautiful products. With <span className="hl">1+ year of production experience</span>, I&apos;ve shipped real features people use every day — from Arabic-first SaaS to Egyptian marketplaces.</p>
              <div className="signature">
                <span className="logo-mark" style={{ width: 44, height: 44, fontSize: 15 }}>GG</span>
                <div>
                  <div className="name">— Gamal</div>
                  <div className="role">Full-Stack Developer · Cairo</div>
                </div>
              </div>
            </div>
            <div className="stat-grid">
              {[
                { n: '1', accent: '+', label: 'Year experience', sub: 'Shipping production apps', color: 'var(--orange)', soft: 'rgba(232,93,38,0.12)', d: 2 },
                { n: '10', accent: '+', label: 'Projects shipped', sub: 'Across 4 industries', color: 'var(--purple)', soft: 'rgba(123,94,167,0.12)', d: 3 },
                { n: '3', accent: '', label: 'Tech stacks', sub: 'Laravel · Next · Shopify', color: 'var(--teal)', soft: 'rgba(29,158,117,0.12)', d: 4 },
                { n: '100', accent: '%', label: 'Remote ready', sub: 'Async-first workflow', color: 'var(--blue)', soft: 'rgba(43,127,212,0.12)', d: 5 },
              ].map(s => (
                <div key={s.label} className={`stat-card reveal delay-${s.d}`} style={{ ['--accent' as string]: s.color, ['--accent-soft' as string]: s.soft }}>
                  <div className="ribbon" />
                  <div className="n">{s.n}<span className="accent">{s.accent}</span></div>
                  <div className="l">{s.label}<small>{s.sub}</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────── */}
      <section id="experience">
        <div className="shape float" data-parallax="0.08" style={{ top: 80, right: '6%', width: 90, height: 90, ['--dur' as string]: '6s' }}>
          <svg viewBox="0 0 100 100"><defs><radialGradient id="se" cx="35%" cy="30%" r="70%"><stop offset="0%" stopColor="#FFB078"/><stop offset="55%" stopColor="#E85D26"/><stop offset="100%" stopColor="#7A2A0E"/></radialGradient></defs><circle cx="50" cy="50" r="46" fill="url(#se)"/><ellipse cx="36" cy="32" rx="14" ry="8" fill="rgba(255,255,255,0.5)"/></svg>
        </div>
        <div className="container">
          <span className="section-eyebrow reveal">Experience</span>
          <h2 className="section-title reveal delay-1">Where I&apos;ve <em>shipped</em> code.</h2>
          <div className="timeline">
            {[
              { company: 'ME.INC', date: '2024 — Present', title: 'Founder & Full-Stack Developer', place: 'Remote', desc: 'Building a multi-brand digital products platform for Arabic-speaking markets end-to-end: multi-tenant architecture, a Claude AI tools engine, funnel / OTO logic, and Cloudflare R2 asset delivery.', stack: ['Laravel 11', 'Next.js', 'PostgreSQL', 'Claude API'], accent: 'var(--orange)', d: 0 },
              { company: 'Tareeq طريق', date: 'Jun 2024 — May 2025', title: 'Full-Stack Developer', place: 'Cairo', desc: 'Lead developer on an Egyptian vehicle marketplace with AI price intelligence. Designed a modular Laravel monolith with three-guard auth, integrated pgvector for semantic search, and shipped the Next.js frontend for real-time listings.', stack: ['Laravel 11', 'pgvector', 'Redis', 'Next.js'], accent: 'var(--purple)', d: 1 },
              { company: 'Peak.Studio', date: 'Mar 2025 — Jul 2025', title: 'Freelance Developer', place: 'Contract, Dubai', desc: 'Translated a polished Figma file into a pixel-faithful Next.js App Router site for a Dubai branding agency. Built a custom GSAP splash sequence, scroll-aware navbar, hover-glow buttons, and a multi-ellipse gradient overlay system.', stack: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind v4'], accent: 'var(--teal)', d: 2 },
              { company: 'Freelance · Self-Employed', date: '2023 — 2024', title: 'Shopify & Web Developer', place: 'Cairo', desc: 'Built and migrated Shopify stores for SMB clients across MENA, including Berry Bow. Delivered Arabic SEO across multiple collections, payment gateway integrations (Paymob, Bosta), and full operations handover documentation.', stack: ['Shopify', 'Liquid', 'Arabic SEO', 'Paymob'], accent: 'var(--blue)', d: 3 },
            ].map(e => (
              <div key={e.company} className={`timeline-row reveal${e.d ? ` delay-${e.d}` : ''}`} style={{ ['--accent' as string]: e.accent }}>
                <div className="when"><div className="company">{e.company}</div><div className="date">{e.date}</div></div>
                <div className="marker"><span className="dot" /></div>
                <div className="what">
                  <h3>{e.title} <span className="place">— {e.place}</span></h3>
                  <p>{e.desc}</p>
                  <div className="stack">{e.stack.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────── */}
      <section id="education">
        <div className="container">
          <span className="section-eyebrow reveal">Education</span>
          <h2 className="section-title reveal delay-1">Learning <em>never stops.</em></h2>
          <div className="timeline">
            {[
              { company: 'Cairo University', date: '2020 — 2024', title: 'B.Sc. Computer Science', place: 'Cairo, Egypt', desc: 'Focused on algorithms, distributed systems, and database design. Graduated with honors. Built side projects throughout — APIs, web apps, and an Arabic-first content engine that became the seed of ME.INC.', accent: 'var(--blue)', d: 0 },
              { company: 'Self-taught', date: '2021 — Present', title: 'Full-Stack Engineering', place: 'Continuous', desc: 'Deep-dives into Laravel internals, Next.js App Router, PostgreSQL performance, and AI tooling. 10+ production projects shipped while learning in public on GitHub.', accent: 'var(--yellow)', d: 1 },
              { company: 'Laracasts & Workshops', date: '2023 — 2024', title: 'Advanced Laravel & Next.js', place: 'Online', desc: 'Advanced Laravel architecture courses, Next.js App Router workshops, and database performance training. Continuous certification & community involvement.', accent: 'var(--purple)', d: 2 },
            ].map(e => (
              <div key={e.company} className={`timeline-row reveal${e.d ? ` delay-${e.d}` : ''}`} style={{ ['--accent' as string]: e.accent }}>
                <div className="when"><div className="company">{e.company}</div><div className="date">{e.date}</div></div>
                <div className="marker"><span className="dot" /></div>
                <div className="what">
                  <h3>{e.title} <span className="place">— {e.place}</span></h3>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────── */}
      <section id="skills">
        <div className="shape float" data-parallax="0.08" style={{ top: 90, left: '4%', width: 90, height: 90, ['--dur' as string]: '7s', ['--delay' as string]: '-2s' }}>
          <svg viewBox="0 0 100 100"><defs><radialGradient id="s2" cx="35%" cy="30%" r="70%"><stop offset="0%" stopColor="#9EC3F0"/><stop offset="55%" stopColor="#2B7FD4"/><stop offset="100%" stopColor="#0F4587"/></radialGradient></defs><circle cx="50" cy="50" r="46" fill="url(#s2)"/><ellipse cx="36" cy="32" rx="14" ry="8" fill="rgba(255,255,255,0.5)"/></svg>
        </div>
        <div className="container">
          <span className="section-eyebrow reveal">Skills</span>
          <h2 className="section-title reveal delay-1">What I work <em>with.</em></h2>
          <div className="bento">
            <div className="bento-card feat reveal delay-1" style={{ ['--accent' as string]: 'var(--orange)', ['--accent-soft' as string]: 'rgba(232,93,38,0.18)' }}>
              <div className="top">
                <div className="icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8" fill="none" stroke="#1A1A18" strokeWidth="1.4"/></svg></div>
                <div className="num" style={{ color: 'rgba(255,255,255,0.5)' }}>01 / Backend</div>
              </div>
              <div><h3>Laravel + PHP</h3><p>Modular monoliths, three-guard auth, queues, jobs, pgvector AI search. Production-grade Laravel 11.</p></div>
              <div className="corner" style={{ background: 'var(--orange)', opacity: 0.25 }} />
            </div>

            <div className="bento-card wide-2 reveal delay-2" style={{ ['--accent' as string]: 'var(--blue)', ['--accent-soft' as string]: 'rgba(43,127,212,0.15)' }}>
              <div className="top"><div className="icon">N</div><div className="num">02 / Frontend</div></div>
              <div><h3>Next.js + React</h3><p>App Router, TypeScript, Server Components, Server Actions. GSAP, Tailwind v4, real-time UIs.</p></div>
              <div className="corner" />
            </div>

            <div className="bento-card tall reveal delay-3" style={{ ['--accent' as string]: 'var(--teal)', ['--accent-soft' as string]: 'rgba(29,158,117,0.15)' }}>
              <div className="top"><div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg></div><div className="num">03</div></div>
              <div><h3>PostgreSQL</h3><p>Schema design, indexing, full-text search, pgvector for AI embeddings.</p></div>
              <div className="corner" />
            </div>

            <div className="bento-card std reveal delay-3" style={{ ['--accent' as string]: 'var(--orange)', ['--accent-soft' as string]: 'rgba(232,93,38,0.15)' }}>
              <div className="top"><div className="icon">⚡</div></div>
              <div><h3>Redis</h3><p>Cache, queues, rate-limit.</p></div>
            </div>

            <div className="bento-card std reveal delay-4" style={{ ['--accent' as string]: 'var(--blue)', ['--accent-soft' as string]: 'rgba(43,127,212,0.15)' }}>
              <div className="top"><div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="10" y1="10" x2="10" y2="14"/><line x1="14" y1="10" x2="14" y2="14"/></svg></div></div>
              <div><h3>Docker</h3><p>Compose stacks for local dev.</p></div>
            </div>

            <div className="bento-card wide-1 reveal delay-4" style={{ ['--accent' as string]: 'var(--purple)', ['--accent-soft' as string]: 'rgba(123,94,167,0.15)' }}>
              <div className="top"><div className="icon">{'{ }'}</div><div className="num">REST + RPC</div></div>
              <div><h3>API design</h3><p>OpenAPI specs, versioned endpoints, clean DTO contracts.</p></div>
              <div className="corner" />
            </div>

            <div className="bento-card std reveal delay-5" style={{ ['--accent' as string]: 'var(--yellow)', ['--accent-soft' as string]: 'rgba(232,168,32,0.18)' }}>
              <div className="top"><div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M12 15v2"/></svg></div></div>
              <div><h3>Git / GitHub</h3><p>Branching, PRs, Actions.</p></div>
            </div>

            <div className="bento-card std reveal delay-5" style={{ ['--accent' as string]: 'var(--teal)', ['--accent-soft' as string]: 'rgba(29,158,117,0.15)' }}>
              <div className="top"><div className="icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10 10-10z"/></svg></div></div>
              <div><h3>Tailwind CSS</h3><p>Design systems &amp; tokens.</p></div>
            </div>

            <div className="bento-card wide-1 reveal delay-6" style={{ ['--accent' as string]: 'var(--blue)', ['--accent-soft' as string]: 'rgba(43,127,212,0.15)' }}>
              <div className="top"><div className="icon">TS</div><div className="num">strict mode</div></div>
              <div><h3>TypeScript</h3><p>Type-safe APIs, Zod schemas, end-to-end inference.</p></div>
              <div className="corner" />
            </div>

            <div className="bento-card std reveal delay-6" style={{ ['--accent' as string]: 'var(--ink)', ['--accent-soft' as string]: 'rgba(0,0,0,0.08)' }}>
              <div className="top"><div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg></div></div>
              <div><h3>Linux / CLI</h3><p>Tmux, vim, fish, zsh.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────── */}
      <section id="projects">
        <div className="container">
          <div className="projects-head">
            <div>
              <span className="section-eyebrow reveal">Selected Work</span>
              <h2 className="section-title reveal delay-1">Recent <em>builds.</em></h2>
            </div>
            <Link href="/projects" className="scroll-hint reveal delay-2">
              <span>View all projects</span>
              <span className="bar" />
              <span style={{ fontFamily: 'var(--display)', color: 'var(--ink)', fontSize: 16 }}>→</span>
            </Link>
          </div>
        </div>
        <ProjectsRail />
      </section>

      {/* ── CONTACT ───────────────────────────────── */}
      <section id="contact">
        <div className="shape float" data-parallax="0.1" style={{ top: 80, right: '7%', width: 120, height: 120, ['--dur' as string]: '7s' }}>
          <svg viewBox="0 0 120 120"><defs><linearGradient id="p2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFB078"/><stop offset="1" stopColor="#E85D26"/></linearGradient><linearGradient id="p2b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#C84517"/><stop offset="1" stopColor="#7A2A0E"/></linearGradient></defs><polygon points="60,8 110,100 60,82" fill="url(#p2)"/><polygon points="60,8 10,100 60,82" fill="url(#p2b)"/><polygon points="10,100 60,82 110,100 60,116" fill="#2A0F05" opacity="0.4"/></svg>
        </div>
        <div className="container">
          <span className="section-eyebrow reveal">Contact</span>
          <h2 className="contact-title reveal delay-1">Let&apos;s build <em>something</em> together.</h2>
          <p className="contact-sub reveal delay-2">Available for freelance projects and full-time opportunities. Based in Cairo — working globally, async-first.</p>

          <div className="contact-layout">
            <ContactForm />

            <div className="contact-side">
              <a
                className="contact-card reveal delay-3"
                href="mailto:gamalgaber003@gmail.com"
                style={{ ['--accent' as string]: 'var(--orange)', ['--accent-soft' as string]: 'rgba(232,93,38,0.12)' }}
              >
                <div className="label">
                  <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><polyline points="2 7 12 14 22 7"/></svg></span>
                  Email
                </div>
                <div className="v">gamalgaber003@gmail.com</div>
                <div className="footer-row">
                  <span>Tap to email</span>
                  <span className="go"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg></span>
                </div>
              </a>

              <a
                className="contact-card reveal delay-4"
                href="https://linkedin.com/in/gamalgaber"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ['--accent' as string]: 'var(--blue)', ['--accent-soft' as string]: 'rgba(43,127,212,0.12)' }}
              >
                <div className="label">
                  <span className="ico"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.37v1.92h.06A4.79 4.79 0 0 1 16.74 7.5C21 7.5 22 10.2 22 13.7V22h-4.5v-7.4c0-1.77-.03-4.05-2.47-4.05s-2.85 1.93-2.85 3.92V22H8V8z"/></svg></span>
                  LinkedIn · new tab
                </div>
                <div className="v">/in/gamalgaber</div>
                <div className="footer-row">
                  <span>Connect with me</span>
                  <span className="go"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg></span>
                </div>
              </a>

              <div className="socials">
                {[
                  { href: 'https://github.com/gamalgaber', label: 'GitHub', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.09-.12-.3-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.74.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.77 1.06.77 2.13v3.16c0 .31.21.67.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg> },
                  { href: 'https://linkedin.com/in/gamalgaber', label: 'LinkedIn', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.37v1.92h.06A4.79 4.79 0 0 1 16.74 7.5C21 7.5 22 10.2 22 13.7V22h-4.5v-7.4c0-1.77-.03-4.05-2.47-4.05s-2.85 1.93-2.85 3.92V22H8V8z"/></svg> },
                  { href: 'https://upwork.com/freelancers/gamal', label: 'Upwork', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 11.4a3.6 3.6 0 0 1-3.6-3.6 3.6 3.6 0 0 1 3.6-3.6 3.6 3.6 0 0 1 3.6 3.6 3.6 3.6 0 0 1-3.6 3.6zm0-5.4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM5.4 14.6a3.6 3.6 0 0 1-3.6-3.6V4.2h1.8v6.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V4.2H9V9c1.3 2.5 3.2 5 6 5v1.8c-3.6 0-5.9-2.8-7.3-5.3-.5 2.5-2.4 4.1-2.3 4.1z"/></svg> },
                ].map(s => (
                  <a key={s.label} className="social reveal delay-4" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.icon}{s.label}
                  </a>
                ))}
                <a className="social reveal delay-5" href="#top">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
