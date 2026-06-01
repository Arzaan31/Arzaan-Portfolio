'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Send, Github, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, connect to a form service like Formspree, EmailJS, etc.
    setSent(true)
  }

  return (
    <div className="pt-16">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag mb-4">Get In Touch</p>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Let's Connect
          </h1>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Open to graduate roles, internships, and consulting opportunities across Australia. Always happy to talk analytics, data science, and technology.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display mb-8" style={{ fontSize: '1.6rem' }}>Contact Details</h2>

              <div className="space-y-4 mb-10">
                {[
                  { icon: <Mail size={18} />, label: 'Email', value: 'arzaanmogal@gmail.com', href: 'mailto:arzaanmogal@gmail.com', color: '#4a5eff' },
                  { icon: <Phone size={18} />, label: 'Phone', value: '+61 0431 786 090', href: 'tel:+61431786090', color: '#2dd4bf' },
                  { icon: <MapPin size={18} />, label: 'Location', value: 'Perth, Western Australia', href: null, color: '#8b5cf6' },
                ].map(({ icon, label, value, href, color }) => (
                  <div key={label} className="card rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, color }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover-underline"
                          style={{ color: 'var(--text-primary)' }}>{value}</a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>Connect Online</h3>
              <div className="flex gap-3 mb-10">
                <a href="https://linkedin.com/in/arzaan-mogal" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: 'rgba(10,102,194,0.1)', color: '#0a66c2', border: '1px solid rgba(10,102,194,0.2)' }}>
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/arzaanmogal" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                  <Github size={16} /> GitHub
                </a>
              </div>

              {/* Availability */}
              <div className="rounded-2xl p-5"
                style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold" style={{ color: '#22c55e' }}>Available for Opportunities</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Actively seeking graduate data science, analytics, and business intelligence roles across Australia. Open to full-time, internship, and consulting engagements.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display mb-8" style={{ fontSize: '1.6rem' }}>Send a Message</h2>

              {sent ? (
                <div className="card rounded-2xl p-10 text-center">
                  <CheckCircle size={40} className="mx-auto mb-4" style={{ color: '#22c55e' }} />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card rounded-2xl p-7 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="Graduate Data Scientist opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the role or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #4a5eff, #2dd4bf)' }}
                  >
                    <Send size={16} /> Send Message
                  </button>
                  <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                    Or email directly: <a href="mailto:arzaanmogal@gmail.com" className="hover-underline" style={{ color: 'var(--accent)' }}>arzaanmogal@gmail.com</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
