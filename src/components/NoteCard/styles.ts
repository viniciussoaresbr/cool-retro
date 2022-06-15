import styled from 'styled-components';
import { ReactComponent as Trash } from '../../assets/trash-icon.svg';
import { ReactComponent as Like } from '../../assets/like-icon.svg';

interface DragDrogProps {
  isDragging: boolean;
  radioSelect?: string;
}

export const NoteCardBoard = styled.div<DragDrogProps>`
  position: relative;
  width: 19rem;
  height: 5rem;
  border-radius: 0.2rem;
  margin: 0.3rem 0;
  padding: 0.5rem;
  background-color: ${({ isDragging, radioSelect }) => {
    if (radioSelect === 'negative') {
      return radioSelect && isDragging ? '#B5171A' : '#E32629';
    }
    return isDragging ? '#0C4C5A' : '#126E82';
  }};
  user-select: none;
  word-break: break-all;
`;

export const NoteText = styled.p`
  font: 1.2rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.light};
`;

export const NavContainer = styled.nav`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65px;
  height: 20px;
`;

export const NoteTrashIcon = styled(Trash)`
  width: 22px;
  height: 22px;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const NoteLikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 37px;
  height: 100%;
`;

export const NoteLikeIcon = styled(Like)`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const NoteLikeScore = styled.span`
  font: 1rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  align-self: flex-end;
`;
