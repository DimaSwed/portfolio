'use client'
import React, { FC, useState } from 'react'
import { Box, Button, Grid, TextField, Tooltip, Fade } from '@mui/material'
import { ReCAPTCHA } from 'react-google-recaptcha'
import { useFormik, FormikHelpers } from 'formik'
import * as yup from 'yup'

// Определение типа для формы
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

// Схема валидации с использованием yup для проверки номера телефона и email
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

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      contact: '',
      subject: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      if (!captchaValue) {
        alert('Please complete the captcha')
        setSubmitting(false)
        return
      }
      console.log({
        ...values,
        captchaValue
      })
      setSubmitting(false)
    }
  })

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
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
        <Grid item xs={12}>
          <ReCAPTCHA sitekey={API_KEY} onChange={(value) => setCaptchaValue(value)} />
        </Grid>
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

// import React, { FC, useState } from 'react'
// import { Box, Button, Fade, Grid, TextField, Tooltip } from '@mui/material'
// import { ReCAPTCHA } from 'react-google-recaptcha'
// // import { useTheme } from '@mui/material/styles'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
// import 'yup-phone-lite'

// const API_KEY: string = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_ID || ''

// if (!API_KEY) {
//   throw new Error('NEXT_PUBLIC_RECAPTCHA_CLIENT_ID is not defined')
// }

// const validationSchema = yup.object({
//   name: yup.string('Enter your full name').required('Full name is required'),
//   contact: yup
//     .string()
//     .required('Contact is required')
//     .test(
//       'is-valid-contact',
//       'Enter a valid email or phone number',
//       (value) => yup.string().email().isValidSync(value) || yup.string().phone().isValidSync(value)
//     ),
//   subject: yup.string('Enter the subject').required('Subject is required'),
//   message: yup.string('Enter your message').required('Message is required')
// })

// export const ContactForm: FC = () => {
// const theme = useTheme()
// const [name, setName] = useState('')
// const [contact, setContact] = useState('')
// const [subject, setSubject] = useState('')
// const [message, setMessage] = useState('')
// const [captchaValue, setCaptchaValue] = useState<string | null>(null)

// const formik = useFormik({
//   initialValues: {
//     name: '',
//     contact: '',
//     subject: '',
//     message: ''
//   },
//   validationSchema: validationSchema,
//   onSubmit: (values) => {
//     if (!captchaValue) {
//       alert('Please complete the captcha')
//       return
//     }
//     console.log({
//       ...values,
//       captchaValue
//     })
//   }
// })

// const handleSubmit = (event: React.FormEvent) => {
//   event.preventDefault()
//   if (!captchaValue) {
//     alert('Please complete the captcha')
//     return
//   }
// Handle form submission logic here
// console.log({
//   name,
//   contact,
//   subject,
//   message,
//   captchaValue
// })
// }

//   return (
//     <Box
//       component="form"
//       noValidate
//       autoComplete="off"
//       sx={{
//         flexGrow: 1,
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '2rem',
//         marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '40px' }
//       }}
//     >
//       <Grid container spacing={3} component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
//         <Grid item xs={12}></Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Full Name"
//             variant="outlined"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Email or Phone Number"
//             variant="outlined"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Subject"
//             variant="outlined"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="outlined-textarea"
//             placeholder="Write your message"
//             fullWidth
//             label="Message"
//             variant="outlined"
//             multiline
//             rows={4}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <ReCAPTCHA sitekey={API_KEY} onChange={(value) => setCaptchaValue(value)} />
//         </Grid>
//         <Grid item xs={12}>
//           <Tooltip
//             TransitionComponent={Fade}
//             TransitionProps={{ timeout: 600 }}
//             title="Send message"
//           >
//             <Button
//               type="submit"
//               variant="contained"
//               color="secondary"
//               fullWidth
//               sx={{
//                 color: 'white',
//                 fontSize: '20px',
//                 fontWeight: 700,
//                 fontFamily: 'Manrope, sans-serif'
//               }}
//             >
//               Submit
//             </Button>
//           </Tooltip>
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }
