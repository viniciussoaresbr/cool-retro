import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { StyledHeader, Title } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTES.HOME}>
        <Title>Cool Retro</Title>
      </Link>
    </StyledHeader>
  );
};

export default Header;
