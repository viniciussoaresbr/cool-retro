import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as idGenerator } from 'uuid';

interface Dashboard {
  id?: string;
  title: string;
  description: string;
  votes: string;
}

interface DashBoardContextInterface {
  createDashboards: (data: Dashboard) => void;
  updateDashboards: (id: string, data: Dashboard) => void;
  deleteDashboards: (id: string) => void;
  dashboards: Dashboard[];
  navigateToPage: (dashboard: Dashboard) => void;
  addDashboardsToLocalStorage: () => void;
}

export const DashboardContext = createContext<DashBoardContextInterface>(
  {} as DashBoardContextInterface,
);

const DashboardProvider: React.FC = ({ children }) => {
  const [dashboards, setDashboards] = useState<Dashboard[]>(() => {
    const dashboardsLocalStorage = localStorage.getItem('dashboards');
    return dashboardsLocalStorage ? JSON.parse(dashboardsLocalStorage) : [];
  });
  const navigate = useNavigate();

  const createDashboards = (data: Dashboard) => {
    setDashboards([...dashboards, { id: idGenerator(), ...data }]);
  };

  const updateDashboards = (id: string, data: Dashboard) => {
    if (dashboards.some(dashboard => dashboard.id === id)) {
      setDashboards(
        dashboards.map(dashboard => {
          return dashboard.id === id
            ? {
                id: dashboard.id,
                ...data,
              }
            : dashboard;
        }),
      );
    }
  };

  const deleteDashboards = (id: string) => {
    setDashboards(dashboards.filter(dashboard => dashboard.id !== id));
  };

  const navigateToPage = (dashboard: Dashboard) => {
    navigate(`/dashboard/${dashboard.id}`, {
      state: {
        id: dashboard.id,
        title: dashboard.title,
        description: dashboard.description,
        votes: dashboard.votes,
      },
    });
  };

  const addDashboardsToLocalStorage = () => {
    localStorage.setItem('dashboards', JSON.stringify(dashboards));
  };

  return (
    <DashboardContext.Provider
      value={{
        createDashboards,
        updateDashboards,
        deleteDashboards,
        dashboards,
        navigateToPage,
        addDashboardsToLocalStorage,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
