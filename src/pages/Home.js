import React from "react";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="intro">
      <h4>Flutter UI Builder</h4>
      <h5>Build Flutter UI much faster. Generate clean code.</h5>
      <p className="text"> It’s free and open source.</p>
      <div>
        <Button className="btn active">Start Building Flutter Apps</Button>
        <Button variant="outline-secondary">Download Source Code</Button>
      </div>
    </div>
  );
}

export default Home;
