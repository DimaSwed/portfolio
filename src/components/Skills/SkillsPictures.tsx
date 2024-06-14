'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import { skillsImg } from '@/common/SkillsImg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Tooltip } from '@mui/material'

export const SkillsPictures: FC = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]}>
      {skillsImg.map((img) => (
        <SwiperSlide
          key={img.id}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Tooltip title={img.name} placement="top">
            <div style={{ position: 'relative' }}>
              <Image
                src={img.link}
                alt={img.name}
                width={380}
                height={482}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '380px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </Tooltip>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
