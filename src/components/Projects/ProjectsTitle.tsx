'use client'
import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const ProjectsTitle: FC = () => {
  const theme = useTheme()

  return (
    <Typography
      variant="h3"
      sx={{
        color: theme.palette.secondary.main,
        fontFamily: 'Manrope, sans-serif',
        cursor: 'default',
        marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '44px' }
      }}
    >
      ( Projects )
    </Typography>
  )
}
