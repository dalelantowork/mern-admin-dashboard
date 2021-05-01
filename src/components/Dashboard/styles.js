import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
    marginBottom: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "140px",
    overflow: "visible",
  },
  cardIconBox: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxshadow: theme.shadows[3],
    elevation: 2,
    marginTop: "-30px",
    marginLeft: "10px",
  },
  cardIcon: {
    fontSize: "50px",
    color: "white",
  },
  cardHeader: {
    marginTop: "-50px",
    marginRight: "-160px",
  },
  cardValue: {
    marginTop: "0px",
    marginRight: "-100px",
    fontSize: "40px",
  },
  cardDivider: {
    marginTop: "0px",
    marginBottom: "5px",
  },
  cardCaption: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  captionIcon: {
    marginRight: "5px",
  },
  icon1: {
    backgroundColor: "#2196f3",
  },
  icon2: {
    backgroundColor: "#ffc107",
  },
  icon3: {
    backgroundColor: "#4caf50",
  },
  icon4: {
    backgroundColor: "#9c27b0",
  }
}));