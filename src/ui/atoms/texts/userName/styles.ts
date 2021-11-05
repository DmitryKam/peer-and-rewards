import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 18,
      color: '#282323',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  }),
);
