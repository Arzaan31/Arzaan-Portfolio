'use client'

import { useState } from 'react'
import { ArrowRight, TrendingUp, Zap, Brain, BarChart2, Database, Map, Shield, DollarSign, Trophy, Filter } from 'lucide-react'
import { projects } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  TrendingUp, Zap, Brain, BarChart2, Database, Map, Shield, DollarSign, Trophy
}

const categories = ['All', 'Business Intelligence', 'Predictive Analytics', 'Machine Learning', 'Business Analytics', 'Data Engineering', 'Algorithms & Optimization', 'Cybersecurity', 'Hackathon']

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="pt-16">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Portfolio</p>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Analytics Projects
          </h1>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            A collection of analytics, data science, machine learning, and business intelligence projects spanning multiple domains, tools, and methodologies.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  background: active === cat ? 'var(--accent)' : 'var(--accent-light)',
                  color: active === cat ? 'white' : 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const Icon = iconMap[project.icon] || BarChart2
              return (
                <div key={project.id} className="card rounded-2xl overflow-hidden group flex flex-col">
                  {/* Top color bar */}
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${project.color}18`, color: project.color }}>
                        <Icon size={18} />
                      </div>
                      <div className="flex items-center gap-2">
                        {project.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${project.color}18`, color: project.color }}>
                            {project.badge}
                          </span>
                        )}
                        {project.featured && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(74,94,255,0.1)', color: 'var(--accent)' }}>
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Category */}
                    <p className="category-badge mb-2" style={{ color: project.color }}>{project.category}</p>

                    {/* Title */}
                    <h3 className="text-base font-semibold mb-3 leading-snug" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-4">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: project.color }} />
                          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Impact */}
                    {project.impact && (
                      <div className="rounded-xl p-3 mb-4 text-xs leading-relaxed"
                        style={{ background: `${project.color}0d`, color: 'var(--text-secondary)', border: `1px solid ${project.color}25` }}>
                        <strong style={{ color: project.color }}>Impact: </strong>{project.impact}
                      </div>
                    )}

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map(t => (
                        <span key={t} className="tag" style={{ fontSize: '0.65rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '9+', label: 'Total Projects' },
              { value: '5', label: 'Technology Domains' },
              { value: '1', label: 'National Award' },
              { value: '1', label: 'Industry Consulting Program' },
            ].map(({ value, label }) => (
              <div key={label} className="card rounded-xl p-4 text-center">
                <div className="text-2xl font-display gradient-text mb-1">{value}</div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
