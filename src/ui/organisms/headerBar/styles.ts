import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
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
    '@media (max-width: 580px)': {
      fontSize: 16,
    },
  },
});

export const headerBarFlexGrow = { flexGrow: 1 };
export const appBarColor = { backgroundColor: '#f5f5f5' };
