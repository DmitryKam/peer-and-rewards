import React, { SyntheticEvent } from 'react';

import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';

import { resetError } from '../../store/actions';
import { AppRootStateType } from '../../store/store';
import { Alert } from './Alert/Alert';

export const ErrorSnackBar = () => {
  const errors = useSelector((state: AppRootStateType) => state.app.errors);
  const dispatch = useDispatch();

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(resetError());
  };

  return (
    <Snackbar
      data-testid={'snack-bar'}
      open={!!errors}
      autoHideDuration={6000}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert onClose={handleClose} severity="warning">
        {errors}
      </Alert>
    </Snackbar>
  );
};
