import React, { useState, useContext } from "react";
import { StepContext } from "../Store/StepProvider";
import { DeviceDetailsContext } from "../Store/DeviceDetailsProvider";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Card({ title }) {
  const stepNumber = useContext(StepContext);
  const deviceDetails = useContext(DeviceDetailsContext);
  const cardHandler = () => {
    console.log(stepNumber);
    console.log(deviceDetails);
  };
  return (
    <div className="card" onClick={cardHandler}>
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
