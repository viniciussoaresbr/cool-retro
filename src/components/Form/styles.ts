import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.3rem;
  padding: 0.5rem;
  z-index: 1;
`;

interface LabelProps {
  align?: string;
  fontSize?: string;
}

export const StyledLabel = styled.label<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  align-self: ${({ align }) => (align ? align : 'start')};
  margin: 0.5rem 0;
`;

interface InputProps {
  inputWidth?: string;
  validation?: object | undefined;
}

export const StyledInput = styled.input<InputProps>`
  width: ${({ inputWidth }) => (inputWidth ? inputWidth : '100%')};
  height: 2.5rem;
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.validation ? props.theme.colors.red : props.theme.colors.primary};
  font: 1rem ${({ theme }) => theme.fonts.default};
  border-radius: 0.3rem;
`;

interface DescriptionProps {
  validation?: object | undefined;
}

export const StyledTextArea = styled.textarea<DescriptionProps>`
  width: 100%;
  height: 8rem;
  resize: none;
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.validation ? props.theme.colors.red : props.theme.colors.primary};
  font: 1rem ${({ theme }) => theme.fonts.default};
  font: 1rem ${({ theme }) => theme.fonts.default};
  border-radius: 0.3rem;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  font: 1.2rem ${({ theme }) => theme.fonts.default};
  margin: 0.5rem 0;
  align-self: center;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CloseIcon = styled.span`
  top: 0.2rem;
  right: 0.2rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  font: 1.2rem ${({ theme }) => theme.fonts.default};
  cursor: pointer;
  transition: ease 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

export const Warning = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.3rem;
  font: 1rem ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.red};
`;
