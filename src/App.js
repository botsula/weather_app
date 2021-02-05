import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import React from "react";
import Geocoding from "./components/Geocoding";
import { HashRouter } from "react-router-dom";

const App = () => {
  require("dotenv").config();

  return (
    <HashRouter basename="/">
      <div className="down-layer">
        <div className="container">
          <div className="heading">
            <Header />
            <Geocoding />
          </div>
          <Form />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
