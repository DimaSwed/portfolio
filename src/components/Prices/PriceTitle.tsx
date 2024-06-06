'use client'
import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const PriceTitle: FC = () => {
  const theme = useTheme()

  return (
    <Typography
      variant="h3"
      sx={{
        color: theme.palette.secondary.main,
        cursor: 'default',
        fontFamily: 'Manrope, sans-serif',
        marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '44px' }
      }}
    >
      ( Prices )
    </Typography>
  )
}
