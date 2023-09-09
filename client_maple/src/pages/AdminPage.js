import * as React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import Badge from '@mui/material/Badge';
// import NotificationsIcon from '@mui/icons-material/Notifications';

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ThemeToggler from '../components/ThemeToggler';
import { mainListItems } from '../components/listItems';
// import { mainListItems, secondaryListItems } from '../components/listItems';
import { asyncLogout } from '../store/reducers/userSlice';
import { Container } from '@mui/material';

const drawerWidth = 240;
const pages = ['Variáveis Independentes', 'Variáveis Dependentes'];
const settings = ['Página do Admin', 'Sair'];
function getPageLink(page) {
  switch (page) {
    case 'Página do Admin':
      return '/admin-page/gerenciar-variaveis';
    case 'Variáveis Independentes':
      return '/catalogo-variaveis-independentes';
    case 'Variáveis Dependentes':
      return '/catalogo-variaveis-dependentes';
    case 'Sair':
      return '/';
    default:
      return ''
  }
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function DashboardContent() {
  const currentUser = useSelector((state) => state.user);

  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = React.useCallback(() => {
    dispatch(asyncLogout());
  }, [dispatch]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting === 'Sair') {
      logOut()
    }
    setAnchorElUser(null);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
            <Box
            sx={{ display: 'inline-flex',
              flexGrow: 1 }}
            >
              {pages.map((page) => (
                <MenuItem
                component={Link}
                to={getPageLink(page)}
                key={page}
                >
                  <Typography 
                    textAlign='center'
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    marginRight='10px'>
                      {page}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
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
            <ThemeToggler />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[800],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          {(
            !(location.pathname === '/admin-page/gerenciar-variaveis') &&
            <Button
              xs={'none'}
              size="large"
              onClick={() => navigate(-1)}
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                marginLeft: '1rem',
                top: '80px',
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </Button>
          )}
          <Toolbar />
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default function AdminPage() {
  return <DashboardContent />;
}
