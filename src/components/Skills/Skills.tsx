import React, { FC } from 'react'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import { SkillsTitle } from './SkillsTitle'
import { SkillsAnimateBox } from './SkillsAnimateBox'
import { SkillsPictures } from './SkillsPictures'

const Skills: FC = () => {
  return (
    <Box sx={{ mb: { lg: '150px', md: '136px', sm: '100px', xs: '100px' } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { sm: 'row', xs: 'column' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { sm: '0', xs: '20px' }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '530px'
            }}
          >
            <Box sx={{ marginBottom: { xs: '33px', md: '52px' } }}>
              <SkillsTitle />
            </Box>

            <Box
              sx={{
                display: { sm: 'flex', xs: 'none' },
                justifyContent: { lg: 'space-between', sm: 'center' },
                alignItems: 'center',
                padding: 0,
                width: '100%'
              }}
            >
              <SkillsAnimateBox />

              <Box sx={{ display: { lg: 'block', md: 'none', xs: 'none' } }}>
                <Image
                  src="/SMiler_1.png"
                  alt="smile"
                  width={200}
                  height={200}
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginLeft: '100px',
                    maxWidth: '200px',
                    maxHeight: '200px'
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              height: 'auto',
              overflow: 'hidden',
              maxWidth: { lg: '380px', md: '320px', xs: '214px' },
              boxSizing: 'border-box',
              alignItems: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'max-width 2s ease, max-height 2s ease'
            }}
          >
            <SkillsPictures />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Skills
