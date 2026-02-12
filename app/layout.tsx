import type { Metadata } from 'next'
import { Gloock, Raleway } from 'next/font/google'
import './globals.css'

const gloock = Gloock({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gloock',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: 'McCauley Armishaw',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gloock.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  )
}
