'use client'
import React, { FC } from 'react'
import { Box, Button, TextField } from '@mui/material'
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
    .max(100, 'Must be 100 characters or less')
    .required('Content is required'),
  initials: yup
    .string()
    .max(20, 'Must be 20 characters or less')
    .min(5, 'Must be 5 characters or more')
    .required('Initials are required')
})

export const CommentForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      initials: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
      const formData = new FormData()
      formData.append('title', values.title)
      formData.append('content', values.content)
      formData.append('initials', values.initials)

      await addComment(formData)

      // Очищаем форму после отправки комментария
      resetForm()
    }
  })

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
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
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
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
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
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
        error={formik.touched.initials && Boolean(formik.errors.initials)}
        helperText={formik.touched.initials && formik.errors.initials}
        sx={{ maxWidth: 580, width: '100%', mb: '30px' }}
      />
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
    </Box>
  )
}
