import React, { useState, useEffect, useContext } from "react";
import ServiceCard from "./ServiceCard";
import {
  DeviceDetailsContext,
  DeviceDetailsDispatchContext,
} from "../Store/DeviceDetailsProvider";
import {
  StepContext,
  StepDispatchContext,
  StepDispatchCoontex,
} from "../Store/StepProvider";

function SelectServices() {
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
        const device = data[deviceBrand].find((device) => {
          return device.Model === deviceModel;
          // console.log(device)
        });
        console.log(device);
      });
  }, []);

  return <div>SelectServices</div>;
}

export default SelectServices;
