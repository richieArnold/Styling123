import logo from "./logo.svg";
import "./App.css";
import Stylesheets from "./components/Stylesheets";
import FunctionClick from "./components/FunctionClick";
import Inline from "./components/inline";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className=" bg-success">
        <Stylesheets primary={true} />
        <Inline />
        <FunctionClick />
      </header>
    </div>
  );
}

export default App;
