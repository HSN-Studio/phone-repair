import { useState, useContext } from "react";
import "./App.css";
import SelectDevice from "./components/SelectDevice";
import StepProvider from "./Store/StepProvider";
import DeviceDetailsProvider from "./Store/DeviceDetailsProvider";
import { StepContext } from "./Store/StepProvider";

function App() {
  // States
  const step = useContext(StepContext);
  const stepNumber = step.step;
  // Regular Methods
  // Render Method
  const renderStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return <SelectDevice />;
        break;
      case 2:
        return <h2>O be ja oyee boo bakriya</h2>;
        break;
    }
  };
  // JSX
  return (
    <StepProvider>
      <div className="App">
        <header className="App-header"></header>
        <DeviceDetailsProvider>{renderStep(step.step)}</DeviceDetailsProvider>
      </div>
    </StepProvider>
  );
}

export default App;
