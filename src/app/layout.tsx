import type { Metadata } from 'next'
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import ThemeRegistry from './ThemeRegistry'
import '@/styles/globals.sass'

export const metadata: Metadata = {
  title: 'Portfolio | Web Page',
  description: 'Bulankin Dmitriy - Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  )
}
