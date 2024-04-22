import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    <div className="App">
      {<ButtonComponent content="Content Bottone" />}
      <ClassComponent />
    </div>
  );
}

export default App;
