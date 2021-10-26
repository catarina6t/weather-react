import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export default function Weather() {
  return (
    <div className="App">
      <h1 />
      <App />;
      <reportWebVitals />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
