import React from "react";
import { makeStyles, Typography, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  customCard: {
    height: "100px",
    width: "194px",
    height: "327px",
    background: "#fff",
    borderRadius: "8px",
  },
}));

function Why() {
  const classes = useStyles();

  return (
    <div className="page-why">
      <h1>Why FlutterUI?</h1>
      <Card className={classes.customCard} variant="outlined">
        <div className="upper-container">
          <div className="image-container">
            <img src="" alt="" height="100px" width="100px" />
          </div>
        </div>
        <div className="lower-container">
          <h6>Free and Open Source</h6>
          <p>
            Use FlutterUI free of charge for both personal and commercial
            projects.
          </p>
        </div>
        <button></button>
      </Card>
    </div>
  );
}

export default Why;
