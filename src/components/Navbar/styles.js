import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    /* custom styles */

    heading: {
      color: 'rgba(255,255,255, 1)',
      textDecoration: 'none',
      marginTop: theme.spacing(0.2),
    },
    icon: {
      marginRight: '20px'
    },
    right: {
        marginLeft: 'auto'
    },
    menuProfile: {
        marginTop: '50px'
    },
    avatarSize: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    drawerName: {
      color: 'rgba(0,0,0, 1)',
      textDecoration: 'none',
      marginTop: theme.spacing(0.2),
      marginRight: theme.spacing(8.5),
    },
    mernlogo: {
      width: "120px",
      marginLeft: '5px',
    },
    closeDrawer: {     
      marginLeft: 'auto'
    },
    bottomPush: {
      position: "fixed",
      bottom: 0,
      textAlign: "center",
      paddingBottom: 10,
      marginLeft: 20,
    },
    footer: {
    }
  }));