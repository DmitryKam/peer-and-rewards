import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    height: 400,
    maxWidth: 500,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px 50px 50px 50px',
  },
  text: {
    marginBottom: 40,
    fontFamily: 'Circular Std,sans-serif',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: { alignSelf: 'center' },
}));
