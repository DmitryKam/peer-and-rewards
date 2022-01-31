import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  indicatorSpan: {
    width: '100%',
  },
  tab: {
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(14),
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 30,
    padding: theme.spacing(1.25, 2.5),
    boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
    marginBottom: theme.spacing(0.75),
    width: '155px',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
      transition: 'all 200ms ease',
      cursor: 'pointer',
      border: 'none',
    },
    '&.Mui-focusVisible': {
      backgroundColor: `${theme.palette.primary.main}`,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(12),
      width: '120px',
    },
  },
}));
