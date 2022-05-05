import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GameController from "./GameController";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <GameController />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
