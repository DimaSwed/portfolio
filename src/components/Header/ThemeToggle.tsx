'use client'
import React, { FC, useEffect } from 'react'
import { FormControlLabel, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setThemeReducer } from '@/store/slices/slice-theme'

interface IProps {
  sx?: object
}

export const ThemeToggle: FC<IProps> = ({ sx }) => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  useEffect(() => {
    const themeStatus: 'greenTheme' | 'blueTheme' =
      (localStorage.getItem('theme') as 'greenTheme' | 'blueTheme') || 'greenTheme'
    dispatch(setThemeReducer(themeStatus))
  }, [dispatch])

  const toggleTheme = () => {
    const newTheme = currentTheme === 'greenTheme' ? 'blueTheme' : 'greenTheme'
    document.cookie = `theme=${newTheme}; expires=Tue, 19 Jan 2038 03:14:07 UTC`
    dispatch(setThemeReducer(newTheme))
    localStorage.setItem('theme', newTheme)
  }

  return (
    <FormControlLabel
      sx={sx}
      control={
        <Button
          sx={{
            fontWeight: '500',
            fontSize: 18,
            textTransform: 'inherit'
          }}
          variant="contained"
          onClick={toggleTheme}
        >
          Change world
        </Button>
      }
      label=""
    />
  )
}
