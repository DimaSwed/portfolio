import React, { FC } from 'react'
import { Button } from '@mui/material'

const navItems = [
  { label: 'Кейсы', link: '#cases' },
  { label: 'Обо мне', link: '#about_me' },
  { label: 'Цены', link: '#prices' },
  { label: 'Контакты', link: '#contacts' }
]

const Navbar: FC = () => {
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

export default Navbar
