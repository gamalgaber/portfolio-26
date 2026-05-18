'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'

type PostBlock = { h: string } | { p: string }
type Post = {
  title: string
  category: string
  accent: string
  glyph: string
  date: string
  reading: string
  lead: string
  description: PostBlock[]
  tags: string[]
}

const POSTS: Record<string, Post> = {
  pgvector: {
    title: 'Why I rebuilt our marketplace search with pgvector, not Elasticsearch.',
    category: 'Engineering · Deep dive',
    accent: '#1A1A18',
    glyph: 'pgv',
    date: 'May 12, 2026',
    reading: '14 min read · 3,200 words',
    lead: 'A practical write-up on swapping a sprawling Elasticsearch cluster for plain Postgres + pgvector — what we kept, what we sacrificed, and the unexpected wins for Arabic-language semantic search.',
    description: [
      { h: 'The original problem' },
      { p: 'Tareeq runs a high-traffic vehicle marketplace where users describe what they want in natural Arabic — "family SUV, automatic, white, under 600k EGP" — and expect listings that actually match. Our first pass leaned on a managed Elasticsearch cluster. It worked, but the cost-to-value ratio kept tipping the wrong way as the catalog grew.' },
      { p: 'Two things pushed us to look elsewhere: cluster ops costs that grew faster than traffic, and the operational pain of keeping two stores (Postgres + ES) consistent during high-write periods like overnight bulk imports.' },
      { h: 'Why pgvector ended up sufficient' },
      { p: 'For semantic similarity over Arabic-translated embeddings, pgvector\'s ivfflat and hnsw indexes are genuinely fast enough at our scale. The wins compound: one database, one connection pool, one set of backups, transactional consistency for free, and we kept SQL as the lingua franca for the team.' },
      { p: 'We pair pgvector with Meilisearch for structured filters and typo-tolerant lexical search, exposed via one unified query endpoint. Vector gives us "sounds like what they meant," Meilisearch gives us "matches what they typed." The two are reconciled at the API layer with a small ranker.' },
      { h: 'What I\'d do differently' },
      { p: 'Start with the unified endpoint, even before you\'ve picked your vector store. Treating semantic + lexical as one contract from day one means the underlying engines stay swappable. We rewrote the contract twice before landing on something the frontend could lean on without flinching.' },
    ],
    tags: ['pgvector', 'Postgres', 'Search', 'Meilisearch', 'Laravel'],
  },
  'three-guard': {
    title: 'Designing a three-guard auth system in Laravel 11.',
    category: 'Architecture',
    accent: '#1A1A18',
    glyph: '3G',
    date: 'Apr 22, 2026',
    reading: '11 min read',
    lead: 'Clients, showrooms, admins — three audiences, three login flows, one codebase. Here\'s how I structured guards, middleware, and verification without losing my mind.',
    description: [
      { h: 'Three audiences, three flows' },
      { p: 'Tareeq has three distinct user populations: end-consumers browsing and buying cars, showroom owners managing inventory and verification, and internal admins moderating the whole thing. Each has different login surfaces, different verification requirements, and very different blast radii if something goes wrong.' },
      { p: 'The temptation is to make one mega-user model with role flags. Resist it. The blast radius is too different, and the UX expectations diverge fast.' },
      { h: 'Guards, not roles' },
      { p: 'Each audience gets its own Laravel guard, its own users table, and its own session lifetime. Middleware groups (client, showroom, admin) read from the correct guard and never the others. Cross-talk is impossible by construction, which makes pen-tests much shorter conversations.' },
      { h: 'Verification as a state machine' },
      { p: 'Showrooms have a multi-step KYC: business registration, owner ID, physical address verification. Modeling this as an explicit state machine in code — and surfacing the current state in the dashboard — turned what used to be "why am I stuck" support tickets into self-serve progress bars.' },
    ],
    tags: ['Laravel', 'Auth', 'Architecture', 'Security'],
  },
  'arabic-rtl': {
    title: 'The Arabic-first checklist: RTL UIs that actually work.',
    category: 'Arabic-first',
    accent: '#C84517',
    glyph: 'ع',
    date: 'Apr 8, 2026',
    reading: '9 min read',
    lead: 'Flipping direction: rtl is the easy part. Numerals, mixed-direction strings, mirrored icons, form fields, dates — the actual list of things to get right.',
    description: [
      { h: 'The easy 10% and the hard 90%' },
      { p: 'Setting dir="rtl" gets you a mirrored layout. It doesn\'t get you a usable Arabic product. The list of things that still need decisions is long: which icons mirror and which stay (a play button stays, a back arrow flips), what locale to use for numerals, how to lay out form fields when labels read right-to-left but values are sometimes LTR (phone numbers, emails).' },
      { h: 'Bidi text is everywhere' },
      { p: 'Arabic strings routinely embed Latin tokens — product names, model numbers, brand SKUs. Without Unicode control characters or careful CSS, you\'ll see strings rendering with chunks in the wrong order. The fix is small but the bug is invisible to anyone who doesn\'t read Arabic, which is why it ships.' },
      { h: 'Test with real data, not Lorem' },
      { p: 'Half of RTL bugs only show up with realistic strings: long product titles that wrap, numbers immediately after a punctuation mark, mixed Arabic-English author names. I keep a fixtures file of representative strings and use it in Storybook and visual diffs.' },
    ],
    tags: ['RTL', 'i18n', 'CSS', 'Accessibility'],
  },
  'server-actions': {
    title: 'Next.js Server Actions: an honest review after 6 months.',
    category: 'Engineering',
    accent: '#2B7FD4',
    glyph: 'SA',
    date: 'Mar 19, 2026',
    reading: '7 min read',
    lead: 'What I love (forms feel sane again), what bites (caching invalidation is still hard), and what I\'d reach for them over a REST endpoint.',
    description: [
      { h: 'Forms feel sane again' },
      { p: 'The biggest win is also the most boring: a form submits to a server function with no client-side fetch glue. Validation, mutation, redirect — all server-side, no boilerplate. I\'ve deleted a lot of useState lately.' },
      { h: 'Caching is still the hard part' },
      { p: 'revalidatePath and revalidateTag are powerful but easy to misuse. You will, at some point, ship a bug where a stale page survives a mutation because you invalidated the wrong tag. Build in observability for cache hits early.' },
      { h: 'When I still reach for REST' },
      { p: 'External clients (mobile apps, third-party integrations) still want a versioned, stable REST contract. Server Actions are a frontend convenience, not a public API. I keep both, and that\'s been fine.' },
    ],
    tags: ['Next.js', 'React', 'Server', 'Forms'],
  },
  'wp-to-shopify': {
    title: 'Migrating from WordPress to Shopify with zero downtime.',
    category: 'Case study',
    accent: '#1D9E75',
    glyph: 'WS',
    date: 'Feb 28, 2026',
    reading: '12 min read',
    lead: 'How I moved Berry Bow — an Egyptian handmade crochet brand — off a stale WP setup onto Shopify, including a clean DNS cutover that kept the team selling on launch day.',
    description: [
      { h: 'Why move at all' },
      { p: 'The brand had outgrown its WordPress + WooCommerce origin: maintenance was a chore, plugin conflicts kept breaking checkout, and the team needed self-serve product management without a developer in the loop. Shopify isn\'t cheaper, but it\'s predictable, and that turned out to matter more.' },
      { h: 'The cutover plan' },
      { p: 'We built the new Shopify store in parallel — full catalog rebuild into 23 well-organized collections, Arabic-first SEO on every product, integrations with Bosta and Paymob — and only flipped DNS once the team had run real orders through the new system in test mode. Zero downtime, zero lost carts.' },
      { h: 'What I\'d change' },
      { p: 'I would have started the SEO redirect map a week earlier. We had it ready, but tighter timing would have meant less manual checking of indexed URLs in the days after launch.' },
    ],
    tags: ['Shopify', 'Migration', 'DNS', 'SEO'],
  },
  'claude-tools': {
    title: 'Building a callable Claude tools engine inside Laravel.',
    category: 'Engineering',
    accent: '#7B5EA7',
    glyph: '{ }',
    date: 'Feb 12, 2026',
    reading: '10 min read',
    lead: 'A registry pattern that lets any tenant in ME.INC define their own tools, get them auto-wired to Claude function-calling, and ship features without redeploys.',
    description: [
      { h: 'The shape of the registry' },
      { p: 'Each tool is a class with a schema, a handler, and an auth check. The registry knows how to map class metadata to the JSON schema Claude\'s function-calling API expects, so adding a new tool is mostly writing the handler and forgetting about the wire format.' },
      { h: 'Per-tenant gating' },
      { p: 'Tools are gated per tenant. A tenant\'s plan, settings, and feature flags decide which subset of the registry is exposed to their Claude prompts. The same code runs everywhere — the surface area just changes per tenant.' },
      { h: 'Observability matters more than performance' },
      { p: 'AI calls are slow and occasionally wrong. The thing that paid the most rent was logging every tool invocation with the input arguments and output, surfaced in an admin UI. Debugging "why did Claude do that" stopped being a multi-hour dig.' },
    ],
    tags: ['Laravel', 'Claude', 'AI', 'Multi-tenant'],
  },
  'redis-patterns': {
    title: 'Six Redis patterns I reach for almost every project.',
    category: 'Engineering',
    accent: '#E85D26',
    glyph: '⚡',
    date: 'Jan 24, 2026',
    reading: '6 min read',
    lead: 'Rate limits, idempotency keys, hot-path caches, deferred work, distributed locks, and pub-sub for SSE — small recipes that pay rent every day.',
    description: [
      { h: 'Rate limits the boring way' },
      { p: 'A fixed-window counter with EXPIRE is good enough for 90% of public-API rate limiting. I only reach for sliding window or token bucket when I have evidence the simple version is misbehaving — and that\'s rarely.' },
      { h: 'Idempotency keys for write endpoints' },
      { p: 'Any POST that mutates real-world state (charge a card, send an email, create a listing) accepts an Idempotency-Key header. The handler caches the result in Redis for 24 hours. Replays are free.' },
      { h: 'Pub-sub for live UIs' },
      { p: 'For real-time dashboards I publish on Redis channels and bridge to SSE. It\'s simpler than Websockets, plays nicely with serverless edges that proxy, and is more than fast enough for human-in-the-loop UIs.' },
    ],
    tags: ['Redis', 'Patterns', 'Performance'],
  },
  'multi-tenant': {
    title: 'Designing for multi-tenancy from day one, not week 40.',
    category: 'Architecture',
    accent: '#E8A820',
    glyph: 'MT',
    date: 'Jan 6, 2026',
    reading: '13 min read',
    lead: 'The architectural decisions I made building ME.INC — schema isolation, custom domains, branded checkout — and which of those would have hurt to add later.',
    description: [
      { h: 'Tenant ID in every row, forever' },
      { p: 'I picked shared-database, shared-schema with a tenant_id on every tenant-owned row, plus Postgres row-level security as a belt-and-suspenders guard. Retrofitting this later is genuinely painful. Starting with it is cheap.' },
      { h: 'Domains and routing' },
      { p: 'Tenants want custom domains. Plan for that on day one: TLS provisioning via your edge, hostname-aware routing, and a settings UI for tenant admins to bring their own domain. Bolting this onto a single-host app months in is more work than the original build.' },
      { h: 'What you can safely defer' },
      { p: 'Per-tenant theming, per-tenant background jobs, per-tenant analytics dashboards — these can wait. The deferrable list is longer than the must-have list, and conflating them is how you end up rewriting everything at month nine.' },
    ],
    tags: ['SaaS', 'Architecture', 'Postgres', 'Multi-tenant'],
  },
  'dev-setup': {
    title: 'My 2026 full-stack dev setup, end to end.',
    category: 'Tooling',
    accent: '#4A4944',
    glyph: '⌘',
    date: 'Dec 18, 2025',
    reading: '8 min read',
    lead: 'Editor config, terminal layout, Docker-compose stacks, browser tabs that survive restarts, and the small CLI tools that have actually changed how I work this year.',
    description: [
      { h: 'The boring core' },
      { p: 'Neovim with a minimal Lua config, tmux for sessions, fish for daily use, zsh for scripts. The boring core hasn\'t changed in years and that\'s a feature.' },
      { h: 'What\'s new this year' },
      { p: 'Local Docker-compose stacks per project, lazygit for everything git-shaped, fzf glued into half of my muscle memory, and one shared dotfiles repo that bootstraps a fresh machine in under five minutes.' },
      { h: 'Browser hygiene' },
      { p: 'I run two profiles — one for client work, one for personal — and a hard rule of "close tabs at end of day." The tab-bankruptcy approach saved my focus more than any productivity app.' },
    ],
    tags: ['DX', 'Tooling', 'Workflow'],
  },
}

