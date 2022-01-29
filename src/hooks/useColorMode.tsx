import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { PaletteMode  } from '@mui/material'

interface ColorThemeContext {
  theme: PaletteMode
  setTheme: (theme: string) => void
  toggleTheme: () => void
}

const ColorModeContext = createContext({} as ColorThemeContext)

export const ColorModeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storagedValue = localStorage.getItem('@youtube-ui-clone: theme')

    if (storagedValue) {
      return JSON.parse(storagedValue)
    } else {
      return 'dark'
    }
  })

  useEffect(() => {
    localStorage.setItem('@youtube-ui-clone: theme', JSON.stringify(theme))
  }, [theme])

  const toggleTheme = () => {
    const isDark = theme === 'dark'
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <ColorModeContext.Provider value={{ theme, setTheme, toggleTheme }} >
      {children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode () {
  const context = useContext(ColorModeContext)
  return context
}
