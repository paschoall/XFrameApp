import React from 'react';
import PropTypes from 'prop-types'
import {
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

import Home from '../pages/Home';
import RegisterVi from '../pages/RegisterVi';
import Login from '../pages/Login'
import SignUp from '../pages/SignUp';
import CatalogoVi from '../pages/ViCatalog';
import CatalogoVd from '../pages/VdCatalog';
import CatalogoV from '../pages/VCatalog';
import PageNotFound from '../pages/PageNotFound';
import AdminPage from '../pages/AdminPage';
import ManageData from '../pages/ManageData';
import ManageUsers from '../pages/ManageUsers';
import VariavelIndependente from '../pages/VariavelIndependente';
import VariavelDependente from '../pages/VariavelDependente';
import ManageVariables from '../pages/ManageVariables';
import ManageDependentVariables from '../pages/ManageDependentVariables';
import ManageIndependentVariables from '../pages/ManageIndependentVariables';
import ManageMetricsInstruments from '../pages/ManageMetricsInstruments';
import ManageFactorsTreatments from '../pages/ManageFactorsTreatments';
import ManageMetrics from '../pages/ManageMetrics';
import ManageInstruments from '../pages/ManageInstruments';
import ManageFactors from '../pages/ManageFactors';
import ManageTreatments from '../pages/ManageTreatments';
import EditVi from '../pages/EditVi';
import EditVariavelIndependente from '../pages/EditVariavelIndependente';
import EditViForms from '../pages/EditViForms';

const Rotas = ({ setToken, user }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login setToken={setToken} />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='catalogo-variaveis' element={<CatalogoV />} />
        <Route path='catalogo-variaveis-independentes' element={<CatalogoVi />} />
        <Route path='catalogo-variaveis-independentes/:id' element={<VariavelIndependente />} />
        <Route path='catalogo-variaveis-dependentes' element={<CatalogoVd />} />
        <Route path='catalogo-variaveis-dependentes/:id' element={<VariavelDependente />} />
        <Route path='admin-page-dev' element={<AdminPage />} >
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
              <AdminPage />
            </ProtectedRoute>
          }
        >
          <Route path='gerenciar-dados' element={<ManageData />} />
          <Route path='gerenciar-usuarios' element={<ManageUsers />} />
          <Route path='gerenciar-variaveis' element={<ManageVariables />} />
          <Route path='gerenciar-variaveis/independentes' element={<ManageIndependentVariables />} />
          <Route path='gerenciar-variaveis/independentes/cadastrar' element={<RegisterVi />} />
          <Route path='gerenciar-variaveis/independentes/editar' element={<EditVi />} />
          <Route path='gerenciar-variaveis/independentes/editar/:id' element={<EditVariavelIndependente />} />
          <Route path='gerenciar-variaveis/dependentes' element={<ManageDependentVariables />} />
          <Route path='gerenciar-metricas-instrumentos' element={<ManageMetricsInstruments />} />
          <Route path='gerenciar-metricas-instrumentos/metricas' element={<ManageMetrics />} />
          <Route path='gerenciar-metricas-instrumentos/instrumentos' element={<ManageInstruments />} />
          <Route path='gerenciar-fatores-tratamentos' element={<ManageFactorsTreatments />} />
          <Route path='gerenciar-fatores-tratamentos/fatores' element={<ManageFactors/>} />
          <Route path='gerenciar-fatores-tratamentos/tratamentos' element={<ManageTreatments />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Rotas;

Routes.propTypes = {
  setToken: PropTypes.func
};