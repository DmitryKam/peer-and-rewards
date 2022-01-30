import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
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
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
}));
