import TestResult from "./components/testResult/TestResult";
import CustomButton from "./components/customButton";
import "./App.css";

const App = () => {
  let grade = 95;
  const onPressHandler = () => {
    alert("Hi");
  };

  const promtName = () => {
    alert(prompt("Enter your name"));
  };

  return (
    <div className="header">
      <p id="text">Hello World!</p>
      <button onClick={() => alert("Hello")}>Click Here</button>
      <button onClick={onPressHandler}>Press Here</button>
      <button onClick={promtName}>Put Name</button>
      <h2>{grade >= 85 ? "Great Job" : "Good job"}</h2>
      <TestResult />
      <CustomButton />
    </div>
  );
};

export default App;
