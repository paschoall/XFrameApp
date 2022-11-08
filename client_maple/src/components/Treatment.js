import React from 'react';
import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

const Treatment = (props) => {
  const [data, setData] = useState([{}])
  
  

  useEffect(() => {
    fetch('/treatment/' + props.id).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [props.id])


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
          
        </Typography>
      </Box>
    ) : (
      <>
        <CssBaseline />
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              {data.data['name']}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
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
      </>
    )
  );
}

export default Treatment;