import React, { FC } from 'react'
import { Typography } from '@mui/material'

export const SkillsTitle: FC = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Manrope, sans-serif',
          color: '#eac566',
          mb: '24px'
        }}
      >
        (I can do that)
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: '#ebe3ce',
          fontFamily: 'Manrope, sans-serif',
          mb: '24px'
        }}
      >
        Clean code
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: '17px',
          fontFamily: 'Open Sans, sans-serif',
          fontWeight: 400,
          lineHeight: '26px',
          color: 'white',
          width: '100%',
          maxWidth: { md: '409px', xs: '320px' }
        }}
      >
        Are you tired of working with 2, 3 or 4 different teams? Conflicts, misunderstandings, and
        too much time spent on communication are
      </Typography>
    </>
  )
}
