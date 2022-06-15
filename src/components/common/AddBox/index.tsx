import React from 'react';
import { AddBoxProps } from '../../../interfaces';
import { AddCircle, Box, BoxLabel } from './styles';

const AddBox = ({ boxText, handleClick }: AddBoxProps) => {
  return (
    <Box onClick={handleClick}>
      <BoxLabel>{boxText}</BoxLabel>
      <AddCircle>+</AddCircle>
    </Box>
  );
};

export default AddBox;
