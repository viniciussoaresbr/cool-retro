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
  width: 80%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 1rem;
  border-radius: 0.3rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 840px) {
    width: 100%;
  }

  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: space-around;
    height: 10rem;
  }
`;

export const RetroInput = styled.input`
  width: 40%;
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
    height: 4rem;
    margin: 0.5rem 0;
  }
`;

export const RadioButtonContainer = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ced4da};
  margin: 0 0.5rem;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ced4da;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: #eeeeee;
    }
  }
  ${props =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #51C4D3;
      border: 1px solid #51C4D3;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;

export const RetroButton = styled.button`
  font: 1rem ${({ theme }) => theme.fonts.default};
  width: 8rem;
  height: 2rem;
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
    height: 4rem;
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
  allowDraggable?: boolean;
  radioSelect?: string;
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
  background-color: ${({ isDragging, allowDraggable }) => {
    if (allowDraggable) {
      return allowDraggable && isDragging ? '#FBC5C6' : '#D8E3E7 ';
    }
    return isDragging ? '#C0D2D8' : '#D8E3E7 ';
  }};
`;

export const NoteCard = styled.div<DragDrogProps>`
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
`;

export const NoteText = styled.p`
  font: 1.2rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.light};
`;

export const EvaluateArea = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  background-color: #c0d2d8;
  margin: 1rem 0;
  @media (max-width: 745px) {
    min-height: 8rem;
  }
  @media (max-width: 400px) {
    min-height: 15rem;
  }
`;

interface EvaluateButtonProps {
  allowDraggable?: boolean;
}

export const EvaluateRetroButton = styled.button<EvaluateButtonProps>`
  padding: 0 0.3rem;
  height: 2rem;
  margin: 1rem 2rem;
  font: 1.3rem ${({ theme }) => theme.fonts.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  background-color: ${({ theme, allowDraggable }) =>
    allowDraggable ? '#ba181b' : theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 0.2rem;
  cursor: pointer;

  @media (max-width: 1200px) {
    min-width: 10rem;
  }
`;

export const EvaluateRetroText = styled.p`
  font: 1.2rem ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  margin: 1rem 0;
  @media (max-width: 670px) {
    font: 1rem ${({ theme }) => theme.fonts.default};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
  }
`;
