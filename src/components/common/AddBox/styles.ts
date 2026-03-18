import styled from 'styled-components';

export const Box = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 200px;
  border: 2px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
  }

  @media (min-width: 640px) {
    max-width: 280px;
  }
`;

export const AddCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  line-height: 1;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.border};
  color: white;
  transition: var(--transition);

  ${Box}:hover & {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: rotate(90deg);
  }
`;

export const BoxLabel = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;
