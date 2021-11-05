import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 25,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 25,
      },
    },
  }),
);
