import React from 'react';

import { Menu, MenuItem } from '@mui/material';

import { MenuPropsType } from './types';

const AppMenu: React.FC<MenuPropsType> = ({ anchorEl, open, handleClose, logoutMenu, auth }) => {
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {auth && <MenuItem onClick={handleClose}>Profile</MenuItem>}
        {auth && <MenuItem onClick={logoutMenu}>Logout</MenuItem>}
        {!auth && <MenuItem onClick={() => {}}>Empty</MenuItem>}
      </Menu>
    </>
  );
};

export default AppMenu;
