import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: { marginTop: 40 },
  input: {
    textAlign: 'center',
    color: 'red',
  },
  itemContainer: {
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  noMyRewards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
