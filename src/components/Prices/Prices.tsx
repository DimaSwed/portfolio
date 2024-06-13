import React, { FC } from 'react'
import { Box, Container, Link } from '@mui/material'
import { PricesCardList } from './PricesCardList'
import { PriceTitle } from './PriceTitle'

const Prices: FC = () => {
  return (
    <Link id="prices">
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
              cursor: 'default',
              marginBottom: { lg: 0, md: 5, sm: 5, xs: 5 }
            }}
          >
            <PriceTitle />
            <PricesCardList />
          </Box>
        </Container>
      </Box>
    </Link>
  )
}
export default Prices
