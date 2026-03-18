import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.025em;
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
