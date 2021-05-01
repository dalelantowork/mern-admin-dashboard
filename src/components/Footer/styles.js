import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      footer: {
        paddingTop: "10px",
        paddingBottom: "10px",
        marginTop: 'auto',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      },
  }));