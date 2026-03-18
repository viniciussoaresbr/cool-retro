import styled from 'styled-components';
import { ReactComponent as Trash } from '../../assets/trash-icon.svg';
import { ReactComponent as Edit } from '../../assets/edit-icon.svg';

export const MainContainer = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DashboardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const DashboardCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  width: fit-content;
`;

export const DashboardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const DashboardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  flex: 1;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const VotesInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;

export const NavArea = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: var(--transition);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const TrashIcon = styled(Trash)`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) => theme.colors.textLight};
  
  ${IconButton}:hover & {
    fill: ${({ theme }) => theme.colors.red};
  }
`;

export const EditIcon = styled(Edit)`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) => theme.colors.textLight};

  ${IconButton}:hover & {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;
