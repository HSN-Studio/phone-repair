import React, { useState, useEffect, useContext } from "react";
import {
  DeviceDetailsContext,
  DeviceDetailsDispatchContext,
} from "../Store/DeviceDetailsProvider";
import { StepContext, StepDispatchContext } from "../Store/StepProvider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function SelectModel() {
  const stepContext = useContext(StepContext);
  const setStep = useContext(StepDispatchContext);
  const stepNumber = stepContext.step;
  const deviceNumber = stepContext.device;
  const deviceDetails = useContext(DeviceDetailsContext);
  const setDevices = useContext(DeviceDetailsDispatchContext);
  const deviceType = deviceDetails[deviceNumber].deviceType;
  //States
  const [devices, setdevices] = useState();
  const [brands, setbrands] = useState([]);
  const [models, setmodels] = useState([]);
  const [brand, setbrand] = useState(undefined);
  useEffect(() => {
    const Devices = fetch(`./${deviceType}.json`)
      .then((res) => res.json())
      .then((data) => {
        setdevices(data);
        setbrands(Object.keys(data));
      });
  }, []);
  useEffect(() => {
    if (brand === undefined) return;
    const modelsData = devices[brand].map((device) => {
      return device.Model;
    });
    setmodels(modelsData);
  }, [brand]);

  //Regular Functions
  const modelInputHandler = (model) => {
    let devicestemp = [...deviceDetails];
    devicestemp[deviceNumber].deviceModel = model;
    setDevices(devicestemp);
    setStep({ step: 3, device: 0 });
  };
  const brandInputHandler = (brand) => {
    setbrand(brand);
    let devicestemp = [...deviceDetails];
    devicestemp[deviceNumber].brand = brand;
    setDevices(devicestemp);
  };
  const navHandler = (step) => {
    setStep({ step: step, device: deviceNumber });
  };
  //JSX

  return (
    <>
      <div>
        <Autocomplete
          disablePortal
          id="select-device-brand"
          value={deviceDetails[deviceNumber].brand}
          options={brands}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Brand" />}
          onChange={(e, brand) => brandInputHandler(brand)}
        />
        <Autocomplete
          disablePortal
          id="select-device-model"
          options={models}
          value={deviceDetails[deviceNumber].deviceModel}
          onChange={(e, model) => modelInputHandler(model)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Model" />}
        />
      </div>
      <div className="section-nav section-2-nav">
        <button
          onClick={() => navHandler(stepNumber - 1)}
          className="btn nav-btn"
        >
          Previous: Select Brand
        </button>
        {deviceDetails[deviceNumber].model ? (
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
    </>
  );
}

export default SelectModel;
