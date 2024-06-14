'use client'
import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { skillsImg } from '@/common/SkillsImg'
import { Tooltip, Box, Skeleton } from '@mui/material'

export const SkillsPictures: FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

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
            <Box sx={{ position: 'relative' }}>
              {isLoading ? (
                // Skeleton placeholder during loading
                <Skeleton animation="wave" variant="rectangular" width={380} height={482} />
              ) : (
                // Actual Image content
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
              )}
            </Box>
          </Tooltip>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

// БЕЗ СКЕЛЕТОНА
// import React, { FC } from 'react'
// import Image from 'next/image'
// import { skillsImg } from '@/common/SkillsImg'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import { Tooltip } from '@mui/material'

// export const SkillsPictures: FC = () => {
//   return (
//     <Swiper pagination={true} modules={[Pagination]}>
//       {skillsImg.map((img) => (
//         <SwiperSlide
//           key={img.id}
//           style={{
//             position: 'relative',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//         >
//           <Tooltip title={img.name} placement="top">
//             <div style={{ position: 'relative' }}>
//               <Image
//                 src={img.link}
//                 alt={img.name}
//                 width={380}
//                 height={482}
//                 loading="lazy"
//                 style={{
//                   width: '100%',
//                   height: 'auto',
//                   maxWidth: '380px',
//                   objectFit: 'contain'
//                 }}
//               />
//             </div>
//           </Tooltip>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }
