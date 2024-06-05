'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import { useMediaQuery, useTheme } from '@mui/material'

export const VectorSvg: FC = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      {isSm ? (
        <Image
          src="/vector_2.svg"
          alt="vector"
          width={87}
          height={118}
          style={{
            width: '100%',
            height: 'auto',
            margin: '0',
            display: 'block'
            // maxWidth: '87px',
            // maxHeight: '118px'
          }}
        />
      ) : (
        <Image
          src="/vector_1.svg"
          alt="vector"
          width={261}
          height={174}
          style={{
            width: '100%',
            height: 'auto',
            margin: '0',
            display: 'block',
            maxWidth: '261px',
            maxHeight: '174px'
          }}
        />
      )}
    </>
  )
}
