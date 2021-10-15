import React from "react";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="intro">
      <h4>Flutter UI Builder</h4>
      <div className="info-margin">
        <h5>Build Flutter UI much faster. Generate clean code.</h5>
        <p className="info-style"> It’s free and open source.</p>
      </div>
      <div>
        <Button disableElevation className="build-btn" variant="contained">
          Start Building Flutter Apps
        </Button>
        <Button
          disableElevation
          className="download-btn"
          variant="outlined"
          href="https://github.com/flutterui-io/FlutterUI"
        >
          Download Source Code
        </Button>
      </div>
    </div>
  );
}

export default Home;
