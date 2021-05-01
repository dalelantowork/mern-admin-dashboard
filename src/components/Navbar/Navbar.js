import React, { useState, useEffect }  from 'react'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CopyrightIcon from '@material-ui/icons/Copyright';

import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import HomePosts from '../HomePosts/HomePosts';
import Dashboard from '../Dashboard/Dashboard';
import Gallery from '../Gallery/Gallery';
import useStyles from './styles'
import { useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar,Button, Container, Grid, Menu, MenuItem } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import BookIcon from '@material-ui/icons/Book';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import MERNLogo from '../../images/MERNLogo.png';

const Navbar = () => {
  /* user details */
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [content,setContent] = useState('Dashboard');
  const logout = () => {
      dispatch({ type: actionType.LOGOUT });

      history.push('/auth');

      setUser(null);
  };

  useEffect(() => {
      const token = user?.token;

      if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  /* end of user details */
  /*  Menu Handlers */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };
  /*  End of Menu Handlers */

/* Navbar and Sidebar Settings */
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  /* End of Navbar and Sidebar Settings */
  /* switch Content */
  const switchContent = (param) => {
    switch(param) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Posts':
        return <HomePosts />;
      case 'Gallery':
        return <Gallery />;
      default:
        return <Content />;
    }
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.heading} component={Link} to="/" variant="h6" noWrap>
            Admin Management System
          </Typography>
          <IconButton color="inherit" className={classes.right}>
                <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.avatarSize} alt={user?.result.name} src={user?.result.imageUrl} onClick={handleClick}>{user?.result.name.charAt(0)}</Avatar>
                </div>
                ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        <img src={MERNLogo} alt="loading" className={classes.mernlogo} />
          <IconButton className={classes.closeDrawer} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button onClick={()=>setContent("Dashboard")}>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText><Typography>Dashboard</Typography> </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>setContent("Transactions")} >
              <ListItemIcon><LocalAtmIcon /></ListItemIcon>
              <ListItemText><Typography>Transactions</Typography> </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>setContent("Products")} >
              <ListItemIcon><FastfoodIcon /></ListItemIcon>
              <ListItemText><Typography>Products</Typography> </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>setContent("Posts")} >
              <ListItemIcon><BookIcon /></ListItemIcon>
              <ListItemText><Typography>Posts</Typography> </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>setContent("Gallery")} >
              <ListItemIcon><PhotoLibraryIcon /></ListItemIcon>
              <ListItemText><Typography>Gallery</Typography> </ListItemText>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button onClick={()=>setContent("Profile")} >
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText><Typography>Profile</Typography> </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>setContent("Settings")} >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText><Typography>Settings</Typography> </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/auth" onClick={logout} >
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText><Typography>Logout</Typography> </ListItemText>
            </ListItem>
            {/* <div className={classes.bottomPush}>
                <Copyright />
            </div> */}
            
        </List>
      </Drawer>
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.gridContent}>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Typography paragraph>
                Home / <Link to="#">{content}</Link>
            </Typography>
            {switchContent(content)}
      </main>
      </Grid>
      <Grid item xs={12} sm={12} className={classes.bottomPush}>
            <Footer />
      </Grid>
      </Grid>
    </div>
  );
}

export default Navbar