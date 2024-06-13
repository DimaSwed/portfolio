import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { VectorAnimateBox } from './VectorAnimateBox'
import { VectorSvg } from './VectorSvg'
import { FriendsTitle } from './FriendsTitle'
import { FotosWithFriends } from './FotosWithFriends'

const Friends: FC = () => {
  return (
    <Box sx={{ mb: { lg: '150px', md: '136px', sm: '100px', xs: '100px' } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: { sm: 'nowrap', xs: 'wrap' },
            alignItems: 'center',
            gap: '91px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              maxWidth: { sm: '521px', xs: '232px' },
              boxSizing: 'border-box',
              alignItems: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              order: { xs: 2, sm: 1 },
              transition: 'max-width 2s ease, max-height 2s ease'
            }}
          >
            <FotosWithFriends />
          </Box>

          <Box sx={{ maxWidth: '588px', order: { xs: 1, sm: 2 } }}>
            <Box sx={{ mb: { sm: '7px', xs: '30px' } }}>
              <FriendsTitle />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { sm: 'row', xs: 'column' },
                justifyContent: 'center',
                alignItems: { sm: 'flex-end', xs: 'center' },
                gap: { sm: '23px', xs: '0' }
              }}
            >
              <Box
                sx={{
                  order: { xs: 2, sm: 1 },
                  ml: { sm: '0', xs: '-130px' },
                  mb: { sm: '0', xs: '-60px' },
                  transform: { sm: 'rotate(-5.41deg)', xs: 'rotate(0deg)' }
                }}
              >
                <VectorSvg />
              </Box>
              <Box
                sx={{ mr: { sm: '0', xs: '-100px' }, order: { xs: 1, sm: 2 }, maxWidth: '100%' }}
              >
                <VectorAnimateBox />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Friends
