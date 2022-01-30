import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  default: {
    padding: theme.spacing('13px', 4),
    borderRadius: theme.spacing(2.5),
    fontWeight: 500,
    lineHeight: '14px',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
}));
