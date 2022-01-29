import React from 'react';
import { CssBaseline, ThemeProvider, ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Home from './pages/Home'
import { useColorMode } from 'hooks/useColorMode';

const baseTheme: ThemeOptions = {
  typography: {
    h1: {
      fontSize: '14px',
    },
    h2: {
      color: '#848484',
      fontSize: '12px'
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '& body::-webkit-scrollbar-track': {
          backgroundColor: 'transparent'  
        },
        '& body::-webkit-scrollbar': {
          width: '0.6rem',
          background: 'transparent'
        },
        '& body::-webkit-scrollbar-thumb': {
          background: '#7F7F7F',
          borderRadius: '0.7rem',
        },
      }
    }
  }
}

const dark = createTheme({  ...baseTheme,  palette: {  mode: 'dark' }})

const light = createTheme({ 
  ...baseTheme, 
  palette: { 
    mode: 'light',
    primary: {
      main: '#fff'
    }
  }
})

const App: React.FC = () => {
  const { theme } = useColorMode()

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light} >
      <CssBaseline />
      <Home />
    </ThemeProvider>
  ) 
}

export default App;
