'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Mail, ChevronDown, TrendingUp, Brain, BarChart3, Database, Trophy, GraduationCap, Users, FolderOpen, Briefcase, Award, MapPin, ExternalLink } from 'lucide-react'
import { personalInfo, stats, projects, skills } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  FolderOpen, Briefcase, Trophy, GraduationCap, Users, Award
}

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  return (
    <span className="font-display" style={{ fontStyle: 'italic' }}>
      {value}{suffix}
    </span>
  )
}

function SkillPill({ name }: { name: string }) {
  return (
    <span className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-default"
      style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
      {name}
    </span>
  )
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="card rounded-2xl p-6 text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div className="text-3xl font-display mb-2 gradient-text">
        <AnimatedCounter value={stat.value} />
      </div>
      <p className="text-xs leading-snug" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
        {stat.label}
      </p>
    </div>
  )
}

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,94,255,0.12) 0%, transparent 70%)'
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #4a5eff, transparent)', animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #62e3d2, transparent)', animation: 'float 10s ease-in-out infinite reverse' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Location badge */}
            <h1
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                color: 'var(--text-primary)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
              }}
            >
              <em className="gradient-text not-italic">Arzaan Mogal </em>
             
            </h1>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-medium"
              style={{
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                border: '1px solid rgba(74,94,255,0.2)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <MapPin size={12} />
              Perth, Western Australia · Available for Graduate Roles
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Headline */}
            <h1
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                color: 'var(--text-primary)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
              }}
            >
              
              <em className="gradient-text not-italic">Turning Data into Decisions.</em>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg mb-4 max-w-2xl leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>Arzaan Mogal</strong> — Predictive Analytics Graduate Candidate at Curtin University.
              Specialising in machine learning, business intelligence, and analytics consulting.
            </p>

            {/* Subtitle pills */}
            <div
              className="flex flex-wrap gap-2 mb-10"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
              }}
            >
              {['Data Science', 'Machine Learning', 'Business Intelligence', 'Analytics Consulting', 'Predictive Analytics'].map(s => (
                <SkillPill key={s} name={s} />
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
              }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #4a5eff, #2dd4bf)' }}
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <a
                href="/arzaan-mogal-resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-[var(--accent-light)] hover:-translate-y-0.5"
                style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-[var(--accent-light)] hover:-translate-y-0.5"
                style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                <Mail size={16} /> Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>scroll</span>
          <ChevronDown size={16} style={{ color: 'var(--text-muted)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, i) => <StatCard key={i} stat={stat} index={i} />)}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="tag mb-4">About Me</p>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
                Analytics Professional.<br />
                <em style={{ color: 'var(--accent)' }}>Mentor. Consultant.</em>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.summary}
              </p>
              <div className="flex gap-4">
                <Link href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover-underline"
                  style={{ color: 'var(--accent)' }}>
                  More About Me <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* 3-story cards */}
            <div className="grid gap-4">
              {[
                { icon: <BarChart3 size={22} />, title: 'Analytics Professional', desc: "Master's candidate in Predictive Analytics. Tableau, Power BI, Python, Machine Learning.", color: '#4a5eff' },
                { icon: <Brain size={22} />, title: 'Technology Professional', desc: 'Experienced across ML, SQL, data engineering, cybersecurity, and full-stack fundamentals.', color: '#2dd4bf' },
                { icon: <Users size={22} />, title: 'Leader & Community Contributor', desc: 'Curtin Student Guild Councillor. Code Camp Tutor. Hackathon National Winner. Mentor.', color: '#8b5cf6' },
              ].map(({ icon, title, desc, color }, i) => (
                <div key={i} className="card rounded-2xl p-5 flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}18`, color }}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                      {title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="tag mb-3">Featured Work</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Selected Projects
              </h2>
            </div>
            <Link href="/projects" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: 'var(--accent)' }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card rounded-2xl overflow-hidden group cursor-pointer">
                {/* Header color bar */}
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="category-badge" style={{ color: project.color }}>{project.category}</span>
                    {project.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${project.color}18`, color: project.color }}>
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold mb-2 leading-snug" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description.slice(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.slice(0, 3).map(t => (
                      <span key={t} className="tag" style={{ fontSize: '0.65rem' }}>{t}</span>
                    ))}
                  </div>
                  <Link href="/projects" className="inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: project.color }}>
                    View Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:hidden text-center">
            <Link href="/projects" className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: 'var(--accent)' }}>
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS OVERVIEW */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="tag mb-4">Capabilities</p>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Technical Expertise
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                A comprehensive skill set spanning the full analytics stack — from data engineering and machine learning through to business intelligence and stakeholder communication.
              </p>
              <Link href="/about#skills"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #4a5eff, #2dd4bf)' }}>
                Full Skills Overview <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Python', pct: 88, color: '#4a5eff' },
                { label: 'Tableau', pct: 90, color: '#2dd4bf' },
                { label: 'Machine Learning', pct: 85, color: '#8b5cf6' },
                { label: 'SQL', pct: 85, color: '#f59e0b' },
                { label: 'Power BI', pct: 78, color: '#06b6d4' },
                { label: 'Predictive Analytics', pct: 88, color: '#22c55e' },
              ].map(({ label, pct, color }) => (
                <div key={label} className="card rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>{label}</span>
                    <span className="text-xs" style={{ color, fontFamily: 'var(--font-mono)' }}>{pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(74,94,255,0.12), rgba(45,212,191,0.08))', border: '1px solid rgba(74,94,255,0.2)' }}>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Open to Graduate Roles in Australia
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Looking for opportunities in data science, analytics consulting, business intelligence, and machine learning roles across Australia.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #4a5eff, #2dd4bf)' }}>
                <Mail size={16} /> Get In Touch
              </Link>
              <a href="/arzaan-mogal-resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
