import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    input: {
      backgroundColor: '#E6F1F6',
      width: '100%',
      height: 33,
      borderRadius: 7,

      '& .MuiInput-root': {
        fontFamily: 'Roboto-Regular, sans-serif',
        fontSize: 12,
        color: '#5C6268',
        leadingtrim: 'both',
        fontStyle: 'normal',
        textTransform: 'capitalize',
        lineHeight: 40,
        textEdge: 'cap',
        padding: 0,
      },
      '& .MuiInput-input': {
        padding: '7px 14px',
      },
      '& .MuiIconButton-root': {
        padding: 0,
      },
      '& .MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd':
      {
        padding: '7px 14px',
        // color: theme.text.secondary,
        '&::placeholder': {
          // color: theme.input.placeholderColor,
          opacity: 1,
          // color: '#5C6268',
        },
      },
    },

    fieldLabel: {
      fontFamily: 'Roboto-Regular, sans-serif',
      fontSize: 14,
      marginBottom: 7,
      marginLeft: 4,
    },
  };
});
