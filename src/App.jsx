import SolutionJSX from "./SolutionJSX";
import SolutionTSX from "./SolutionTSX";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-heading">
        <h1>Solution</h1>
        <p>Output will be rendered below</p>
      </div>
      <div className="app-solution">
        <SolutionJSX />
        <SolutionTSX />
      </div>
    </div>
  );
}

export default App;
