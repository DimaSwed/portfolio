import type { Metadata } from 'next'
import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import StoreProvider from '@/providers/StoreProvider'
import '@/styles/globals.sass'
import ThemeWrapper from '@/providers/ThemeProvider'

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
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

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
