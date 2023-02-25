import { ThemeProvider } from 'styled-components'
import { lightScheme, darkScheme } from '@/themes'
import { toggleTheme } from '@/redux/slices/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const STACK_THEMES = {
  light: lightScheme,
  dark: darkScheme
}

export function ThemeProviders({ children }) {
  const theme = useSelector((store) => store.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handlePrefersColorScheme)

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handlePrefersColorScheme)
    }
  }, [])

  const handlePrefersColorScheme = ({ matches }) => {
    dispatch(toggleTheme(matches ? 'dark' : 'light'))
  }

  return <ThemeProvider theme={STACK_THEMES[theme]}>{children}</ThemeProvider>
}
