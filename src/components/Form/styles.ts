import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  gap: 1.25rem;
  z-index: 10;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  color: ${({ theme }) => theme.colors.text};
`;

interface InputProps {
  validation?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme, validation }) => 
    validation ? theme.colors.red : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: var(--transition);

  &:focus {
    border-color: ${({ theme, validation }) => 
      validation ? theme.colors.red : theme.colors.secondary};
    box-shadow: 0 0 0 3px ${({ theme, validation }) => 
      validation ? theme.colors.red : theme.colors.secondary}33;
  }
`;

export const StyledTextArea = styled.textarea<InputProps>`
  width: 100%;
  height: 6rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme, validation }) => 
    validation ? theme.colors.red : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  resize: none;
  transition: var(--transition);

  &:focus {
    border-color: ${({ theme, validation }) => 
      validation ? theme.colors.red : theme.colors.secondary};
    box-shadow: 0 0 0 3px ${({ theme, validation }) => 
      validation ? theme.colors.red : theme.colors.secondary}33;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.25rem;
  transition: var(--transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Warning = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.red};
  margin-top: -0.25rem;
`;
