'use client'

import { MapPin, Calendar, Briefcase } from 'lucide-react'
import { experience } from '@/lib/data'

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Career</p>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Professional Experience
          </h1>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            5+ years of professional experience across technology, education, business development, and analytics — spanning India and Australia.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(to bottom, var(--accent), rgba(74,94,255,0.1))' }} />

            <div className="space-y-10">
              {experience.map((job, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-11 h-11 rounded-full flex items-center justify-center z-10"
                    style={{ background: `${job.color}22`, border: `2px solid ${job.color}`, boxShadow: `0 0 12px ${job.color}33` }}>
                    <Briefcase size={16} style={{ color: job.color }} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 card rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                          {job.title}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: job.color }}>{job.company}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full flex-shrink-0"
                        style={{ background: `${job.color}15`, color: job.color, fontFamily: 'var(--font-mono)' }}>
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span className="flex items-center gap-1"><Calendar size={12} />{job.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {job.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: job.color }} />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map(s => (
                        <span key={s} className="tag" style={{ fontSize: '0.65rem' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Program */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Industry Program</p>
          <h2 className="font-display mb-8" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}>Study Australia Industry Experience</h2>
          <div className="card rounded-2xl p-8 max-w-3xl">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(45,212,191,0.12)', color: '#2dd4bf' }}>
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                  Analytics Consulting — Education Startup
                </h3>
                <p className="text-sm mb-1" style={{ color: '#2dd4bf' }}>Study Australia Industry Experience Program</p>
                <p className="text-xs mb-4" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Delivered by Practera · Study Australia · Australian Trade and Investment Commission
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Completed a real-world industry consulting project, conducting grant and funding opportunity analysis for an education startup. Delivered strategic recommendations, funding research, and a professional business report.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Funding Research', 'Comparative Analysis', 'Strategic Recommendations', 'Business Reporting', 'Consulting'].map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
