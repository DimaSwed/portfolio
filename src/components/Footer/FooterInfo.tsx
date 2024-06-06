import React, { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Card, CardContent, Typography, Box } from '@mui/material'

const titles = ['I am', 'Contact me', 'My current time is', 'created by']
const content = [
  { text: 'Bulankin Dmitriy', hideOnXs: true },
  { text: 'swed88@mail.ru', subtext: 'telegram: @dimaswed' },
  { text: 'Business time: 09:00-18:00' },
  { text: 'Me' }
]

const typographySx = {
  color: '#ebe3ce',
  fontSize: { lg: '24px', sm: '22px' },
  fontStyle: 'normal',
  marginTop: 0,
  textAlign: 'left',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: 400,
  lineHeight: { lg: '31px', sm: '29px' },
  letterSpacing: 0,
  textTransform: 'none'
}

export const FooterInfo: FC = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 0, md: 1, lg: 12 }}
        columns={{ xs: 1, sm: 2, md: 4, lg: 4 }}
        sx={{ justifyContent: 'space-between' }}
      >
        {titles.map((title, index) => (
          <Grid component="div" xs={1} sm={1} md={1} lg={1} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                mb: 2,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                boxShadow: 'none',
                cursor: 'default'
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: { lg: '20px', md: '12px' }
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      width: '100%',
                      color: '#bebebe',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 700,
                      lineHeight: '21px',
                      letterSpacing: 0,
                      textTransform: 'none'
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
                {index === 0 ? (
                  <Typography sx={typographySx}>
                    Bulankin{' '}
                    <Typography
                      component="span"
                      sx={{ ...typographySx, display: { xs: 'none', md: 'inline' } }}
                    >
                      Dmitriy
                    </Typography>
                  </Typography>
                ) : (
                  <>
                    <Typography sx={{ ...typographySx, marginBottom: index === 1 ? '16px' : 0 }}>
                      {content[index].text}
                    </Typography>
                    {content[index].subtext && (
                      <Typography sx={typographySx}>{content[index].subtext}</Typography>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
