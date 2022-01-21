import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  appBarContainer: { display: 'flex', alignItems: 'center' },
  appBarText: {
    color: '#000a34',
    flexGrow: 1,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 0.3,
    fontFamily: 'Circular Std,sans-serif',
    marginLeft: 20,
    [theme.breakpoints.down('mobile')]: {
      fontSize: 12,
    },
  },
}));
