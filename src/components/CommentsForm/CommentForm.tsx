'use client'
import React, { FC, useState } from 'react'
import {
  Box,
  Button,
  Fade,
  TextField,
  Tooltip,
  Snackbar,
  Alert,
  Backdrop,
  CircularProgress
} from '@mui/material'
import { addComment } from '@/actions/formAction'
import { useFormik, FormikHelpers } from 'formik'
import * as yup from 'yup'

interface FormValues {
  title: string
  content: string
  initials: string
}

// Схема валидации с использованием Yup
const validationSchema = yup.object({
  title: yup
    .string()
    .max(20, 'Must be 20 characters or less')
    .min(5, 'Must be 5 characters or more')
    .required('Title is required'),
  content: yup
    .string()
    .min(20, 'Must be 20 characters or more')
    .max(200, 'Must be 200 characters or less')
    .required('Content is required'),
  initials: yup
    .string()
    .max(20, 'Must be 20 characters or less')
    .min(5, 'Must be 5 characters or more')
    .required('Initials are required')
})

export const CommentForm: FC = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formik = useFormik<FormValues>({
    initialValues: {
      title: '',
      content: '',
      initials: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }: FormikHelpers<FormValues>) => {
      try {
        setIsSubmitting(true)
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('content', values.content)
        formData.append('initials', values.initials)

        await addComment(formData)

        // Очищаем форму после отправки комментария
        resetForm()
        setHasSubmitted(false)

        // Показать Snackbar при успешной отправке
        setSnackbarMessage('Comment posted successfully!')
        setOpenSnackbar(true)
      } catch (error) {
        // Показать Snackbar при ошибке
        setSnackbarMessage('Failed to post comment. Please try again.')
        setOpenSnackbar(true)
      } finally {
        setIsSubmitting(false)
      }
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setHasSubmitted(true)
    formik.handleSubmit(e)
  }

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <TextField
        id="title"
        name="title"
        label="Comment Title"
        variant="outlined"
        required
        autoComplete="off"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={hasSubmitted && formik.touched.title && Boolean(formik.errors.title)}
        helperText={hasSubmitted && formik.touched.title && formik.errors.title}
        sx={{ maxWidth: 580, width: '100%', mb: '20px' }}
      />
      <TextField
        id="content"
        name="content"
        label="Your Comment"
        multiline
        rows={4}
        variant="outlined"
        required
        autoComplete="off"
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={hasSubmitted && formik.touched.content && Boolean(formik.errors.content)}
        helperText={hasSubmitted && formik.touched.content && formik.errors.content}
        sx={{ maxWidth: 580, width: '100%', mb: '20px' }}
      />
      <TextField
        id="initials"
        name="initials"
        label="Your Initials"
        variant="outlined"
        required
        autoComplete="off"
        value={formik.values.initials}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={hasSubmitted && formik.touched.initials && Boolean(formik.errors.initials)}
        helperText={hasSubmitted && formik.touched.initials && formik.errors.initials}
        sx={{ maxWidth: 580, width: '100%', mb: '30px' }}
      />
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Send comment">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 700,
            fontFamily: 'Manrope, sans-serif'
          }}
        >
          Post Comment
        </Button>
      </Tooltip>

      <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isSubmitting}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

// 'use client'
// import React, { FC, useState } from 'react'
// import { Box, Button, Fade, TextField, Tooltip } from '@mui/material'
// import { addComment } from '@/actions/formAction'
// import { useFormik, FormikHelpers } from 'formik'
// import * as yup from 'yup'

// interface FormValues {
//   title: string
//   content: string
//   initials: string
// }

// // Схема валидации с использованием Yup
// const validationSchema = yup.object({
//   title: yup
//     .string()
//     .max(20, 'Must be 20 characters or less')
//     .min(5, 'Must be 5 characters or more')
//     .required('Title is required'),
//   content: yup
//     .string()
//     .min(20, 'Must be 20 characters or more')
//     .max(200, 'Must be 200 characters or less')
//     .required('Content is required'),
//   initials: yup
//     .string()
//     .max(20, 'Must be 20 characters or less')
//     .min(5, 'Must be 5 characters or more')
//     .required('Initials are required')
// })

// export const CommentForm: FC = () => {
//   const [hasSubmitted, setHasSubmitted] = useState(false)

//   const formik = useFormik<FormValues>({
//     initialValues: {
//       title: '',
//       content: '',
//       initials: ''
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, { resetForm }: FormikHelpers<FormValues>) => {
//       const formData = new FormData()
//       formData.append('title', values.title)
//       formData.append('content', values.content)
//       formData.append('initials', values.initials)

//       await addComment(formData)

//       // Очищаем форму после отправки комментария
//       resetForm()
//       setHasSubmitted(false)
//     }
//   })

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setHasSubmitted(true)
//     formik.handleSubmit(e)
//   }

//   return (
//     <Box
//       component="form"
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//       sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//     >
//       <TextField
//         id="title"
//         name="title"
//         label="Comment Title"
//         variant="outlined"
//         required
//         autoComplete="off"
//         value={formik.values.title}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={hasSubmitted && formik.touched.title && Boolean(formik.errors.title)}
//         helperText={hasSubmitted && formik.touched.title && formik.errors.title}
//         sx={{ maxWidth: 580, width: '100%', mb: '20px' }}
//       />
//       <TextField
//         id="content"
//         name="content"
//         label="Your Comment"
//         multiline
//         rows={4}
//         variant="outlined"
//         required
//         autoComplete="off"
//         value={formik.values.content}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={hasSubmitted && formik.touched.content && Boolean(formik.errors.content)}
//         helperText={hasSubmitted && formik.touched.content && formik.errors.content}
//         sx={{ maxWidth: 580, width: '100%', mb: '20px' }}
//       />
//       <TextField
//         id="initials"
//         name="initials"
//         label="Your Initials"
//         variant="outlined"
//         required
//         autoComplete="off"
//         value={formik.values.initials}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={hasSubmitted && formik.touched.initials && Boolean(formik.errors.initials)}
//         helperText={hasSubmitted && formik.touched.initials && formik.errors.initials}
//         sx={{ maxWidth: 580, width: '100%', mb: '30px' }}
//       />
//       <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Send comment">
//         <Button
//           type="submit"
//           variant="contained"
//           color="secondary"
//           sx={{
//             color: 'white',
//             fontSize: '20px',
//             fontWeight: 700,
//             fontFamily: 'Manrope, sans-serif'
//           }}
//         >
//           Post Comment
//         </Button>
//       </Tooltip>
//     </Box>
//   )
// }
