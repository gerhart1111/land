import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';


export const useStyles = makeStyles<Theme>(theme => {
  return {
    button: {
      marginRight: '0.5rem',
      //backgroundColor: theme.text.secondary,
      '& .MuiButton-label': {
        fontSize: '0.7rem',
        color: theme.palette.background.paper,
      },
      '&:disabled': {
        backgroundColor: 'rgb(0, 121, 118)',
      }
    },
    declineButton: {
      '&:hover': {
        backgroundColor: '#ff5d75',
      },
      '&:disabled': {
        backgroundColor: '#9d4144',
      }
    },
  };
});
