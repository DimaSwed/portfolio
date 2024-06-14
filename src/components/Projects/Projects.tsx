import React, { FC } from 'react'
import { Box, Container, Link } from '@mui/material'
import { ProjectItemList } from './ProjectItemList'
import { ProjectsTitle } from './ProjectsTitle'

const Projects: FC = () => {
  return (
    <Link id="cases">
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
            <ProjectsTitle />
            <ProjectItemList />
          </Box>
        </Container>
      </Box>
    </Link>
  )
}

export default Projects
