import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Home from './pages/Home'

const theme = createTheme({
  typography: {
    h1: {
      // color: '#030303',
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
