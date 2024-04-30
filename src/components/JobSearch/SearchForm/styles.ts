import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => {
  return {
    input: {
      width: '100%',
      '& .MuiInput-root': {
        fontFamily: 'Roboto-Light, Arial, sans-serif',
        fontSize: '14.4px',
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
    },
    autocomplete: {
      maxWidth: '280px',
      width: '42%',
      height: '33px',

      '& .MuiAutocomplete-endAdornment': {
        display: 'none',
      },
      '& .MuiAutocomplete-inputRoot': {
        paddingRight: '0px !important',
        height: "33px",
        backgroundColor: "#E6F1F6",
        borderRadius: "7px",
        border: "none",
        
        '@media (max-width:959px)': { 
          width: '280px', 
          height: '33px', 
          paddingRight: '0px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
        },

        '&:hover': {
          background: '#D6E7EF',
        },
      },

      '& .MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd':
        {
          fontFamily: 'Roboto-Regular',
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "400",
          color: "#5C6268",
          padding: '10px 14px',
          textTransform: "capitalize",

          '&::placeholder': {
            color: "#5C6268",
            opacity: 1,
            fontWeight: "400",
          },

        },

      '@media (max-width:959px)': {
        marginRight: 0,
        marginBottom: '8px',
        width: '100%',
      },

    },
    autocompleteRtl: {
      maxWidth: '262px',
      width: '42%',
      height: '32px',
      '& .MuiAutocomplete-endAdornment': {
        top: 'unset',
        left: 0,
        right: 'unset',
      },
      '& .MuiAutocomplete-inputRoot': {
        paddingLeft: '0px !important',
        paddingRight: '0 !important',
      },
      '& .MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd':
        {
          padding: '7px 14px',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          color: "#485c6e",
          '&::placeholder': {
            color: "#6c767e",
            opacity: 1,
          },
        },
      '@media (max-width:959px)': {
        marginRight: 0,
        marginBottom: '8px',
        width: '100%',
      },
    },
    categoryAutocomplete: {
      width: '178px',
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
        marginRight: '4px',
        '& .MuiSvgIcon-root': {
          color: '#fff',
        },
      },
      '@media (max-width:959px)': {
        '&:first-child': {
          marginRight: '8px',
        },
      },
    },
  };
});
