import { useState, useContext } from "react";
import "./App.css";
import SelectDevice from "./components/SelectDevice";
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
        return <h2>O be ja oyee boo bakriya</h2>;
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
