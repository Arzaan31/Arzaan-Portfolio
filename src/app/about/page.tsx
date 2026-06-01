'use client'

import { useState } from 'react'
import { MapPin, GraduationCap, Briefcase, Code, Brain, BarChart3, Database, Shield, Users } from 'lucide-react'
import { personalInfo, education, skills } from '@/lib/data'

function SkillSection({ title, items, icon }: { title: string; items: { name: string; level: number }[]; icon: React.ReactNode }) {
  return (
    <div className="card rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
          {icon}
        </div>
        <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map(({ name, level }) => (
          <div key={name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{name}</span>
              <span className="text-xs" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: `${level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="tag mb-4">About</p>
            <h1 className="font-display mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.15' }}>
              Analytics Professional.<br />
              <em className="gradient-text">Leader & Mentor.</em>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {personalInfo.summary}
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Stories */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">My Story</p>
          <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}>Three Dimensions of My Career</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                color: '#4a5eff',
                title: 'Analytics Professional',
                text: "Currently completing a Master's in Predictive Analytics at Curtin University, I've built hands-on expertise in machine learning, business intelligence, data visualization, and forecasting. My project portfolio spans ESG finance analytics, renewable energy forecasting, classification systems, and database engineering.",
              },
              {
                num: '02',
                color: '#2dd4bf',
                title: 'Technology Professional',
                text: "With a background in IT Engineering and experience across programming, database design, cybersecurity, and web development, I bring technical depth to analytics work. I understand the full data lifecycle — from ingestion and modelling through to deployment and reporting.",
              },
              {
                num: '03',
                color: '#8b5cf6',
                title: 'Leader, Mentor & Community Contributor',
                text: "Elected as Postgraduate Student Councillor at Curtin Student Guild, I represent and advocate for student communities at an institutional level. As a tutor at Code Camp and Ezy Math, I mentor young learners in technology and quantitative reasoning. I also won the Smart India Hackathon at national level.",
              },
            ].map(({ num, color, title, text }) => (
              <div key={num} className="card rounded-2xl p-7 relative overflow-hidden">
                <div className="text-6xl font-display opacity-10 absolute top-4 right-6" style={{ color }}>
                  {num}
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}18`, color }}>
                  <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-mono)' }}>{num}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Education</p>
          <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}>Academic Background</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="card rounded-2xl p-7">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      background: edu.status === 'Current' ? 'rgba(74,94,255,0.1)' : 'rgba(34,197,94,0.1)',
                      color: edu.status === 'Current' ? 'var(--accent)' : '#22c55e',
                      fontFamily: 'var(--font-mono)',
                    }}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--accent)' }}>{edu.institution}</p>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{edu.location}</p>
                <p className="text-xs mb-4" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{edu.period}</p>
                {edu.cgpa && (
                  <p className="text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>CGPA: <strong>{edu.cgpa}</strong></p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {edu.areas.map(area => (
                    <span key={area} className="tag" style={{ fontSize: '0.65rem' }}>{area}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Skills</p>
          <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}>Technical Proficiency</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillSection title="Programming" items={skills.programming} icon={<Code size={16} />} />
            <SkillSection title="Data Science & ML" items={skills.dataScience} icon={<Brain size={16} />} />
            <SkillSection title="Business Intelligence" items={skills.businessIntelligence} icon={<BarChart3 size={16} />} />
            <SkillSection title="Database Technologies" items={skills.databases} icon={<Database size={16} />} />
            <SkillSection title="Professional Skills" items={skills.professional} icon={<Users size={16} />} />
            <div className="card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                  <Shield size={16} />
                </div>
                <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>Cybersecurity</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Risk Assessment', 'Threat Analysis', 'Vulnerability Assessment', 'NIST Framework', 'CCNA', 'Cybersecurity Essentials'].map(s => (
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
