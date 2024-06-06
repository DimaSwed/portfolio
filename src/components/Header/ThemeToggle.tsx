'use client'
import React, { FC, useEffect } from 'react'
import { FormControlLabel, Button, Tooltip } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setThemeReducer } from '@/store/slices/slice-theme'

interface IProps {
  sx?: object
}

export const ThemeToggle: FC<IProps> = ({ sx }) => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  useEffect(() => {
    const themeStatus: 'darkTheme' | 'blueTheme' =
      (localStorage.getItem('theme') as 'darkTheme' | 'blueTheme') || 'darkTheme'
    dispatch(setThemeReducer(themeStatus))
  }, [dispatch])

  const toggleTheme = () => {
    const newTheme = currentTheme === 'darkTheme' ? 'blueTheme' : 'darkTheme'
    document.cookie = `theme=${newTheme}; expires=Tue, 19 Jan 2038 03:14:07 UTC`
    dispatch(setThemeReducer(newTheme))
    localStorage.setItem('theme', newTheme)
  }

  return (
    <FormControlLabel
      sx={sx}
      control={
        <Tooltip title="Change theme" disableInteractive>
          <Button
            sx={{
              fontWeight: '500',
              fontSize: 18,
              textTransform: 'inherit',
              backgroundColor: 'inherit',
              // color: currentTheme === 'darkTheme' ? 'white' : 'black',
              '&:hover': { backgroundColor: 'secondary.main' }
            }}
            variant="contained"
            onClick={toggleTheme}
          >
            Change world
          </Button>
        </Tooltip>
      }
      label=""
    />
  )
}
