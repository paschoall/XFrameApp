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
  ListItemText,
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

  const [open, setOpen] = React.useState(null);

  const handleViListItemClick = (event, index) => {
    setOpen(index)
    setIndexArray([])
  };

  const handleListItemClick = (event, index, array) => {
    setSelectedIndex(index);
    setIndexArray(array);
  };

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
          sx={{ margin: '2rem' }}
        >
          Catálogo de variáveis sobre chatbots na educação
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
                  (typeof vi_vd.data === 'undefined' || Object.keys(vi_vd.data).length === 0 || typeof vi.data === 'undefined') ? (
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
                              minHeight: '3rem',
                              padding: '1vh',
                            }}
                          >
                            <ListItemText primary={data['name']} />
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
                                        data['id_vd_array'].split(',').map((item) => { return parseInt(item) })
                                      )
                                    }
                                    sx={{
                                      width: '100%',
                                      minHeight: '3rem',
                                      padding: '1vh',
                                      paddingLeft: '2vh',
                                    }}
                                  >
                                    {'Design'} {i + 1}
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
                  (typeof vi_vd.data === 'undefined' || Object.keys(vi_vd.data).length === 0 || typeof vd.data === 'undefined') ? (
                    <p>Loading...</p>
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
                          }}
                        >
                          <ListItemText primary={data['name']} />
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