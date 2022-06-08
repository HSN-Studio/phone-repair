import React, { useState, useEffect, useContext } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
  DeviceDetailsContext,
  DeviceDetailsDispatchContext,
} from "../Store/DeviceDetailsProvider";
import {
  StepContext,
  StepDispatchContext,
  StepDispatchCoontex,
} from "../Store/StepProvider";

function ServiceCard({ service }) {
  // STates / Contexts
  const devices = useContext(DeviceDetailsContext);
  const setDevices = useContext(DeviceDetailsDispatchContext);
  const step = useContext(StepContext);
  const setStep = useContext(StepDispatchContext);
  const deviceNumber = step.device;
  const deviceType = devices[deviceNumber].deviceType;
  const deviceBrand = devices[deviceNumber].brand;
  const deviceModel = devices[deviceNumber].deviceModel;
  const stepNumber = step.step;

  // Lifecycle
  useEffect(() => {
    fetch(`./${deviceType}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[deviceBrand]);
      });
  }, []);

  // Handlers
  const cardHandler = (service) => {};
  return (
    <div className="card" onClick={() => cardHandler("title")}>
      <div className="card-content">
        <img
          src={`/images/${"title".replace(" ", "-").toLowerCase()}.png`}
          alt={"title"}
        ></img>
        <h2>
          {"title"} <ArrowCircleRightIcon />
        </h2>
      </div>
    </div>
  );
}

export default ServiceCard;
