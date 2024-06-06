import React, { FC } from 'react'
import { Box, Container, Divider } from '@mui/material'

import { FooterInfo } from './FooterInfo'
import { FooterTitle } from './FooterTitle'
import { ContactForm } from '../ConatctForm'

export const Footer: FC = () => {
  return (
    <Box component="footer">
      <Container maxWidth="lg">
        <a id="contacts">
          <Box display="flex" flexDirection="column" sx={{ cursor: 'default' }}>
            <FooterTitle />
            <ContactForm />
            <Divider sx={{ my: 2 }} />
            <FooterInfo />
          </Box>
        </a>
      </Container>
    </Box>
  )
}
