'use client'
import { Manrope } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { indigo } from '@mui/material/colors'

const manrope = Manrope({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

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
      main: '#232323'
    },
    secondary: {
      main: '#eac566'
    }
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
    h1: {
      fontSize: '110px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '80px'
      },
      '@media (max-width:900px)': {
        fontSize: '65px'
      },
      '@media (max-width:600px)': {
        fontWeight: 500,
        fontSize: '50px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      textTransform: 'none'
    },
    h2: {
      fontSize: '100px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '70px'
      },
      '@media (max-width:900px)': {
        fontSize: '50px'
      },
      '@media (max-width:600px)': {
        fontSize: '35px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      letterSpacing: 0,
      textTransform: 'none'
    },
    h3: {
      fontSize: '80px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '60px'
      },
      '@media (max-width:900px)': {
        fontSize: '32px'
      },
      '@media (max-width:600px)': {
        fontSize: '25px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '42px',
      letterSpacing: 0,
      textTransform: 'none'
    },
    h4: {
      fontSize: '46px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '35px'
      },
      '@media (max-width:900px)': {
        fontSize: '32px'
      },
      '@media (max-width:600px)': {
        fontSize: '32px'
      },
      fontWeight: 500,
      fontStyle: 'normal',
      // lineHeight: '60px',
      letterSpacing: 0,
      textTransform: 'none'
    },
    h5: {
      fontSize: '24px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '22px'
      },
      '@media (max-width:900px)': {
        fontSize: '18px'
      },
      '@media (max-width:600px)': {
        fontSize: '16px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      textTransform: 'none',
      letterSpacing: 0,
      textDecoration: 'none'
    },
    h6: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '20px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '18px'
      },
      '@media (max-width:900px)': {
        fontSize: '15px'
      },
      '@media (max-width:600px)': {
        fontSize: '14px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      textTransform: 'none',
      // letterSpacing: '0.2rem',
      textDecoration: 'none'
    }
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
      main: indigo[800]
    },
    secondary: {
      main: '#eac566'
    }
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
    h1: {
      fontSize: '110px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '80px'
      },
      '@media (max-width:900px)': {
        fontSize: '65px'
      },
      '@media (max-width:600px)': {
        fontWeight: 500,
        fontSize: '50px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      textTransform: 'none'
    },
    h2: {
      fontSize: '100px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '70px'
      },
      '@media (max-width:900px)': {
        fontSize: '50px'
      },
      '@media (max-width:600px)': {
        fontSize: '35px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      letterSpacing: 0,
      textTransform: 'none'
    },
    h3: {
      fontSize: '80px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '60px'
      },
      '@media (max-width:900px)': {
        fontSize: '32px'
      },
      '@media (max-width:600px)': {
        fontSize: '25px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '42px',
      letterSpacing: 0,
      textTransform: 'none'
    },
    h4: {
      fontSize: '46px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '35px'
      },
      '@media (max-width:900px)': {
        fontSize: '32px'
      },
      '@media (max-width:600px)': {
        fontSize: '32px'
      },
      fontWeight: 500,
      fontStyle: 'normal',
      // lineHeight: '60px',
      letterSpacing: 0,
      textTransform: 'none'
    },
    h5: {
      fontSize: '24px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '22px'
      },
      '@media (max-width:900px)': {
        fontSize: '18px'
      },
      '@media (max-width:600px)': {
        fontSize: '16px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      textTransform: 'none',
      letterSpacing: 0,
      textDecoration: 'none'
    },
    h6: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '20px',
      transition: 'font-size 2s ease',
      '@media (max-width:1200px)': {
        fontSize: '18px'
      },
      '@media (max-width:900px)': {
        fontSize: '15px'
      },
      '@media (max-width:600px)': {
        fontSize: '14px'
      },
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      textTransform: 'none',
      // letterSpacing: '0.2rem',
      textDecoration: 'none'
    }
  }
})

export { greenTheme, blueTheme }
