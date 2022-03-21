import styled from 'styled-components';
import { ReactComponent as Trash } from '../../assets/trash-icon.svg';
import { ReactComponent as Edit } from '../../assets/edit-icon.svg';

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 4rem);
`;

export const DashboardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 15rem);
  height: 100%;
`;

export const DashboardCard = styled.div`
  display: grid;
  grid-template-areas:
    'label'
    'title'
    'label'
    'description'
    'label'
    'votes'
    'edit delete';

  grid-template-columns: 100%;
  grid-template-rows: 10% 15% 10% 35% 10% 10% 10%;
  justify-items: center;
  width: 15rem;
  height: 20rem;
  padding-top: 0.4rem;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
`;

export const DashboardTitle = styled.h1`
  grid-area: 'title';
  font: 1rem ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.primary};
`;

export const DashboardDescription = styled.p`
  grid-area: 'description';
  font: 1rem ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.primary};
  overflow-y: hidden;
`;

export const DashboardVotes = styled.h2`
  grid-area: 'votes';
  font: 1rem ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.primary};
`;

export const DashboardLabel = styled.label`
  grid-area: 'label';
  font: 1.2rem ${({ theme }) => theme.fonts.default};
  cursor: pointer;
`;

export const NavArea = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ccdbe0;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  cursor: default;
`;

export const TrashIcon = styled(Trash)`
  grid-area: 'delete';
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const EditIcon = styled(Edit)`
  grid-area: 'edit';
  width: 22px;
  height: 22px;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
