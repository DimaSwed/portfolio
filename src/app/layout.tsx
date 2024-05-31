// import type { Metadata } from 'next'
// import ThemeRegistry from '@/providers/ThemeRegistry'
// import '@/styles/globals.sass'

// export const metadata: Metadata = {
//   title: 'Portfolio | Web Page',
//   description: 'Bulankin Dmitriy - Portfolio'
// }

// export default function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <ThemeRegistry>
//         <body>{children}</body>
//       </ThemeRegistry>
//     </html>
//   )
// }

import type { Metadata } from 'next'
import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/styles/theme'
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
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
