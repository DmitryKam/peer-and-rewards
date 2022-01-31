import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  itemsContainer: {
    marginLeft: theme.spacing(2),
  },
  userContainer: { marginBottom: theme.spacing(2) },
  dateMoment: {
    cursor: 'pointer',
  },
}));
