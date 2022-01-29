import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: { display: 'flex', marginTop: 30 },
  feedContainer: { display: 'flex', flexDirection: 'column', marginLeft: 15 },
  userContainer: { display: 'flex', flexDirection: 'column', marginBottom: 15 },
  feedInfo: { maxWidth: 750 },
  dateStyle: { width: 120 },
  dateMoment: {
    fontSize: 13,
    cursor: 'pointer',
  },
});
