import React, { useState, createContext } from "react";

const StepContext = createContext(undefined);
const StepDispatchContext = createContext(undefined);
function StepProvider({ children }) {
  const [step, setstep] = useState({
    step: 1,
    device: 0,
  });

  return (
    <StepContext.Provider value={step}>
      <StepDispatchContext.Provider value={setstep}>
        {children}
      </StepDispatchContext.Provider>
    </StepContext.Provider>
  );
}

export default StepProvider;
export { StepProvider, StepContext, StepDispatchContext };
