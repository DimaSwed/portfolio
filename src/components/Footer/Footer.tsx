import React, { FC } from 'react'
import { Box, Container } from '@mui/material'

import { FooterInfo } from './FooterInfo'
import { FooterTitle } from './FooterTitle'
export const Footer: FC = () => {
  return (
    <Box component="footer">
      <Container maxWidth="lg">
        <a id="contacts">
          <Box display="flex" flexDirection="column" sx={{ cursor: 'default' }}>
            <FooterTitle />
            <FooterInfo />
          </Box>
        </a>
      </Container>
    </Box>
  )
}
