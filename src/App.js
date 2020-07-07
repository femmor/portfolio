import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"

// Components
import Landing from "./components/Landing"
import Footer from "./components/Footer/Footer"

class App extends Component {
  render() {
    return (
      <Switch>
          <Route>
            <Landing />
            <Footer />
          </Route>
          
      </Switch>
    );
  }
}

export default App;
