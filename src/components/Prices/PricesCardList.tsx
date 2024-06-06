import React, { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Card, CardContent, Typography, Box, Divider } from '@mui/material'
import { priceItem } from '@/common/PriceItems'

export const PricesCardList: FC = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 4, lg: 8 }}
        sx={{ justifyContent: 'center' }}
      >
        {priceItem.map((item) => (
          <Grid key={item.id} xs={2} sm={2} md={2} lg={2}>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: '#ebe3ce',
                      fontFamily: '"Open Sans", sans-serif',
                      fontWeight: 700,
                      lineHeight: '31px'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: '#f6de9d',
                      fontFamily: '"Open Sans", sans-serif',
                      lineHeight: '31px'
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 1, backgroundColor: 'white' }} />
                <Typography
                  sx={{
                    color: '#ebe3ce',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    marginBottom: 0,
                    letterSpacing: 0,
                    textTransform: 'none'
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
