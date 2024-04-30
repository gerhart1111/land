import { Box, TextField } from '@mui/material';

import React from 'react';
import { StandardTextFieldProps } from '@mui/material';
import { useStyles } from './styles';

interface InputWrapperProps extends StandardTextFieldProps {
  labelText?: string;
  placeholder?: string;
  autocomplete?: string;
}

const TextFieldWrapper: React.FC<InputWrapperProps> = ({ labelText, InputProps, ...restProps }): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      {labelText && <Box className={classes.fieldLabel}>{labelText}</Box>}
      <TextField
        InputProps={Object.assign({}, { autoComplete: 'no', disableUnderline: true, }, InputProps)}
        className={classes.input}
        variant="standard"
        size="small"
        {...restProps}
      />
    </>
  );
};

export default TextFieldWrapper;
