import styled from 'styled-components';
import { ReactComponent as Trash } from '../../assets/trash-icon.svg';
import { ReactComponent as Like } from '../../assets/like-icon.svg';

interface DragDrogProps {
  isDragging: boolean;
}

export const NoteCardBoard = styled.div<DragDrogProps>`
  position: relative;
  width: 100%;
  min-height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 0.75rem;
  padding: 1rem;
  background-color: ${({ theme, isDragging }) =>
    isDragging ? theme.colors.border : theme.colors.surface};
  box-shadow: ${({ theme, isDragging }) =>
    isDragging ? theme.shadows.lg : theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  user-select: none;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const NoteText = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  word-break: break-word;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const NoteTrashIcon = styled(Trash)`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    fill: ${({ theme }) => theme.colors.red};
    transform: scale(1.1);
  }
`;

export const NoteLikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NoteLikeIcon = styled(Like)`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    fill: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.1);
  }
`;

export const NoteLikeScore = styled.span`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.textLight};
`;
