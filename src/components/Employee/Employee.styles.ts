import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
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
