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
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useLocation, useNavigate } from 'react-router-dom';

const VariavelIndependente = () => {
  const [data, setData] = useState([{}])
  const { id } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [factorTreatment, setFactorTreatment] = useState([{}]);
  const [treatments, setTreatments] = useState([{}]);
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
    const fetchData = async () => {
      try {
        const response = await fetch('/treatments');
        const data = await response.json();
        setTreatments(data);
      } catch (error) {
        console.error('Erro ao buscar dados de tratamentos:', error);
      }
    };
  
    fetchData();
  }, [id]);

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
  const handleClickMore = (event, more_id, treatment_id) => {
    setSelectedIndex({ more_id, treatment_id });
    setOpenMore(true);
  };

  const navigate = useNavigate();
  const location = useLocation();

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
          {(
            !(location.pathname === '/catalogo-variaveis-independentes') &&
            <Button
              xs={'none'}
              size="large"
              onClick={() => navigate(-1)}
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                marginLeft: '0.9rem',
                top: '15px',
                color: 'gray',
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.grey[200],
                  borderRadius: '100%',
                },
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </Button>
          )}
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
                    Tratamentos
                  </Typography>
                  <Grid container spacing={6}>
                    {(typeof factorTreatment.data === 'undefined' || Object.keys(factorTreatment.data).length === 0) ? (
                      <p></p>
                    ) : (
                      factorTreatment.data.filter(({ id_vi }) => id_vi.toString() === variable_id).map((data, i) => {
                        const treatmentIds = data.id_treatments_array.split(',');
                        const treatmentsData = treatmentIds.map((treatmentId, j) => ({
                          id: data.id,
                          id_factors_array: data.id_factors_array,
                          id_treatments: treatmentId,
                          id_vi: data.id_vi,
                        }));

                        return treatmentsData.map((treatmentData, j) => (
                          <Grid key={j} item xs={12} md={6} lg={6}>
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
                                {treatments.data && treatments.data.find(({ id }) => id.toString() === treatmentData.id_treatments.toString())['name']}
                              </Typography>
                              <Grid
                                container spacing={2}
                                rowSpacing={1}
                                sx={{
                                  margin: '0.5rem 1rem 0 0',
                                }}
                              >
                                <Button onClick={(event) => handleClickMore(event, data.id, treatmentData.id_treatments)}>Mais detalhes
                                  <AddCircleRoundedIcon
                                    sx={{
                                      mt: '-5px',
                                      ml: '5px',
                                      fontSize: '16px',
                                      textAlign: 'center',
                                    }}
                                  />
                                </Button>
                              </Grid>
                            </Paper>
                          </Grid>
                        ));
                      })
                    )}
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
                    <Grid container spacing={2}>
                      {(typeof viReferences.data === 'undefined' || Object.keys(viReferences.data).length === 0 || typeof references.data === 'undefined') ? (
                        <p></p>
                      ) : (
                        viReferences.data.filter(({ id_vi }) => id_vi.toString() === variable_id).map((data, i) => {
                          return (
                            <Grid container item key={i} xs={12} md={12} lg={12} spacing={3} alignItems="flex-start">
                              <Grid item xs={6} md={6} lg={6} zeroMinWidth>
                                {references.data.find(o => o.id === data.id_ref).referencia_bib}
                              </Grid>
                              <Grid item xs={6} md={6} lg={6} zeroMinWidth>
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
                            </Grid>

                          )
                        }
                        )
                      )
                      }
                    </Grid>
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
            },
          }}
        >
          <DialogContent>
            {selectedIndex && (typeof factorTreatment.data === 'undefined' || Object.keys(factorTreatment.data).length === 0) ? (
              <Typography variant="h4" gutterBottom>
                Loading...
              </Typography>
            ) : (
              selectedIndex && factorTreatment.data
                .filter(({ id }) => id === selectedIndex.more_id)
                .map((data, i) => {
                  const { treatment_id } = selectedIndex;
                  const treatment = treatments.data.find((t) => t.id.toString() === treatment_id.toString());

                  if (!treatment) {
                    return null;
                  }

                  return (
                    <div key={i}>
                      <Treatment id={treatment_id} />
                    </div>
                  );
                })
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
}

export default VariavelIndependente;