import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';


interface StyleProps {
  isOpen: boolean;
  popupIndicator: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>(theme => {
  return {
    autocomplete: {
      height: '2rem',
      '& .MuiAutocomplete-endAdornment': {
        top: 'unset',
        right: 6,
      },

      '& .MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd':
        {
          padding: '7px 14px',
          //color: theme.text.secondary,
          '&::placeholder': {
           // color: theme.input.placeholderColor,
            opacity: 1,
          },
        },
      '& .MuiAutocomplete-inputRoot': {
        //backgroundColor: theme.input.backgroundColor,
      },
      '@media (max-width:959px)': {
        marginRight: 0,
        marginBottom: '0.5rem',
        width: '100%',
      },
    },
    autocompleteError: {
      '& .MuiInput-root': {
        borderColor: 'red',
      }
    },
    categoryAutocomplete: {
      width: '11.125rem',
      '@media (max-width:959px)': {
        '&:first-child': {
          marginRight: '0.5rem',
        },
      },
    },
    popupIndicator: {
      '& span': {
        '& svg': {
          '& path': {
            d: props =>
              props.isOpen
                ? "path('M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')"
                : "path('M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z')",
          },
        },
      },
    },
    listbox: {
      fontSize: '0.9rem',
      '& .MuiAutocomplete-listbox': {
        paddingBottom: 0,
        '& .MuiAutocomplete-option': {
          minHeight: '2rem',
        },
      },
      '& .MuiAutocomplete-noOptions': {
        padding: '0.5rem 1rem',
      },
    },
  };
});
