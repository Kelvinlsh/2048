import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GameController from "./GameController";
import "./styles.css";

'use strict';

const e = React.createElement;

export default function App() {
  return (
    <div className="App">
      <GameController />
    </div>
  );
}

const domContainer = document.querySelector('#board');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
