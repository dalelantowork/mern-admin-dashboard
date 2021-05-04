import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
    marginBottom: "20px",
  },
  paperChart: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: "190px",
    overflow: "visible",
    marginTop: "-55px",
    marginBottom: "10px"
  },
  lineChart: {
    color: "#FFFFFF",
  },
  heading: {
    margin: "0px",
    padding: "0px",
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
  increase: {
    color: "#76ff03",
  },
  visits: {
    backgroundColor: "#1FC1D4",
  },
  sales: {
    backgroundColor: "#FEA422",
  },
  revenue: {
    backgroundColor: "#8bc34a",
  },
}));