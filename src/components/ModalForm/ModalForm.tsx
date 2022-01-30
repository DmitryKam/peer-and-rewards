import React from 'react';

import {
  Autocomplete,
  Backdrop,
  Box,
  Fade,
  InputAdornment,
  Modal,
  OutlinedInput,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../../common/button/Button';
import { TextField } from '../../common/textField/TextField';
import { boxStyle } from '../../styles/styles';
import { ErrorItem } from './ErrorItem/ErrorItem';
import { useStyles } from './ModalForm.styles';
import { ModalFormPropsType } from './types';

const validationSchema = (validationString: string[]) => {
  return Yup.object().shape({
    toEmployee: Yup.string().required('Enter name').oneOf(validationString),
    amount: Yup.number()
      .required()
      .min(1, 'Minimum amount of currency 1 $')
      .required('Enter amount'),
    why: Yup.string()
      .required()
      .min(2, 'The minimum number of characters is 3!')
      .required('Write text'),
  });
};

const initialFormValues = {
  toEmployee: '',
  amount: null,
  why: '',
};

const textFieldNames = {
  toEmployee: 'toEmployee',
  amount: 'amount',
  why: 'why',
};

export const ModalForm: React.FC<ModalFormPropsType> = React.memo(
  ({ open, handleClose, addRewardToEmployee, autocompleteData, amount }) => {
    const classes = useStyles();
    const formik = useFormik({
      initialValues: {
        toEmployee: '',
        amount: '',
        why: '',
      },
      validationSchema: validationSchema(autocompleteData),
      onSubmit: (values) => {
        addRewardToEmployee(values.toEmployee, +values.amount, values.why);
        if (amount < +values.amount) {
          return;
        }
        values.toEmployee = '';
        values.amount = '';
        values.why = '';
        handleClose();
      },
    });

    const closeModal = () => {
      handleClose();
      formik.resetForm();
    };

    const getErrorMessage = (fieldId: keyof typeof initialFormValues) => {
      if (Boolean(formik.touched[fieldId]) && Boolean(formik.errors[fieldId])) {
        const error = formik.errors[fieldId];

        if (Array.isArray(error)) {
          return error.join(', ');
        }
        const fieldName = textFieldNames[fieldId];
        const [fieldError = '', errorMessage = ''] = String(formik.errors[fieldId]).split(fieldId);

        if (!errorMessage) {
          return fieldError as string;
        }

        return `${fieldName} ${errorMessage}` as string;
      }

      return '';
    };

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            <form className={classes.root} onSubmit={formik.handleSubmit}>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                To
              </Typography>
              <Autocomplete
                disablePortal
                color={'purple'}
                fullWidth={true}
                onChange={(event, value) => {
                  formik.setFieldValue('toEmployee', value);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    key={new Date().getDate()}
                    id="toEmployee"
                    type="text"
                    color={'secondary'}
                    fullWidth={true}
                    error={Boolean(getErrorMessage('toEmployee'))}
                    {...formik.getFieldProps('toEmployee')}
                  />
                )}
                options={autocompleteData}
              />
              {formik.touched.toEmployee && formik.errors.toEmployee && (
                <ErrorItem>Enter correct employee</ErrorItem>
              )}
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Reward
              </Typography>
              <OutlinedInput
                id="amount"
                type="number"
                color={'secondary'}
                fullWidth={true}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                inputProps={{
                  'data-testid': 'amount',
                }}
                error={Boolean(getErrorMessage('amount'))}
                {...formik.getFieldProps('amount')}
              />
              {formik.touched.amount && formik.errors.amount && (
                <ErrorItem>{formik.errors.amount}</ErrorItem>
              )}
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Why?
              </Typography>
              <TextField
                id="why"
                multiline
                placeholder={'Why?'}
                rows={4}
                color={'secondary'}
                fullWidth={true}
                inputProps={{ 'data-testid': 'why' }}
                error={Boolean(getErrorMessage('why'))}
                {...formik.getFieldProps('why')}
              />
              {formik.touched.why && formik.errors.why && (
                <ErrorItem>{formik.errors.why}</ErrorItem>
              )}
              <div className={classes.buttonContainer}>
                <Button type={'submit'}>Reward</Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
  },
);
