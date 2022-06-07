import React, { useState, useContext } from "react";
import { StepContext, StepDispatchContext } from "../Store/StepProvider";
import { DeviceDetailsContext } from "../Store/DeviceDetailsProvider";
import { DeviceDetailsDispatchContext } from "../Store/DeviceDetailsProvider";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Card({ title }) {
  // Contexts/States
  const currentlyActive = useContext(StepContext);
  const setcurrentlyActive = useContext(StepDispatchContext);
  const stepNumber = currentlyActive.step;
  const deviceNumber = currentlyActive.device;
  const devices = useContext(DeviceDetailsContext);
  const setDevices = useContext(DeviceDetailsDispatchContext);

  //Handlers
  const cardHandler = (title) => {
    let devicestemp = [...devices];
    devicestemp[deviceNumber].deviceType = title;
    setDevices(devicestemp);
    setcurrentlyActive({ step: 2, device: 0 });
  };

  //JSX
  return (
    <div className="card" onClick={() => cardHandler(title)}>
      <div className="card-content">
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
