import React from 'react';

import { Autocomplete, Backdrop, Dialog, Grid, InputAdornment } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';

import { Button } from '../../common/button/Button';
import { TextField } from '../../common/textField/TextField';
import { validationSchema } from '../../validation/rewardsValidation';
import { ErrorItem } from './ErrorItem/ErrorItem';
import { initialFormValues, textFieldNames } from './InitialFormValues';
import { useStyles } from './ModalForm.styles';
import { ModalFormPropsType } from './types';

export const RewardsDialog = React.memo(
  ({ open, handleClose, addRewardToEmployee, autocompleteData }: ModalFormPropsType) => {
    const classes = useStyles();

    const { resetForm, touched, errors, handleSubmit, setFieldValue, getFieldProps } = useFormik({
      initialValues: initialFormValues,
      validationSchema: validationSchema(autocompleteData),
      onSubmit: (values) => {
        const { toEmployee, amount, why } = values;
        addRewardToEmployee(toEmployee, Number(amount), why);

        resetForm();
        handleClose();
      },
    });

    const closeModal = () => {
      handleClose();
      resetForm();
    };

    const getErrorMessage = (fieldId: keyof typeof initialFormValues) => {
      if (Boolean(touched[fieldId]) && Boolean(errors[fieldId])) {
        const error = errors[fieldId];

        if (Array.isArray(error)) {
          return error.join(', ');
        }
        const fieldName = textFieldNames[fieldId];
        const [fieldError = '', errorMessage = ''] = String(errors[fieldId]).split(fieldId);

        if (!errorMessage) {
          return fieldError as string;
        }

        return `${fieldName} ${errorMessage}` as string;
      }

      return '';
    };

    return (
      <Dialog
        open={open}
        onClose={closeModal}
        classes={{
          paper: classes.dialog,
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Grid>
          <Typography variant={'h5'} className={classes.dialogTitle} textAlign={'center'}>
            User reward
          </Typography>

          <form className={classes.root} onSubmit={handleSubmit}>
            <Typography variant={'subtitle1'} className={classes.itemTitle} textAlign={'center'}>
              Whom to reward
            </Typography>

            <Autocomplete
              disablePortal
              fullWidth={true}
              onChange={(event, value) => {
                setFieldValue('toEmployee', value);
              }}
              isOptionEqualToValue={(option, value) => option === value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  key={new Date().getDate()}
                  id="toEmployee"
                  type="text"
                  label={'To user'}
                  fullWidth={true}
                  error={Boolean(getErrorMessage('toEmployee'))}
                  {...getFieldProps('toEmployee')}
                />
              )}
              options={autocompleteData}
            />
            {touched.toEmployee && errors.toEmployee && (
              <ErrorItem>Enter correct employee</ErrorItem>
            )}

            <Typography variant={'subtitle1'} className={classes.itemTitle}>
              Reward
            </Typography>
            <TextField
              id="amount"
              type="number"
              label={'Reward'}
              fullWidth={true}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              error={Boolean(getErrorMessage('amount'))}
              {...getFieldProps('amount')}
            />
            {touched.amount && errors.amount && <ErrorItem>{errors.amount}</ErrorItem>}

            <Typography variant={'subtitle1'} className={classes.itemTitle}>
              Describe what you want to reward
            </Typography>
            <TextField
              id="why"
              multiline
              label={'Why'}
              rows={4}
              fullWidth={true}
              error={Boolean(getErrorMessage('why'))}
              {...getFieldProps('why')}
            />
            {touched.why && errors.why && <ErrorItem>{errors.why}</ErrorItem>}

            <Grid container justifyContent={'center'} className={classes.buttonContainer}>
              <Button type={'submit'}>Reward</Button>
            </Grid>
          </form>
        </Grid>
      </Dialog>
    );
  },
);
