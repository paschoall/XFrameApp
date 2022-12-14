import React from 'react';
import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Paper,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import AlertDialog from '../components/AlertDialog';

const RegisterRelationship = () => {
  const [selectedViIndex, setSelectedViIndex] = useState(null);
  const [selectedViIndex2, setSelectedViIndex2] = useState(null);
  const [indexArray, setIndexArray] = useState([]);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [vi, setVi] = useState([{}])
  const [vd, setVd] = useState([{}])
  const [vi_vd, setVivd] = useState([{}])



  const handleViListItemClick = (event, index) => {
    setSelectedViIndex(index);
  };

  const handleVdListItemClick = (event, index) => {
    setSelectedViIndex2(selectedViIndex2);
    setSelectedViIndex2(index);
    if (indexArray.includes(index)) {
      setIndexArray(indexArray.filter((value => (value !== index))));
    }
    else {
      indexArray.push(index)
      setIndexArray(indexArray.sort());
    }
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

  const handleClick = () => {
    setOpen(false)
    setOpenError(false)

    const data = {
      id_vi: selectedViIndex,
      id_vd_array: indexArray.toString(),
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch('/vi_vd_relationship', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        // console.log(response)
        setOpen(true)
        return response.json()
      })
      .then(data => console.log(data))
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        setOpenError(true)
      });
  }

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
                height: '100%',
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
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >


                {
                  (typeof vi_vd.data === 'undefined' || typeof vi.data === 'undefined' || Object.keys(vi.data).length === 0) ? (
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
                            selected={selectedViIndex === data['id']}
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
                height: '100%',
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
                  (typeof vi_vd.data === 'undefined' || typeof vd.data === 'undefined' || Object.keys(vd.data).length === 0) ? (
                    <p>Loading...</p>
                  ) : (
                    vd.data.map((data, i) => {
                      return (
                        <ListItemButton
                          key={i}
                          selected={indexArray.includes(data['id'])}
                          onClick={
                            (event) => handleVdListItemClick(
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
                        </ListItemButton>
                      )
                    }
                    )
                  )
                }
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={6.25} md={6.25} lg={6.25} />
          <Grid item
            xs={5} md={5} lg={5}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                marginTop: '2rem'
              }}
            >
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <AlertDialog
        open={openError}
        title='Erro no Cadastro'
        message='Falha no registro.'
      />
      <AlertDialog
        open={open}
        title='Adicionado com Sucesso'
        message='Registro bem sucedido!'
      />
      <Footer />
    </>
  );
}

export default RegisterRelationship;