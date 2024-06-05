'use client'
import React, { FC } from 'react'
import { keyframes } from '@emotion/react'
import { Box, Typography } from '@mui/material'

const rotateAnimation = keyframes`
  0% { transform: translateY(-50%) rotate(5deg) translateX(0); }
  25% { transform: translateY(-50%) rotate(5deg) translateX(10px); }
  50% { transform: translateY(-50%) rotate(5deg) translateX(0); }
  75% { transform: translateY(-50%) rotate(5deg) translateX(-10px); }
  100% { transform: translateY(-50%) rotate(5deg) translateX(0); }
`
export const SkillsAnimateBox: FC = () => {
  return (
    <Box
      display={'flex'}
      padding={'10px 16px'}
      sx={{
        width: '100%',
        position: 'relative',
        maxWidth: '247px',
        transform: 'translateY(-50%) rotate(5deg)',
        boxSizing: 'border-box',
        alignItems: 'flex-start',
        borderRadius: '25px 25px 25px 4px',
        justifyContent: 'flex-start',
        backgroundColor: '#e9e9eb',
        animation: `${rotateAnimation} 4s infinite`
      }}
    >
      <Typography
        sx={{
          color: '#2a2a29',
          fontSize: { lg: '20px', md: '14px' },
          fontStyle: 'normal',
          fontFamily: 'Open Sans, sans-serif',
          fontWeight: 400,
          lineHeight: '26px',
          letterSpacing: '-1px',
          textTransform: 'none'
        }}
      >
        this is the perfect code
      </Typography>
    </Box>
  )
}
