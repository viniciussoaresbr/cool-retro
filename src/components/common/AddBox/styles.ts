import styled from 'styled-components';

export const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.2rem;
  width: 15rem;
  height: 10rem;
  border-width: 2px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.primary};
  margin: 0.5rem;
  cursor: pointer;
  transition: ease 0.2s;
  transform: scale(0.95);
  &:hover {
    transform: scale(1);
  }
`;

export const AddCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 2rem ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.light};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BoxLabel = styled.label`
  font: 1rem ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.primary};
`;
