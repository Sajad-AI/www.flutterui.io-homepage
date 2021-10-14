import React from "react";
import { makeStyles, Card } from "@material-ui/core";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

const useStyles = makeStyles((theme) => ({
  customCard: {
    width: "194px",
    height: "320px",
    background: "#fff",
    borderRadius: "8px",
    display: "inline-block",
    marginLeft: theme.spacing(5),
  },
}));

function FeaturesCard({ title, content, img, color, solid }) {
  const classes = useStyles();
  return (
    <Card className={classes.customCard} variant="outlined">
      <div className="upper-container" style={{ background: `${color}` }}>
        <div
          className="image-container"
          style={{ border: `1px solid ${solid}` }}
        >
          <img src={img} alt="" />
        </div>
      </div>
      <div className="lower-container">
        <h6>{title}</h6>
        <p>{content}</p>
      </div>
      <Button
        disableElevation
        className="card-button"
        startIcon={<CheckIcon />}
        style={{
          color: `${solid}`,
        }}
        variant="contained"
      >
        Included
      </Button>
    </Card>
  );
}

export default FeaturesCard;
