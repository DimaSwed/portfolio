'use client'
import React, { FC, useState } from 'react'
import { Box, Button, Grid, TextField, Tooltip, Fade } from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import { useFormik, FormikHelpers } from 'formik'
import * as yup from 'yup'

interface FormValues {
  name: string
  contact: string
  subject: string
  message: string
}

const API_KEY: string = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_ID || ''

if (!API_KEY) {
  throw new Error('NEXT_PUBLIC_RECAPTCHA_CLIENT_ID is not defined')
}

const validationSchema = yup.object({
  name: yup.string().max(20, 'Must be 20 characters or less').required('Full name is required'),
  contact: yup
    .string()
    .required('Contact is required')
    .test('is-valid-contact', 'Enter a valid email or phone number', function (value) {
      const { path, createError } = this
      if (!value) return false
      const emailValid = yup.string().email().isValidSync(value)
      const phoneValid = yup
        .string()
        .matches(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid')
        .test('min-ten-digits', 'Phone number must be at least 10 digits', function (phone) {
          return phone ? phone.replace(/\D/g, '').length >= 10 : false
        })
        .isValidSync(value)
      return (
        emailValid ||
        phoneValid ||
        createError({ path, message: 'Enter a valid email or phone number' })
      )
    }),
  subject: yup.string().required('Subject is required'),
  message: yup.string().min(20, 'Must be 20 characters or more').required('Message is required')
})

export const ContactForm: FC = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false)

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      contact: '',
      subject: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
      if (!captchaValue) {
        setShowCaptcha(true)
        setSubmitting(false)
        return
      }
      console.log({
        ...values,
        captchaValue
      })
      setSubmitting(false)
      // Reset captcha value and hide it after form submission
      setCaptchaValue(null)
      setShowCaptcha(false)
      // Reset form fields
      resetForm()
    }
  })

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = await formik.validateForm()
    formik.setTouched({
      name: true,
      contact: true,
      subject: true,
      message: true
    })

    if (Object.keys(errors).length === 0) {
      if (!showCaptcha) {
        setShowCaptcha(true)
      } else if (captchaValue) {
        formik.handleSubmit()
      }
    }
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '40px' }
      }}
    >
      <Grid container spacing={3} sx={{ maxWidth: 600 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Full Name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email or Phone Number"
            variant="outlined"
            id="contact"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            error={formik.touched.contact && Boolean(formik.errors.contact)}
            helperText={formik.touched.contact && formik.errors.contact}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            name="message"
            placeholder="Write your message"
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            required
          />
        </Grid>
        {showCaptcha && (
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
            <ReCAPTCHA sitekey={API_KEY} onChange={handleCaptchaChange} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Send message"
          >
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
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  )
}
