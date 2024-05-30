'use client'
import { Manrope } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
// import { Colors } from './colors'

const manrope = Manrope({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const theme = createTheme({
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: manrope.style.fontFamily
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa'
          })
        })
      }
    }
  }
})

export default theme
