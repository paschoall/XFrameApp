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
import AlertDialog from '../components/AlertDialog';
import EditForms from '../components/EditForms';

const EditInstrumento = () => {
  const [data, setData] = useState([{}])
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [references, setReferences] = useState([{}]);
  const [instrumentReferences, setInstrumentReferences] = useState([{}]);
  const [reference, setReference] = useState(-1);

  const [open, setOpen] = useState(false);
  const [openDeleteRef, setOpenDeleteRef] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openDesc, setOpenDesc] = React.useState(false);
  const [openRef, setOpenRef] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useParams();
  const navigate = useNavigate();

  const variable_id = id


  useEffect(() => {
    fetch('/instrument/' + id).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [id])

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
    fetch('/instrument_references').then(
      res => res.json()
    ).then(
      data => {
        setInstrumentReferences(data);
      }
    )
  }, [])

  useEffect(() => {
    if (reference !== -1) {
      const data = {
        id_instrument: id,
        id_ref: reference,
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }

      fetch('/instrument_reference', requestOptions)
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

  const handleClickRef = (event, delete_id) => {
    setSelectedIndex(delete_id)
    setOpenDeleteRef(true)
  }

  const handleClickOpenDesc = () => {
    setOpenDesc(true);
  };
  const handleClickOpenRef = () => {
    setOpenRef(true);
  };
  const handleClose = () => {
    setOpenDesc(false);
    setOpenRef(false);
  };

  const handleCloseDeleteRef = (deleteFlag, delete_id) => {
    if (deleteFlag) {
      const requestOptions = {
        method: 'DELETE',
      }
      fetch('/instrument_reference/' + delete_id, requestOptions).then(
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
                    {(typeof instrumentReferences.data === 'undefined' || Object.keys(instrumentReferences.data).length === 0 || typeof references.data === 'undefined') ? (
                      <p></p>
                    ) : (
                      instrumentReferences.data.filter(({ id_instrument }) => id_instrument.toString() === variable_id).map((data, i) => {
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
        <Dialog
          fullScreen={fullScreen}
          open={openDesc}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <EditForms formTitle={'Editar Nome ou Descrição'} fetchlink='/metric/' />
          </DialogContent>
        </Dialog>
        <Dialog
          fullScreen={fullScreen}
          open={openRef}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Adicionar Referência"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Choose Factors
            </DialogContentText>
            <DialogContentText>
              Choose Treatments
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <Footer />

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
                Adicione o link de referência  abaixo
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


      </>
    )
  );
}

export default EditInstrumento;