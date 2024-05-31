'use client'
import { Manrope } from 'next/font/google'
// import { Manrope, Inter, IBM_Plex_Sans, Open_Sans } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { green, indigo } from '@mui/material/colors'
// import { Colors } from './colors'

const manrope = Manrope({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// const openSans = Open_Sans({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap'
// })

// const inter = Inter({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap'
// })

// const ibmPlexSans = IBM_Plex_Sans({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap'
// })

const greenTheme = createTheme({
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
    primary: {
      main: green[600]
    },
    secondary: {
      main: green[700]
    }
  },
  typography: {
    fontFamily: manrope.style.fontFamily
  }
})

const blueTheme = createTheme({
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
    primary: {
      main: indigo[700]
    },
    secondary: {
      main: indigo[800]
    }
  },
  typography: {
    fontFamily: manrope.style.fontFamily
  }
})

export { greenTheme, blueTheme }
