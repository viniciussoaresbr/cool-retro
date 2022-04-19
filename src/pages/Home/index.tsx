import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import {
  ArrowIcon,
  HomeButton,
  HomeContainer,
  HomeDescription,
  HomeTitle,
  PlanningVector,
  StyledHome,
  TextContent,
} from './styles';

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledHome>
      <HomeContainer>
        <HomeTitle>Faça uma Retrospectiva com sua equipe</HomeTitle>
        <HomeDescription>- Avalie o que rolou na Sprint</HomeDescription>
        <HomeButton onClick={() => navigate(ROUTES.DASHBOARD_PAGE)}>
          <TextContent>Começar</TextContent>
          <ArrowIcon>&#10140;</ArrowIcon>
        </HomeButton>
      </HomeContainer>
      <PlanningVector />
    </StyledHome>
  );
};

export default Home;
