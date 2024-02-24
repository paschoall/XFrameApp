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
import PeopleIcon from '@mui/icons-material/People';

import Footer from '../components/Footer';

const ManageUsers = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          overflow: 'auto',
          paddingTop: '14vh',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4, }} >
          <Grid container spacing={8}>
            <Grid item xs={12} md={4} lg={4}>
              
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '40vh',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >
                <ListItemButton
                  component={Link}
                  to='/admin-page-dev/dashboard'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <PeopleIcon
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
                        Manage Users
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

export default ManageUsers;