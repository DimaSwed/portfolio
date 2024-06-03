import React, { FC } from 'react'
import { Button } from '@mui/material'
import { navItems } from '@/common/NavItems'

export const Navbar: FC = () => {
  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.label}
          href={item.link}
          sx={{
            color: '#fff',
            '&:hover': { color: '#eac566' },
            padding: '0',
            textTransform: 'capitalize',
            fontWeight: 600,
            fontSize: 20
          }}
        >
          {item.label}
        </Button>
      ))}
    </>
  )
}
