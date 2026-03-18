import styled from 'styled-components';
import { ReactComponent as Planning } from '../../assets/planning-vector.svg';

export const StyledHome = styled.div`
  width: 100%;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 970px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
`;

export const PlanningVector = styled(Planning)`
  width: 100%;
  max-width: 500px;
  height: auto;
  
  @media (max-width: 970px) {
    max-width: 300px;
  }
`;

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 970px) {
    align-items: center;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HomeSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 480px;
`;

export const HomeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ArrowIcon = styled.span`
  font-size: 1.25rem;
  transition: transform 0.2s ease;

  ${HomeButton}:hover & {
    transform: translateX(4px);
  }
`;
