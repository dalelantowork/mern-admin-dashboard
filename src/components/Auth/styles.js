import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paperSignup: {
      margin: theme.spacing(2,4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    paperLogin: {
          position: 'absolute', 
          top: '50%', 
          transform: 'translateY(-50%)',
          margin: theme.spacing(0,4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    passError: {
      animation: `shake 3000ms ${theme.transitions.easing.easeInOut}`
    },
    "@global" : {
      "@keyframes shake": {
        "10%, 90%" : {
          transform: "translate3d(-1px, 0, 0)"
        },
        
        "20%, 80%" : {
          transform: "translate3d(2px, 0, 0)"
        },
      
        "30%, 50%, 70%" : {
          transform: "translate3d(-4px, 0, 0)"
        },
      
        "40%, 60%" : {
          transform: "translate3d(4px, 0, 0)"
        }
      },
      body: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"
      },
      html: {
        height: "100%"
      },
      "#componentWithId": {
        height: "100%"
      }
      
    },
    forgotPass: {
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),

    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    imageBG: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }));