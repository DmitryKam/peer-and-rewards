import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { colors } from '../../../themeConfig/colors';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
  },
  position: {
    position: 'absolute',
    right: 90,
    top: 27,
    zIndex: 999,
    [theme.breakpoints.down('sm')]: {
      right: 8,
      top: -2,
    },
  },
  icon: { backgroundColor: colors.white, border: `2px solid ${colors.primaryRed}` },
}));
