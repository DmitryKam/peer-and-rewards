import { makeStyles } from '@mui/styles';

export const useStylesApp = makeStyles({
  root: { display: 'flex', flexDirection: 'column' },
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
