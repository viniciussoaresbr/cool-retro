import styled from 'styled-components';

export const RetroSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 4.5rem);
`;

export const RetroHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 0;
  margin-bottom: 2rem;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const RetroLabel = styled.span`
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const RetroTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RetroDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
`;

export const VotesBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-width: 100px;

  span:first-child {
    font-size: 0.75rem;
    text-transform: uppercase;
    opacity: 0.8;
  }

  span:last-child {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;

export const RetroForm = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 0 auto 3rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const RetroInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.secondary}33;
  }
`;

export const RetroButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.875rem;
  margin-left: 0.25rem;
`;

export const ErrorContainer = styled.div`
  height: 1.25rem;
  display: flex;
  align-items: center;
`;

export const DragDrogContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  align-items: start;
`;

export const DragDrogColumns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColumnsLabel = styled.h2`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ColumnsContainer = styled.div`
  background-color: #ebf1f3;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1rem;
  min-height: 500px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

interface DragDrogProps {
  isDragging: boolean;
}

export const DroppableArea = styled.div<DragDrogProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 480px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: var(--transition);
  background-color: ${({ isDragging }) =>
    isDragging ? 'rgba(81, 196, 211, 0.1)' : 'transparent'};
`;
