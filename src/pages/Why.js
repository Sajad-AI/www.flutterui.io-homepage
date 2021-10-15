import React, { useState } from "react";
import FeaturesCard from "../components/FeaturesCard";

function Why() {
  var icons = [
    "ic_free.png",
    "ic_graphicDesign.png",
    "ic_appDev.png",
    "ic_comingSoon.png",
  ];
  var title = [
    "Free and Open Source",
    "Drag & Drop UI Builder",
    "UI Components",
    "UI Templates",
  ];

  var content = [
    "Use FlutterUI free of charge for both personal and commercial projects.",
    "Create stunning and customizable designs with our easy to use UI Builder.",
    "Choose from more than 40 pre-built widgets to add app functionality.",
    "Pre-built templates such as login or sign up pages.",
  ];

  var colors = ["#C5F2C7", "#C5DCFA", "#FCD0CF", "#FBF3D0"];
  var solid = ["#2AB930", "#1672EC", "#F5413D", "#F0D042"];

  var cards = [];
  for (var i = 0; i < 4; i++) {
    cards.push(
      <FeaturesCard
        title={title[i]}
        content={content[i]}
        img={icons[i]}
        color={colors[i]}
        solid={solid[i]}
      />
    );
  }

  return (
    <div className="page-why">
      <h1>Why FlutterUI?</h1>
      <div className="card-position">
        <p style={{ textAlign: "start" }}>Top Features</p>
        {cards}
      </div>
    </div>
  );
}

export default Why;
