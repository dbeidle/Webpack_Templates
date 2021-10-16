import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  console.log("I'm sorry Dave. I'm afraid I can't do that...");
  console.log("Oh yea, well screw you! sudo halt --now");
  return (
    <div>
      <h3>Webpack Template for React!</h3>
      <div>
        <img className="wp-logo" src="images/icon.svg" alt="Webpack Logo" />
        <img
          className="react-logo"
          src="images/react-logo.svg"
          alt="React Logo"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
