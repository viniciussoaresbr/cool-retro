import styled from 'styled-components';

export const RetroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const RetroHeader = styled.header`
  width: 100%;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  @media (max-width: 430px) {
    flex-direction: column;
    min-height: 10rem;
    justify-content: space-between;
  }
`;

interface RetroProps {
  fontSize?: string;
  margin?: string;
}

export const RetroLabel = styled.label<RetroProps>`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size:  ${({ fontSize }) => (fontSize ? fontSize : '1.3rem')}
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  margin-left: ${({ margin }) => (margin ? margin : '1.5rem')};
  margin-right: 1rem;
`;

export const RetroTitle = styled.h1`
  font: 1.1rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  word-break: break-word;
`;

export const RetroDescription = styled.p`
  font: 1.1rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  word-break: break-word;
`;

export const RetroVotes = styled.p`
  font: 1.1rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

export const RetroForm = styled.form`
  width: 50%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 1rem;
  border-radius: 0.3rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 9rem;
  }

  @media (max-width: 425px) {
    width: 96%;
  }
`;

export const RetroInput = styled.input`
  width: 70%;
  height: 2rem;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  font: 1.1rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.3rem;
  outline: none;
  transition: ease 0.3s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }

  @media (max-width: 630px) {
    width: 90%;
    height: 3rem;
  }
`;

export const RetroButton = styled.button`
  font: 1rem ${({ theme }) => theme.fonts.default};
  width: 8rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  cursor: pointer;
  transition: ease 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: 630px) {
    width: 90%;
    height: 3rem;
    margin-right: 0;
  }
`;

export const DragDrogContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const DragDrogColumns = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ColumnsLabel = styled.label`
  font: 1.3rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  margin: 1rem 0;
`;

export const ColumnsContainer = styled.div`
  margin: 0.5rem;
  border-radius: 0.5rem;
`;

interface DragDrogProps {
  isDragging: boolean;
}

export const DroppableArea = styled.div<DragDrogProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  min-height: 100vh;
  padding: 0.3rem;
  border-radius: 0.3rem;
  transition: ease 0.2s;
  background-color: ${({ isDragging }) =>
    isDragging ? '#C0D2D8' : '#D8E3E7 '};
`;