type CardData = {
  id: string
  filter: string
  date: string
  reading: number
  accent: string
  invert?: boolean
  cat: string
  pattern: string
  title: string
  excerpt: string
  tags: string[]
}

const CARDS: CardData[] = [
  { id: 'three-guard', filter: 'architecture', date: '2026-04-22', reading: 11, accent: '#1A1A18', cat: 'Architecture', pattern: '3G', title: 'Designing a three-guard auth system in Laravel 11.', excerpt: 'Clients, showrooms, admins — three audiences, three login flows, one codebase. Here\'s how I structured guards, middleware, and verification without losing my mind.', tags: ['Laravel', 'Auth', 'Architecture'] },
  { id: 'arabic-rtl', filter: 'arabic', date: '2026-04-08', reading: 9, accent: '#F4C0D1', invert: true, cat: 'Arabic-first', pattern: 'ع', title: 'The Arabic-first checklist: RTL UIs that actually work.', excerpt: 'Flipping direction: rtl is the easy part. Numerals, mixed-direction strings, mirrored icons, form fields, dates — the actual list of things to get right.', tags: ['RTL', 'i18n', 'CSS'] },
  { id: 'server-actions', filter: 'engineering', date: '2026-03-19', reading: 7, accent: '#2B7FD4', cat: 'Engineering', pattern: 'SA', title: 'Next.js Server Actions: an honest review after 6 months.', excerpt: 'What I love (forms feel sane again), what bites (caching invalidation is still hard), and what I\'d reach for them over a REST endpoint.', tags: ['Next.js', 'React', 'Server'] },
  { id: 'wp-to-shopify', filter: 'case-study', date: '2026-02-28', reading: 12, accent: '#1D9E75', cat: 'Case study', pattern: 'WS', title: 'Migrating from WordPress to Shopify with zero downtime.', excerpt: 'How I moved Berry Bow — an Egyptian handmade crochet brand — off a stale WP setup onto Shopify, including a clean DNS cutover that kept the team selling on launch day.', tags: ['Shopify', 'Migration', 'DNS'] },
  { id: 'claude-tools', filter: 'engineering', date: '2026-02-12', reading: 10, accent: '#7B5EA7', cat: 'Engineering', pattern: '{ }', title: 'Building a callable Claude tools engine inside Laravel.', excerpt: 'A registry pattern that lets any tenant in ME.INC define their own tools, get them auto-wired to Claude function-calling, and ship features without redeploys.', tags: ['Laravel', 'Claude', 'AI'] },
  { id: 'redis-patterns', filter: 'engineering', date: '2026-01-24', reading: 6, accent: '#E85D26', cat: 'Engineering', pattern: '⚡', title: 'Six Redis patterns I reach for almost every project.', excerpt: 'Rate limits, idempotency keys, hot-path caches, deferred work, distributed locks, and pub-sub for SSE — small recipes that pay rent every day.', tags: ['Redis', 'Performance', 'Patterns'] },
  { id: 'multi-tenant', filter: 'architecture', date: '2026-01-06', reading: 13, accent: '#E8A820', cat: 'Architecture', pattern: 'MT', title: 'Designing for multi-tenancy from day one, not week 40.', excerpt: 'The architectural decisions I made building ME.INC — schema isolation, custom domains, branded checkout — and which of those would have hurt to add later.', tags: ['SaaS', 'Architecture', 'Postgres'] },
  { id: 'dev-setup', filter: 'tooling', date: '2025-12-18', reading: 8, accent: '#4A4944', cat: 'Tooling', pattern: '⌘', title: 'My 2026 full-stack dev setup, end to end.', excerpt: 'Editor config, terminal layout, Docker-compose stacks, browser tabs that survive restarts, and the small CLI tools that have actually changed how I work this year.', tags: ['DX', 'Tooling', 'Workflow'] },
]

