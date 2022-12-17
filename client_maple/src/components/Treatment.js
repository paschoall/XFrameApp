import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

const Treatment = (props) => {
  const [data, setData] = useState([{}])
  const { id } = useParams();
  const [references, setReferences] = useState([{}]);
  const [treatmentReferences, setTreatmentReferences] = useState([{}]);

  const variable_id = id

  useEffect(() => {
    fetch('/treatment/' + props.id).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [props.id])

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
    fetch('/treatment_references').then(
      res => res.json()
    ).then(
      data => {
        setTreatmentReferences(data);
        console.log(data)
      }
    )
  }, [])


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
                        {(typeof treatmentReferences.data === 'undefined' || Object.keys(treatmentReferences.data).length === 0 || typeof references.data === 'undefined') ? (
                          <p></p>
                        ) : (
                          treatmentReferences.data.filter(({ id_treatment }) => id_treatment.toString() === props.id).map((data, i) => {
                            return (
                              <Grid container item key={i} xs={12} md={12} lg={12} alignItems="flex-start">
                                <Grid item xs={6} md={6} lg={6} zeroMinWidth>
                                  {references.data.find(o => o.id === data.id_ref).referencia_bib}
                                </Grid>
                                <Grid item xs={6} md={6} lg={6} alignItems="flex-start" zeroMinWidth>
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
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    )
  );
}

export default Treatment;