'use client'
import React, { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography } from '@mui/material'
import { teamInfo } from '@/common/TeamInfo'
import Image from 'next/image'
import Link from 'next/link'

export const TeamCardList: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
        {teamInfo.map((item) => (
          <Grid
            key={item.id}
            xs={2}
            sx={{
              position: 'relative',
              '&:hover .overlay': {
                opacity: 1
              }
            }}
          >
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <Image
                src={item.link}
                alt={item.name}
                width={373}
                height={376}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  margin: 0,
                  display: 'block',
                  maxWidth: '373px',
                  marginBottom: '16px'
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '95.6%',
                  backgroundColor: '#f2dba1',
                  color: '#404040;',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  padding: '24px',
                  opacity: 0,
                  transition: 'opacity 0.6s ease-in-out'
                }}
              >
                <Typography variant="h6" component="div" sx={{ mb: '16px' }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" component="div" sx={{ mb: '12px' }}>
                  Phone:{' '}
                  <Link href={`tel:${item.phone}`} style={{ color: '#404040' }}>
                    {item.phone}
                  </Link>
                </Typography>
                <Typography variant="body1" component="div">
                  <Link href={item.telegram} style={{ color: '#404040;' }}>
                    Telegram
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: '#ebe3ce',
                lineHeight: '31px',
                marginBottom: { md: '16px', xs: '4px' }
              }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', color: '#c4c4c4', lineHeight: '23px' }}
            >
              {item.position}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
