import Solution from "./Solution";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-heading">
        <h1>Solution</h1>
        <p>Output will be rendered below</p>
      </div>
      <div className="app-solution">
        <Solution />
      </div>
    </div>
  );
}

export default App;
