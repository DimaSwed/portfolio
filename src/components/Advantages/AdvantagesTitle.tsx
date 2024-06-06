'use client'
import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const AdvantagesTitle: FC = () => {
  const theme = useTheme()
  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.secondary.main,
        cursor: 'default',
        fontFamily: 'Manrope, sans-serif'
      }}
    >
      ( Leave a request or write to me to start )
    </Typography>
  )
}
