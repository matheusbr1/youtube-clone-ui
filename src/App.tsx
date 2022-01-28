import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Home from './pages/Home'

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '14px',
    },
    h2: {
      color: '#848484',
      fontSize: '12px'
    },
  },
  palette: {
    mode: 'dark',
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
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme} >
      <Home />
      <CssBaseline />
    </ThemeProvider>
  ) 
}

export default App;
