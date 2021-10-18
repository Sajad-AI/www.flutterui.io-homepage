import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-home">
      <div className="intro">
        <h4>Flutter UI Builder</h4>
        <div className="info-margin">
          <h5>Build Flutter UI much faster. Generate clean code.</h5>
          <p className="info-style"> It’s free and open source.</p>
        </div>
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
      <footer>
        <Link to="/terms">Terms and Conditions</Link>
        <p>2021 Ramdel (람델) Company Alrights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
