import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { HelloAnimateBox } from './HelloAnimateBox'
import { Profession } from './Profession'

export const About = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '398px' }}>
      {/* <Box display={'flex'} justifyContent={'center'} padding={5} sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '979px',
            textAlign: 'center'
          }}
        >
          <Typography variant="h1" sx={{ textAlign: 'center', color: '#ebe3ce' }}>
            Dmitriy Bulankin
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: 'auto',
            margin: 0,
            display: 'block',
            maxWidth: 206,
            position: 'absolute',
            top: '50%',
            left: '50%',
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
      </Box>

      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Typography variant="h1" sx={{ color: '#EAC566' }}>
            frontend dev
          </Typography>
        </Box>

        <Box sx={{ width: '100%', maxWidth: '360px' }}>
          <Typography
            sx={{
              color: '#ebe3ce',
              fontSize: 20,
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 400,
              lineHeight: '26px'
            }}
          >
            Projects at the intersection of logic, meaning, marketing, design, and layout. Logical
            and effective.
          </Typography>
        </Box>
      </Box> */}

      <a id="about_me">
        <Box display={'flex'} justifyContent={'flex-end'} padding={5} sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: '2%',
              top: '50%',
              zIndex: 3,
              width: '100%',
              maxWidth: '118px',
              height: '46px'
            }}
          >
            <HelloAnimateBox />
          </Box>

          <Box
            display={'flex'}
            sx={{
              position: 'relative',
              zIndex: 2,
              // width: '100%',
              maxWidth: '979px',
              textAlign: 'center',
              gap: 15
              // border: '1px solid red'
            }}
          >
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
                top: '50%',
                left: '46%',
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
          </Box>
        </Box>

        <Profession />
      </a>
    </Container>
  )
}
