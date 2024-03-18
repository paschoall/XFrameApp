import React from 'react';
import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useLocation } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import '../assets/App.css';


const Home = () => {
  const [indexArray, setIndexArray] = useState([]);
  const [vi, setVi] = useState([{}])
  const [vd, setVd] = useState([{}])
  const [vi_vd, setVivd] = useState([{}])

  const [open, setOpen] = React.useState(null);

  const [highlightedDependencies, setHighlightedDependencies] = useState([]);

  const handleViListItemClick = (event, index) => {
    var vd_array;
    const selected_vi_vd = vi_vd.data.find((o) => o.id_vi === index);
  
    if (selected_vi_vd !== undefined) {
      vd_array = selected_vi_vd['id_vd_array']
        .split(',')
        .map((item) => parseInt(item));
    } else {
      vd_array = [];
    }
  
    setOpen(index);
    setIndexArray(vd_array);
    setHighlightedDependencies(vd_array);
  };

  // const handleListItemClick = (event, index, array) => {
  //   setSelectedIndex(index);
  //   setIndexArray(array);
  // };

  useEffect(() => {
    fetch('/independent_variables').then(
      res => res.json()
    ).then(
      data => {
        setVi(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch('/dependent_variables').then(
      res => res.json()
    ).then(
      data => {
        setVd(data);
      }
    )
  }, [])

  // const location = useLocation()
  useEffect(() => {
    fetch('/vi_vd_relationships').then(
      res => res.json()
    ).then(
      data => {
        setVivd(data);
      }
    )
  }, [])

  return (
    <>
      <CssBaseline />
      <Box>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          sx={{ margin: '2rem', fontSize: '2rem', mt:'6rem'}}
        >
          
          Causal relationships between independent and dependent variables
        </Typography>
        <Grid container spacing={0.5}>
          <Grid item xs={0.75} md={0.75} lg={0.75} />
          <Grid item xs={5} md={5} lg={5}>
            <Paper square
              variant='outlined'
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                padding: '0',
                
              }}
            >
              <Typography gutterBottom
                sx={{
                  marginTop: '1vh',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  textAlign: 'center',
                }}
              >
                Independent variables
              </Typography>
              <Paper square
                variant='outlined'
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >
                {
                  (typeof vi_vd.data === 'undefined' || Object.keys(vi_vd.data).length === 0 || typeof vi.data === 'undefined' || Object.keys(vi.data).length === 0) ? (
                    <p>There are no independent variables registered...</p>
                  ) : (
                    vi.data.map((data, i) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            width: '100%',

                            padding: '0',
                          }}
                        >
                          <ListItemButton
                            selected={open === data['id']}
                            onClick={
                              (event) => handleViListItemClick(
                                event,
                                data['id']
                              )
                            }
                            sx={{
                              width: '100%',
                              minHeight: '3rem',
                              padding: '1vh',
                              backgroundColor: open === data['id'] ? 'rgba(21, 123, 225, 0.34)!important' : 'inherit', /* Cor mais escura desejada */
                            }}
                          >
                            <ListItemText primary={data['name']} 
                            sx={{
                              '& .MuiTypography-root': {
                                fontSize: '0.9rem',
                              },
                            }}/>
                          </ListItemButton>
                        </Box>
                      )
                    }
                    )
                  )
                }
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={0.5} md={0.5} lg={0.5} />
          <Grid item xs={5} md={5} lg={5}>
            <Paper square
              variant='outlined'
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                padding: '0',
              }}
            >
              <Typography gutterBottom
                sx={{
                  marginTop: '1vh',
                  fontSize: { xs: '0.4rem', md: '1.2rem' },
                  textAlign: 'center',
                }}
              >
                Dependent variables
              </Typography>
              <Paper square
                variant='outlined'
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >

                {
                  (typeof vi_vd.data === 'undefined' || Object.keys(vi_vd.data).length === 0 || typeof vd.data === 'undefined' || Object.keys(vd.data).length === 0) ? (
                    <p>There are no dependent variables registered...</p>
                  ) : (
                    vd.data.map((data, i) => {
                      return (
                        <ListItemButton
                          key={i}
                          selected={indexArray.includes(data['id'])}
                          sx={{
                            width: '100%',
                            minHeight: '3rem',
                            padding: '1vh',
                            backgroundColor: highlightedDependencies.includes(data['id']) 
                            ? 'rgba(21, 123, 225, 0.34)!important'
                            : 'inherit',
                          }}
                        >
                          <ListItemText primary={data['name']} 
                          sx={{
                            '& .MuiTypography-root': {
                              fontSize: '0.9rem',
                            },
                          }}/>
                        </ListItemButton>
                      )
                    }
                    )
                  )
                }
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
      </>
  );
}

export default Home;
