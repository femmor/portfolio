import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Homepage}/>
      </Switch>
    );
  }
}

export default App;
