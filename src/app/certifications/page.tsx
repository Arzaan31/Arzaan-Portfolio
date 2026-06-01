'use client'

import { Award, Star } from 'lucide-react'
import { certifications } from '@/lib/data'

const categoryColors: Record<string, string> = {
  'Industry Simulation': '#4a5eff',
  'Industry Experience': '#2dd4bf',
  'Cybersecurity': '#06b6d4',
  'Data Science': '#8b5cf6',
  'Digital Marketing': '#22c55e',
  'Programming': '#0078d4',
  'Mobile Development': '#a4c639',
}

export default function CertificationsPage() {
  const featured = certifications.filter(c => c.featured)
  const rest = certifications.filter(c => !c.featured)

  return (
    <div className="pt-16">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Credentials</p>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Certifications & Programs
          </h1>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Professional certifications, industry programs, and learning achievements across data science, cybersecurity, cloud technologies, and business analytics.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-6">Featured Programs</p>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((cert, i) => (
              <div key={i} className="card rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                  style={{ background: cert.color }} />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cert.color}18`, color: cert.color }}>
                    <Star size={22} />
                  </div>
                  <div className="flex-1">
                    <span className="category-badge mb-2 block" style={{ color: cert.color }}>{cert.category}</span>
                    <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                      {cert.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All certs */}
          <p className="tag mb-6">All Certifications</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => {
              const color = categoryColors[cert.category] || '#4a5eff'
              return (
                <div key={i} className="card rounded-xl p-5 flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, color }}>
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="category-badge mb-1" style={{ color }}>{cert.category}</p>
                    <h4 className="text-sm font-medium leading-snug mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                      {cert.name}
                    </h4>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Count */}
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <span className="gradient-text font-display text-2xl">{certifications.length}+</span>
              <br />Certifications & Professional Programs
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
