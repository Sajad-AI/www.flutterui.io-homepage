import React, { useState } from "react";
import FeaturesCard from "../components/FeaturesCard";

function Why() {
  const [title, setTitle] = useState("title");
  const [content, setContent] = useState("content");
  const [img, setImg] = useState("img");
  const [color, setColor] = useState("color");
  const [solid, setSolid] = useState("solid");

  return (
    <div className="page-why">
      <h1>Why FlutterUI?</h1>
      <div className="card-position">
        <p style={{ textAlign: "start" }}>Top Features</p>
        <FeaturesCard
          title={"Free and Open Source"}
          content={
            "Use FlutterUI free of charge for both personal and commercial projects."
          }
          img={"free.png"}
          color={"#C5F2C7"}
          solid={"#2AB930"}
        />
        <FeaturesCard
          title={"Drag & Drop UI Builder"}
          content={
            "Create stunning and customizable designs with our easy to use UI Builder."
          }
          img={"graphic-design 1.png"}
          color={"#C5DCFA"}
          solid={"#1672EC"}
        />
        <FeaturesCard
          title={"UI Components"}
          content={
            "Choose from more than 40 pre-built widgets to add app functionality."
          }
          img={"app-development 1.png"}
          color={"#FCD0CF"}
          solid={"#F5413D"}
        />
        <FeaturesCard
          title={"UI Templates"}
          content={"Pre-built templates such as login or sign up pages."}
          img={"coming-soon 1.png"}
          color={"#FBF3D0"}
          solid={"#F0D042"}
        />
      </div>
    </div>
  );
}

export default Why;
