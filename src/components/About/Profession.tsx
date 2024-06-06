'use client'

import React, { FC, useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const textOne = {
  header: 'frontend dev',
  description:
    'Проекты на стыке логики, смысла, маркетинга, дизайна и верстки. Логичные и эффективные.'
}

const textTwo = {
  header: 'web developer',
  description:
    'Дайте мне tasks, я создам чудо. Вместе достигнем невероятных результатов и сделаем невозможное возможным.'
}

export const Profession: FC = () => {
  const theme = useTheme()

  const [isTextOne, setIsTextOne] = useState(true)
  const [showDescription, setShowDescription] = useState(false)
  const [showBorder, setShowBorder] = useState(true)

  const handleClick = () => {
    setIsTextOne(!isTextOne)
    setShowDescription(false)
  }

  const handleAnimationEnd = () => {
    setShowBorder(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true)
    }, 2300)
    return () => clearTimeout(timer)
  }, [isTextOne])

  const { header, description } = isTextOne ? textOne : textTwo

  return (
    <Box
      onClick={handleClick}
      display={'flex'}
      alignItems={'center'}
      sx={{ cursor: 'pointer', flexWrap: { sm: 'nowrap', xs: 'wrap' }, gap: { sm: 0, xs: 2 } }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.secondary.main,
            width: '13.5ch',
            animation: 'typing 2.5s steps(22), blink .5s step-end infinite alternate',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            borderRight: showBorder ? '3px solid' : 'none',
            fontFamily: 'monospace',
            '@keyframes typing': {
              from: { width: 0 }
            },
            '@keyframes blink': {
              '50%': { borderColor: 'transparent' }
            }
          }}
          onAnimationEnd={handleAnimationEnd}
        >
          {header}
        </Typography>
      </Box>

      {showDescription && (
        <Box sx={{ width: '100%', maxWidth: '360px' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#ebe3ce',
              fontFamily: 'Open Sans, sans-serif',
              lineHeight: '26px'
            }}
          >
            {description}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
