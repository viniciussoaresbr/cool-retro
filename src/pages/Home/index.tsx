import React from 'react';
import DashBoard from '../../components/Dashboard';
import DashboardProvider from '../../contexts/DashboardContext';
import { StyledHome } from './styles';

const Home = () => {
  return (
    <DashboardProvider>
      <StyledHome>
        <DashBoard />
      </StyledHome>
    </DashboardProvider>
  );
};

export default Home;
