import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { VectorAnimateBox } from './VectorAnimateBox'
import { VectorSvg } from './VectorSvg'
import { FriendsTitle } from './FriendsTitle'
import { FotosWithFriends } from './FotosWithFriends'

export const Friends: FC = () => {
  return (
    <Box marginBottom={'150px'}>
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: '626px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '91px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              maxWidth: '521px',
              boxSizing: 'border-box',
              alignItems: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'flex-start'
              // mr: '91px'
            }}
          >
            <FotosWithFriends />
          </Box>

          <Box sx={{ maxWidth: '588px' }}>
            <Box sx={{ mb: '7px' }}>
              <FriendsTitle />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: '23px'
              }}
            >
              <VectorSvg />
              <VectorAnimateBox />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
