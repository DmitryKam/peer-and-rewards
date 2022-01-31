import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },

  avatar: { margin: theme.spacing(0, 2.5, 2.5, 2.5), width: 86, height: 86 },

  userAmount: {
    color: theme.palette.primary.main,
  },
}));
