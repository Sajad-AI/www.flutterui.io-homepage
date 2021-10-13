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
    textDecoration: "none",
    marginRight: "30px",
    color: "#414141",
    "&:hover": {
      color: "#414141",
    },
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
        <Link to="/why" className={classes.link}>
          Why FlutterUI
        </Link>
        <a href="https://docs.flutterui.io" className={classes.link}>
          Docs
        </a>
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
