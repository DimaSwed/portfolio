'use client'
import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

export const FooterTitle: FC = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
        // marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '40px' }
      }}
    >
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
      <Box
        sx={{
          display: { lg: 'block', md: 'none', xs: 'none' },
          '@keyframes rotate': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' }
          },
          animation: 'rotate 6s linear infinite'
        }}
      >
        <Image
          src="/SMiler_1.png"
          alt="smile"
          width={200}
          height={200}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '200px',
            maxHeight: '200px'
          }}
        />
      </Box>
    </Box>
  )
}
