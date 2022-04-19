import React, { useContext, useEffect, useState } from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';
import AddBox from '../common/AddBox';
import Modal from '../common/Modal';
import Form from '../Form';
import {
  DashboardCard,
  DashboardTitle,
  DashboardDescription,
  MainContainer,
  DashboardVotes,
  DashboardLabel,
  TrashIcon,
  EditIcon,
  NavArea,
  DashboardContainer,
} from './styles';

const DashBoard = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [dashboardId, setDashboardId] = useState<string | undefined>('');
  const {
    dashboards,
    deleteDashboards,
    navigateToPage,
    addDashboardsToLocalStorage,
  } = useContext(DashboardContext);

  useEffect(() => {
    addDashboardsToLocalStorage();
  }, [dashboards]);

  return (
    <MainContainer>
      <AddBox boxText="Adicionar Retro" handleClick={() => setShowForm(true)} />
      <Modal isOpen={showForm}>
        <Form
          handleClose={() => {
            setShowForm(false);
            setDashboardId('');
          }}
          dashboardId={dashboardId}
        />
      </Modal>
      <DashboardContainer>
        {dashboards.map(dashboard => {
          return (
            <DashboardCard
              key={dashboard.id}
              onClick={() => navigateToPage(dashboard)}
            >
              <DashboardLabel>Nome da Retro:</DashboardLabel>
              <DashboardTitle>{dashboard.title}</DashboardTitle>
              <DashboardLabel>Descrição da Retro:</DashboardLabel>
              <DashboardDescription>
                {dashboard.description}
              </DashboardDescription>
              <DashboardLabel>Quantidade de Votos:</DashboardLabel>
              <DashboardVotes>{dashboard.votes}</DashboardVotes>
              <NavArea onClick={e => e.stopPropagation()}>
                <EditIcon
                  onClick={() => {
                    setShowForm(true);
                    setDashboardId(dashboard.id);
                  }}
                />
                <TrashIcon
                  onClick={() => deleteDashboards(dashboard.id as string)}
                />
              </NavArea>
            </DashboardCard>
          );
        })}
      </DashboardContainer>
    </MainContainer>
  );
};

export default DashBoard;
