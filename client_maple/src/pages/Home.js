import React from 'react';
import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
import {
  Box,
  Collapse,
  Grid,
  Paper,
  List,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';


const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [indexArray, setIndexArray] = useState([]);
  const [vi, setVi] = useState([{}])
  const [vd, setVd] = useState([{}])
  const [vi_vd, setVivd] = useState([{}])
  const proxy = 'https://5de3-2804-431-cfec-d6de-f8b2-c8c9-59cf-21e.sa.ngrok.io';

  const [open, setOpen] = React.useState(null);

  const handleViListItemClick = (event, index) => {
    setOpen(index)
    setIndexArray([])
  };

  const handleListItemClick = (event, index, array) => {
    setSelectedIndex(index);
    setIndexArray(array)
  };

  useEffect(() => {
    fetch(proxy + '/independent_variables').then(
      res => res.json()
    ).then(
      data => {
        setVi(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch(proxy + '/dependent_variables').then(
      res => res.json()
    ).then(
      data => {
        setVd(data);
      }
    )
  }, [])

  // const location = useLocation()
  useEffect(() => {
    fetch(proxy + '/vi_vd_relationships').then(
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
        <Toolbar />
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
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  textAlign: 'center',
                }}
              >
                Variáveis Independentes
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
                  (typeof vi_vd.data === 'undefined' || typeof vi.data === 'undefined') ? (
                    <p>Loading...</p>
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
                              height: '3rem',
                              padding: '1vh',
                            }}
                          >

                            {data['name']}
                            {open === data['id'] ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse in={open === data['id']} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {vi_vd.data.filter(({ id_vi }) => id_vi === data['id']).map((data, i) => {
                                return (
                                  <ListItemButton
                                    key={i}
                                    selected={selectedIndex === data['id']}
                                    onClick={
                                      (event) => handleListItemClick(
                                        event,
                                        data['id'],
                                        data['id_vd_array'].split(',')
                                      )
                                    }
                                    sx={{
                                      width: '100%',
                                      height: '3rem',
                                      padding: '1vh',
                                    }}
                                  >
                                    Design {i+1}
                                  </ListItemButton>
                                )
                              })}
                            </List>
                          </Collapse>
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
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  textAlign: 'center',
                }}
              >
                Variáveis Dependentes
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
                  (typeof vi_vd.data === 'undefined' || typeof vd.data === 'undefined') ? (
                    <p>Loading...</p>
                  ) : (
                    vd.data.map((data, i) => {
                      return (
                        <ListItemButton
                          key={i}
                          selected={indexArray.includes(data['id'].toString())}
                          sx={{
                            width: '100%',
                            height: '3rem',
                            padding: '1vh',
                          }}
                        >
                          {data['name']}
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