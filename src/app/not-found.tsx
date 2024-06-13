'use client'

import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import Image from 'next/image'

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(-45deg,  #eac566, #eac566)',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000',
        direction: 'rtl'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        <Image
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
          width={300}
          height={300}
        />
        <Typography variant="h1" sx={{ mb: 2 }}>
          404 PAGE
        </Typography>
        <Typography sx={{ mb: 3 }} variant="h5">
          The page you were looking for could not be found
        </Typography>

        <Link
          variant="h5"
          sx={{
            background: '#fff',
            color: '#000',
            textDecoration: 'none',
            padding: '10px 15px',
            borderRadius: '500px',
            border: '2px solid #232323',
            boxShadow: '0 20px 70px 4px rgba(0, 0, 0, 0.1), inset 0px 20px 0 0px #eac566',
            fontWeight: 900,
            transition: 'all 300ms ease',
            '&:hover': {
              transform: 'translateY(-13px)',
              boxShadow: '0 35px 90px 4px rgba(0, 0, 0, 0.3), inset 0px 0 0 3px #232323'
            }
          }}
          href="/"
        >
          ... Back to main page
        </Link>
      </Box>
    </Box>
  )
}

export default NotFoundPage
