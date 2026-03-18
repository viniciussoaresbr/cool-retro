import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { Nav, StyledHeader, Title } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Link to={ROUTES.HOME}>
          <Title>Cool<span>Retro</span></Title>
        </Link>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
