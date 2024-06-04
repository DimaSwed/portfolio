import * as React from 'react'
import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import { ThemeToggle } from './ThemeToggle'
import { Navbar } from './Navbar'
import { BurgerButton } from './BurgerButton'
import { MobileNav } from './MobileNav'

export const Header: FC = () => {
  return (
    <Box mb={'78px'} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'primary.main' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <BurgerButton />

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{
                  mr: 4,
                  fontWeight: 600,
                  color: '#eac566',
                  fontSize: 30,
                  textTransform: 'uppercase'
                }}
              >
                Bulankin
              </Typography>
            </Box>

            <ThemeToggle
              sx={{
                display: 'block',
                position: 'absolute',
                left: '35%'
              }}
            />

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
              <Navbar />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileNav />
    </Box>
  )
}
