import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
  root: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 90,
    top: 33,
    zIndex: 999,
    '@media (max-width: 650px)': {
      right: 5,
      top: 60,
    },
  },
});
