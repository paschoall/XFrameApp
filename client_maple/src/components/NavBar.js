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

const pages = ['Variáveis Independentes', 'Variáveis Dependentes'];
const settings = ['Página do Admin', 'Sair'];

function getPageLink(page) {
  switch (page) {
    case 'Variáveis Independentes':
      return '/catalogo-variaveis-independentes';
    case 'Variáveis Dependentes':
      return '/catalogo-variaveis-dependentes';
    case 'Página do Admin':
      return '/admin-page/gerenciar-variaveis';
    case 'Sair':
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
    if (setting === 'Sair') {
      logOut()
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
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
            XFrameApp
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
                  backgroundColor:
                    (isVariaveisIndependentesPage && page === 'Variáveis Independentes') ||
                    (isVariaveisDependentesPage && page === 'Variáveis Dependentes')
                      ? 'blue'
                      : 'inherit',
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
                    <Avatar alt='Lucas M' src='/static/images/avatar/admin.png' />
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
                        setting !== 'Página do Admin' &&
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
                <Button component={Link} to='/login' color="inherit">Login</Button>
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
