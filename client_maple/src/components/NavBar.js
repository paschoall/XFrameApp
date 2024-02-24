import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';

import { asyncLogout } from '../store/reducers/userSlice';
import ThemeToggler from './ThemeToggler';

const pages = ['Independent Variables', 'Dependent Variables'];
const settings = ['Administrator page', 'Logout'];

function getPageLink(page) {
  switch (page) {
    case 'Independent Variables':
      return '/catalogo-variaveis-independentes';
    case 'Dependent Variables':
      return '/catalogo-variaveis-dependentes';
    case 'Administrator page':
      return '/admin-page/gerenciar-variaveis';
    case 'Logout':
      return '/';
    default:
      return '';
  }
}

const ResponsiveAppBar = () => {
  const currentUser = useSelector((state) => state.user);

  const location = useLocation();
  const pathnameSegments = location.pathname.split('/'); // Divide a URL em segmentos
  const isVariaveisIndependentesPage = pathnameSegments.includes('catalogo-variaveis-independentes');
  const isVariaveisDependentesPage = pathnameSegments.includes('catalogo-variaveis-dependentes');
  const isLoginPage = pathnameSegments.includes('login');
  const isSignUpPage = pathnameSegments.includes('signup');
  const isAdminPage = pathnameSegments.includes('admin-page', 'gerenciar-variaveis');

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();

  const logOut = React.useCallback(() => {
    dispatch(asyncLogout());
  }, [dispatch]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (setting) => {
    if (setting === 'Logout') {
      logOut()
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            XFrameTool
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={getPageLink(page)}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h5'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            XFrameApp
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height:'65px', }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={getPageLink(page)}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  margin:0,
                  padding: '20px',
                  backgroundColor:
                    (isVariaveisIndependentesPage && page === 'Independent Variables') ||
                    (isVariaveisDependentesPage && page === 'Dependent Variables')
                      ? '#104A85'
                      : 'inerit',
                      '&:hover': {
                        backgroundColor: '#104A85',
                      },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>


          <Box sx={{ flexGrow: 0 }}>
            {currentUser.isLoggedIn ? (
              <>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Button sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      margin:0,
                      padding: '20px',
                      backgroundColor: isAdminPage ? '#104A85' : 'inherit',
                      '&:hover': {
                        backgroundColor: '#104A85',
                      },
                      }}>Administrator Page</Button>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    (!!currentUser.roles && currentUser.roles.includes('admin'))
                      ? (
                        <MenuItem
                          component={Link}
                          to={getPageLink(setting)}
                          key={setting}
                          onClick={() => handleCloseUserMenu(setting)}
                        >
                          <Typography textAlign='center'>{setting}</Typography>
                        </MenuItem>
                      ) : (
                        setting !== 'Administrator page' &&
                        <MenuItem
                          component={Link}
                          to={getPageLink(setting)}
                          key={setting}
                          onClick={() => handleCloseUserMenu(setting)}
                        >
                          <Typography textAlign='center'>{setting}</Typography>
                        </MenuItem>
                      )
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Button component={Link} to='/login' color="inherit"
                sx={{
                  backgroundColor: isLoginPage | isSignUpPage ? '#104A85' : 'inherit',
                  color: isLoginPage | isSignUpPage ? '#fff' : 'inherit',
                  margin:0,
                  padding: '20px',
                  pl: '25px',
                  pr: '25px',
                  mr: '10px',
                  '&:hover': {
                    backgroundColor: '#104A85',
                  },
                }}
                >Login</Button>
              </>
            )}
            <ThemeToggler />
            {/* <Button onClick={doThis}>a</Button> */}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;