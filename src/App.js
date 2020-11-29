import MovieList from './containers/MovieList'
import MovieData from './containers/MovieData'
import Header from './components/Header'
import './App.css'
import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
      <BrowserRouter className="appStyle">
      <Header/>
      <Switch>
        <Route path='/' exact component={MovieList} />
        <Route path='/moviedata' exact component={MovieData} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

