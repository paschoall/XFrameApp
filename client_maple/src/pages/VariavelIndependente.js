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
import {
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material';
import Footer from '../components/Footer';
import Treatment from '../components/Treatment'

const VariavelIndependente = () => {
  const [data, setData] = useState([{}])
  const { id } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [factorTreatment, setFactorTreatment] = useState([{}]);
  const [references, setReferences] = useState([{}]);
  const [viReferences, setViReferences] = useState([{}]);
  const [openMore, setOpenMore] = useState(false);

  const variable_id = id

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

  const handleClose = () => {
    setOpenMore(false);
  };
  const handleClickMore = (event, more_id) => {
    setSelectedIndex(more_id)
    setOpenMore(true)
  }

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
                                </Grid>
                              </Paper>
                            </Grid>
                          )
                        }
                        )
                      )
                    }
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
                      <p>Loading...</p>
                    ) : (
                      viReferences.data.filter(({ id_vi }) => id_vi.toString() === variable_id).map((data, i) => {
                        return (
                          <ListItem component="a" href={references.data.find(o => o.id === data.id_ref).referencia} key={i}>
                            <ListItemText primary={references.data.find(o => o.id === data.id_ref).referencia} />
                          </ListItem>
                        )
                      }
                      )
                    )
                    }
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer />

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

export default VariavelIndependente;