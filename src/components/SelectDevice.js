import React, { useContext } from "react";
import { StepContext } from "../Store/StepProvider";
import Card from "./Card";

function SelectDevice() {
  const devices = ["Mobile", "Laptop", "Gaming Console"];
  const StepNumber = useContext(StepContext);

  // Handlers
  const cardHandler = (deviceName) => {
    console.log("Hello");
  };
  return (
    <div className="step-1-wrapper">
      {devices.map((device) => (
        <Card title={device} key={device} onClick={cardHandler} />
      ))}
    </div>
  );
}

export default SelectDevice;
