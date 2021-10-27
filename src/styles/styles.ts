import { makeStyles } from '@mui/styles';

export const useStylesApp = makeStyles({
  root: { display: 'flex', flexDirection: 'column' },
});

export const useStylesFellAndRewards = makeStyles({
  root: { marginTop: 40 },
  iconContainer: {
    position: 'relative',
  },
  iconPosition: {
    position: 'absolute',
    right: 90,
    top: 27,
    zIndex: 999,
    '@media (max-width: 650px)': {
      right: 5,
      top: 60,
    },
  },
  input: {
    textAlign: 'center',
    color: 'red',
  },
  itemContainer: {
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  tabsContainer: { marginLeft: 120 },
  noMyRewards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Circular Std,sans-serif',
    fontSize: 20,
  },
});

export const useStylesTabPanel = makeStyles({
  root: {
    padding: '10px 40px 30px 30px',
    height: 400,
    overflowY: 'auto',
    margin: 0,
    listStyle: 'none',
    '&::-webkit-scrollbar': {
      width: 9,
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#911b91',
      borderRadius: 10,
      outline: '1px solid #911b91',
    },
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
    fontFamily: 'Circular Std,sans-serif',
    fontSize: 18,
    '@media (max-width: 580px)': {
      marginLeft: 20,
    },
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
    color: '#911b91',
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
  textPosition: { marginBottom: 10 },
});

export const useStylesLayout = makeStyles({
  root: { width: '85%', alignSelf: 'center' },
});

export const useStylesHeaderBar = makeStyles({
  appBarContainer: { display: 'flex', alignItems: 'center' },
  appBarText: {
    color: '#000a34',
    flexGrow: 1,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 0.3,
    fontFamily: 'Circular Std,sans-serif',
    marginLeft: 20,
    '@media (max-width: 580px)': {
      fontSize: 16,
    },
  },
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

export const useStylesLogin = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    height: 400,
    maxWidth: 500,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px 50px 50px 50px',
  },
  text: {
    marginBottom: 40,
    fontFamily: 'Circular Std,sans-serif',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: { alignSelf: 'center' },
});
export const useStylesErrorItem = makeStyles({
  root: { marginTop: 10, color: 'tomato' },
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
export const appBarColor = { backgroundColor: '#f5f5f5' };
export const avatarSize = { width: 86, height: 86 };
export const avatarItemSize = { width: 56, height: 56 };
export const alertWidth = { width: '100%' };
export const burgerMenuButtonColor = { color: '#911b91' };
export const headerBarFlexGrow = { flexGrow: 1 };
export const headerBarIconButton = { mr: 2 };
