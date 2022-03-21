import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Wrapper } from './styles';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  return createPortal(
    isOpen && (
      <Wrapper>
        <Overlay />
        {children}
      </Wrapper>
    ),
    document.getElementById('portal') as Element,
  );
};

export default Modal;
