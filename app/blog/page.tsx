import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing about full-stack development, Laravel, Next.js, Arabic-first product design, and the craft of shipping software.',
  alternates: { canonical: 'https://gamalgaber.dev/blog' },
  openGraph: {
    title: 'Blog | Gamal Gaber',
    description: 'Long-form thinking on full-stack development — Laravel, Next.js, Postgres, and shipping software.',
    url: 'https://gamalgaber.dev/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <ClientProviders />
      <div className="page-halos" aria-hidden="true">
        <i className="h1" /><i className="h2" /><i className="h3" />
      </div>
      <Nav />
      <BlogContent />
      <Footer />
    </>
  )
}
