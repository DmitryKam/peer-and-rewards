import React from 'react';

import { ButtonUnstyled, buttonUnstyledClasses, ButtonUnstyledProps } from '@mui/material';
import { styled } from '@mui/system';

const PrimaryButtonRoot = styled('button')(`
  background-color: #ffc126;
  padding: 15px 40px 15px 40px;
  border-radius: 10px;
  color: #000a34;
  font-weight: bold;
  font-family: Circular Std,sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  width: 135px;

  &:hover {
    background-color: #ffdb80;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #ffc126;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

export const PrimaryButton: React.FC<ButtonUnstyledProps> = (props) => {
  return <ButtonUnstyled {...props} component={PrimaryButtonRoot} />;
};
