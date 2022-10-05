import './assets/App.css';
// import { useState, useEffect } from 'react'
import React from 'react';
import { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { asyncLogout } from './store/reducers/userSlice';
import AuthVerify from './common/AuthVerify';
import NavBar from './components/NavBar';
import useToken from './hooks/useToken';
import Rotas from './routes/Rotas';
// import { Button } from '@mui/material';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
  },
});

const App = () => {
  const currentUser = useSelector((state) => state.user);
  const { token, setToken } = useToken();

  const [mode, setMode] = useState('light');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch()
  const location = useLocation();

  // const doThis = () => {console.log(currentUser)}

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
    dispatch(asyncLogout());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Button onClick={doThis}></Button> */}
      {!location.pathname.includes('/admin-page') && <NavBar />}
      <Rotas setToken={setToken} token={token} user={currentUser} />
      <AuthVerify logOut={logOut} />
    </ThemeProvider>
  );
}

export default App