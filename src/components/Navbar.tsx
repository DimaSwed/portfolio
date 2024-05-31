'use client'
import * as React from 'react'
import { FC, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container, FormControlLabel, Switch } from '@mui/material'

interface Props {
  window?: () => Window
}

const drawerWidth = 280
const navItems = ['Cases', 'About Me', 'Price', 'Contact']

const Navbar: FC<Props> = (props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box position={'relative'} height={'100vh'}>
      <Box display={'flex'} justifyContent={'space-between'} padding={1}>
        <Typography variant="h6" sx={{ my: 1, paddingLeft: 1 }}>
          Bulankin
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', '&:hover': { color: 'primary.main' } }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <FormControlLabel
        sx={{
          position: 'absolute',
          left: 25,
          right: 0,
          bottom: 20
        }}
        control={<Switch name="theme" color="default" />}
        label="Change theme"
      />
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box mb={'9.75rem'} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>

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
                  letterSpacing: '.3rem',
                  color: '#eac566',
                  textDecoration: 'none',
                  // fontFamily: 'Manrope, sans-serif',
                  fontSize: 20,
                  lineHeight: '130%'
                }}
              >
                Bulankin
              </Typography>
              <FormControlLabel
                sx={{ display: { md: 'block', sx: 'none', color: '#fff' } }}
                control={<Switch name="theme" color="default" />}
                label="Change theme"
              />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#fff',
                    '&:hover': { color: '#eac566' },
                    padding: '0'
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

export default Navbar
