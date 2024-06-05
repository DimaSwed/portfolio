import React, { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { PricesCardList } from './PricesCardList'

export const Prices: FC = () => {
  return (
    <Box
      sx={{
        marginBottom: { lg: '150px', md: '136px', sm: '100px', xs: '100px' }
      }}
    >
      <Container maxWidth="lg">
        <a id="prices">
          <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
              cursor: 'default',
              marginBottom: { lg: 0, md: 5, sm: 5, xs: 5 }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#eac566',
                // textAlign: 'center',
                cursor: 'default',
                fontFamily: 'Manrope, sans-serif',
                marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '44px' }
              }}
            >
              ( Prices )
            </Typography>
            <PricesCardList />
          </Box>
        </a>
      </Container>
    </Box>
  )
}
