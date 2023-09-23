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
import NavBar from '../components/NavBar';

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
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box sx={{ display: 'flex' }}>
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
                position: 'relative',
                marginLeft: '1rem',
                top: '10px',
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </Button>
          )}
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
