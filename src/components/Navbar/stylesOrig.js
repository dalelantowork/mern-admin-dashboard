import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
    heading: {
        color: 'rgba(255,255,255, 1)',
        textDecoration: 'none',
      },
}));