'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { darkTheme, blueTheme } from '@/styles/theme'

interface ProviderThemeProps {
  children: ReactNode
  theme?: string
}

export const ThemeWrapper: FC<ProviderThemeProps> = ({ children, theme }) => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  const [mount, setMount] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    if (!mount) {
      setMount(true)
      return
    }
    if (currentTheme !== selectedTheme) {
      setSelectedTheme(currentTheme)
    }
  }, [currentTheme, selectedTheme, mount, theme])

  const newSelectedTheme = selectedTheme === 'darkTheme' ? darkTheme : blueTheme

  return (
    <ThemeProvider theme={newSelectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
