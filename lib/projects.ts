export type ProjectKey = 'peak' | 'berry' | 'tareeq' | 'meinc'
export type FilterKey = 'agency' | 'ecommerce' | 'marketplace' | 'saas'

export type Project = {
  key: ProjectKey
  num: string
  title: string
  category: string
  color: string
  mockA: string
  mockB: string
  textInverse?: boolean
  lead: string
  description: string[]
  stack: string[]
  role: string
  year: string
  filter: FilterKey
  cardClass: string
}

export const PROJECTS: Project[] = [
  {
    key: 'peak',
    num: '01',
    title: 'Peak.Studio',
    category: 'Agency Website',
    color: '#1A1A18',
    mockA: '#3F3D38',
    mockB: '#1A1A18',
    filter: 'agency',
    cardClass: 'dark',
    lead: 'A high-end branding and design agency website for a Dubai-based studio — built end-to-end from Figma to production.',
    description: [
      'Translated a polished Figma file into a pixel-faithful Next.js App Router implementation in TypeScript, including a custom GSAP splash animation sequence that introduces the brand on first load.',
      'Built a scroll-aware navbar that morphs between transparent and condensed states, a custom hover-glow button component, and a multi-ellipse gradient footer overlay that anchors the brand identity.',
      'On the backend, Prisma + PostgreSQL drive a lightweight CMS for case studies, with NextAuth handling authenticated editor access. Tailwind v4 powers the design system — strict tokens, no ad-hoc values.',
    ],
    stack: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind v4', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    role: 'Full-Stack Developer',
    year: '2025',
  },
  {
    key: 'berry',
    num: '02',
    title: 'Berry Bow',
    category: 'E-commerce',
    color: '#F4C0D1',
    mockA: '#F8D5DF',
    mockB: '#E8A4B8',
    textInverse: true,
    filter: 'ecommerce',
    cardClass: 'pink',
    lead: 'A complete Shopify store for an Egyptian handmade crochet brand — Arabic-first, conversion-tuned, and fully self-serve for the client.',
    description: [
      'Migrated the brand from a stale WordPress shop to a modern Shopify store, including a full DNS cutover with zero downtime. Re-built the entire catalog into 23 well-organized collections.',
      'Delivered Arabic SEO across every collection and product — RTL-aware metadata, Arabic alt text, and structured data. Result: organic traffic stabilized within weeks of launch.',
      'Integrated Judge.me for verified reviews and configured Bosta (shipping) + Paymob (payments) end-to-end. Wrote a full operations handover guide so the client team could run the store without a developer.',
    ],
    stack: ['Shopify', 'Liquid', 'Arabic SEO', 'Judge.me', 'Bosta', 'Paymob'],
    role: 'Shopify Developer',
    year: '2025',
  },
  {
    key: 'tareeq',
    num: '03',
    title: 'Tareeq',
    category: 'Marketplace',
    color: '#E85D26',
    mockA: '#FFA46B',
    mockB: '#C84517',
    filter: 'marketplace',
    cardClass: 'orange',
    lead: 'An Egyptian vehicle marketplace with AI-powered price intelligence — built to handle showrooms, private sellers, and high-traffic search.',
    description: [
      'Architected a modular Laravel 11 monolith with a three-guard auth system: clients, showrooms, and admins each have isolated dashboards, permissions, and verification flows.',
      'Implemented pgvector-powered semantic search so users can describe what they want in natural Arabic and get matching listings. Meilisearch handles structured filtering — both are exposed through a single unified search endpoint.',
      'Built the Next.js frontend with optimistic UI for real-time listing management, plus a Go microservice for price-prediction inference and a Python FastAPI service for image moderation. Redis fronts the hot path.',
    ],
    stack: ['Laravel 11', 'Next.js', 'PostgreSQL', 'pgvector', 'Redis', 'Meilisearch', 'Go', 'Python FastAPI'],
    role: 'Full-Stack Developer',
    year: '2024 — 2025',
  },
  {
    key: 'meinc',
    num: '04',
    title: 'ME.INC',
    category: 'SaaS Platform',
    color: '#7B5EA7',
    mockA: '#A98CD4',
    mockB: '#3A2A60',
    filter: 'saas',
    cardClass: 'purple',
    lead: 'A multi-brand digital products platform built for Arabic-speaking markets — funnels, AI tools, and tenant isolation, all in one.',
    description: [
      'Designed the multi-tenant architecture from day one — every brand gets isolated data, custom domains, branded checkout, and its own funnel logic, all sharing one Laravel 11 backend.',
      'Built the Claude AI tools engine: a registry of callable tools any tenant can plug into their product. Used for content generation, summarization, and domain-specific automations in Arabic.',
      'Implemented Funnel/OTO logic for digital product sales (upsells, downsells, order bumps), with Cloudflare R2 handling asset delivery at the edge. Next.js drives the storefronts and admin dashboards.',
    ],
    stack: ['Next.js', 'Laravel 11', 'PostgreSQL', 'Redis', 'Cloudflare R2', 'Claude API'],
    role: 'Founder & Developer',
    year: '2025',
  },
]

export const PROJECTS_MAP = Object.fromEntries(
  PROJECTS.map(p => [p.key, p])
) as Record<ProjectKey, Project>

export const FILTER_COUNTS: Record<'all' | FilterKey, number> = {
  all: PROJECTS.length,
  agency: PROJECTS.filter(p => p.filter === 'agency').length,
  ecommerce: PROJECTS.filter(p => p.filter === 'ecommerce').length,
  marketplace: PROJECTS.filter(p => p.filter === 'marketplace').length,
  saas: PROJECTS.filter(p => p.filter === 'saas').length,
}
