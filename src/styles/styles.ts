import { makeStyles } from '@mui/styles';

export const useStylesApp = makeStyles({
  root: { display: 'flex', flexDirection: 'column' },
});

export const useStylesFellAndRewards = makeStyles({
  root: { marginTop: 40 },
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

export const useStylesLayout = makeStyles({
  root: { width: '85%', alignSelf: 'center' },
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

export const alertWidth = { width: '100%' };
