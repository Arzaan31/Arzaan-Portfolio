'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, BarChart3, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4a5eff, #2dd4bf)' }}>
                <BarChart3 size={16} className="text-white" />
              </div>
              <span className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Arzaan Mogal
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Predictive Analytics Graduate Candidate. Transforming complex data into actionable insights.
            </p>
            <div className="flex items-center gap-1 mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
              <MapPin size={13} />
              <span>Perth, Western Australia</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {[['About', '/about'], ['Projects', '/projects'], ['Experience', '/experience'], ['Leadership', '/leadership'], ['Certifications', '/certifications'], ['Contact', '/contact']].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm py-1 transition-colors hover:text-[var(--accent)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>Connect</h4>
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/arzaan-mogal" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--accent)] hover:text-white"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                <Linkedin size={16} />
              </a>
              <a href="mailto:arzaanmogal@gmail.com"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--accent)] hover:text-white"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                <Mail size={16} />
              </a>
              <a href="https://github.com/arzaanmogal" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--accent)] hover:text-white"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                <Github size={16} />
              </a>
            </div>
            <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
              +61 0431 786 090
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Arzaan Mogal. Built with Next.js & TypeScript.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Available for graduate roles in Australia</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
          </div>
        </div>
      </div>
    </footer>
  )
}
