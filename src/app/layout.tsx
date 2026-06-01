import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Arzaan Mogal | Predictive Analytics & Data Science',
  description: 'Master\'s candidate in Predictive Analytics specialising in Machine Learning, Business Intelligence, and Data Science. Based in Perth, Western Australia.',
  keywords: 'Data Scientist, Analytics Consultant, Business Intelligence, Machine Learning, Predictive Analytics, Perth Australia, Curtin University',
  authors: [{ name: 'Arzaan Mogal' }],
  openGraph: {
    title: 'Arzaan Mogal | Predictive Analytics & Data Science',
    description: 'Transforming complex data into actionable insights. Analytics | Machine Learning | Business Intelligence.',
    type: 'website',
    locale: 'en_AU',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
