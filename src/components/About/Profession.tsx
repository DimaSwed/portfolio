'use client'
// import React, { FC, useState } from 'react'
// import { Box, Typography } from '@mui/material'

// const textOne = {
//   header: 'frontend dev',
//   description:
//     'Проекты на стыке логики, смысла, маркетинга, дизайна и верстки. Логичные и эффективные.'
// }

// const textTwo = {
//   header: 'web developer',
//   description:
//     'Дайте мне tasks, я создам чудо. Вместе достигнем невероятных результатов и сделаем невозможное возможным.'
// }

// export const Profession: FC = () => {
//   const [isTextOne, setIsTextOne] = useState(true)

//   const handleClick = () => {
//     setIsTextOne(!isTextOne)
//   }

//   const { header, description } = isTextOne ? textOne : textTwo

//   const [showBorder, setShowBorder] = useState(true)

//   const handleAnimationEnd = () => {
//     setShowBorder(false)
//   }

//   return (
//     <Box
//       onClick={handleClick}
//       display={'flex'}
//       alignItems={'center'}
//       // justifyContent={'space-between'}
//       sx={{ cursor: 'pointer', flexWrap: { sm: 'nowrap', xs: 'wrap' }, gap: { sm: 0, xs: 2 } }}
//     >
//       <Box>
//         <Typography
//           variant="h2"
//           sx={{
//             color: '#EAC566',
//             width: '13.5ch',
//             animation: 'typing 2.5s steps(22), blink .5s step-end infinite alternate',
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             borderRight: showBorder ? '3px solid' : 'none',
//             fontFamily: 'monospace',
//             '@keyframes typing': {
//               from: { width: 0 }
//             },
//             '@keyframes blink': {
//               '50%': { borderColor: 'transparent' }
//             }
//           }}
//           onAnimationEnd={handleAnimationEnd}
//         >
//           {header}
//         </Typography>
//       </Box>

//       <Box sx={{ width: '100%', maxWidth: '360px' }}>
//         <Typography
//           variant="h6"
//           sx={{
//             color: '#ebe3ce',
//             fontFamily: 'Open Sans, sans-serif',
//             lineHeight: '26px'
//           }}
//         >
//           {description}
//         </Typography>
//       </Box>
//     </Box>
//   )
// }
import React, { FC, useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const textOne = {
  header: 'frontend dev',
  description:
    'Проекты на стыке логики, смысла, маркетинга, дизайна и верстки. Логичные и эффективные.'
}

const textTwo = {
  header: 'web developer',
  description:
    'Дайте мне tasks, я создам чудо. Вместе достигнем невероятных результатов и сделаем невозможное возможным.'
}

export const Profession: FC = () => {
  const [isTextOne, setIsTextOne] = useState(true)
  const [showDescription, setShowDescription] = useState(false)
  const [showBorder, setShowBorder] = useState(true)

  const handleClick = () => {
    setIsTextOne(!isTextOne)
    setShowDescription(false)
  }

  const handleAnimationEnd = () => {
    setShowBorder(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true)
    }, 2300)
    return () => clearTimeout(timer)
  }, [isTextOne])

  const { header, description } = isTextOne ? textOne : textTwo

  return (
    <Box
      onClick={handleClick}
      display={'flex'}
      alignItems={'center'}
      sx={{ cursor: 'pointer', flexWrap: { sm: 'nowrap', xs: 'wrap' }, gap: { sm: 0, xs: 2 } }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: '#EAC566',
            width: '13.5ch',
            animation: 'typing 2.5s steps(22), blink .5s step-end infinite alternate',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            borderRight: showBorder ? '3px solid' : 'none',
            fontFamily: 'monospace',
            '@keyframes typing': {
              from: { width: 0 }
            },
            '@keyframes blink': {
              '50%': { borderColor: 'transparent' }
            }
          }}
          onAnimationEnd={handleAnimationEnd}
        >
          {header}
        </Typography>
      </Box>

      {showDescription && (
        <Box sx={{ width: '100%', maxWidth: '360px' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#ebe3ce',
              fontFamily: 'Open Sans, sans-serif',
              lineHeight: '26px'
            }}
          >
            {description}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
