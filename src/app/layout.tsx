import type { Metadata } from 'next'
import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import StoreProvider from '@/providers/provider-store'
import '@/styles/globals.sass'
import { ThemeWrapper } from '@/providers/provider-theme'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Portfolio | Web Page',
  description: 'Bulankin Dmitriy - Portfolio',
  metadataBase: new URL('https://portfolio-blush-six-55.vercel.app'),
  keywords: [
    'portfolio',
    'портфолио',
    'web developer',
    'frontend',
    'фронтенд',
    'frontend developer',
    'фронтенд разработчик',
    'сделать сайт',
    'разработка сайта'
  ],
  openGraph: {
    description: 'Разработка качественных веб приложений',
    images: []
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookie = cookies()
  const theme = cookie.get('theme')

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper theme={theme?.value}>{children}</ThemeWrapper>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
