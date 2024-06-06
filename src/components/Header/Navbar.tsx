'use client'
import React, { FC } from 'react'
import { Button } from '@mui/material'
import { navItems } from '@/common/NavItems'
import { useTheme } from '@mui/material/styles'

export const Navbar: FC = () => {
  const theme = useTheme()

  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.label}
          href={item.link}
          sx={{
            color: '#fff',
            '&:hover': { color: theme.palette.secondary.main },
            padding: '0',
            textTransform: 'capitalize',
            fontWeight: { md: 600, sm: 400 },
            fontSize: { md: 20, sm: 14 }
          }}
        >
          {item.label}
        </Button>
      ))}
    </>
  )
}
