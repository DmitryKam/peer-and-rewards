import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  indicatorSpan: {
    maxWidth: 40,
    width: '100%',
  },
  tab: {
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
    border: '2px solid black',
    borderRadius: 30,
    padding: '5px 20px 5px 20px',
    boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
    marginBottom: 5,
    width: 150,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      transition: 'all 200ms ease',
      cursor: 'pointer',
      border: 'none',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'red',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(12),
      width: 120,
    },
  },
}));
