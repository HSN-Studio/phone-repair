import { useState, useContext } from "react";
import "./App.css";
import SelectDevice from "./components/SelectDevice";
import SelectModel from "./components/SelectModel";
import StepProvider from "./Store/StepProvider";
import { StepContext } from "./Store/StepProvider";

function App() {
  // States
  const { step } = useContext(StepContext);
  // Regular Methods
  // Render Method
  const renderStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return <SelectDevice />;
        break;
      case 2:
        return <SelectModel />;
        break;
    }
  };
  // JSX
  return (
    <div className="App">
      <header className="App-header"></header>
      {renderStep(step)}
    </div>
  );
}

export default App;
