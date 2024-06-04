import React, { FC } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export const MyNameHeading: FC = () => {
  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center', color: '#ebe3ce', zIndex: 5 }}>
        Dmitriy
      </Typography>

      <Typography variant="h1" sx={{ textAlign: 'center', color: '#ebe3ce', zIndex: 5 }}>
        Bulankin
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          margin: 0,
          display: 'block',
          maxWidth: 206,
          position: 'absolute',
          top: { md: '50%', xs: '50%' },
          left: { md: '46%', sm: '48%', xs: '70%' },
          transform: 'translate(-50%, -50%) rotate(6deg)',
          zIndex: 1
        }}
      >
        <Image
          src="/about_img_fx.png"
          alt="myself foto"
          width={200}
          height={200}
          style={{ opacity: 0.7 }}
        />
      </Box>
    </>
  )
}
