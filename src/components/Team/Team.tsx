import React, { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { TeamCardList } from './TeamCardList'

export const Team: FC = () => {
  return (
    <Box
      sx={{
        marginBottom: { lg: '150px', md: '136px', sm: '100px', xs: '100px' }
      }}
    >
      <Container maxWidth="lg">
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
              fontFamily: 'Manrope, sans-serif',
              cursor: 'default',
              marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '44px' }
            }}
          >
            ( Super team)
          </Typography>
          <TeamCardList />
        </Box>
      </Container>
    </Box>
  )
}
