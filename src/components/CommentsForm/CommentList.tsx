'use client'
import React, { FC } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

interface CommentListProps {
  comments: {
    id: string
    title: string
    content: string
    initials: string
    createdAt: Date
  }[]
}

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      style={{ marginBottom: '50px' }}
      breakpoints={{
        600: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }}
    >
      {comments.length > 0 ? (
        comments.map((comment: any, index: number) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                width: '300px',
                height: 'auto',
                padding: '20px',
                borderRadius: '5px',
                mb: '50px',
                backgroundColor: '#ebe3ce',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <Typography
                sx={{ color: 'black', textTransform: 'uppercase', fontWeight: 'bold', mb: 1 }}
              >
                {comment?.title}
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  fontWeight: 'bold',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center'
                }}
                component={'p'}
              >
                <CalendarTodayIcon sx={{ marginRight: 1 }} />
                {`${comment.createdAt.getFullYear()}-${(comment.createdAt.getMonth() + 1).toString().padStart(2, '0')}-${comment.createdAt.getDate().toString().padStart(2, '0')}`}
              </Typography>

              <Typography sx={{ color: 'black', mb: 1 }} component={'p'}>
                {comment?.content}
              </Typography>
              <Divider sx={{ my: 1, backgroundColor: 'black' }} />
              <Typography sx={{ color: 'black' }} component={'p'}>
                {comment?.initials}
              </Typography>
            </Box>
          </SwiperSlide>
        ))
      ) : (
        <Typography
          variant="h6"
          component={'p'}
          sx={{
            mb: '80px',
            textAlign: 'center',
            color: 'white'
          }}
        >
          No comments yet..
        </Typography>
      )}
    </Swiper>
  )
}
