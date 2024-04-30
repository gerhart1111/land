import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>(theme => {
  return {
    input: {
      '& .MuiInput-root': {
        fontFamily: 'Roboto-Regular, sans-serif',
        fontSize: '0.9rem',
        padding: 0,
        boxShadow: 'none',
      },
      '& .MuiInput-input': {
        padding: '7px 14px',
      },
      '& .MuiIconButton-root': {
        padding: 0,
        marginRight: 'unset',
      },
      '&.MuiInput-underline.Mui-disabled:before': {
        borderBottom: 'none',
      },
    },
    inputs: {
      color: '#000000',
      display: 'flex',
      margin: '1.5rem 0 1rem',
      gap: '0.5rem',
      '@media (max-width:959px)': {
        marginBottom: '0.5rem',
        '& > div:first-child > .MuiInput-root': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
        '& > div:nth-child(2) > .MuiInput-root': {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      },
      '& .MuiInput-underline.Mui-disabled:before': {
        borderBottom: 'none',
      },
    },
    autocomplete: {
      maxWidth: '16.375rem',
      width: '42%',
      height: '2rem',
      '& .MuiAutocomplete-endAdornment': {
        top: 'unset',
      },
      '& .MuiAutocomplete-inputRoot': {
        paddingRight: '1.5rem !important',
      },
      '& .MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd':
        {
          padding: '7px 14px',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          //color: theme.text.secondary,
          '&::placeholder': {
           // color: theme.input.placeholderColor,
            opacity: 1,
          },
        },
      '@media (max-width:959px)': {
        marginRight: 0,
        marginBottom: '0.5rem',
        width: '100%',
      },
      '& .MuiInput-underline.Mui-disabled:before': {
        borderBottom: 'none',
      },
    },
    autocompleteRtl: {
      maxWidth: '16.375rem',
      width: '42%',
      height: '2rem',
      '& .MuiAutocomplete-endAdornment': {
        top: 'unset',
      },
      '& .MuiAutocomplete-inputRoot': {
        paddingLeft: '1.5rem !important',
        paddingRight: '0 !important',
      },
      '& .MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd':
        {
          padding: '7px 14px',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          //color: theme.text.secondary,
          '&::placeholder': {
           // color: theme.input.placeholderColor,
            opacity: 1,
          },
        },
      '@media (max-width:959px)': {
        marginRight: 0,
        marginBottom: '0.5rem',
        width: '100%',
      },
      '& .MuiInput-underline.Mui-disabled:before': {
        borderBottom: 'none',
      },
    },
    categoryAutocomplete: {
      width: '11.125rem',
      '& .MuiInput-root': {
        border: 'none',
        color: '#fff',
        backgroundColor: '#b6bec5',
      },
      '& .MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd':
        {
          color: '#fff',
          '&::placeholder': {
            color: '#fff',
          },
        },
      '& .MuiIconButton-root': {
        marginRight: '0.25rem',
        '& .MuiSvgIcon-root': {
          color: '#fff',
        },
      },
      '@media (max-width:959px)': {
        '&:first-child': {
          marginRight: '0.5rem',
        },
      },
      '& .MuiInput-underline.Mui-disabled:before': {
        borderBottom: 'none',
      },
    },
    button: {
      padding: '0.5rem 0.9rem 0.5rem 1.2rem',
      height: '2rem',
      //backgroundColor: theme.text.secondary,
      '& .MuiButton-label': {
        fontSize: '0.75rem',
        display: 'flex',
        gap: '1.2rem',
      },
      '@media (max-width:959px)': {
        marginLeft: '0.25rem',
        padding: '0.5rem',
        minWidth: 'auto',
      },
    },
  };
});
