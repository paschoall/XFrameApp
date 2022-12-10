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
  ListItemText,
  ListItemButton,
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
import Treatment from '../components/Treatment'

const EditVariavelIndependente = () => {
  const [data, setData] = useState([{}]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [treatment, setTreatment] = useState([{}]);
  const [factorTreatment, setFactorTreatment] = useState([{}]);
  const [references, setReferences] = useState([{}]);
  const [viReferences, setViReferences] = useState([{}]);
  const [reference, setReference] = useState(-1);
  const [treatmentArray, setTreatmentArray] = useState([]);

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDeleteRef, setOpenDeleteRef] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openDesc, setOpenDesc] = React.useState(false);
  const [openFt, setOpenFt] = React.useState(false);
  const [openRef, setOpenRef] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useParams();
  const navigate = useNavigate();

  const variable_id = id

  const handleTreatmentListItemClick = (event, index) => {
    setSelectedIndex(selectedIndex);
    setSelectedIndex(index);
    if (treatmentArray.includes(index)) {
      setTreatmentArray(treatmentArray.filter((value => (value !== index))));
    }
    else {
      treatmentArray.push(index)
      setTreatmentArray(treatmentArray.sort());
    }
  };

  useEffect(() => {
    fetch('/independent_variable/' + id).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [id])

  useEffect(() => {
    fetch('/treatments').then(
      res => res.json()
    ).then(
      data => {
        setTreatment(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch('/factors_treatments_relationships').then(
      res => res.json()
    ).then(
      data => {
        setFactorTreatment(data);
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
    fetch('/vi_references').then(
      res => res.json()
    ).then(
      data => {
        setViReferences(data);
      }
    )
  }, [])

  useEffect(() => {
    if (reference !== -1) {
      const data = {
        id_vi: id,
        id_ref: reference,
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }

      fetch('/vi_reference', requestOptions)
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

  const handleClickFT = (event, delete_id) => {
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
  const handleClickOpenFt = () => {
    setOpenFt(true);
  };
  const handleClickOpenRef = () => {
    setOpenRef(true);
  };
  const handleClose = () => {
    setOpenDesc(false);
    setOpenFt(false);
    setOpenRef(false);
    setOpenDelete(false);
    setOpenDeleteRef(false);
    setOpenMore(false);
  };

  const handleAddFT = () => {
    setOpen(false)
    setOpenError(false)

    const data = {
      id_vi: id,
      id_factors_array: '',
      id_treatments_array: treatmentArray.toString(),
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch('/factors_treatments_relationship', requestOptions)
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

      fetch('/factors_treatments_relationship/' + delete_id, requestOptions).then(
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

      fetch('/vi_reference/' + delete_id, requestOptions).then(
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
            height: '100%',
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
                    Treatments
                  </Typography>
                  <Grid container spacing={6}>
                    {
                      (typeof factorTreatment.data === 'undefined' || Object.keys(factorTreatment.data).length === 0) ? (
                        <p></p>
                      ) : (
                        factorTreatment.data.filter(({ id_vi }) => id_vi.toString() === variable_id).map((data, i) => {
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
                                  {data.id_treatments_array.split(',').length}{' '}
                                  Treatment{(data.id_treatments_array.split(',').length > 1) ? ('s') : ('')}
                                </Typography>
                                <Grid
                                  container spacing={2}
                                  rowSpacing={1}
                                  sx={{
                                    margin: '0.5rem 1rem 0 0'
                                  }}
                                >
                                  <Button onClick={(event) => handleClickMore(event, data.id)}>Mais</Button>

                                  <Button onClick={(event) => handleClickFT(event, data.id)}>Deletar</Button>
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
                    <Button onClick={handleClickOpenFt}>Add Treatments</Button>
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
                    {(typeof viReferences.data === 'undefined' || Object.keys(viReferences.data).length === 0 || typeof references.data === 'undefined') ? (
                      <p></p>
                    ) : (
                      viReferences.data.filter(({ id_vi }) => id_vi.toString() === variable_id).map((data, i) => {
                        return (
                          <Grid container >
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

        <Dialog
          fullWidth
          fullScreen={fullScreen}
          open={openFt}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          PaperProps={{ sx: { minHeight: "60%" } }}
        >
          <DialogTitle id="responsive-dialog-title"
          >
            {"Add Treatments"}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>

              <Grid item xs={12} md={12} lg={12}>
                <DialogContentText>
                  Choose Treatments
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
                    (typeof treatment.data === 'undefined' || Object.keys(treatment.data).length === 0) ? (
                      <p>Loading...</p>
                    ) : (
                      treatment.data.map((data, i) => {
                        return (
                          <ListItemButton
                            key={i}
                            selected={treatmentArray.includes(data['id'])}
                            onClick={
                              (event) => handleTreatmentListItemClick(
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
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancelar
            </Button>
            <Button onClick={handleAddFT} autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>

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
                Add the reference link below
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
                Add
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
            {(typeof factorTreatment.data === 'undefined' || Object.keys(factorTreatment.data).length === 0) ? (
              <Typography variant="h4" gutterBottom>
                Loading...
              </Typography>
            ) : (factorTreatment.data.filter(({ id }) => id === selectedIndex).map((data, i) => {
              return (
                <>
                  <Typography>
                    {data['id_treatments_array'].split(',').map((id, i) => { return (<Treatment key={i} id={id} />) })}
                  </Typography>
                </>
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

export default EditVariavelIndependente;