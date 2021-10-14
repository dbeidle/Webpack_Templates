import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  console.log("I'm sorry Dave. I'm afraid I can't do that...");
  return (
    <div>
      <h3>Webpack Template for React!</h3>
      <img src="images/icon.svg" alt="Webpack Logo" />;
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
