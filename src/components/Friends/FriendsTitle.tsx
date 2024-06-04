import React, { FC } from 'react'
import { Typography } from '@mui/material'

export const FriendsTitle: FC = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Manrope, sans-serif',
          color: '#eac566',
          mb: '24px'
        }}
      >
        (I&apos;ts me)
      </Typography>
      <Typography
        component="p"
        sx={{
          color: '#ebe3ce',
          fontSize: '46px',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 500,
          lineHeight: '60px'
        }}
      >
        В трудные моменты я всегда поддерживал людей, все наши общие дела закончились успешно.
      </Typography>
    </>
  )
}
