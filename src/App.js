import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

import Weather from "./Weather";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import "./Styles.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();