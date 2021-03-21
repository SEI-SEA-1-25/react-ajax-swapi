import React, { Component } from "react";
import Starfighter from "Starfighter";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="clouds">
        <img src={logo} className="neonShadow App-logo" alt="logo" />
        <Starfighter />
      </div>
    </div>
  );
}

export default App;
