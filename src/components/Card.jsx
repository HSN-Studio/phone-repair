import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Card({ title }) {
  return (
    <div className="card">
      <div className="card-content">
        <input name="make" id={title} value={title} type="radio"></input>
        <img
          src={`/images/${title.replace(" ", "-").toLowerCase()}.png`}
          alt={title}
        ></img>
        <h2>
          {title} <ArrowCircleRightIcon />
        </h2>
      </div>
    </div>
  );
}

export default Card;
