import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Usestate from './Usestate';
import Bmi from './Bmi';
import UseTheFect from './UseTheFect';
import EnkelReducer from './Enkelreducer';
import AdvanceReducer from './Advancereducer';
import Paint from './Paint';

const Index = () => {
  
  return (
    <Router>
      <Route exact path="/" render={() => <Home/>} />
      <Route path="/usestate" render={() => <Usestate/>} />
      <Route path="/bmi" render={() => <Bmi/>} />
      <Route path="/usethefect" render={() => <UseTheFect/>} />
      <Route path="/enkelreducer" render={() => <EnkelReducer/>} />
      <Route path="/advancereducer" render={() => <AdvanceReducer/>} />
      <Route path="/paint" render={() => <Paint/>} />
    </Router>
  )
}


ReactDOM.render(<Index />, document.getElementById('root')); 