import { makeStyles } from '@mui/styles';

export const useStylesApp = makeStyles({
  root: { display: 'flex', flexDirection: 'column' },
});

export const useStylesFellAndRewards = makeStyles({
  root: { marginTop: 40 },
  iconContainer: {
    position: 'relative',
  },
  iconPosition: { position: 'absolute', right: 90, top: 27, zIndex: 999 },
  input: {
    textAlign: 'center',
    color: 'red',
  },
  itemContainer: {
    borderRadius: 20,
    height: 500,
    backgroundColor: '#f2f2f2',
  },
  tabsContainer: { marginLeft: 120 },
});

export const useStylesTabPanel = makeStyles({
  root: {
    padding: '10px 40px 30px 30px',
  },
});

export const useStylesFeedItem = makeStyles({
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

export const useStylesEmployee = makeStyles({
  avatar: { margin: '0 20px 20px 20px' },
  employeeContainer: {
    display: 'flex',
    marginTop: 50,
    marginLeft: 100,
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoContainer: {
    display: 'flex',
    '@media (max-width: 705px)': {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  rewardsContainer: {
    marginLeft: 80,
    '@media (max-width: 705px)': {
      marginLeft: 80,
      marginBottom: 10,
    },
  },
  moneyFontSize: {
    fontSize: 24,
    '@media (max-width: 705px)': {
      fontSize: 20,
    },
  },
  cashContainer: {
    marginLeft: 150,
    '@media (max-width: 705px)': {
      marginLeft: 80,
    },
  },
});

export const useStylesLayout = makeStyles({
  root: { width: '85%', alignSelf: 'center' },
});

export const useStylesHeaderBar = makeStyles({
  appBarContainer: { display: 'flex', alignItems: 'center' },
  appBarText: { color: '#fff' },
});

export const useStylesModalForm = makeStyles({
  root: { padding: 20 },
  buttonContainer: {
    marginTop: 40,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
} as never;

export const fabStyle = { backgroundColor: '#f8f8f8', border: '2px solid #696969' };
export const appBarColor = { backgroundColor: '#461818' };
