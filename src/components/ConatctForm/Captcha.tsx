// components/Captcha.tsx
import React, { FC } from 'react'
import { Grid } from '@mui/material'
/* eslint-disable-next-line import/no-named-as-default */
import ReCAPTCHA from 'react-google-recaptcha'

interface CaptchaProps {
  handleCaptchaChange: (value: string | null) => void
}

const Captcha: FC<CaptchaProps> = ({ handleCaptchaChange }) => {
  const API_KEY: string = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_ID || ''

  if (!API_KEY) {
    throw new Error('NEXT_PUBLIC_RECAPTCHA_CLIENT_ID is not defined')
  }

  return (
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
      <ReCAPTCHA
        sitekey={API_KEY}
        hl="ru"
        theme="light"
        size="normal"
        onChange={handleCaptchaChange}
      />
    </Grid>
  )
}

export default Captcha
