import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import Create from './Create';
import Home from './Home';
import Register from './Register';
import List from './List';
import View from './View';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div className="">
       <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/createtask" component={Create} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mytasks" component={List} />
        <Route exact path="/viewtask" component={View} />
      </BrowserRouter>

    </div>
  );
}

export default App;
