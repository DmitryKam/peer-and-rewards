import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
  dialog: {
    minWidth: '430px',
    backgroundColor: theme.palette.primary.light,
    backgroundImage: 'none',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
    },
    maxWidth: '500px',
  },
  dialogTitle: {
    marginTop: theme.spacing(3),
  },
  itemTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: theme.spacing(5),
  },
}));
