import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

export const TextField = ({
  label = '',
  placeholder = '',
  onChange,
  value,
  ...props
}: TextFieldProps) => {
  return (
    <MuiTextField
      fullWidth
      label={label as string}
      placeholder={placeholder as string}
      value={value}
      variant="outlined"
      onChange={onChange}
      {...props}
    />
  );
};
