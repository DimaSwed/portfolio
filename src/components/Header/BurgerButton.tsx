'use client'
import React, { FC } from 'react'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useAppDispatch } from '@/store/hooks'
import { openNavReducer } from '@/store/slices/slice-navigation'

export const BurgerButton: FC = () => {
  const dispatch = useAppDispatch()
  const showNavHandler = () => dispatch(openNavReducer())
  return (
    <>
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={showNavHandler}
        sx={{ display: { sm: 'none' } }}
      >
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
    </>
  )
}
