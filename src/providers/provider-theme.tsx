'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { greenTheme, blueTheme } from '@/styles/theme'

interface ProviderThemeProps {
  children: ReactNode
  theme?: string
}

const ThemeWrapper: FC<ProviderThemeProps> = ({ children, theme }) => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  const [mount, setMount] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    console.log(currentTheme, selectedTheme, mount, theme)
    if (!mount) {
      setMount(true)
      return
    }
    if (currentTheme !== selectedTheme) {
      setSelectedTheme(currentTheme)
    }
  }, [currentTheme, selectedTheme, mount, theme])

  const newSelectedTheme = selectedTheme === 'greenTheme' ? greenTheme : blueTheme

  return (
    <ThemeProvider theme={newSelectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper

// import { FC, ReactNode } from 'react'
// import { cookies } from 'next/headers'
// import { ThemeProvider } from '@mui/material/styles'
// import { CssBaseline } from '@mui/material'
// import { greenTheme, blueTheme } from '@/styles/theme'

// interface ProviderThemeProps {
//   children: ReactNode
// }

// const ThemeWrapper: FC<ProviderThemeProps> = async ({ children }: ProviderThemeProps) => {
//   const cookie = cookies()
//   const theme = cookie.get('theme')

//   return (
//     <ThemeProvider theme={theme?.value === 'greenTheme' ? greenTheme : blueTheme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   )
// }

// export default ThemeWrapper
