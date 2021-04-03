import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Cart  from "./components/cart/Cart"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Login /> */}
        <Switch>
          <Route path="/mayank-amazon-clone" exact>
            <Home />
          </Route>
          <Route path="/mayank-amazon-clone/login">
            <Login />
          </Route>
          <Route path="/mayank-amazon-clone/cart">
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
