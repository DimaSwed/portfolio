'use client'
import React, { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'
import { projectsImg } from '@/common/ProjectsImg'
import Image from 'next/image'

export const ProjectItemList: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
        {projectsImg.map((item) => (
          <Grid key={item.id} xs={2}>
            <Image
              src={item.link}
              alt={item.name}
              width={350}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                margin: 0,
                display: 'block',
                maxWidth: '350px'
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}