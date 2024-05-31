'use client'

import { Manrope, Inter, IBM_Plex_Sans, Open_Sans } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { green, indigo } from '@mui/material/colors'
// import { Colors } from './colors'

const manrope = Manrope({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440
    }
  },
  palette: {
    // mode: 'light',
    primary: green,
    secondary: indigo
  },
  typography: {
    fontFamily: `${manrope.style.fontFamily}, ${openSans.style.fontFamily}, ${inter.style.fontFamily}, ${ibmPlexSans.style.fontFamily}`
  }
})

export default theme
