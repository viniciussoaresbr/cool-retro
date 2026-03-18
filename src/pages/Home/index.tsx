import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import {
  ArrowIcon,
  HomeButton,
  HomeContainer,
  HomeTitle,
  HomeSubtitle,
  PlanningVector,
  StyledHome,
  MainContent,
} from './styles';

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledHome>
      <MainContent>
        <HomeContainer>
          <HomeTitle>Evolua com sua equipe</HomeTitle>
          <HomeSubtitle>
            A ferramenta de retrospectiva simples, elegante e eficiente para times que buscam melhoria contínua.
          </HomeSubtitle>
          <HomeButton onClick={() => navigate(ROUTES.DASHBOARD_PAGE)}>
            Começar agora
            <ArrowIcon>&#10140;</ArrowIcon>
          </HomeButton>
        </HomeContainer>
        <PlanningVector />
      </MainContent>
    </StyledHome>
  );
};

export default Home;
