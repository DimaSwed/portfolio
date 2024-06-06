import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { ProjectItemList } from './ProjectItemList'
import { ProjectsTitle } from './ProjectsTitle'

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
            <ProjectsTitle />
            <ProjectItemList />
          </Box>
        </a>
      </Container>
    </Box>
  )
}
