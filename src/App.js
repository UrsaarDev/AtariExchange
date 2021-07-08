import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Secondpage from './pages/Secondpage';
import './App.scss';

class App extends Component {
  render() {
    return  <Router>
              <Switch>
                <Route exact path="/" component={Secondpage} />
              </Switch>
            </Router>;
  }
};

export default App;