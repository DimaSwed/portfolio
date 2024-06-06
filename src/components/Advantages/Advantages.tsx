import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { AdvantageCardList } from './AdvantageCardList'
import { AdvantagesTitle } from './AdvantagesTitle'

export const Advantages: FC = () => {
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
          <AdvantagesTitle />

          <AdvantageCardList />
        </Box>
      </Container>
    </Box>
  )
}
