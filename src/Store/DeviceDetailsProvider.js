import React, { createContext, useState } from "react";
import React from "react";
const DeviceDetailsContext = createContext(undefined);
const DeviceDetailsDispatchContext = createContext(undefined);
function DeviceDetailsProvider({ children }) {
  const [deviceDetails, setdeviceDetails] = useState([
    {
      deviceType: "",
      deviceModel: "",
      issues: [],
      cost: "",
    },
  ]);
  return <div>DeviceDetailsProvider</div>;
}

export default DeviceDetailsProvider;

createContext;
