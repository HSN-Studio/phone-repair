import { useState } from "react";
import "./App.css";
import SelectDevice from "./components/SelectDevice";
import StepProvider from "./Store/StepProvider";
import DeviceDetailsProvider from "./Store/DeviceDetailsProvider";
function App() {
  // States

  // Regular Methods
  // JSX
  return (
    <div className="App">
      <header className="App-header"></header>
      <StepProvider>
        <DeviceDetailsProvider>
          <SelectDevice />
        </DeviceDetailsProvider>
      </StepProvider>
    </div>
  );
}

export default App;
