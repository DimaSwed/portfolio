// Сделать компонент серверным / избавиться от стейта
// 'use client'
// import * as React from 'react'
// import { FC, useState } from 'react'
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import CssBaseline from '@mui/material/CssBaseline'
// import Divider from '@mui/material/Divider'
// import Drawer from '@mui/material/Drawer'
// import IconButton from '@mui/material/IconButton'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemText from '@mui/material/ListItemText'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// import { Container } from '@mui/material'
// import { ThemeToggle } from './ThemeToggle'
// import Navbar from './Navbar'

// interface IProps {
//   window?: () => Window
// }

// const drawerWidth = 280
// const navItems: string[] = ['Кейсы', 'Обо мне', 'Цены', 'Контакты']

// export const Header: FC<IProps> = (props) => {
//   const { window } = props
//   const [mobileOpen, setMobileOpen] = useState<boolean>(false)

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState)
//   }

//   const drawer = (
//     <Box position={'relative'} height={'100vh'}>
//       <Box display={'flex'} justifyContent={'space-between'} padding={1}>
//         <Typography variant="h6" sx={{ my: 1, paddingLeft: 1 }}>
//           Bulankin
//         </Typography>
//         <IconButton onClick={handleDrawerToggle}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center', '&:hover': { color: 'primary.main' } }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <ThemeToggle
//         sx={{
//           position: 'absolute',
//           left: 0,
//           right: 0,
//           bottom: 30,
//           margin: '0 auto',
//           width: '100%',
//           display: 'flex',
//           justifyContent: 'center'
//         }}
//       />
//     </Box>
//   )

//   const container = window !== undefined ? () => window().document.body : undefined

//   return (
//     <Box mb={'78px'} sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav" sx={{ background: 'primary.main' }}>
//         <Container maxWidth="lg">
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: 'none' } }}
//             >
//               <MenuIcon sx={{ color: 'white' }} />
//             </IconButton>

//             <Box
//               display="flex"
//               alignItems="center"
//               gap={1}
//               sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
//             >
//               <Typography
//                 variant="h6"
//                 component="span"
//                 sx={{
//                   mr: 4,
//                   fontWeight: 600,
//                   color: '#eac566',
//                   fontSize: 30
//                 }}
//               >
//                 Bulankin
//               </Typography>
//             </Box>

//             <ThemeToggle
//               sx={{
//                 display: 'block',
//                 position: 'absolute',
//                 left: '35%'
//               }}
//             />

//             <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
//               <Navbar />
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3, border: '1px solid red' }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   )
// }

// Сделать компонент серверным / избавиться от стейта
// 'use client'
import * as React from 'react'
import { FC } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
// import Divider from '@mui/material/Divider'
// import Drawer from '@mui/material/Drawer'
// import IconButton from '@mui/material/IconButton'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemText from '@mui/material/ListItemText'
// // import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import { ThemeToggle } from './ThemeToggle'
import Navbar from './Navbar'
// import { useAppDispatch, useAppSelector } from '@/store/hooks'
// import { openNavReducer, closeNavReducer } from '@/store/slices/slice-navigation'
import BurgerButton from './BurgerButton'
import { MobileNav } from './MobileNav'
// import { MobileNav } from './MobileNav'
// import BurgerButton from './BurgerButton'

// interface IProps {
//   window?: () => Window
// }

// const drawerWidth = 280
// const navItems: string[] = ['Кейсы', 'Обо мне', 'Цены', 'Контакты']

// export const Header: FC<IProps> = (props) => {
// const { window } = props
export const Header: FC = () => {
  // const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  // const dispatch = useAppDispatch()
  // const showNav = useAppSelector((state) => state.navigation.showNav)

  // const showNavHandler = () => dispatch(openNavReducer())
  // const closeNavHandler = () => dispatch(closeNavReducer())

  // const handleDrawerToggle = () => {
  //   setMobileOpen((prevState) => !prevState)
  // }

  // const drawer = (
  //   <Box position={'relative'} height={'100vh'}>
  //     <Box display={'flex'} justifyContent={'space-between'} padding={1}>
  //       <Typography variant="h6" sx={{ my: 1, paddingLeft: 1 }}>
  //         Bulankin
  //       </Typography>
  //       {/* <IconButton onClick={handleDrawerToggle}>
  //         <CloseIcon />
  //       </IconButton> */}
  //       <IconButton onClick={closeNavHandler}>
  //         <CloseIcon />
  //       </IconButton>
  //     </Box>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: 'center', '&:hover': { color: 'primary.main' } }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>

  //     <ThemeToggle
  //       sx={{
  //         position: 'absolute',
  //         left: 0,
  //         right: 0,
  //         bottom: 30,
  //         margin: '0 auto',
  //         width: '100%',
  //         display: 'flex',
  //         justifyContent: 'center'
  //       }}
  //     />
  //   </Box>
  // )

  // const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box mb={'78px'} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'primary.main' }}>
        <Container maxWidth="lg">
          <Toolbar>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              // onClick={handleDrawerToggle}
              onClick={showNavHandler}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton> */}
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
                  fontSize: 30
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
      {/* <nav>
        <Drawer
          container={container}
          variant="temporary"
          // open={mobileOpen}
          // onClose={handleDrawerToggle}
          open={showNav}
          onClose={showNavHandler}
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
      </Box> */}
      <MobileNav />
    </Box>
  )
}
