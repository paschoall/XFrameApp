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
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';

import Footer from '../components/Footer';

const ManageVariables = () => {
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
        <Container maxWidth="xl" sx={{ mt: 0, mb: 5, }} >
          <Typography variant="h6" gutterBottom
            sx={{
              textAlign: 'left',
            }}
          >
            Administrator Page
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={12} >
              <Typography variant="h3" gutterBottom
                sx={{
                  textAlign: 'center',
                }}
              >
                Variable Management
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
                  to='independentes'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <ListAltRoundedIcon
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
                        Manage Independent Variables
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
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
                  to='dependentes'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <ListAltRoundedIcon
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
                        Manage Dependent Variables
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
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
                  to='relacoes'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <ListAltRoundedIcon
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
                        Manage Relationships
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12} >
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ManageVariables;
