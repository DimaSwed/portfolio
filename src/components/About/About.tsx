import React, { FC } from 'react'

import { Box, Container } from '@mui/material'
import { HelloAnimateBox } from './HelloAnimateBox'
import { Profession } from './Profession'
import MyNameHeading from './MyNameHeading'

export const About: FC = () => {
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
        <Box
          display={'flex'}
          // justifyContent={'flex-end'}
          // padding={5}
          sx={{
            position: 'relative',
            padding: { sm: 5, xs: 3 },
            marginBottom: { lg: 0, md: 5, sm: 5, xs: 5 },
            justifyContent: { md: 'flex-end', xs: 'start' }
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: { md: '2%', sm: '5%', xs: '5%' },
              top: { md: '50%', sm: '10%', xs: '0' },
              zIndex: 3,
              width: '100%',
              maxWidth: '118px',
              height: '46px',
              cursor: 'default'
            }}
          >
            <HelloAnimateBox />
          </Box>

          <Box
            display={'flex'}
            sx={{
              cursor: 'default',
              position: 'relative',
              zIndex: 2,
              maxWidth: '979px',
              textAlign: 'center',
              gap: { md: 15, sm: 10, xs: 0 },
              flexWrap: { sm: 'nowrap', xs: 'wrap' }
            }}
          >
            <MyNameHeading />
          </Box>
        </Box>

        <Profession />
      </a>
    </Container>
  )
}
