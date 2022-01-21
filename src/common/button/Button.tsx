import { Button as MuiButton, ButtonProps } from '@mui/material';
import clsx from 'clsx';

import { useStyles } from './Button.styles';

export const Button = ({ className = '', children = '', onClick, ...props }: ButtonProps) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant="contained"
      color="primary"
      className={clsx({
        [className]: true,
        [classes?.default]: true,
      })}
      onClick={onClick}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
