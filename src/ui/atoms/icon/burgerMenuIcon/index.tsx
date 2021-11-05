import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

import { burgerMenuButtonColor, headerBarIconButton } from './styles';
import { BurgerMenuIconPropsType } from './types';

const BurgerMenuIcon: React.FC<BurgerMenuIconPropsType> = ({ handleClick }) => {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={headerBarIconButton}
      onClick={handleClick}
    >
      <MenuIcon style={burgerMenuButtonColor} />
    </IconButton>
  );
};

export default BurgerMenuIcon;
