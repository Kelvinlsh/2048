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

const domContainer = document.querySelector('#board');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
