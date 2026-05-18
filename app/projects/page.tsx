import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProjectFilters from '@/components/ProjectFilters'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  title: 'All Projects',
  description:
    'Every shipped product, contract gig, and side build — Laravel, Next.js, Shopify, and AI tooling projects by Gamal Gaber.',
  alternates: { canonical: 'https://gamalgaber.dev/projects' },
  openGraph: {
    title: 'All Projects | Gamal Gaber',
    description: 'Every shipped product, contract gig, and side build.',
    url: 'https://gamalgaber.dev/projects',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <ClientProviders />
      <div className="page-halos" aria-hidden="true">
        <i className="h1" /><i className="h2" /><i className="h3" />
      </div>

      <Nav />

      <header className="page-header">
        <div className="container">
          <div className="crumb reveal">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink-2)' }}>All Projects</span>
          </div>
          <h1 className="reveal d1">All <em className="ital">Projects.</em></h1>
          <p className="lede reveal d2">
            Every shipped product, contract gig, and side build I&apos;m proud enough to publish.
            Filter by category to narrow down, click any card to read the case study.
          </p>
          <div className="header-meta">
            <div className="cell reveal d2">
              <div className="k">Total projects</div>
              <div className="v"><span className="accent">05</span> shipped</div>
            </div>
            <div className="cell reveal d3">
              <div className="k">Latest</div>
              <div className="v">Automera, 2026</div>
            </div>
            <div className="cell reveal d4">
              <div className="k">Stacks</div>
              <div className="v">Laravel · Next · WordPress · Shopify</div>
            </div>
            <div className="cell reveal d5">
              <div className="k">Status</div>
              <div className="v" style={{ color: 'var(--teal)' }}>Accepting new work</div>
            </div>
          </div>
        </div>
      </header>

      <ProjectFilters />
      <Footer />
    </>
  )
}
