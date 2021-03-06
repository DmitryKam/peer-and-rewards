import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignSelf: 'center',
    margin: theme.spacing(0, 5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 2),
    },
  },
}));
