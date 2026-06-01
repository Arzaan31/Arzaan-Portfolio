'use client'

import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { blogPosts } from '@/lib/data'

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <div className="pt-16">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Writing</p>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Analytics Blog
          </h1>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Thoughts, tutorials, and reflections on data science, business intelligence, machine learning, and the analytics industry.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="card rounded-2xl overflow-hidden mb-10">
            <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${featured.color}, ${featured.color}55)` }} />
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{ background: `${featured.color}15`, color: featured.color }}>
                  ★ Featured Post
                </span>
                <span className="category-badge" style={{ color: featured.color }}>{featured.category}</span>
              </div>
              <h2 className="font-display mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', lineHeight: '1.25' }}>
                {featured.title}
              </h2>
              <p className="text-base mb-5 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {featured.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.65rem' }}>{t}</span>)}
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${featured.color}, ${featured.color}cc)` }}>
                Read Article <ArrowRight size={14} />
                <span className="text-xs opacity-70 ml-1">(Coming Soon)</span>
              </div>
            </div>
          </div>

          {/* Other posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.slug} className="card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, ${post.color}55)` }} />
                <div className="p-6">
                  <span className="category-badge mb-3 block" style={{ color: post.color }}>{post.category}</span>
                  <h3 className="text-base font-semibold mb-3 leading-snug" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt.slice(0, 120)}...
                  </p>
                  <div className="flex items-center gap-3 mb-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map(t => <span key={t} className="tag" style={{ fontSize: '0.6rem' }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon banner */}
          <div className="mt-12 text-center rounded-2xl p-8"
            style={{ background: 'var(--accent-light)', border: '1px dashed rgba(74,94,255,0.3)' }}>
            <BookOpen size={28} className="mx-auto mb-3" style={{ color: 'var(--accent)' }} />
            <p className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
              Articles Coming Soon
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Detailed write-ups on projects, analytics techniques, and lessons from industry experience are being written. Subscribe or check back soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
