import './assets/App.css';
// import { useState, useEffect } from 'react'
import React from 'react'
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Rotas from './routes/Rotas'
import { ColorModeContext } from './config/color-context';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState('light');
  React.useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Rotas />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App