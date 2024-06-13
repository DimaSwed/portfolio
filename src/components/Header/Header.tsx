import * as React from 'react'
import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import { ThemeToggle } from './ThemeToggle'
import { Navbar } from './Navbar'
import { BurgerButton } from './BurgerButton'
import { MobileNav } from './MobileNav'
import { HeaderTitle } from './HeaderTitle'

const Header: FC = () => {
  return (
    <Box sx={{ display: 'flex', mb: { md: '78px', sm: '32px' } }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'primary.main', backgroundImage: 'none' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <BurgerButton />

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
            >
              <HeaderTitle />
            </Box>

            <ThemeToggle
              sx={{
                display: 'block',
                position: 'absolute',
                left: '35%'
                // color: 'white'
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

export default Header
