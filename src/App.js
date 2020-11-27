import MovieList from './containers/MovieList'
import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Fragment>
      <MovieList/>
   </Fragment>
  );
}

export default App;

