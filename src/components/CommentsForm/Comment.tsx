import React, { FC } from 'react'
import { Box, Container } from '@mui/material'
import { CommentTitle } from './CommentTitle'
import { prisma } from '@/prisma'
import { CommentForm } from './CommentForm'
import { CommentList } from './CommentList'

const CommentsCommon: FC = async () => {
  const comments = await prisma.comment.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <Box
      component={'section'}
      sx={{ marginBottom: { lg: '48px', md: '44px', sm: '45px', xs: '40px' } }}
    >
      <Container maxWidth="lg">
        <CommentTitle />
        <CommentList comments={comments} />
        <CommentForm />
      </Container>
    </Box>
  )
}

export default CommentsCommon
