'use client'
import { greenTheme, blueTheme } from '@/styles/theme'

import { useAppSelector } from '@/store/hooks'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)
  const theme = currentTheme === 'greenTheme' ? greenTheme : blueTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
