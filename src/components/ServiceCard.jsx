import React, { useState, useEffect, useContext, useRef } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
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
  const serviceCharges = service[1];
  const devices = useContext(DeviceDetailsContext);
  const setDevices = useContext(DeviceDetailsDispatchContext);
  const step = useContext(StepContext);
  const setStep = useContext(StepDispatchContext);
  const deviceNumber = step.device;
  const deviceType = devices[deviceNumber].deviceType;
  const deviceBrand = devices[deviceNumber].brand;
  const deviceModel = devices[deviceNumber].deviceModel;
  const stepNumber = step.step;
  const card = useRef();
  const serviceTitle =
    serviceCharges !== "K/A"
      ? `${serviceName} (Ksh ${serviceCharges})`
      : `${serviceName} (Price on Call)`;
  // Lifecycle;
  // useEffect(() => {
  //   console.log(devices[deviceNumber].repairs);
  // }, []);

  // Handlers
  const cardHandler = () => {
    card.current.classList.toggle("active");
    let devicesTemp = [...devices];
    let repairs = devicesTemp[deviceNumber].repairs;
    const addRepair = (repair) => {
      devicesTemp[deviceNumber].repairs.push(repair);
      devicesTemp[deviceNumber].cost += Number(serviceCharges.replace(",", ""));
      setDevices(devicesTemp);
    };
    const removeRepair = () => {
      devicesTemp[deviceNumber].repairs = repairs.filter(
        (repair) => repair !== serviceTitle
      );
      devicesTemp[deviceNumber].cost -= Number(serviceCharges.replace(",", ""));
      setDevices(devicesTemp);
    };
    devicesTemp[deviceNumber].repairs.includes(serviceTitle)
      ? removeRepair()
      : addRepair(serviceTitle);
    console.table(devices);
  };

  //Regular Methods

  // JSX
  return (
    <div className="card" onClick={(e) => cardHandler(e)} ref={card}>
      <div className="card-content">
        <img
          src={`/images/${serviceName.replace(/[ /]/g, "-").toLowerCase()}.png`}
          alt={serviceName}
        ></img>
        <h3>
          {`${serviceName} `}
          {serviceCharges !== "N/A"
            ? `(Ksh ${serviceCharges}) `
            : `(Price on Call) `}
        </h3>
        <AddBoxIcon />
      </div>
    </div>
  );
}

export default ServiceCard;
