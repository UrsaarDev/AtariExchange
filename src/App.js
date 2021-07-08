import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Firstpage from './pages/Firstpage';
import './App.scss';

class App extends Component {
  render() {
    return  <Router>
              <Switch>
                <Route exact path="/" component={Firstpage} />
              </Switch>
            </Router>;
  }
};

export default App;