import React, { useContext } from "react";
import {
  DeviceDetailsContext,
  DeviceDetailsDispatchContext,
} from "../Store/DeviceDetailsProvider";
function Cart({ model, repairs }) {
  const devices = useContext(DeviceDetailsContext);
  const setDevices = useContext(DeviceDetailsDispatchContext);
  return (
    <>
      <div className="device-title">
        <h3>{model}</h3>
      </div>
      <hr></hr>
      <div className="repairs-container">
        <h4>Repairs:</h4>
        {repairs.length > 0
          ? repairs.map((repair, i) => (
              <li className="repair-item-${i++}">{repair}</li>
            ))
          : null}
      </div>
    </>
  );
}

export default Cart;
