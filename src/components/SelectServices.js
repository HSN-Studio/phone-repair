import React, { useState, useEffect, useContext } from "react";
import ServiceCard from "./ServiceCard";
import Cart from "./Cart";
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
  const [services, setServices] = useState([]);
  // Lifecycle
  useEffect(() => {
    fetch(`./${deviceType}.json`)
      .then((res) => res.json())
      .then((data) => {
        const device = data[deviceBrand].find((device) => {
          return device.Model === deviceModel;
        });
        setServices(Object.entries(device));
      });
  }, []);
  //Handles
  const navHandler = (step) => {
    setStep({ step: step, device: deviceNumber });
  };
  return (
    <div className="select-services-container">
      <div className="services-container">
        {services
          ? services.map((service) => {
              if (service[0] !== "Model") {
                return <ServiceCard key={service[0]} service={service} />;
              }
            })
          : null}
      </div>
      <div className="cart-container">
        {devices.map((device) => (
          <Cart
            model={device.deviceModel}
            repairs={device.repairs}
            key={device.deviceModel}
          />
        ))}
      </div>
      <div className="section-nav section-3-nav">
        <button
          onClick={() => navHandler(stepNumber - 1)}
          className="btn nav-btn"
        >
          Previous: Select Brand
        </button>
        {devices[deviceNumber].repairs.length > 0 ? (
          <button
            onClick={() => navHandler(stepNumber + 1)}
            className="btn nav-btn nav-btn-next"
          >
            Next: Device Details
          </button>
        ) : (
          <button
            disabled
            onClick={() => console.log("btn back")}
            className="btn nav-btn "
          >
            Next: Device Details
          </button>
        )}
      </div>
    </div>
  );
}

export default SelectServices;
