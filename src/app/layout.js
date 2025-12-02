import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Voronix solution',
  description: 'Building Digital Experiences Together - Alex, Jordan & Morgan',
  keywords: 'web development, portfolio, react, next.js, full stack',
  authors: [{ name: 'DevTrio Team' }],
  openGraph: {
    title: 'DevTrio - Three Developer Portfolio',
    description: 'Building Digital Experiences Together',
    url: 'https://devtrio.dev',
    siteName: 'DevTrio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}