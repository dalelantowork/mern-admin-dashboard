import React from 'react'
import { Typography, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="#">
          Dale Lanto
        </Link>{', '}
        {new Date().getFullYear()}
        {' All Rights Reserved.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();
    return (
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                <Copyright />
                </Container>
            </footer>
    )
}

export default Footer
