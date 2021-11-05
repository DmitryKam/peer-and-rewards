import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: { margin: '0 20px 20px 20px' },
});

export const avatarSize = { width: 86, height: 86 };
