import React, { useContext, useState } from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';
import AddBox from '../common/AddBox';
import Modal from '../common/Modal';
import Form from '../Form';
import {
  DashboardCard,
  DashboardTitle,
  DashboardDescription,
  MainContainer,
  TrashIcon,
  EditIcon,
  NavArea,
  DashboardContainer,
  Badge,
  CardFooter,
  VotesInfo,
  IconButton,
} from './styles';

const DashBoard = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [dashboardId, setDashboardId] = useState<string | undefined>('');
  const { dashboards, deleteDashboards, navigateToPage } =
    useContext(DashboardContext);

  return (
    <MainContainer>
      <AddBox boxText="Nova Retrospectiva" handleClick={() => setShowForm(true)} />
      
      <DashboardContainer>
        {dashboards.map(dashboard => {
          return (
            <DashboardCard
              key={dashboard.id}
              onClick={() => navigateToPage(dashboard)}
            >
              <Badge>Retro</Badge>
              <DashboardTitle>{dashboard.title}</DashboardTitle>
              <DashboardDescription>
                {dashboard.description}
              </DashboardDescription>
              
              <CardFooter>
                <VotesInfo>
                  Votos: <span>{dashboard.votes}</span>
                </VotesInfo>
                <NavArea onClick={e => e.stopPropagation()}>
                  <IconButton
                    onClick={() => {
                      setShowForm(true);
                      setDashboardId(dashboard.id);
                    }}
                    title="Editar"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteDashboards(dashboard.id as string)}
                    title="Excluir"
                  >
                    <TrashIcon />
                  </IconButton>
                </NavArea>
              </CardFooter>
            </DashboardCard>
          );
        })}
      </DashboardContainer>

      <Modal isOpen={showForm}>
        <Form
          handleClose={() => {
            setShowForm(false);
            setDashboardId('');
          }}
          dashboardId={dashboardId}
        />
      </Modal>
    </MainContainer>
  );
};

export default DashBoard;
