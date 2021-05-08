import logo from "./logo.svg";
import "./App.css";

import firebase from "./utils/firebase";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
