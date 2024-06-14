import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { TeamCardList } from './TeamCardList'
import { TeamTitle } from './TeamTitle'

const Team: FC = () => {
  return (
    <Box
      component={'section'}
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
          <TeamTitle />
          <TeamCardList />
        </Box>
      </Container>
    </Box>
  )
}

export default Team
