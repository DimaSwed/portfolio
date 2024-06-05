import { Box, Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import { ProjectItemList } from './ProjectItemList'

export const Projects: FC = () => {
  return (
    <Box
      sx={{
        marginBottom: { lg: '150px', md: '136px', sm: '100px', xs: '100px' }
      }}
    >
      <Container maxWidth="lg">
        <a id="cases">
          <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
              marginBottom: { lg: 0, md: 5, sm: 5, xs: 5 }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#eac566',
                // textAlign: 'center',
                fontFamily: 'Manrope, sans-serif',
                marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '44px' }
              }}
            >
              ( Projects )
            </Typography>
            <ProjectItemList />
          </Box>
        </a>
      </Container>
    </Box>
  )
}
