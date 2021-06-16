import React from "react";
import ReactDOM from "react-dom";
import Converter from "./converter";

import "./index.css";

function ConverterApp() {
  return (
    <div className="App">
      <Converter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ConverterApp />, rootElement);
