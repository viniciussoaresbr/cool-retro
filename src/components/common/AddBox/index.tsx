import React from 'react';
import { AddCircle, Box, BoxLabel } from './styles';

interface Props {
  boxText?: string;
  handleClick: () => void;
}

const AddBox = ({ boxText, handleClick }: Props) => {
  return (
    <Box onClick={handleClick}>
      <BoxLabel>{boxText}</BoxLabel>
      <AddCircle>+</AddCircle>
    </Box>
  );
};

export default AddBox;