const FILTERS = [
  { key: 'all', label: 'All', count: 8 },
  { key: 'engineering', label: 'Engineering', count: 3 },
  { key: 'architecture', label: 'Architecture', count: 2 },
  { key: 'arabic', label: 'Arabic-first', count: 1 },
  { key: 'case-study', label: 'Case study', count: 1 },
  { key: 'tooling', label: 'Tooling', count: 1 },
]

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('newest')
  const [openPostId, setOpenPostId] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState('')
  const [subType, setSubType] = useState('')

  const post = openPostId ? POSTS[openPostId] : null

  // Body scroll lock when modal open
  useEffect(() => {
    document.body.classList.toggle('modal-open', !!openPostId)
  }, [openPostId])

  // Escape key closes modal
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenPostId(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let cards = CARDS.filter(c => {
      const matchFilter = activeFilter === 'all' || c.filter === activeFilter
      const matchSearch = !q || c.title.toLowerCase().includes(q) || c.excerpt.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q))
      return matchFilter && matchSearch
    })
    cards = [...cards].sort((a, b) => {
      if (sort === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sort === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime()
      return a.reading - b.reading
    })
    return cards
  }, [activeFilter, query, sort])

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubStatus('Please enter a valid email address.')
      setSubType('error')
      return
    }
    setSubStatus('✓ You\'re subscribed. First issue lands next month.')
    setSubType('success')
    setEmail('')
  }

  function fmtDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────── */}
      <header className="page-header">
        <div className="container">
          <div className="crumb reveal">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink-2)' }}>Blog</span>
          </div>
          <div className="header-top">
            <h1 className="reveal delay-1">
              Writing <span className="ampersand">&amp;</span><br />
              <em className="ital">notes.</em>
            </h1>
            <p className="intro reveal delay-2">
              <strong>Long-form thinking on full-stack development</strong> — Laravel, Next.js, Postgres, Arabic-first UX, and the practical side of shipping software that real people use.
            </p>
          </div>
          <div className="header-meta">
            <div className="cell reveal delay-2"><div className="k">Articles published</div><div className="v"><span className="accent">08</span> posts</div></div>
            <div className="cell reveal delay-3"><div className="k">Latest</div><div className="v">May 2026</div></div>
            <div className="cell reveal delay-4"><div className="k">Topics covered</div><div className="v">5 categories</div></div>
            <div className="cell reveal delay-5"><div className="k">Cadence</div><div className="v dot">Roughly monthly</div></div>
          </div>
        </div>
      </header>

      {/* ── FILTERS ───────────────────────────────── */}
      <div className="filters">
        <div className="container">
          <div className="filters-inner">
            <span className="label">Topic</span>
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-chip${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label} <span className="count">{f.count}</span>
              </button>
            ))}
            <label className="filter-search" aria-label="Search posts">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
              <input type="search" placeholder="Search posts…" value={query} onChange={e => setQuery(e.target.value)} />
            </label>
          </div>
        </div>
      </div>

      {/* ── FEATURED POST ─────────────────────────── */}
      <section className="featured-section">
        <div className="container">
          <article className="featured reveal delay-1" onClick={() => setOpenPostId('pgvector')} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setOpenPostId('pgvector')}>
            <div className="feat-art">
              <span className="pill-tag">Featured</span>
              {/* <span className="floating f1" />
              <span className="floating f2" />
              <span className="floating f3" /> */}
              <span className="glyph">pgv</span>
            </div>
            <div className="feat-text">
              <div>
                <div className="cat">Engineering · Deep dive</div>
                <h2>Why I rebuilt our marketplace search with <em>pgvector</em>, not Elasticsearch.</h2>
                <p className="excerpt">A practical write-up on swapping a sprawling Elasticsearch cluster for plain Postgres + pgvector — what we kept, what we sacrificed, and the unexpected wins for Arabic-language semantic search.</p>
              </div>
              <div className="feat-foot">
                <div className="meta">
                  <span><b>14 min</b> read</span>
                  <span><b>May 12, 2026</b></span>
                  <span>3,200 words</span>
                </div>
                <span className="read-cta">Read the article <span>→</span></span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── POSTS GRID ────────────────────────────── */}
      <section className="posts-section">
        <div className="container">
          <div className="posts-head">
            <div className="lhs">
              <h2 className="reveal">All <em>posts.</em></h2>
              <p className="sub reveal delay-1">Short notes, long write-ups, and the occasional case study from things I&apos;ve shipped recently.</p>
            </div>
            <label className="sort reveal delay-2">
              Sort by
              <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="reading">Reading time</option>
              </select>
            </label>
          </div>

          <div className="post-grid">
            {filtered.map((card, i) => (
              <article
                key={card.id}
                className={`post-card reveal delay-${(i % 3) + 1}${card.invert ? ' invert' : ''}`}
                style={{ '--accent': card.accent } as React.CSSProperties}
                onClick={() => setOpenPostId(card.id)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setOpenPostId(card.id)}
              >
                <div className="pc-art">
                  <span className="pc-cat">{card.cat}</span>
                  <span className="pc-read">{card.reading} min read</span>
                  <span className="pc-pattern">{card.pattern}</span>
                </div>
                <div className="pc-body">
                  <h3>{card.title}</h3>
                  <p>{card.excerpt}</p>
                  <div className="pc-tags">
                    {card.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="pc-foot">
                    <div className="who">
                      <span className="ava">GG</span>
                      <span><b>Gamal</b> · {card.reading} min</span>
                    </div>
                    <span className="date">{fmtDate(card.date)}</span>
                  </div>
                </div>
                {/* <span className="pc-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                </span> */}
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="empty-state">
                <h3>Nothing here yet</h3>
                <p>No posts match your filter or search. Try a different topic.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────── */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter reveal">
            <div className="nws-lhs">
              <h2>Get new posts in your <em>inbox.</em></h2>
              <p>One short email when I publish — usually monthly. Practical engineering write-ups, no fluff, easy to unsubscribe.</p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} noValidate>
                <input type="email" placeholder="you@yourdomain.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
                <button type="submit">Subscribe</button>
              </form>
              <div className={`nws-status${subType ? ` ${subType}` : ''}`}>{subStatus}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POST MODAL ────────────────────────────── */}
      {post && (
        <div
          className="modal-backdrop open"
          role="dialog"
          aria-modal
          aria-labelledby="blogModalTitle"
          onClick={e => { if (e.target === e.currentTarget) setOpenPostId(null) }}
        >
          <div className="modal blog-modal" style={{ maxWidth: 880 }}>
            <button className="modal-close" onClick={() => setOpenPostId(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <div className="modal-hero" style={{ background: post.accent, height: 280 } as React.CSSProperties}>
              <span className="badge">{post.category}</span>
              <span className="big-glyph">{post.glyph}</span>
              <div className="meta-row">
                <span><b>Gamal Gaber</b> · Full-Stack Dev</span>
                <span><b>{post.date}</b> · {post.reading}</span>
              </div>
            </div>
            <div className="modal-body">
              <h2 id="blogModalTitle">{post.title}</h2>
              <p className="lead">{post.lead}</p>
              <div className="desc">
                {post.description.map((block, i) => {
                  if ('h' in block) return <h4 key={i}>{block.h}</h4>
                  return <p key={i}>{block.p}</p>
                })}
              </div>
              <div className="modal-tags">
                {post.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
