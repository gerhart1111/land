import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

interface StyleProps {
  openAutocomplete: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>(theme => {
  return {
    inputRoot: {
      borderColor: theme.palette.background.paper,
      boxShadow: 'none',
      paddingLeft: 0,
    },

    listbox: {
      fontFamily: 'Roboto-Regular, sans-serif',
      fontSize: '0.8rem',
      padding: 0,
      border: '1px solid #e8e7e7',
      borderRadius: 7,

      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },

      '&::-webkit-scrollbar': {
        display: 'none',
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
    },

    option: {
      padding: '3px 5px',
    },

    input: {
      fontFamily: 'Roboto-Regular, sans-serif',
      fontSize: '1rem',
      cursor: 'pointer',
      color: theme.palette.secondary.main,
    },

    popper: {
      width: 'fit-content !important',
      minWidth: '112px',
      [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        right: 0,
      },
    },

    popupIndicator: {
      '& span': {
        '& svg': {
          marginRight: props => props.openAutocomplete && '0px !important',
          '& path': {
            d: props =>
              props.openAutocomplete
                ? "path('M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')"
                : "path('M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z')",
          },
        },
      },
    },
  };
});
