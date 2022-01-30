import React, { SyntheticEvent } from 'react';

import Snackbar from '@mui/material/Snackbar';
import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../store/store';
import { alertWidth } from '../../styles/styles';
import { Alert } from './Alert/Alert';

type HandleClosePropsType = {
  handleClose: (event: SyntheticEvent<Element, Event>, reason?: string) => void;
};

export const ErrorSnackBar: React.FC<HandleClosePropsType> = ({ handleClose }) => {
  const errors = useSelector((state: AppRootStateType) => state.app.errors);

  return (
    <Snackbar
      data-testid={'snack-bar'}
      open={!!errors}
      autoHideDuration={6000}
      // onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert onClose={handleClose} severity="warning" sx={alertWidth}>
        {errors}
      </Alert>
    </Snackbar>
  );
};
