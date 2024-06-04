import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

export const VectorSvg: FC = () => {
  return (
    <Box>
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
          transform: 'rotate(-5.41deg)',
          maxHeight: '174px'
        }}
      />
    </Box>
  )
}
