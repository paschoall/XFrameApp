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

const EditMetrica = () => {
  const [data, setData] = useState([{}])
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [references, setReferences] = useState([{}]);
  const [metricReferences, setMetricReferences] = useState([{}]);
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
    fetch('/metric/' + id).then(
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
    fetch('/metric_references').then(
      res => res.json()
    ).then(
      data => {
        setMetricReferences(data);
      }
    )
  }, [])

  useEffect(() => {
    if (reference !== -1) {
      const data = {
        id_metric: id,
        id_ref: reference,
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }

      fetch('/metric_reference', requestOptions)
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
      fetch('/metric_reference/' + delete_id, requestOptions).then(
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
      setReference(references.data.find(o => o.referencia === formData.get('reference') && o.referencia_bib === formData.get('bib_reference')).id)
    } catch (e) {
      if (e instanceof TypeError) {
        const refData = {
          reference: formData.get('reference'),
          bib_reference: formData.get('bib_reference')
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
                    <ListItem>
                      <Grid container spacing={2}>
                        {(typeof metricReferences.data === 'undefined' || Object.keys(metricReferences.data).length === 0 || typeof references.data === 'undefined') ? (
                          <p></p>
                        ) : (
                          metricReferences.data.filter(({ id_metric }) => id_metric.toString() === variable_id).map((data, i) => {
                            return (
                              <Grid container item key={i} xs={12} md={12} lg={12} spacing={1} alignItems="flex-start">
                                <Grid item xs={5} md={5} lg={5} zeroMinWidth>
                                  {references.data.find(o => o.id === data.id_ref).referencia_bib}
                                </Grid>
                                <Grid item xs={5.5} md={5.5} lg={5.5} alignItems="flex-start" zeroMinWidth>
                                  {"Disponível em: "}
                                  <a
                                    target="_blank"
                                    rel='noreferrer'
                                    href={((references.data.find(o => o.id === data.id_ref).referencia.includes("//")) ? ("") : ("//")) +
                                      references.data.find(o => o.id === data.id_ref).referencia}
                                    style={{ textDecoration: 'none' }}
                                  >
                                    <ListItemText primary={references.data.find(o => o.id === data.id_ref).referencia} />
                                  </a>
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
                      </Grid>
                    </ListItem>
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
            <EditForms formTitle={'Editar Nome ou Descrição'} fetchlink='/metric/' nome={data.data['name']} descricao={data.data['description']}/>
          </DialogContent>
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
                Adicione a referência e o link de referência abaixo
              </DialogContentText>
              <TextField
                autoFocus
                multiline
                margin="dense"
                id="bib_reference"
                label="Referência Bibliografica"
                name="bib_reference"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="reference"
                label="Link da Referência"
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
              <Button variant="contained" type="submit" autoFocus>
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

export default EditMetrica;