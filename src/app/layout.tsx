import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'Goggle clone created using NextJs 14',
  icons: {
    icon: "./icons/icon.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>{children}</body>
    </html>
  )
}
