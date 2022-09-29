import './assets/App.css';
// import { useState, useEffect } from 'react'
import React from 'react';
import { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { logout } from "./actions/auth";
import AuthVerify from './common/AuthVerify';
import useToken from './hooks/useToken';
import Rotas from './routes/Rotas';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
  },
});

const App = () => {
  const [mode, setMode] = useState('light');
  const { token, setToken } = useToken();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { user: currentUser } = useSelector((state) => state.auth);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch()

  useEffect(() => {
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

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Rotas setToken={setToken} token={token} currentUser={currentUser}/>
      <AuthVerify logOut={logOut} />
    </ThemeProvider>
  );
}

export default App