import React, { useState, useEffect }  from 'react'
import { Typography, AppBar, Avatar,Button, Toolbar, Container, Paper, Menu, MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './styles'

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

const Navbar = () => {
    const classes= useStyles();
    /* user details */
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

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
    return (
        <Paper>
            <AppBar  position="relative" >
                <Toolbar>
                    <MenuIcon className={classes.icon}/>
                    <Typography className={classes.heading} component={Link} to="/" variant="h6">
                        Dashboard
                    </Typography>
                    <IconButton color="inherit" className={classes.right}>
                        <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className={classes.menuProfile}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem component={Link} to="/auth" onClick={logout}>Logout</MenuItem>
                    </Menu>
                    {user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.avatarSize} alt={user?.result.name} src={user?.result.imageUrl} onClick={handleClick}>{user?.result.name.charAt(0)}</Avatar>
                        </div>
                        ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )}
                </Toolbar>
            </AppBar>
        </Paper>
    )
}

export default Navbar
