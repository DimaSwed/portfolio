import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { PricesCardList } from './PricesCardList'
import { PriceTitle } from './PriceTitle'

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
            <PriceTitle />
            <PricesCardList />
          </Box>
        </a>
      </Container>
    </Box>
  )
}
