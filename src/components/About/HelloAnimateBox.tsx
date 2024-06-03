'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { keyframes } from '@emotion/react'

const rotateAnimation = keyframes`
  0% { transform: translateY(-50%) rotate(5deg) translateX(0); }
  25% { transform: translateY(-50%) rotate(5deg) translateX(10px); }
  50% { transform: translateY(-50%) rotate(5deg) translateX(0); }
  75% { transform: translateY(-50%) rotate(5deg) translateX(-10px); }
  100% { transform: translateY(-50%) rotate(5deg) translateX(0); }
`

export const HelloAnimateBox = () => {
  return (
    <Box
      display={'flex'}
      padding={'10px 16px'}
      sx={{
        transform: 'translateY(-50%) rotate(5deg)',
        boxSizing: 'border-box',
        alignItems: 'center',
        borderRadius: '25px 25px 25px 4px',
        justifyContent: 'flex-start',
        backgroundColor: '#e9e9eb',
        animation: `${rotateAnimation} 4s infinite`
      }}
    >
      <Typography
        sx={{
          color: '#2a2a29',
          fontSize: '20px',
          fontStyle: 'normal',
          fontFamily: '"Open Sans",sans-serif',
          fontWeight: 400,
          lineHeight: '26px',
          letterSpacing: '-1px',
          textTransform: 'none',
          filter: 'blur(0.2px)'
        }}
      >
        Hello, I&#39;m
      </Typography>
    </Box>
  )
}
