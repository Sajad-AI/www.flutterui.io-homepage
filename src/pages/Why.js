import React from "react";
import { makeStyles, Typography, Card } from "@material-ui/core";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

const useStyles = makeStyles((theme) => ({
  customCard: {
    height: "100px",
    width: "194px",
    height: "327px",
    background: "#fff",
    borderRadius: "8px",
    display: "inline-block",
    marginLeft: theme.spacing(5),
  },
}));

function Why() {
  const classes = useStyles();

  return (
    <div className="page-why">
      <h1>Why FlutterUI?</h1>
      <div className="card-position">
        <p style={{ textAlign: "start" }}>Top Features</p>
        <Card className={classes.customCard} variant="outlined">
          <div className="upper-container">
            <div className="image-container">
              <img src="free.png" alt="" />
            </div>
          </div>
          <div className="lower-container">
            <h6>Free and Open Source</h6>
            <p>
              Use FlutterUI free of charge for both personal and commercial
              projects.
            </p>
          </div>
          <Button
            startIcon={<CheckIcon />}
            style={{ textTransform: "none" }}
            variant="contained"
            disabled
          >
            Included
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Why;
