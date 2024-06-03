'use client'
import React, { FC } from 'react'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Toolbar
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeToggle } from './ThemeToggle'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { closeNavReducer } from '@/store/slices/slice-navigation'
import { navItems } from '@/common/NavItems'

interface IProps {
  window?: () => Window
}

const drawerWidth = 280

export const MobileNav: FC<IProps> = ({ window }) => {
  const dispatch = useAppDispatch()
  const showNav = useAppSelector((state) => state.navigation.showNav)

  const closeNavHandler = () => dispatch(closeNavReducer())

  const drawer = (
    <Box position={'relative'} height={'100vh'}>
      <Box display={'flex'} justifyContent={'space-between'} padding={1}>
        <Typography variant="h6" sx={{ my: 1, paddingLeft: 1 }}>
          Bulankin
        </Typography>
        <IconButton onClick={closeNavHandler}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              href={item.link}
              sx={{ textAlign: 'center', '&:hover': { color: 'primary.main' } }}
              onClick={closeNavHandler}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <ThemeToggle
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 30,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      />
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={showNav}
          onClose={closeNavHandler}
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
    </>
  )
}
