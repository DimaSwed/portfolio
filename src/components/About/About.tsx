import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { HelloAnimateBox } from './HelloAnimateBox'
import { Profession } from './Profession'
import { MyNameHeading } from './MyNameHeading'

const About: FC = () => {
  return (
    <Box
      sx={{
        marginBottom: { lg: '150px', md: '136px', sm: '100px', xs: '100px' }
      }}
    >
      <Container maxWidth="lg">
        <Box
          display={'flex'}
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
      </Container>
    </Box>
  )
}

export default About
