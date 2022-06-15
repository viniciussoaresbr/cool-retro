import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import { ROUTES } from '../routes';
import RetrospectiveBoard from '../../pages/RetrospectiveBoard';
import DashboardPage from '../../pages/DashboardPage';
import Home from '../../pages/Home';
import DashboardProvider from '../../contexts/DashboardContext';
import RetrospectiveProvider from '../../contexts/RetrospectiveContext';

const RouteManager = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route
          path={ROUTES.DASHBOARD_PAGE}
          element={
            <DashboardProvider>
              <DashboardPage />
            </DashboardProvider>
          }
        />
        <Route
          path={ROUTES.RETRO_BOARD}
          element={
            <RetrospectiveProvider>
              <RetrospectiveBoard />
            </RetrospectiveProvider>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouteManager;
