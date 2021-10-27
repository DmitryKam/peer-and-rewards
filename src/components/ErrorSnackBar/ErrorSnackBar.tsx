import React, { useContext } from 'react';

import Snackbar from '@mui/material/Snackbar';

import { AppContext } from '../../store/appContext/appContext';
import { alertWidth } from '../../styles/styles';
import { Alert } from './Alert/Alert';

type HandleClosePropsType = {
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
};

export const ErrorSnackBar: React.FC<HandleClosePropsType> = ({ handleClose }) => {
  const { state } = useContext(AppContext);
  return (
    <Snackbar
      data-testid={'snack-bar'}
      open={!!state.errors}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert onClose={handleClose} severity="warning" sx={alertWidth}>
        {state.errors}
      </Alert>
    </Snackbar>
  );
};
