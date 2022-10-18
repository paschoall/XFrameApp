import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import Footer from '../components/Footer';

const VariavelIndependente = () => {
  const [data, setData] = useState([{}])
  const { id } = useParams();
  const proxy = 'https://5de3-2804-431-cfec-d6de-f8b2-c8c9-59cf-21e.sa.ngrok.io';
  useEffect(() => {
    fetch(proxy+'/independent_variable/' + id).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [id])

  return (
    (typeof data.data === 'undefined') ? (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          padding: '20vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[50]
              : theme.palette.grey[800],
        }}
      >
        <Typography variant="h4" gutterBottom>
          Loading...
        </Typography>
      </Box>
    ) : (
      <>
        <CssBaseline />
        <Box
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              {data.data['name']}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    Description
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: '0.5rem',
                      fontSize: '1rem',
                      lineHeight: '1.5em',
                      fontWeight: 'normal',
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    {data.data['description']}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={7} lg={7}>
                <Paper
                  sx={{
                    p: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >

                  <Typography variant="h5" gutterBottom>
                    Use Examples
                  </Typography>
                  <Grid container spacing={6}
                    sx={{
                      display: 'flex',
                      height: '100%',
                    }}>
                    <Grid item xs={12} md={4} lg={4}>
                      <Paper
                        component={Button}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                          width: '100%',
                          textTransform: 'none',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Typography variant="body1" gutterBottom>
                          1 Factor{(1===1)?(''):('s')}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          1 Treatment
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    References
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary={'Lorem Ipsum'} />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer />
      </>
    )
  );
}

export default VariavelIndependente;