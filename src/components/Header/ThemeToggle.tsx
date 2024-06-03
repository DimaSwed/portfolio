'use client'
import React, { FC, useEffect } from 'react'
import { FormControlLabel, Switch } from '@mui/material'
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
        <Switch
          name="theme"
          // inputProps={{ 'aria-label': 'controlled' }}
          checked={currentTheme === 'blueTheme'}
          // defaultChecked
          color="default"
          onChange={toggleTheme}
        />
      }
      label="Измени мир"
      componentsProps={{
        typography: {
          sx: {
            fontWeight: '700',
            fontSize: 16
          }
        }
      }}
    />
  )
}
