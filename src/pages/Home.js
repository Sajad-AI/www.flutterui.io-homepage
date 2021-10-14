import React from "react";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="intro">
      <h4>Flutter UI Builder</h4>
      <div className="info-margin">
        <h5>Build Flutter UI much faster. Generate clean code.</h5>
        <p className="info-style"> It’s free and open source.</p>
      </div>
      <div>
        <Button className="btn active">Start Building Flutter Apps</Button>
        <Button
          variant="outline-secondary"
          href="https://github.com/flutterui-io/FlutterUI"
        >
          Download Source Code
        </Button>
      </div>
    </div>
  );
}

export default Home;
