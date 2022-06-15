import React from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../../../interfaces';
import { Overlay, Wrapper } from './styles';

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
