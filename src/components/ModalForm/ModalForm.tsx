import React from 'react';

import {
  Autocomplete,
  Backdrop,
  Box,
  Fade,
  InputAdornment,
  Modal,
  OutlinedInput,
  TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { boxStyle } from '../../styles/styles';
import { ErrorItem } from './ErrorItem/ErrorItem';
import { useStyles } from './ModalForm.styles';
import { ModalFormPropsType } from './types';

const validationSchema = (validationString: string[]) => {
  return Yup.object().shape({
    toEmployee: Yup.string().required('Enter name').oneOf(validationString),
    amount: Yup.number().min(1, 'Minimum amount of currency 1 $').required('Enter amount'),
    why: Yup.string().min(2, 'The minimum number of characters is 3!').required('Write text'),
  });
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
      validationSchema: validationSchema(autocompleteData),
    });
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
                    name="toEmployee"
                    type="text"
                    color={'secondary'}
                    onChange={formik.handleChange}
                    value={formik.values.toEmployee}
                    fullWidth={true}
                    error={!!formik.errors.toEmployee}
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
                name="amount"
                type="number"
                color={'secondary'}
                onChange={formik.handleChange}
                value={formik.values.amount}
                fullWidth={true}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                inputProps={{
                  'data-testid': 'amount',
                }}
                error={!!formik.errors.amount}
              />
              {formik.touched.amount && formik.errors.amount && (
                <ErrorItem>{formik.errors.amount}</ErrorItem>
              )}
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Why?
              </Typography>
              <TextField
                id="why"
                name="why"
                multiline
                onChange={formik.handleChange}
                value={formik.values.why}
                placeholder={'Why?'}
                rows={4}
                color={'secondary'}
                fullWidth={true}
                inputProps={{ 'data-testid': 'why' }}
                error={!!formik.errors.why}
              />
              {formik.touched.why && formik.errors.why && (
                <ErrorItem>{formik.errors.why}</ErrorItem>
              )}
              <div className={classes.buttonContainer}>
                <PrimaryButton type={'submit'}>Reward</PrimaryButton>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
  },
);
