import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  TextField,
} from '@mui/material';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import EditForms from '../components/EditForms';
import AlertDialog from '../components/AlertDialog';
import Metric from '../components/Metric'
import Instrument from '../components/Instrument'

const EditVariavelDependente = () => {
  const [data, setData] = useState([{}])
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [metrics, setMetrics] = useState([{}]);
  const [metricFlag, setMetricFlag] = useState(null);
  const [instruments, setInstruments] = useState([{}]);
  const [metricInstrument, setMetricInstrument] = useState([{}]);
  const [references, setReferences] = useState([{}]);
  const [vdReferences, setVdReferences] = useState([{}]);
  const [reference, setReference] = useState(-1);
  const [metric, setMetric] = useState(null);
  const [instrument, setInstrument] = useState(null);

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDeleteRef, setOpenDeleteRef] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openDesc, setOpenDesc] = React.useState(false);
  const [openMi, setOpenMi] = React.useState(false);
  const [openRef, setOpenRef] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useParams();
  const navigate = useNavigate();

  const variable_id = id

  const handleMetricClick = (event, flag, index) => {
    setMetric(index);
    setInstrument(index);
    setMetricFlag(flag);
  };

  useEffect(() => {
    fetch('/dependent_variable/' + id).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [id])

  useEffect(() => {
    fetch('/metrics').then(
      res => res.json()
    ).then(
      data => {
        setMetrics(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch('/instruments').then(
      res => res.json()
    ).then(
      data => {
        setInstruments(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch('/metric_instrument_relationships').then(
      res => res.json()
    ).then(
      data => {
        setMetricInstrument(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch('/references').then(
      res => res.json()
    ).then(
      data => {
        setReferences(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch('/vd_references').then(
      res => res.json()
    ).then(
      data => {
        setVdReferences(data);
      }
    )
  }, [])

  useEffect(() => {
    if (reference !== -1) {
      const data = {
        id_vd: id,
        id_ref: reference,
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }

      fetch('/vd_reference', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          // console.log(response)
          setOpen(true)
          return response.json()
        })
        // .then(data => console.log(data))
        .catch((error) => {
          console.error('There has been a problem with your operation:', error);
          setOpenError(true)
        });
    }
  }, [reference, id])

  const handleClickMore = (event, more_id) => {
    setSelectedIndex(more_id)
    setOpenMore(true)
  }

  const handleClickMI = (event, delete_id) => {
    setSelectedIndex(delete_id)
    setOpenDelete(true)
  }

  const handleClickRef = (event, delete_id) => {
    setSelectedIndex(delete_id)
    setOpenDeleteRef(true)
  }

  const handleClickOpenDesc = () => {
    setOpenDesc(true);
  };
  const handleClickOpenMi = () => {
    setOpenMi(true);
  };
  const handleClickOpenRef = () => {
    setOpenRef(true);
  };
  const handleClose = () => {
    setOpenDesc(false);
    setOpenMi(false);
    setOpenRef(false);
    setOpenDelete(false);
    setOpenDeleteRef(false);
    setOpenMore(false);
  };

  const handleAddMI = () => {
    setOpen(false)
    setOpenError(false)

    const data = {
      id_vd: id,
      id_metric: (metricFlag ? metric : 0),
      id_instrument: (!metricFlag ? metric : 0),
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch('/metric_instrument_relationship', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        // console.log(response)
        setOpen(true)
        return response.json()
      })
      // .then(data => console.log(data))
      .catch((error) => {
        console.error('There has been a problem with your operation:', error);
        setOpenError(true)
      });
  };

  const handleCloseDelete = (deleteFlag, delete_id) => {
    if (deleteFlag) {
      const requestOptions = {
        method: 'DELETE',
      }

      fetch('/metric_instrument_relationship/' + delete_id, requestOptions).then(
        response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json()
        }).then(
          data => {
            navigate(0)
          }
        ).catch(
          (error) => {
            console.error('There has been a problem with your delete operation:', error);
            setOpenError(true)
          }
        )

    }
    setOpenDelete(false);
  };

  const handleCloseDeleteRef = (deleteFlag, delete_id) => {
    if (deleteFlag) {
      const requestOptions = {
        method: 'DELETE',
      }

      fetch('/vd_reference/' + delete_id, requestOptions).then(
        response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json()
        }).then(
          data => {
            navigate(0)
          }
        ).catch(
          (error) => {
            console.error('There has been a problem with your delete operation:', error);
            setOpenError(true)
          }
        )
    }
    setOpenDeleteRef(false);
  }

  const handleAddRef = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      setReference(references.data.find(o => o.referencia === formData.get('reference')).id)
    } catch (e) {
      if (e instanceof TypeError) {
        const refData = {
          reference: formData.get('reference')
        }

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(refData)
        }

        fetch('/reference', requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not OK');
            }
            return response.json()
          })
          .then(data => {
            setReference(data.data.id)
          })
          .catch((error) => {
            console.error('There has been a problem with your operation:', error);
          });
      }
      else {
        console.error('There has been a problem with your operation:', e)
      }
    } finally {
    }
  };

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
                    Descrição
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
                  <Grid
                    container spacing={2}
                    rowSpacing={1}
                    sx={{
                      margin: '0',
                    }}
                  >
                    <Button onClick={handleClickOpenDesc}>Editar Nome ou Descrição</Button>
                  </Grid>
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
                    Métrica e Instrumentos
                  </Typography>
                  <Grid container spacing={6}>
                    {
                      (typeof metricInstrument.data === 'undefined' || Object.keys(metricInstrument.data).length === 0) ? (
                        <p></p>
                      ) : (
                        metricInstrument.data.filter(({ id_vd }) => id_vd.toString() === variable_id).map((data, i) => {
                          return (
                            <Grid key={i} item xs={12} md={4} lg={4}>
                              <Paper
                                // component={Button}
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
                                  {(data['id_metric'] === 0 ? '' : 'Métrica')}
                                  {(data['id_instrument'] === 0 ? '' : 'Instrumento')}
                                </Typography>
                                <Grid
                                  container spacing={2}
                                  rowSpacing={1}
                                  sx={{
                                    margin: '0.5rem 0 0 -0.5rem'
                                  }}
                                >
                                  <Button onClick={(event) => handleClickMore(event, data.id)}>Mais</Button>
                                  <Button onClick={(event) => handleClickMI(event, data.id)}>Deletar</Button>
                                </Grid>
                              </Paper>
                            </Grid>
                          )
                        }
                        )
                      )
                    }
                  </Grid>
                  <Grid
                    container spacing={2}
                    rowSpacing={1}
                    sx={{
                      margin: '3rem 0 0 0'
                    }}
                  >
                    <Button onClick={handleClickOpenMi}>Adicionar Métricas ou Instrumentos</Button>
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
                    Referências
                  </Typography>
                  <List>
                    {(typeof vdReferences.data === 'undefined' || Object.keys(vdReferences.data).length === 0 || typeof references.data === 'undefined') ? (
                      <p>Loading...</p>
                    ) : (
                      vdReferences.data.filter(({ id_vd }) => id_vd.toString() === variable_id).map((data, i) => {
                        return (
                          <Grid key={i} container >
                            <Grid item xs={10.5} md={10.5} lg={10.5}>
                              <ListItem component="a" href={references.data.find(o => o.id === data.id_ref).referencia} key={i}>
                                <ListItemText primary={references.data.find(o => o.id === data.id_ref).referencia} />
                              </ListItem>
                            </Grid>
                            <Button
                              onClick={
                                (event) => handleClickRef(
                                  event,
                                  data['id']
                                )
                              }
                            >
                              DELETAR
                            </Button>
                          </Grid>
                        )
                      }
                      )
                    )
                    }
                  </List>
                  <Grid
                    container spacing={2}
                    rowSpacing={1}
                    sx={{
                      margin: '0.5rem 0 0 0'
                    }}
                  >
                    <Button onClick={handleClickOpenRef}>Adicionar Referência</Button>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Dialog
          fullScreen={fullScreen}
          open={openDesc}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <EditForms formTitle={'Editar Nome ou Descrição'} fetchlink='/dependent_variable/' />
          </DialogContent>
        </Dialog>
        {/* -------------------------------------------------------- */}

        <Dialog
          fullWidth
          fullScreen={fullScreen}
          open={openMi}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          PaperProps={{ sx: { minHeight: "60%" } }}
        >
          <DialogTitle id="responsive-dialog-title"
          >
            {"Adicionar Métrica ou Intsrumento"}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>

              <Grid item xs={12} md={12} lg={12}>
                <DialogContentText>
                  Escolha a Métrica
                </DialogContentText>
                <Paper square
                  variant='outlined'
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    alignContent: 'center',
                    padding: '0',
                  }}
                >

                  {
                    (typeof metrics.data === 'undefined') ? (
                      <p>Loading...</p>
                    ) : (
                      metrics.data.map((data, i) => {
                        return (
                          <ListItemButton
                            key={i}
                            selected={metric === data['id']}
                            onClick={
                              (event) => handleMetricClick(
                                event,
                                true,
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
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <DialogContentText>
                  Escolha o Instrumento
                </DialogContentText>
                <Paper square
                  variant='outlined'
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    alignContent: 'center',
                    padding: '0',
                  }}
                >

                  {
                    (typeof instruments.data === 'undefined') ? (
                      <p>Loading...</p>
                    ) : (
                      instruments.data.map((data, i) => {
                        return (
                          <ListItemButton
                            key={i}
                            selected={instrument === data['id']}
                            onClick={
                              (event) => handleMetricClick(
                                event,
                                false,
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
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancelar
            </Button>
            <Button onClick={handleAddMI} autoFocus>
              Adicionar
            </Button>
          </DialogActions>
        </Dialog>
        <Footer />
        {/* -------------------------------------------------------- */}

        <Dialog
          fullScreen={fullScreen}
          open={openDesc}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <EditForms formTitle={'Editar Nome ou Descrição'} fetchlink='/independent_variable/' />
          </DialogContent>
        </Dialog>

        {/* -------------------------------------------------------- */}



        {/* -------------------------------------------------------- */}

        <Dialog
          fullScreen={fullScreen}
          open={openRef}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Container component="form" onSubmit={handleAddRef}>
            <DialogTitle id="responsive-dialog-title">
              {"Adicionar Referência"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Adicionar o link de referência abaixo
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="reference"
                label="Reference"
                name="reference"
                type="link"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" autoFocus>
                Adicionar
              </Button>
            </DialogActions>
          </Container>
        </Dialog>

        {/* -------------------------------------------------------- */}

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

        {/* -------------------------------------------------------- */}

        <Dialog
          open={openDelete}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            DELETAR
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Quer realmente deletar?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleCloseDelete(true, selectedIndex)} autoFocus>
              Deletar
            </Button>
            <Button onClick={() => handleCloseDelete()} autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>

        {/* -------------------------------------------------------- */}

        <Dialog
          open={openDeleteRef}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            DELETAR
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Quer realmente deletar?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleCloseDeleteRef(true, selectedIndex)} autoFocus>
              Deletar
            </Button>
            <Button onClick={() => handleCloseDeleteRef()} autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
        {/* -------------------------------------------------------- */}

        <Dialog
          fullWidth
          open={openMore}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            sx: {
              fullWidth: 'true',
              maxWidth: 'lg',
              maxHeight: '80%',
            }
          }}
        >
          <DialogContent>
            {(typeof metricInstrument.data === 'undefined' || Object.keys(metricInstrument.data).length === 0) ? (
              <Typography variant="h4" gutterBottom>
                Loading...
              </Typography>
            ) : (metricInstrument.data.filter(({ id }) => id === selectedIndex).map((data, i) => {
              return (
                (data['id_instrument'] === 0) ?
                  (
                    <>
                      <Typography>
                        <Metric key={i} id={data['id_metric']} />
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography>
                        <Instrument key={i} id={data['id_instrument']} />
                      </Typography>
                    </>
                  )
              )
            })
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
}

export default EditVariavelDependente;