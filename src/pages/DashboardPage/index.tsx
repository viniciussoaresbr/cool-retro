import React from 'react';
import { useLocation } from 'react-router-dom';

const DashboardPage = () => {
  interface ParamsState {
    title: string;
    description: string;
    votes: number;
  }

  const params = useLocation();
  const { title, description, votes } = params.state as ParamsState;

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{votes}</div>
    </div>
  );
};

export default DashboardPage;
