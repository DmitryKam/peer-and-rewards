import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
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
