'use client'
import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const HeaderTitle: FC = () => {
  const theme = useTheme()

  return (
    <Typography
      variant="h6"
      component="span"
      sx={{
        mr: 4,
        fontWeight: 600,
        color: theme.palette.secondary.main,
        fontSize: 30,
        textTransform: 'uppercase'
      }}
    >
      Bulankin
    </Typography>
  )
}
