import './assets/App.css';
// import { useState, useEffect } from 'react'
import React from 'react';
import { useState, useMemo } from "react";

import { useSelector } from "react-redux";
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles';

import AuthVerify from './common/AuthVerify';
import useMediaQuery from '@mui/material/useMediaQuery';
import Rotas from './routes/Rotas';
import useToken from './hooks/useToken';

// import { useDispatch } from "react-redux";
// import { toggleTheme } from "./store/reducers/themeSlice";
const logout = () => {
  localStorage.removeItem("token");
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
  },
});

const App = () => {
  const [user, setUser] = React.useState(null);
  const [mode, setMode] = useState('light');
  const { token, setToken } = useToken();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const darkMode = useSelector((state) => state.theme.darkMode);

  // const handleLogin = () =>
  //   setUser({
  //     id: '1',
  //     name: 'robin',
  //     roles:['admin']
  //   });
  // const handleLogout = () => setUser(null);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("darkMode") == null)) {
      localStorage.setItem("darkMode", prefersDarkMode);
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

   return (
    <ThemeProvider theme={theme}>
      <Rotas setToken={setToken} token={token} />
    </ThemeProvider>
  );
}

export default App