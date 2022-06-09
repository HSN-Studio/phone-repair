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
  const serviceName = service[0];
  const servicePrice = service[1];
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
    console.log(service);
  }, []);

  // Handlers
  const cardHandler = (serviceCard) => {
    serviceCard.classList.toggle("active");
    console.log(serviceCard);
  };
  return (
    <div className="card" onClick={(e) => cardHandler(e.target.parentElement)}>
      <div className="card-content">
        <img
          src={`/images/${serviceName.replace(/[ /]/g, "-").toLowerCase()}.png`}
          alt={serviceName}
        ></img>
        <h2>
          {`${serviceName}(${servicePrice})`} <ArrowCircleRightIcon />
        </h2>
      </div>
    </div>
  );
}

export default ServiceCard;
