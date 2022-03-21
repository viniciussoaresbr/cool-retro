import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  a {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font: 2rem ${({ theme }) => theme.fonts.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.light};
  margin: 0 0.5rem;
`;
