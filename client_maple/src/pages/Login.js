
import * as React from 'react';
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import AlertDialog from '../components/AlertDialog';
import NavBar from '../components/NavBar2';
import Footer from '../components/Footer';

export default function Login({ setToken }) {
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);

    useEffect(() => {
        setOpenError(openError)
    }, [openError])

    useEffect(() => {
        setOpen(open)
    }, [open])

    const handleSubmit = (event) => {
        // setOpen(false)
        setOpenError(false)

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }

        requestOptions.headers.Authorization = 'Basic ' + btoa(data.get('username') + ":" + data.get('password'))

        fetch('/auth', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                // console.log(response)
                // setOpen(true)
                return response.json()
            })
            .then(data => {
                console.log('Success:')
                setToken(data.token)
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
                setOpenError(true)
            });
    };


    return (
        <div>
            <CssBaseline />
            <NavBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <AlertDialog
                    open={openError}
                    title='Erro no Login'
                    message='Usuário ou Senha incorretos'
                />
            </Container>
            <Footer />
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};