import React, { useState, createContext } from "react";

const StepContext = createContext(undefined);
const StepDispatchContext = createContext(undefined);
function StepProvider({ children }) {
  const [step, setstep] = useState(1);

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
