import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
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
      right: -15,
      top: -3,
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
