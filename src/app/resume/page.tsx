'use client'

import { Download, FileText, Eye } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className="pt-16">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Resume</p>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Curriculum Vitae
          </h1>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Download my resume or browse the full portfolio to learn more about my experience and skills.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/arzaan-mogal-resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #4a5eff, #2dd4bf)' }}
            >
              <Download size={16} /> Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Resume preview card */}
          <div className="card rounded-2xl p-8 text-center mb-10">
            <FileText size={48} className="mx-auto mb-4" style={{ color: 'var(--accent)' }} />
            <h2 className="font-display mb-3" style={{ fontSize: '1.5rem' }}>Arzaan Mogal — Resume</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              Predictive Analytics Graduate Candidate · Data Scientist · Business Intelligence Analyst
            </p>
            <a
              href="/arzaan-mogal-resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #4a5eff, #2dd4bf)' }}
            >
              <Download size={16} /> Download PDF
            </a>
          </div>

          {/* Key points */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Education', value: "Master's in Predictive Analytics, Curtin University" },
              { label: 'Location', value: 'Perth, Western Australia' },
              { label: 'Experience', value: '5+ years professional experience' },
              { label: 'Projects', value: '9+ analytics & technology projects' },
              { label: 'Specialisation', value: 'Machine Learning, BI, Data Science' },
              { label: 'Status', value: 'Open to graduate roles in Australia' },
            ].map(({ label, value }) => (
              <div key={label} className="card rounded-xl p-4 flex gap-3">
                <span className="text-xs font-semibold w-24 flex-shrink-0" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', paddingTop: '1px' }}>{label}</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Want to explore in depth? Browse the full portfolio.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                <Eye size={15} /> View Projects
              </Link>
              <Link href="/experience" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                <Eye size={15} /> View Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
