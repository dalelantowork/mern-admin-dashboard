import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './styles';


const Input = ({ name, handleChange, label, autoFocus, type, size, handleShowPassword, loginError }) => {
  const classes = useStyles();

  return (
    <>
      {loginError === true ? 
        <TextField
        error
        className={classes.passError}
        name={name}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        size={size}
        type={type}
        InputProps={name === 'password' || name === 'confirmPassword' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        } : null}
      />
      :
        <TextField
          
          name={name}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={label}
          autoFocus={autoFocus}
          size={size}
          type={type}
          InputProps={name === 'password' || name === 'confirmPassword' ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } : null}
        />
      }
      
    </>
  );


}

export default Input;
