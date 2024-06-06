import React, { FC } from 'react'
import { Box, Container, Divider, Link } from '@mui/material'

import { FooterInfo } from './FooterInfo'
import { FooterTitle } from './FooterTitle'
import { ContactForm } from '../ConatctForm'

export const Footer: FC = () => {
  return (
    <Box component="footer">
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" sx={{ cursor: 'default' }}>
          <FooterTitle />
          <ContactForm />
          <Link id="contacts">
            <Divider sx={{ my: 2, backgroundColor: 'white' }} />
          </Link>
          <FooterInfo />
        </Box>
      </Container>
    </Box>
  )
}
