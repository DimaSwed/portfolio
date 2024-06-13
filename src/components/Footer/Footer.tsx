import React, { FC } from 'react'
import { Box, Container, Divider, Link } from '@mui/material'
import { FooterInfo } from './FooterInfo'
import { FooterTitle } from './FooterTitle'
import ContactForm from '../ConatctForm/ContactForm'
import CommentsCommon from '../CommentsForm/Comment'

const Footer: FC = () => {
  return (
    <Box component="footer">
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" sx={{ cursor: 'default' }}>
          <FooterTitle />
          <ContactForm />
          <CommentsCommon />
          <Link id="contacts" style={{ cursor: 'default' }}>
            <Divider sx={{ my: 10, backgroundColor: 'white' }} />
          </Link>
          <FooterInfo />
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
