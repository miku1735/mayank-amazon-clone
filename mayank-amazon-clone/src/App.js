import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Login /> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
