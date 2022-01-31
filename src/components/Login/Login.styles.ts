import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    height: '400px',
    maxWidth: '500px',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(7),
  },
  text: {
    marginBottom: 40,
    fontFamily: 'Circular Std,sans-serif',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: { alignSelf: 'center' },
}));
