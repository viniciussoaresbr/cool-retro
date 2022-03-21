import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import DashboardPage from '../../pages/DashboardPage';
import Home from '../../pages/Home';
import { ROUTES } from '../routes';

const RouteManager = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD_PAGE} element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default RouteManager;
