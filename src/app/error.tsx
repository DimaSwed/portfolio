'use client'

import { Box, Typography } from '@mui/material'

const ErrorWrapper: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <Box
      bgcolor={'primary.main'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        minHeight: '100vh'
      }}
    >
      <Typography variant={'h4'} sx={{ textAlign: 'center' }}>
        Упс... Кажется произошла ошибка:
      </Typography>
      <Typography variant={'h6'}> {error.message}</Typography>
    </Box>
  )
}

export default ErrorWrapper
