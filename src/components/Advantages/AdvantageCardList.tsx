'use client'

import React, { FC } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { AdvantageCard } from './AdvantageCard'

export const AdvantageCardList: FC = () => {
  const theme = useTheme()
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'))
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { sm: 3, xs: 1 },
        justifyContent: isLgUp ? 'space-between' : isMdUp ? 'space-around' : 'center'
      }}
    >
      <AdvantageCard
        title="Adaptive Design."
        text="Are you tired working with 2, 3 or 4 different teams? Conflicts, misunderstanding, too much time spent on communication are"
      />
      <AdvantageCard
        title="Code optimization."
        text="Non-complex approach results in lack of understanding your business goals and actions that should be taken on time."
      />
      <AdvantageCard
        title="Soft skills."
        text="Working on one project for long-term period helps us to automate the process and always be ready for  actions we plan in advance."
      />
      <AdvantageCard
        title="Just a good man."
        text="Working on one project for long-term period helps us to automate the process and always be ready for  actions we plan in advance."
      />
    </Box>
  )
}
