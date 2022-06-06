import React, { createContext, useState } from "react";
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
  return (
    <DeviceDetailsContext.Provider value={deviceDetails}>
      <DeviceDetailsDispatchContext.Provider value={setdeviceDetails}>
        {children}
      </DeviceDetailsDispatchContext.Provider>
    </DeviceDetailsContext.Provider>
  );
}

export default DeviceDetailsProvider;
export {
  DeviceDetailsProvider,
  DeviceDetailsDispatchContext,
  DeviceDetailsContext,
};
