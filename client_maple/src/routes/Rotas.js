import React from 'react';
import PropTypes from 'prop-types'
import {
  Routes,
  Route,
} from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login'
import SignUp from '../pages/SignUp';
import Catalogo from '../pages/Catalogo';
import Catalogo2 from '../pages/Catalogo2';
import PageNotFound from '../pages/PageNotFound';
import AdminPage from '../pages/AdminPage';
import Dashboard from '../pages/Dashboard';
import ManageData from '../pages/ManageData';
import ManageUsers from '../pages/ManageUsers';

const Rotas = ({ setToken, user }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='login' element={<Login setToken={setToken} />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='catalogo-variaveis-independentes' element={<Catalogo />} />
        <Route path='catalogo-variaveis-dependentes' element={<Catalogo2 />} />
        <Route path='admin-page-dev' element={<AdminPage />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='gerenciar-dados' element={<ManageData />} />
          <Route path=':gerenciar-usuarios' element={<ManageUsers />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
        </Route>
        <Route
          path='/admin-page'
          element={
            <ProtectedRoute
              isAllowed={!!user.roles ? user.roles.includes('admin') : false}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Rotas;

Routes.propTypes = {
  setToken: PropTypes.func
};