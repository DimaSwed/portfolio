'use client'
import React, { FC, useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import { ReCAPTCHA } from 'react-google-recaptcha'
// import { useTheme } from '@mui/material/styles'

const API_KEY: string = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_ID || ''

if (!API_KEY) {
  throw new Error('NEXT_PUBLIC_RECAPTCHA_CLIENT_ID is not defined')
}

export const ContactForm: FC = () => {
  // const theme = useTheme()

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!captchaValue) {
      alert('Please complete the captcha')
      return
    }
    // Handle form submission logic here
    console.log({
      name,
      contact,
      subject,
      message,
      captchaValue
    })
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '40px' }
      }}
    >
      <Grid container spacing={3} component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ebe3ce'
                },
                '&:hover fieldset': {
                  borderColor: '#fff'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#eac566'
                }
              },
              '& label': { color: '#ebe3ce' },
              '& label.Mui-focused': {
                color: '#eac566'
              },
              '& .MuiInputBase-input': {
                color: '#ebe3ce',
                fontSize: '18px',
                fontWeight: 400,
                fontFamily: 'Manrope, sans-serif'
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email or Phone Number"
            variant="outlined"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ebe3ce'
                },
                '&:hover fieldset': {
                  borderColor: '#fff'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#eac566'
                }
              },
              '& label': { color: '#ebe3ce' },
              '& label.Mui-focused': {
                color: '#eac566'
              },
              '& .MuiInputBase-input': {
                color: '#ebe3ce',
                fontSize: '18px',
                fontWeight: 400,
                fontFamily: 'Manrope, sans-serif'
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ebe3ce'
                },
                '&:hover fieldset': {
                  borderColor: '#fff'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#eac566'
                }
              },
              '& label': { color: '#ebe3ce' },
              '& label.Mui-focused': {
                color: '#eac566'
              },
              '& .MuiInputBase-input': {
                color: '#ebe3ce',
                fontSize: '18px',
                fontWeight: 400,
                fontFamily: 'Manrope, sans-serif'
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            placeholder="Write your message"
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ebe3ce'
                },
                '&:hover fieldset': {
                  borderColor: '#fff'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#eac566'
                }
              },
              '& label': { color: '#ebe3ce' },
              '& label.Mui-focused': {
                color: '#eac566'
              },
              '& .MuiInputBase-input': {
                color: '#ebe3ce',
                fontSize: '18px',
                fontWeight: 400,
                fontFamily: 'Manrope, sans-serif'
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <ReCAPTCHA sitekey={API_KEY} onChange={(value) => setCaptchaValue(value)} />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 700,
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
