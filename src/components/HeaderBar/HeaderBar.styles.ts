import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  appBarContainer: {
    backgroundColor: theme.palette.background.default,
  },
  appBarText: {
    color: theme.palette.text.primary,
    flexGrow: 1,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontFamily: 'Circular Std,sans-serif',
    marginLeft: 20,
  },
}));
