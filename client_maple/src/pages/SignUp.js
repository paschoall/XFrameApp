import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Link, Navigate, useNavigate } from 'react-router-dom';

import Footer from '../components/Footer';
import AlertDialog from '../components/AlertDialog';


export default function SignUp() {
  const currentUser = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setOpenError(openError)
  }, [openError])

  useEffect(() => {
    setOpen(open)
  }, [open])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      name: data.get('name'),
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    }
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    }
    // console.log(requestOptions)
    fetch('/user', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        console.log(response)
        setOpen(true)
        return response.json()
      })
      .then(data => console.log(data))
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        setOpenError(true)
      });
  };

  if (currentUser.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  

  return (
    <>
    <Button
      xs={'none'}
      size="large"
      onClick={() => navigate(-1)}
      sx={{
        display: { xs: 'none', md: 'flex' },
        position: 'relative',
        marginLeft: '0.9rem',
        marginTop: 10,
        color: 'gray',
        '&:hover': {
          backgroundColor: (theme) => theme.palette.grey[200],
          borderRadius: '100%',
        },
      }}
    >
      <ChevronLeftIcon fontSize="large" />
    </Button>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: -1.4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register user
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="full-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User name"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography component={Link} to="/login" variant="body2">
                  Already have an account? Sign in.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <AlertDialog
          open={openError}
          title='Error in Registration'
          message='Registration failed.'
        />
        <AlertDialog
          open={open}
          title='Registered User!'
          message='User registered successfully!'
          link='/login'
        />
      </Container>
      <Footer />
    </>
  );
}