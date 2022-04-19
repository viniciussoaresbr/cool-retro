import styled from 'styled-components';
import { ReactComponent as Planning } from '../../assets/planning-vector.svg';

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

export const PlanningVector = styled(Planning)`
  width: 600px;
  height: 600px;
`;

export const HomeTitle = styled.h1`
  font: 2rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomeDescription = styled.p`
  font: 1.3rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomeContainer = styled.div`
  width: calc(80% - 600px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 970px) {
    align-items: center;
    width: 100%;
  }
`;

export const HomeButton = styled.button`
  position: relative;
  width: 10rem;
  height: 3rem;
  font: 1.3rem ${({ theme }) => theme.fonts.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 0.2rem;
  cursor: pointer;
  margin-top: 3.5rem;
  transition: all 0.35s;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 0.2rem;
    transition: all 0.35s;
  }
  &:hover:after {
    width: 100%;
  }
`;

export const ArrowIcon = styled.span`
  position: relative;
  z-index: 2;
  margin-left: 0.5rem;
`;

export const TextContent = styled.span`
  position: relative;
  z-index: 2;
`;
