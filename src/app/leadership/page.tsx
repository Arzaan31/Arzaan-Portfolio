'use client'

import { Users, Trophy, Heart, Globe } from 'lucide-react'
import { leadership } from '@/lib/data'

export default function LeadershipPage() {
  return (
    <div className="pt-16">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Leadership & Impact</p>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Community, Leadership<br />
            <em className="gradient-text">& Mentorship</em>
          </h1>
          <p className="text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Beyond technical expertise — my commitment to student advocacy, community building, and mentoring future professionals.
          </p>
        </div>
      </section>

      {/* Leadership highlights */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Users size={24} />, color: '#4a5eff', title: 'Student Councillor', sub: 'Curtin Student Guild', desc: 'Elected Postgraduate Councillor representing and advocating for postgraduate students at institutional level.' },
              { icon: <Trophy size={24} />, color: '#f5c842', title: 'National Hackathon Winner', sub: 'Smart India Hackathon', desc: 'National-level winner in India\'s largest hackathon, solving a government statistics challenge with data analysis.' },
              { icon: <Heart size={24} />, color: '#ec4899', title: 'Tutor & Mentor', sub: 'Code Camp & Ezy Math', desc: 'Teaching coding and mathematics to students, developing personalized learning experiences and mentoring young minds.' },
            ].map(({ icon, color, title, sub, desc }) => (
              <div key={title} className="card rounded-2xl p-7 text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${color}18`, color }}>
                  {icon}
                </div>
                <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm mb-3" style={{ color }}>at {sub}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <p className="tag mb-8">Roles & Involvement</p>
          <div className="relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(to bottom, var(--accent), rgba(74,94,255,0.1))' }} />
            <div className="space-y-8">
              {leadership.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  <div className="absolute left-0 top-5 w-11 h-11 rounded-full flex items-center justify-center z-10"
                    style={{ background: `${item.color}22`, border: `2px solid ${item.color}` }}>
                    <Users size={16} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 card rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>{item.role}</h3>
                        <p className="text-sm" style={{ color: item.color }}>{item.organisation}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs px-2 py-1 rounded-full" style={{ background: `${item.color}15`, color: item.color, fontFamily: 'var(--font-mono)' }}>
                          {item.type}
                        </span>
                        <p className="text-xs mt-1" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{item.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-1 mt-3">
                      {item.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: item.color }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon achievement */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(245,200,66,0.1), rgba(74,94,255,0.08))', border: '1px solid rgba(245,200,66,0.25)' }}>
            <div className="max-w-2xl">
              <div className="text-4xl mb-4">🏆</div>
              <h2 className="font-display mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Smart India Hackathon — National Winner
              </h2>
              <p className="text-base mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Competed in India's largest national hackathon — Smart India Hackathon — against thousands of teams across the country. Our team developed a winning data analysis solution for the Ministry of Statistics and Programme Implementation challenge, demonstrating large-scale data analysis, insight generation, and impactful problem solving.
              </p>
              <div className="flex flex-wrap gap-2">
                {['National Winner', 'Government Statistics Challenge', 'Large-Scale Data Analysis', 'Team Leadership', 'Problem Solving'].map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
