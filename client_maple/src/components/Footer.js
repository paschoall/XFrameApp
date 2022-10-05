import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
        {'Copyright © '}
        <Typography color="inherit" component={Link} to="/">
          Your Website
        </Typography>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default Footer;