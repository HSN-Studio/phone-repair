import React, { useState, useEffect, useContext } from "react";
import { DeviceDetailsContext } from "../Store/DeviceDetailsProvider";
import { StepContext, StepDispatchContext } from "../Store/StepProvider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function SelectModel() {
  const stepContext = useContext(StepContext);
  const deviceNumber = stepContext.device;
  const deviceDetails = useContext(DeviceDetailsContext);
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

  //JSX

  return (
    <div>
      <Autocomplete
        disablePortal
        id="select-device-brand"
        options={brands}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Brand" />}
        onChange={(e, value) => setbrand(value)}
      />
      <Autocomplete
        disablePortal
        id="select-device-model"
        options={models}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Model" />}
      />
    </div>
  );
}

export default SelectModel;
