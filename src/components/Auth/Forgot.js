import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, Link, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { changepass } from '../../actions/auth';

const initialState = { email: '', password: '', confirmPassword: '' };

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
  
const Forgot = () => {
    const classes = useStyles();
    const [form, setForm] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [passError, setPassError] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        const timeout = setTimeout(()=>{
          setPassError(false)
        },3000)
        return () => clearTimeout(timeout)
      },[passError])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(form.password === form.confirmPassword){
            console.log("same");
            dispatch(changepass(form.email,form, history));
        }else{
            console.log("not same");
            setPassError(true);
        }
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    return (
    <Container component="main" maxWidth="sm" >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5"> Forgot Password </Typography>
        <form className={classes.forgotPass} onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} loginError={passError}/> 
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Change Password
          </Button>
          <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link href='auth' variant="body2" >
                Go to login page
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </form>
      </Paper>
    </Container>
    )
}

export default Forgot
