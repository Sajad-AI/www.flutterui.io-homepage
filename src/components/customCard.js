import React from "react";

function customCard() {
  // const [name, setName] = useState("Your name");
  // const [job, setJob] = useState("Job title");
  // const [about, setAbout] = useState(
  //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eum sed tempore soluta, suscipit architecto, numquam esse tenetur illum eos optio corrupti saepe ut voluptas accusantium aliquid maxime expedita quisquam."
  // );

  return (
    <div className="custom-card">
      <div className="upper-container">
        <div className="image-container">
          <img src="" alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h3>Your name</h3>
        <h4>job</h4>
        <p>about</p>
      </div>
    </div>
  );
}

export default customCard;
