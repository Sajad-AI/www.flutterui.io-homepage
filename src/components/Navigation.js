import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#FFF",
  },
  logo: {
    cursor: "pointer",
    fontSize: "20px",
    color: "#414141",
    textDecoration: "none",
    marginRight: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#414141",
    marginLeft: theme.spacing(5),
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className="Appbar-shadow" position="static" color={classes.header}>
      <CssBaseline />
      <Toolbar>
        <Typography to="/" component={Link} className={classes.logo}>
          <img alt="" src="framer.png" />
          FlutterUI
        </Typography>
        <div>
          <Link to="/why" className={classes.link}>
            Why FlutterUI
          </Link>
          <Link
            to="/Docs"
            onChange="https://docs.flutterui.io"
            className={classes.link}
          >
            Docs
          </Link>
        </div>
        <div className="margin-left">
          <Link to="/login" className={classes.link}>
            Sing Up
          </Link>
          <Button className="btn active top-btn">Go To Console</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
