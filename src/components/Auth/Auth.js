import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Dale Lanto
      </Link>{' '}
      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginError, setLoginError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

//   useEffect(() => {
//     console.log("loginError = " + loginError);
// }, [loginError]);

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setLoginError(false)
    },3000)
    return () => clearTimeout(timeout)
  },[loginError])

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
      // if(loginError === true){
      //   console.log("loginError = " + loginError);
      // }
    }
    setTimeout(() => {
      setLoginError(true)
    }, 2500)
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={isSignup ? classes.paperSignup : classes.paperLogin }>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          { isSignup === true ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
          { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus={isSignup ? true : false } size={isSignup ? "small" : "medium" }/>
              <Input name="lastName" label="Last Name" handleChange={handleChange} size={isSignup ? "small" : "medium" }/>
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" size={isSignup ? "small" : "medium" } autoFocus={isSignup ? false : true }/>
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} size={isSignup ? "small" : "medium" } loginError={loginError}/>
            { isSignup === true ? ( 
              <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" size={isSignup ? "small" : "medium" }/> 
            ) : (
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />)
            }
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              { isSignup ? 'Sign Up' : 'Sign In' }
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href={ isSignup ? '#signup' : '#signin' } variant="body2" onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}


export default Auth
