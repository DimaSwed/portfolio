'use client'
import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const FriendsTitle: FC = () => {
  const theme = useTheme()

  return (
    <>
      <Typography
        variant="h5"
        component={'p'}
        sx={{
          fontFamily: 'Manrope, sans-serif',
          color: theme.palette.secondary.main,
          mb: '24px'
        }}
      >
        (I&apos;ts me)
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{
          color: '#ebe3ce',
          fontFamily: 'Manrope, sans-serif',
          lineHeight: '60px'
        }}
      >
        In difficult times, I always supported people. All cases I participated in are successful
      </Typography>
    </>
  )
}
