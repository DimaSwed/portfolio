'use client'
import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setHeadingReducer } from '@/store/slices/slice-heading'

export const Profession = () => {
  const dispatch = useAppDispatch()
  const { header, description } = useAppSelector((state) => state.heading.currentHeading)

  // const text_one = {
  //   header: 'frontend dev',
  //   description:
  //     'Проекты на стыке логики, смысла, маркетинга, дизайна и верстки. Логичные и эффективные.'
  // }

  // const text_two = {
  //   header: 'web developer',
  //   description: 'Дайте мне tasks, и я создам чудо. Я переговорю, используя только Google Pixel.'
  // }

  useEffect(() => {
    const headingVersion = {
      header: 'frontend dev',
      description:
        'Проекты на стыке логики, смысла, маркетинга, дизайна и верстки. Логичные и эффективные.'
    }
    dispatch(setHeadingReducer(headingVersion))
  }, [dispatch])

  const handleClick = () => {
    const newHeading = {
      header: 'web developer',
      description: 'Дайте мне tasks, и я создам чудо. Я переговорю, используя только Google Pixel.'
    }
    dispatch(setHeadingReducer(newHeading))
  }

  // Проверка, какой объект отображать в зависимости от текущего состояния хранилища
  // const renderHeading = header === 'frontend dev' ? 'web developer' : 'frontend dev'
  // const renderDescription =
  //   description ===
  //   'Проекты на стыке логики, смысла, маркетинга, дизайна и верстки. Логичные и эффективные.'
  //     ? 'Дайте мне tasks, и я создам чудо. Я переговорю, используя только Google Pixel.'
  //     : 'Проекты на стыке логики, смысла, маркетинга, дизайна и верстки. Логичные и эффективные.'

  return (
    <Box
      onClick={handleClick}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{ cursor: 'pointer' }}
    >
      <Box>
        <Typography variant="h1" sx={{ color: '#EAC566' }}>
          {header}
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '360px' }}>
        <Typography
          sx={{
            color: '#ebe3ce',
            fontSize: 20,
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 600,
            lineHeight: '26px'
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
