import React, { FC } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

interface IAdvantageCardProps {
  title: string
  text: string
}

export const AdvantageCard: FC<IAdvantageCardProps> = ({ title, text }) => {
  return (
    <Card
      sx={{
        flex: '1 0 100%',
        mb: { xs: 2, sm: 2, md: 3 },
        maxWidth: { lg: '270px', md: '337px', xs: '327px' },
        backgroundColor: 'rgba(255, 255, 255, 0)',
        boxShadow: 'none'
      }}
    >
      <CardContent>
        <Typography
          component="div"
          sx={{
            mb: '16px',
            fontSize: { lg: '40px', md: '32px', xs: '28px' },
            color: '#ebe3ce',
            fontStyle: 'normal',
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 400,
            lineHeight: '36px',
            letterSpacing: 0,
            textTransform: 'none'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: '#ebe3ce',
            fontSize: '17px',
            fontStyle: 'normal',
            marginTop: 0,
            textAlign: 'left',
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 400,
            lineHeight: '26px',
            marginBottom: 0,
            letterSpacing: 0,
            textTransform: 'none'
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}
