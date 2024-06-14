'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { peopleFotos } from '@/common/PeopleFotos'
import { Tooltip } from '@mui/material'

export const FotosWithFriends: FC = () => {
  return (
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
      {peopleFotos.map((foto) => (
        <SwiperSlide
          key={foto.id}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Tooltip title={`${foto.name}`} placement="top">
            <div style={{ position: 'relative' }}>
              <Image
                src={foto.link}
                alt={foto.name}
                width={350}
                height={400}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  margin: 0,
                  display: 'block',
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
