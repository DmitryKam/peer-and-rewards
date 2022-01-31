import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
  },
  position: {
    position: 'absolute',
    right: 90,
    top: 27,
    zIndex: 999,
    [theme.breakpoints.down('sm')]: {
      right: 8,
      top: -2,
    },
  },
}));
