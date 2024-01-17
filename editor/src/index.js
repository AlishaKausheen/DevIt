import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css"
import  App from "./App.js";
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from "react-redux";
import Store from "./context/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <Router>
      <App/>
    </Router>
    </Provider>
  </React.StrictMode>
);
