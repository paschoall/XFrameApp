import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

import Footer from '../components/Footer';

const ManageIndependentVariables = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          overflow: 'auto',
          paddingTop: { xs: 'none', md: 'none' },
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 0, mb: 4, }} >
          <Grid container spacing={2}> {/* Alterado de spacing={8} para spacing={2} */}
            <Grid item xs={12} md={12} lg={12} >
              <Typography variant="h3" gutterBottom
                sx={{
                  fontSize: '2.5rem',
                }}
              >
                Manage independent variables
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '44vh',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >
                <ListItemButton
                  component={Link}
                  to='cadastrar'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <AddRoundedIcon
                      sx={{
                        fontSize: '24vh',
                        textAlign: 'center',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        sx={{
                          marginTop: '2vh',
                          fontSize: '3.6vh',
                          textAlign: 'center',
                        }}
                      >
                        Register variable
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '44vh',
                alignItems: 'center',
                alignContent: 'center',
                padding: '0',
              }}
              >
                <ListItemButton
                  component={Link}
                  to='editar'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <ModeEditOutlineRoundedIcon
                      sx={{
                        fontSize: '24vh',
                        textAlign: 'center',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        sx={{
                          marginTop: '2vh',
                          fontSize: '3.6vh',
                          textAlign: 'center',
                        }}
                      >
                        Edit variable
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '44vh',
                alignItems: 'center',
                alignContent: 'center',
                padding: '0',
              }}
              >
                <ListItemButton
                  component={Link}
                  to='/admin-page/gerenciar-tratamentos/tratamentos/cadastrar'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <AddRoundedIcon
                      sx={{
                        fontSize: '24vh',
                        textAlign: 'center',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        sx={{
                          marginTop: '2vh',
                          fontSize: '3.6vh',
                          textAlign: 'center',
                        }}
                      >
                        Register Treatments
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Paper sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '44vh',
                alignItems: 'center',
                alignContent: 'center',
                padding: '0',
              }}
              >
                <ListItemButton
                  component={Link}
                  to='/admin-page/gerenciar-tratamentos/tratamentos/editar'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <ModeEditOutlineRoundedIcon
                      sx={{
                        fontSize: '24vh',
                        textAlign: 'center',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        sx={{
                          marginTop: '2vh',
                          fontSize: '3.6vh',
                          textAlign: 'center',
                        }}
                      >
                        Edit Treatments
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4} />
            <Grid item xs={12} md={4} lg={4} />
            <Grid item md={4} lg={4} />
            <Grid item xs={12} md={12} lg={12} >
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ManageIndependentVariables;
